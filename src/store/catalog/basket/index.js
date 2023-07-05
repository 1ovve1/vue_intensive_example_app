export default {
  namespaced: true,
  state: {
    products: [],
  },
  getters: {
    getProducts: (state) => state.products,
    getProductByIndex: (state, index) =>
      state.products.find((elem) => elem.id === index),
  },
  mutations: {
    addProduct: (state, productObject) => state.products.push(productObject),
  },
  actions: {
    addProductElement: (state, productObject) => {
      state.commit("addProduct", productObject);
    },
  },
  modules: {},
};
