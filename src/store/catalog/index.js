import basket from "./basket";

export default {
  nammespacing: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    /**
     * @param {Object} state
     * @param {
     *    id: Number,
     *    price: Number,
     *    count: Number
     * } productObject price object
     */
    addProductInCatalog: (state, productObject) => {
      state.dispatch("catalog/basket/addProduct", productObject);
      state.dispatch("catalog/products/addProductElement", productObject);
    },
  },
  modules: {
    basket,
  },
};
