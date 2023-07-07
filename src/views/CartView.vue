<template>
  <div class="my-component">
    <TitleComponent title="Panier" />
    <div v-if="cartItems.length === 0">
      <p>Votre panier est vide.</p>
    </div>
    <div v-else>
      <div class="row">
        <Card
          v-for="card in cartItems"
          :key="card.id"
          :productId="card.id"
          :productName="card.name"
          :productPrice="card.price"
          :productQuantity="card.quantity"
          :isCartPage="true"
          :productDescriptions="card.description"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/Card.vue";
import TitleComponent from "@/components/Title.vue";
import CartService from "@/classes/CartService";


export default defineComponent({
  name: "CartView",
  components: {
    Card,
    TitleComponent,
  },
  data() {
    return {
      cartService: new CartService(),
    };
  },
  computed: {
    cartItems(): [] {
      return this.cartService.getCartItems();
    },
    

  },

});
</script>

<style scoped lang="scss">
</style>
