<template>
  <div class="contrainer">
    <p>Total price: {{ totalPrice }}</p>
    <p>Product count: {{ productCount }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppHeader",
  computed: {
    ...mapGetters({
      productsInBasket: "catalog/getProductsInBasket",
    }),

    totalPrice() {
      return this.productsInBasket.reduce(
        (acc, elem) => (acc += elem.price),
        0
      );
    },
    productCount() {
      return this.productsInBasket.length;
    },
  },
};
</script>
