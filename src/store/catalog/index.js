import basket from "./basket";
import products from "./products";

export default {
  namespaced: true,
  state: {},
  getters: {
    getProductsInBasketMap: (state, getters) => {
      return getters["basket/getProductsInBasketMap"];
    },

    getAvailableProductsList: (state, getters) => {
      return getters["products/getProducts"];
    },

    getProductsQuantityByIdInBasket: (state, getters) => {
      return getters["basket/getProductsQuantityByIdInBasket"];
    },
  },
  mutations: {},
  actions: {
    addProductInBasket: (state, { productId, productObject }) => {
      state.dispatch("basket/addProductElement", { productId, productObject });
    },

    removeProductFromBasket: (state, productId) => {
      state.dispatch("basket/removeProductElement", productId);
    },
  },
  modules: {
    basket,
    products,
  },
};
