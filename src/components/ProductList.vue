<template>
  <div class="container mt-5" v-for="product in products" :key="product.id">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">{{ product.name }}</h4>
        <p class="card-text">{{ product.price }}</p>
        <div class="container row">
          <el-button
            class="col-1"
            type="primary"
            @click="incProductCount(product)"
          >
            +
          </el-button>
          <el-button
            class="col-1"
            type="primary"
            @click="decProductCount(product)"
          >
            -
          </el-button>
          <input
            :value="product.count"
            :key="product.render"
            class="col-2 ms-2"
            type="text"
          />

          <el-button
            class="col-3 ms-2"
            type="success"
            @click="addToBasket(product)"
          >
            Add To Basket
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { ElButton } from "element-plus";

export default {
  name: "AppProductList",
  components: {
    ElButton,
  },
  data: () => ({
    products: [],
  }),
  computed: {
    ...mapGetters({
      availableProductsList: "catalog/getAvailableProductsList",
      productsQuantityByIdInBasket: "catalog/getProductsQuantityByIdInBasket",
    }),
  },
  methods: {
    ...mapActions({
      addProductInBasket: "catalog/addProductInBasket",
      removeProductFromBasket: "catalog/removeProductFromBasket",
    }),

    incProductCount(product) {
      let count = this.parseCountValue(product);

      if (count < this.calculateLeftovers(product)) {
        ++count;
      }

      this.setProductCountAndRender(product, count);
    },

    decProductCount(product) {
      let count = this.parseCountValue(product);

      if (count > 0) {
        --count;
      }

      this.setProductCountAndRender(product, count);
    },

    addToBasket(product) {
      const countAvailableAfterAddToBasket = this.calculateLeftovers(product);
      let count = this.parseCountValue(product);

      if (count > countAvailableAfterAddToBasket) {
        count = countAvailableAfterAddToBasket;
      }

      this.setProductCountAndRender(product, count);

      for (let i = 0; i < count; i++) {
        this.addProductInBasket(product);
      }
    },

    calculateLeftovers(product) {
      const productId = product.id;
      const countAvailable = product.countAvailable;

      if (this.productsQuantityByIdInBasket.has(productId)) {
        const countAvailableWithBasket =
          countAvailable - this.productsQuantityByIdInBasket.get(productId);

        return countAvailableWithBasket;
      } else {
        return countAvailable;
      }
    },

    parseCountValue(product) {
      const count = parseInt(product.count);

      return isNaN(count) ? product.count : count;
    },

    setProductCountAndRender(product, newCountValue) {
      product.count = newCountValue;
      product.render = !product.render;
    },
  },
  created() {
    this.products = this.availableProductsList;

    for (const product of this.products) {
      product.count = 1;
      product.render = false;
    }
  },
};
</script>

<style>
.product__count-field {
  width: 10%;
}
</style>
