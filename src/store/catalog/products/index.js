export default {
  nammespacing: true,
  state: {
    products: Array,
  },
  getters: {
    getProductByIndex: (state, index) => state.products[index],
  },
  mutations: {
    initProductInList: (state, id) => (state.products[id] = []),
    addProduct: (state, productObject, id) =>
      state.products[id].push(productObject),
  },
  actions: {
    addProductElement: (state, productObject) => {
      const id = productObject.id;

      if (isNaN(state.products[id])) {
        state.commit("initProductInList", id);
      }

      state.commit("addProduct", productObject, id);
    },
  },
  modules: {},
};
