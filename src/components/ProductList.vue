<template>
  <div class="row">
    <div class="col-3 mt-5" v-for="product in products" :key="product.id">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title text-center">{{ product.name }}</h4>

          <img class="card-img-top" :src="product.img" alt="Title" />

          <p class="card-text text-end">Price: {{ product.price }}$</p>

          <div class="container d-flex justify-content-center">
            <el-button
              class="col-2"
              type="primary"
              @click="incProductCount(product)"
            >
              +
            </el-button>
            <el-button
              class="col-2"
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
          </div>
          <i class="d-block text-center">
            Available: {{ calculateLeftovers(product) }}
          </i>

          <el-button
            class="d-block mx-auto mt-2"
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
      const count = this.updateAvailable(product);

      for (let i = 0; i < count; i++) {
        this.addProductInBasket(product);
      }

      this.updateAvailable(product);
    },

    updateAvailable(product) {
      const countAvailableAfterAddToBasket = this.calculateLeftovers(product);
      let count = this.parseCountValue(product);

      if (count > countAvailableAfterAddToBasket) {
        count = countAvailableAfterAddToBasket;
      }

      this.setProductCountAndRender(product, count);

      return count;
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
