<template lang="pug">
  .container
    .gallery-banner.py-3
      h1 Welcome to the Bike Store
      p Browse, find and buy your ideal bike
    search-bar.mb-2
    .results.mb-2.
      {{ items.length }} results found in {{ requestTime / 1000 }} seconds.
    card-item-list(v-if="items.length > 0" :items="items")
    .no-results-found(v-else) No results found
</template>

<script>
import CardItemList from '../components/CardItemList.vue';
import SearchBar from '../components/SearchBar.vue';

export default {
  name: 'Gallery',
  components: {
    'card-item-list': CardItemList,
    'search-bar': SearchBar
  },
  data() {
    return {
      items: [],
      requestTime: 0
    }
  },
  async created() {
    await this.getBikes();
  },
  mounted() {
    this.$on('search', (query) => {
      this.getBikes(query);
    })
  },
  methods: {
    async getBikes(query = '') {
      const url = `${this.$config.apiUrl}/?search=${query}`;
      let response;
      let requestStartTime = Date.now();
      try {
        response = await this.$http.get(url);
      } catch (err) {
        console.log(`Error retrieving items: ${err}`)
      } finally {
        this.requestTime = Date.now() - requestStartTime;
      }
      if (response) {
        this.items = response.data.data.bikes;
      }
    },
  },
 
};
</script>

