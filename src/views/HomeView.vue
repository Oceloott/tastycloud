<template>
  <div class="my-component">
    <div class="col-md-3 categories">
      <select class="form-select form-select-sm categories-select" v-model="selectedCategory">
        <option value="">Toutes les catégories</option>
        <option v-for="category in uniqueCategories" :value="category.value" :key="category.value">
          {{ category.label }}
        </option>
      </select>
    </div>

    <div class="row">
      <Card
        v-for="card in filteredCards"
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
import { defineComponent, ref, computed, Ref } from "vue";
import ProductsType from "@/types/Products";
import Card from "@/components/Card.vue";
import ProductService from "@/classes/ProductService"

interface CategoryItem {
  value: string;
  label: string;
}

export default defineComponent({
  name: "PoduitsView",
  components: {
    Card,
  },
  setup() {
    const selectedCategory: Ref<string> = ref("");
    const productService = new ProductService();

    const uniqueCategories: Ref<CategoryItem[]> = computed(() => {
      const categoriesSet = new Set<string>();
      productService.getAllProducts().forEach((product) => {
        categoriesSet.add(product.category);
      });
      return Array.from(categoriesSet).map((category) => ({
        value: category,
        label: category,
      }));
    });

    const filteredCards: Ref<ProductsType[]> = computed(() => {
      if (selectedCategory.value === "") {
        return productService.getAllProducts();
      } else {
        return productService.getProductsByCategory(selectedCategory.value);
      }
    });

    return {
      selectedCategory,
      uniqueCategories,
      filteredCards,
    };
  },
});
</script>

<style scoped lang="scss">
.categories{
  margin: 24px 0 16px;
  &-select{
    &:focus{
      box-shadow: none;
      border: 1px solid var(--color-grey);
    }
  }
}
</style>
