<template lang="pug">
  .search-bar.d-flex
    input#search-input(
      type="text"
      v-model="searchString"
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
      searchString: ''
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
      this.$parent.$emit('search', this.searchString);
      this.searchString = '';
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
