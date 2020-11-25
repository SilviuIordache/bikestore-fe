<template lang="pug">
  .container
    .gallery-banner.py-3
      h1 Welcome to the Bike Store
      p Browse, find and buy your ideal bike
    search-bar
    card-item-list
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

};
</script>

