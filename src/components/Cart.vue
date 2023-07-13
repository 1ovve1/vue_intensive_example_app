<template>
  <div class="cart">
    <div
      v-for="product in productsInBasketMap.values()"
      :key="product.id"
      class="card w-100 mb-3"
    >
      <div class="row g-0">
        <div class="col-6 d-flex justify-content-center align-items-center">
          <img
            :src="product.img"
            class="img-fluid rounded-start w-75"
            :alt="product.name"
          />
        </div>
        <div class="col-6">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">
              <AppPrice :value="product.price" />
            </p>
            <div>
              <div class="container d-flex justify-content-center">
                <el-button
                  class="col-2"
                  type="primary"
                  @click="addProductInBasket(product)"
                >
                  +
                </el-button>
                <div
                  :key="product.render"
                  class="col-2 text-center"
                  type="text"
                >
                  {{ product.quantityInBasket }}
                </div>
                <el-button
                  class="col-2"
                  type="primary"
                  @click="removeProductFromBasket(product)"
                >
                  -
                </el-button>
              </div>
              <i class="d-block text-center">
                <!-- Available: {{ calculateLeftovers(product) }} -->
              </i>

              <el-button class="d-block mx-auto mt-2" type="success">
                Buy Order
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppPrice from "./Price";
import { ElButton } from "element-plus";

export default {
  name: "AppCart",

  components: {
    AppPrice,
    ElButton,
  },

  computed: {
    ...mapGetters({
      productsInBasketMap: "catalog/getProductsInBasketMap",
    }),
  },

  methods: {
    ...mapActions({
      addProductInBasketStored: "catalog/addProductInBasket",
      removeProductFromBasketStored: "catalog/removeProductFromBasket",
    }),

    addProductInBasket(productObject) {
      const productId = productObject.id;

      this.addProductInBasketStored({
        productId,
        productObject,
      });
    },
    removeProductFromBasket(productObject) {
      const productId = productObject.id;

      this.removeProductFromBasketStored(productId);
    },
  },
};
</script>
