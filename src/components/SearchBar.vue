<template lang="pug">
  .search-bar.d-flex
    input#search-input(
      type="text"
      v-model="query"
      :placeholder="placeholderText"
      @focus="removeInputPlaceholder()"
      @blur="addInputPlaceholder()")
    button#search-button(@click="emitSearch()")
      i.fas.fa-search
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      placeholderText: ' Cube Stereo..',
      query: ''
    }
  },
  methods: {
    addInputPlaceholder() {
      document.getElementById('search-input').placeholder = this.placeholderText;
    },
    removeInputPlaceholder() {
      document.getElementById('search-input').placeholder = '';
    },
    emitSearch() {
      // avoid duplicate query error
      if (this.$route.query.search != this.query) {
        this.$router.push({ path: '/', query: { search: this.query }})
      }
    }
  },
};
</script>

<style lang="stylus" scoped>
  #search-input
    width 25rem
    height 3rem
  #search-button
    width 3rem
</style>
