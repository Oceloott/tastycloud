<template>
  <h1 class="page-title">{{ title }}</h1>
  <div class="page-tiret">&nbsp;</div>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
  
<style scoped lang="scss">
.page {
  &-title {
    margin-top: 24px;
    font-weight: 700;
    font-size: 40px;
    color: var(--color-main);
    text-align: center;
  }
  &-tiret {
    border: 2px solid var(--color-main);
    border-radius: 15px;
    height: 0;
    margin: 10px auto 50px;
    width: 100px;
  }
}
</style>