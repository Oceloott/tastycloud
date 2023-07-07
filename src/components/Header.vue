<script setup lang="ts">
import  { RouterLink }  from "vue-router";
</script>
<template>
  <section class="navigation">
    <nav class="navbar navbar-expand-lg">
      <div class="container navbar-container">
        <RouterLink class="navbar-brand" to="/"
          ><img
            alt="Vue logo"
            class="navbar-logo"
            src="@/assets/img/logo_tassty.png"
        /></RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li
              v-for="item in menuItems"
              :key="item.id"
              class="nav-item active"
            >
              <RouterLink class="nav-link" :to="item.url">{{
                item.label
              }}</RouterLink>
            </li>
          </ul>
          <div class="nav-item">
            <RouterLink class="nav-link" to="cart">Mon panier</RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MenuItem from "@/types/MenuItems";

export default defineComponent({
  name: "Header",
  props: {
    menuItems: {
      type: Array as () => MenuItem[],
      default: () => [
        { id: 1, label: "Plats", url: "/plats" },
        { id: 2, label: "Dessert", url: "/dessert" },
      ],
    },
  },
});
</script>
  
<style scoped lang="scss">
.navbar {
  background-color: var(--color-white);
  height: 65px;
  font-family: "Roboto";
  padding: 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  &-container {
    height: 100%;
  }
  &-collapse {
    height: 100%;
  }
  &-logo {
    height: auto;
    width: 125px;
  }
  &-nav {
    margin-right: auto;
    height: 100%;
  }
  &-cart {
    color: var(--color-main);
    font-weight: bold;
    font-family: "Roboto";
  }
}
.nav {
  &-item {
    background-color: var(--color-white);
    position: relative;
    height: 100%;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 5px;
      background-color: #1c4d57;
      bottom: 0;
      transform: scaleX(0);
      transition: transform 0.25s linear;
      transform-origin: bottom right;
    }
    &:hover {
      background-color: var(--color-main-lighter);
      &::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
  &-link {
    color: var(--color-main);
    font-weight: bold;
    font-family: "Roboto";
    padding: 0;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 15px !important;
  }
}
</style>
  