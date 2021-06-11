<template lang="pug">
  .container
    .row.gallery-banner.py-3
      .col-12
        h1 Welcome to the Bike Store
        p Browse, find and buy your ideal bike
    .row
      .col-12.col-md-6
        SearchBar.mb-2
    .row.results.mb-2(v-if="!requestInProgress")
      .col-12.
        {{ items.length }} results found in {{ requestTime / 1000 }} seconds.
    .items-container(v-if="!requestInProgress")
      #card-item-list.row.p-1(v-if="items.length > 0")
        .col-12.col-md-6.col-lg-4.d-flex.p-1(v-for="item in items")
          Gallery-Card(:item="item")
      .no-results-found(v-else) No results found
    .loading-container(v-else)
      .spinner-border.text-primary(role='status')
        span.sr-only Loading...
      p Please wait, the first request might take around 10-15 seconds to wake the server machine up.
</template>

<script>
import GalleryCard from '../components/GalleryCard.vue';
import SearchBar from '../components/SearchBar.vue';

export default {
  name: 'Gallery',
  components: {
    'GalleryCard': GalleryCard,
    'SearchBar': SearchBar
  },
  data() {
    return {
      items: [],
      requestTime: 0,
      requestInProgress: false
    }
  },
  async created() {
    await this.getBikes(this.$route.query);
  },
  beforeRouteUpdate(to, from, next) {
    this.getBikes(to.query);
    window.scrollTo(0, 0);
    next();
  },
  methods: {
    async getBikes(query) {
      this.requestInProgress = true;
      let url = `${this.$config.apiUrl}`;

      if(query) {
        if (query.search) {
          url += '?search=' + query.search;
        }
      }
      let response;
      let requestStartTime = Date.now();
      try {
        response = await this.$http.get(url);
      } catch (err) {
        console.log(`Error retrieving items: ${err}`)
      } finally {
        this.requestTime = Date.now() - requestStartTime;
        if (response) {
          this.items = response.data.data.bikes;
        }
        this.requestInProgress = false;
      }
    },
  },
 
};
</script>

<style lang="stylus" scoped>
  #card-item-list
    background-color #f0f2f0
    border-radius 0.3rem
</style>
