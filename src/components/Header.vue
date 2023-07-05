<template>
  <div class="contrainer">
    <p>Total price: {{ totalPrice }}</p>
    <p>Product count: {{ productCount }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "app-header",
  computed: {
    ...mapGetters({
      productsFromBasket: "catalog/basket/getProducts",
    }),

    totalPrice() {
      return this.productsFromBasket.reduce(
        (acc, elem) => (acc += elem.price),
        0
      );
    },
    productCount() {
      return this.productsFromBasket.length;
    },
  },
};
</script>
