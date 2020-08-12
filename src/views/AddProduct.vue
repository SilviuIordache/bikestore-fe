<template lang="pug">
  form.ml-4(method="put" @submit="createProduct")
    h1 Add new bike
    .form-field
      label(for="brand") Brand
      input(type="text" name="brand" id="brand" required)
    .form-field
      label(for="model") Model
      input(type="text" name="model" id="model" required)
    .form-field
      label(for="price") Price ($)
      input(type="number" name="price" id="price" placeholder="1000" required)
    .form-field
      label(for="stock") Stock
      input(type="number" name="stock" id="stock" placeholder="5" required)
    .form-field
      input(type="submit" value="Create")
</template>

<script>
export default {
  methods: {
    async createProduct() {
      console.log(12);
    }
  }
};
</script>

<style scoped lang="stylus">
  .my-class
    color white
  .form-field
    margin-bottom 1rem
  .form-field > label
    display block
    margin-bottom 0
  
</style>
