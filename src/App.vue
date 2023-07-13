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
import AppHeader from "./components/Header.vue";
import AppProductList from "./components/ProductList.vue";
import AppFooter from "./components/Footer.vue";

export default {
  components: {
    AppHeader,
    AppProductList,
    AppFooter,
  },
};
</script>

<style lang="scss"></style>
