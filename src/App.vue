<template lang="pug">
  main
    nav-bar
    router-view
</template>

<script>
  import NavBar from './components/Navbar.vue';

  export default {
    components: {
      'nav-bar': NavBar
    },
    mounted() {
      this.$on('productAddedToCart', (product) => {
        console.log(product);
      })
    }
  }
</script>