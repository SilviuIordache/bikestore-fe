<template lang="pug">
  form.ml-4( method="POST" enctype="multipart/form-data" @submit.prevent="")
    h1 Add new bike
    .form-field
      label(for="brand-select") Brand
      select(name="brand" id="brand-select" v-model="brand")
        //- option(value="") --Please choose a brand--
        option(v-for="brand in brands" :value="brand") {{ brand }}

    .form-field
      label(for="model") Model
      input(type="text" name="model" v-model="model" id="model")

    .form-field
      label(for="price") Price ($)
      input(type="number" name="price" v-model="price" id="price" placeholder="1000")

    .form-field
      label(for="stock") Stock
      input(type="number" name="stock" v-model="stock" id="stock" placeholder="5")

    .form-field
      label(for="photo") Upload photo(s)
      input(
        type="file"
        ref="fileRef"
        name="photo"
        @change="selectFile"
        accept="image/png, image/jpeg")
      p(v-if="!file").
        Maximum {{ getSizeInMB(this.maxFileSize) }}MB allowed (png, jpg, jpeg)
      p.text-danger(v-if="!validFile && file").
        File size exceeds {{ getSizeInMB(this.maxFileSize) }}MB limit: {{ getSizeInMB(this.file.size) }}MB.
      p.text-success(v-if="validFile && file").
        Valid file size: {{ getSizeInMB(this.file.size) }}MB.

    .preview-container(v-if="validFile")
      img(:src="previewURL" width="250")

    .form-field
      input(type="submit" name="submit" value="Create" @click="createProduct()")
</template>

<script>
export default {
  data() {
    return {
      brands: ['Canyon', 'Cube', 'Merida', 'Vitus', 'YT', 'Yeti'],
      brand: 'default',
      model: 'default',
      price: 'default',
      stock: 'default',
      file: '',
      validFile: false,
      maxFileSize: 3 * 1000000,
      previewURL: ''
    }
  },
  methods: {
    selectFile() {
      this.file = this.$refs.fileRef.files[0];

      this.previewURL = URL.createObjectURL(this.file);

      if (this.file.size < this.maxFileSize) {
        this.validFile = true;
      } else {
        this.validFile = false;
      }
    },
    async createProduct() {
      if (this.brand && this.model && this.price && this.stock && this.validFile) {
        const url = `${this.$config.apiUrl}`;        
        const formData = new FormData();
        formData.append('file', this.file);
        formData.append('brand', this.brand);
        formData.append('model', this.model);
        formData.append('price', this.price);
        formData.append('stock', this.stock);
        formData.append('imageName', this.file.name);

        let options = { headers: {'content-type': 'multipart/form-data'} }

        let response;
        try {
          response = await this.$http.post(url, formData, options);
          if (response.status === 201) {
            this.$router.push({ path: 'addSuccess' });
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        console.log('form fields not valid')
      }
    },
    getSizeInMB(value) {
      return (value/ (Math.pow(10, 6))).toFixed(3)
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
