<template>
  <div class="main">
    <div class="main__content">
      <header class="main__header header">
        <AppHeader />
      </header>

      <div class="content container">
        <AppProductList />
      </div>
    </div>

    <div class="main__footer footer">
      <AppFooter />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import AppHeader from "./components/Header.vue";
import AppFooter from "./components/Footer.vue";
import AppProductList from "./components/ProductList.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    AppProductList,
  },

  methods: {
    ...mapActions({
      addProductInBasket: "catalog/addProductInBasket",
    }),
    addProduct() {
      this.addProductInBasket({
        id: 1,
        price: 500,
        count: 1,
      });
    },
  },
};
</script>

<style lang="scss"></style>
