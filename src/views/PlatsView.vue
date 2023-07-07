<template>
  <div class="my-component">
    <TitleComponent title="Plats" />
    <div class="row">
      <Card
        v-for="card in categoryProducts"
        :key="card.id"
        :productId="card.id"
        :productName="card.name"
        :productDescriptions="card.descriptions"
        :productPrice="card.price"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/Card.vue";
import ProductService from "../classes/ProductService"
import TitleComponent from "@/components/Title.vue";


export default defineComponent({
  name: "PlatsView",
  components: {
    Card,
    TitleComponent,
  },
  setup() {
    const productService = new ProductService();
    const category = "plats";
    const categoryProducts = productService.getProductsByCategory(category);

    return {
      categoryProducts,
    };
  },
});
</script>

<style scoped lang="scss">
</style>
