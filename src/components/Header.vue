<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid pe-lg-2 p-0">
        <a class="navbar-brand fw-bold fs-3" href="#">MyCatalog</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link pe-3 me-4 fw-bold active"
                aria-current="page"
                href="#"
                >HOME</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link pe-3 me-4 fw-bold" href="#">SHOP</a>
            </li>
            <li class="nav-item">
              <a class="nav-link pe-3 me-4 fw-bold" href="#">PAGES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link pe-3 me-4 fw-bold" href="#">BLOG</a>
            </li>
            <li class="nav-item">
              <a class="nav-link pe-3 me-4 fw-bold" href="#">CONTACT</a>
            </li>
          </ul>
          <ul class="navbar-nav icons ms-auto mb-2 mb-lg-0">
            <li
              class="nav-item pe-3 d-flex flex-direction-columns align-contents-center"
            >
              <a class="nav-link d-flex" href="#">
                <font-awesome-icon icon="fa-heart"> </font-awesome-icon>
                <span class="mx-1">{{}}</span>
              </a>
              <span class="m-2 m-lg-0"></span>
              <a class="nav-link d-flex" @click="openCartDialog()">
                <font-awesome-icon icon="fa-shopping-bag"> </font-awesome-icon>
                <span class="mx-1">{{ basketProductsQuantity }}</span>
              </a>
            </li>
            <li class="nav-item pe-3"></li>
            <li class="nav-item">
              <span class="">items: </span>
              <AppPrice :value="basketTotalProductsPrice" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <el-dialog v-model="showCartDialog" title="User Cart">
    <AppCart />
  </el-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import { ElDialog } from "element-plus";
import AppPrice from "./Price.vue";
import AppCart from "./Cart.vue";

export default {
  name: "AppHeader",
  components: {
    AppPrice,
    AppCart,
    ElDialog,
  },
  data: () => ({
    showCartDialog: false,
  }),
  computed: {
    ...mapGetters({
      productsInBasketMap: "catalog/getProductsInBasketMap",
    }),

    basketTotalProductsPrice() {
      let totalPriceInBasket = 0;

      this.productsInBasketMap.forEach(
        (product) =>
          (totalPriceInBasket += product.price * product.basketQuantity)
      );

      return totalPriceInBasket;
    },

    basketProductsQuantity() {
      let totalQuantityInBasket = 0;

      this.productsInBasketMap.forEach(
        (product) => (totalQuantityInBasket += product.basketQuantity)
      );

      return totalQuantityInBasket;
    },
  },
  methods: {
    openCartDialog() {
      console.log(this.showCartDialog);
      this.showCartDialog = true;
    },
  },
};
</script>

<style mode="scoped">
ul.dropdown-cart {
  min-width: 250px;
}
ul.dropdown-cart li .item {
  display: block;
  padding: 3px 10px;
  margin: 3px 0;
}
ul.dropdown-cart li .item:hover {
  background-color: #f3f3f3;
}
ul.dropdown-cart li .item:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}

ul.dropdown-cart li .item-left {
  float: left;
}
ul.dropdown-cart li .item-left img,
ul.dropdown-cart li .item-left span.item-info {
  float: left;
}
ul.dropdown-cart li .item-left span.item-info {
  margin-left: 10px;
}
ul.dropdown-cart li .item-left span.item-info span {
  display: block;
}
ul.dropdown-cart li .item-right {
  float: right;
}
ul.dropdown-cart li .item-right button {
  margin-top: 14px;
}
</style>
