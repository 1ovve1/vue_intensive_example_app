<template>
  <div class="cart">
    <div
      v-if="productsInBasketMap.size <= 0"
      class="text-center text-uppercase bold"
    >
      Cart is empty
    </div>

    <div
      v-else
      v-for="[productId, product] in productsInBasketMap"
      :key="productId"
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
              <AppPrice :value="product.price * product.basketQuantity" />
            </p>
            <div>
              <div class="container d-flex justify-content-center">
                <el-button
                  class="col-2"
                  type="primary"
                  @click="addProductInBasket(productId)"
                  :disabled="product.basketQuantity >= product.available"
                >
                  +
                </el-button>
                <div class="col-2 text-center" type="text">
                  {{ product.quantityInBasket }}
                </div>
                <el-button
                  class="col-2"
                  type="primary"
                  @click="removeProductFromBasketWithConfirm(productId)"
                >
                  -
                </el-button>
              </div>
              <i class="d-block text-center">
                Available: {{ product.available - product.basketQuantity }}
              </i>

              <el-button class="d-block mx-auto mt-2" type="success">
                Buy Order
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>Total: <AppPrice :value="totalPrice" /></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { ElButton, ElMessageBox, ElMessage } from "element-plus";
import AppPrice from "./Price";

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

    totalPrice() {
      let totalPrice = 0;

      for (const product of this.productsInBasketMap.values()) {
        totalPrice += product.price * product.basketQuantity;
      }

      return totalPrice;
    },
  },

  methods: {
    ...mapActions({
      addProductInBasket: "catalog/addProductInBasket",
      removeProductFromBasket: "catalog/removeProductFromBasket",
    }),
    removeProductFromBasketWithConfirm(productId) {
      const product = this.productsInBasketMap.get(productId);

      if (product.basketQuantity <= 1) {
        this.deleteProductWithConfirm(productId, product.name);
      } else {
        this.removeProductFromBasket(productId);
      }
    },

    async deleteProductWithConfirm(productId, productName) {
      ElMessageBox.confirm(
        `Product "${productName}" will be removed from your cart. Continue?`,
        "Warning",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning",
        }
      )
        .then(() => {
          this.removeProductFromBasket(productId);
        })
        .then(() => {
          ElMessage({
            type: "success",
            message: `Product "${productName}" was removed from the basket`,
          });
        });
    },
  },
};
</script>
