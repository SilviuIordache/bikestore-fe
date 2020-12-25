<template lang="pug">
  #card-item-list.row.p-1
    .col-12.col-md-6.col-lg-4.d-flex.p-1(v-for="item in items")
      Gallery-Card(
        :id="item._id"
        :key="item.id"
        :brand="item.brand"
        :model="item.model"
        :price="item.price"
        :stock="item.stock"
        :imageUrl="item.imageUrl")
</template>

<script>
import GalleryCard from '../components/GalleryCard.vue';

export default {
  components: {
    'Gallery-Card': GalleryCard,
  },
  props: {
    items: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="stylus" scoped>
  #card-item-list
    background-color #f0f2f0
    border-radius 0.3rem
</style>
