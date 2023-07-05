import basket from "./basket";

export default {
  namespaced: true,
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
      state.dispatch("basket/addProductElement", productObject);
    },
  },
  modules: {
    basket,
  },
};
