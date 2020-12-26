<template lang="pug">
  .row.search-bar.d-flex
    .col-12
      form.position-relative.w-100(@submit.prevent="emitSearch()")
        input#search-input(
          type="text"
          v-model="query"
          :placeholder="placeholderText"
          @focus="removeInputPlaceholder()"
          @blur="addInputPlaceholder()")
        //- button#search-button(type="submit" @click="emitSearch()")
        .glass-icon-container.position-absolute
          i.fas.fa-search
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      placeholderText: ' Search for a product..',
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
    padding-left 3rem
    width 100%
    height 3rem
    border-radius 1rem
    &:focus
      outline none
      box-shadow 0 0 0 3px rgba(21, 156, 228, 0.4)
  .glass-icon-container
    top 0.7rem
    left 0.8rem
</style>
