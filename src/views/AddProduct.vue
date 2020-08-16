<template lang="pug">
  form.ml-4( method="POST" @submit.prevent="")
    h1 Add new bike
    .form-field
      label(for="brand-select") Brand
      select(name="brand" id="brand-select" v-model="brand")
        option(value="") --Please choose a brand--
        option(v-for="brand in brands" :value="brand") {{ brand }}
    .form-field
      label(for="model") Model
      input(type="text" name="model" v-model="model" id="model" required)
    .form-field
      label(for="price") Price ($)
      input(type="number" name="price" v-model="price" id="price" placeholder="1000" required)
    .form-field
      label(for="stock") Stock
      input(type="number" name="stock" v-model="stock" id="stock" placeholder="5" required)
    .form-field
      input(type="submit" name="submit" value="Create" @click="createProduct()")
</template>

<script>
export default {
  data() {
    return {
      brands: ['Canyon', 'Cube', 'Merida', 'Vitus', 'YT', 'Yeti'],
      brand: '',
      model: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    async createProduct() {
      if (this.brand && this.model && this.price && this.stock) {

        const url = 'http://localhost:3000/api/v1/bikes';
        const body = {
          'brand': this.brand,
          'model': this.model,
          'price': this.price,
          'stock': this.stock
        }
        const response = await this.$http.post(url, body);
        
        if (response.status === 201) {
          this.$router.push({ path: 'addSuccess' })
        } else {
          console.log('There was an error on our side. Please try again.')
        }
      } else {
        console.log('form fields not valid')
      }
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
