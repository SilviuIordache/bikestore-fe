<template lang="pug">
  .search-bar
    input#search-input(type="text" :placeholder="placeholderText" @focus="removePlaceholder()" @blur="addPlaceholder()")
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      placeholderText: 'Cube Stereo..'
    }
  },
  methods: {
    addPlaceholder() {
      document.getElementById('search-input').placeholder = this.placeholderText;
    },
    removePlaceholder() {
      document.getElementById('search-input').placeholder = '';
    }
  }
};
</script>

<style lang="stylus" scoped>
  #search-input
    width 25rem
    height 3rem



</style>
