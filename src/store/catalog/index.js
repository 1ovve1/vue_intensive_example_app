import basket from "./basket";
import products from "./products";

export default {
  namespaced: true,
  state: {},
  getters: {
    getProductsInBasket: (state, getters) => {
      return getters["basket/getProducts"];
    },

    getAvailableProductsList: (state, getters) => {
      return getters["products/getProducts"];
    },
  },
  mutations: {},
  actions: {
    /**
     * @param {Object} state
     * @param {
     *    productObject: {
     *      id: Number,
     *      price: Number,
     *    },
     *    count: Number,
     * } productObject price object
     * @param count
     */
    addProductInBasket: (state, productObject) => {
      state.dispatch("basket/addProductElement", productObject);
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
