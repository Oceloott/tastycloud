<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";

</script>

<template>
  <div class="wrapper">
    
    <header>
      <Header />
    </header>
  </div>
  <div class="container">
    <RouterView />
  </div>
</template>

<style lang="scss">
</style>
