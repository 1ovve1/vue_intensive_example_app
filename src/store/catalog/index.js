import basket from "./basket";

export default {
  nammespacing: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    addProductInCatalog: (state, productObject) => {
      state.dispatch("catalog/basket/addProduct", productObject);
      state.dispatch("catalog/products/addProductElement", productObject);
    },
  },
  modules: {
    basket,
  },
};
