<template lang="pug">
  .container
    .gallery-banner.py-3
      h1 Welcome to the Bike Store
      p Browse, find and buy your ideal bike
    search-bar.mb-2
    card-item-list(:items="items")
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
      items: []
    }
  },
  async created() {
    this.getBikes();
  },
  methods: {
    async getBikes(query = '') {
      const url = `http://localhost:3000/api/v1/bikes`;
      let param
      let response;
      try {
        response = await this.$http.get(url, { params: { search: query } });
      } catch (err) {
        console.log(`Error retrieving items: ${err}`)
      }
      if (response) {
        this.items = response.data.data.bikes;
      }
    },
  },
  mounted() {
    this.$on('search', (query) => {
      this.getBikes(query);
    })
  }
};
</script>

