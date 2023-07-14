<template>
  <div class="row">
    <div
      class="col-xl-3 col-md-4 col-sm-6 mt-5"
      v-for="[productId, product] of productsMap"
      :key="productId"
    >
      <AppProductCard
        :id="productId"
        :name="product.name"
        :img="product.img"
        :price="product.price"
        :available="product.available"
        @addproduct="addToBasket(productId, $event)"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppProductCard from "./ProductCard.vue";

export default {
  name: "AppProductList",
  data: () => ({}),
  components: {
    AppProductCard,
  },
  computed: {
    ...mapGetters({
      productsMap: "catalog/getProductsMap",
    }),
  },
  methods: {
    ...mapActions({
      addProductInBasket: "catalog/addProductInBasket",
    }),

    addToBasket(productId, { target: { quantity } }) {
      try {
        for (let i = 0; i < quantity; i++) {
          this.addProductInBasket(productId);
        }
      } catch (err) {
        alert(`Product (productId: ${productId}) out of stock`);
      }
    },
  },
};
</script>

<style>
.product__count-field {
  width: 10%;
}
</style>
