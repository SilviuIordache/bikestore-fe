<template lang="pug">
  .hello
    h1 {{ msg }}
    p Browse and find your ideal bike in our selection of 100+ cool bikes
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0


a
  color #42b983
</style>
