<template>
  <div class="col-md-4 col-lg-3">
    <div class="card">
      <img
        class="card-img-top"
        src="@/assets/img/tiramisu.jpg"
        alt="Card image cap"
      />
      <div class="card-body">
        <h1 class="card-name">
          {{ productName }}
        </h1>
        <p class="card-description">
          {{ productDescriptions }}
        </p>
        <p class="card-price">{{ productPrice * quantity }} €</p>
        <div class="card-quantity">
          <span class="card-quantity-text">Quantité</span>
          <button class="card-quantity-button" @click="decreaseQuantity">
            &lt;
          </button>
          <span class="card-quantity-value">{{ quantity }}</span>
          <button class="card-quantity-button" @click="increaseQuantity">
            &gt;
          </button>
        </div>
      </div>
      <button class="card-button" v-if="!isCartPage" @click="addToCart">Ajouter au panier</button>
      <button class="card-button" v-if="isCartPage" @click="removeFromCart(productId)">
        Supprimer du panier
      </button>
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import CartService from "../classes/CartService";

export default defineComponent({
  name: "CardComponents",
  props: {
    productImage: {
      type: String,
      required: false,
    },
    productName: {
      type: String,
      required: true,
    },
    productId: {
      type: Number,
      required: true,
    },
    productCategory: {
      type: String,
      required: false,
    },
    productPrice: {
      type: Number,
      required: false,
    },
    productDescriptions: {
      type: String,
      required: true,
    },
    isCartPage: {
      type: Boolean,
      default: false,
    },
    productQuantity: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      cartService: new CartService(),
      quantity: this.productQuantity,
    };
  },
  computed: {
    cartItems() {
      return this.cartService.getCartItems();
    },
  },
  methods: {
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
        if (this.isCartPage) {
          this.cartService.updateQuantityInCart(this.productId, this.quantity);
        }
      }
    },

    increaseQuantity() {
      this.quantity++;
      if (this.isCartPage) {
        this.cartService.updateQuantityInCart(this.productId, this.quantity);
      }
    },

    addToCart() {
      const product = {
        id: this.productId,
        name: this.productName,
        price: this.productPrice,
        description: this.productDescriptions,
        quantity: this.quantity,
      };
      const cartItems: any[] = JSON.parse(localStorage.getItem("cartItems")) || [];
      const existingProductIndex = cartItems.findIndex(
        (item) => item.id === this.productId
      );
      if (existingProductIndex !== -1) {
        cartItems[existingProductIndex].quantity += this.quantity;
      } else {
        cartItems.push(product);
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    },

    removeFromCart(productId: number) {
      this.cartService.removeFromCart(productId);
    },
  },
});
</script>
  
  <style lang="scss" scoped>
.card {
  width: 100%;
  margin-top: 24px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &-name {
    text-align: center;
    font-size: 24px;
    font-family: "RobotoBold";
  }
  &-description {
    margin-top: 16px;
    text-align: center;
    color: var(--color-grey);
  }
  &-price {
    text-align: center;
    margin-top: 16px;
    font-size: 24px;
    font-family: "RobotoBold";
  }
  &-button{
    background-color: var(--color-main);
    color: var(--color-white);
    padding: 16px 0;
      border: none;
      color: var(--color-white);
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      font-weight: bold;
      &:hover{
        background-color: var(--color-main-darker);
        transition: 0.6s;

      }
  }
  &-quantity {
    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    &-button {
      background-color: transparent;
      border: none;
      color: var(--color-grey);
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 24px;
      font-family: "RobotoBold";
    }
    &-value{
      padding: 0 8px;
    }
    &-text{
      padding-right: 16px;
      text-transform: uppercase;
      font-family: "RobotoBold";

    }
  }
}
</style>