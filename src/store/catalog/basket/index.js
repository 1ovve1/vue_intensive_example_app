export default {
  namespaced: true,
  state: {
    basket: new Map(),
  },
  getters: {
    getProductsInBasketMap: (state) => state.basket,

    getProductById: (state, productId) => state.basket.get(productId),

    getProductsQuantityByIdInBasket: (state) => {
      const dict = new Map();

      for (const key of state.basket.keys()) {
        const productObject = state.basket.get(key);

        dict.set(productObject.id, productObject.quantityInBasket);
      }

      return dict;
    },
  },
  mutations: {
    setProduct: (state, { productId, productObject }) =>
      state.basket.set(productId, productObject),

    deleteProduct: (state, productId) => state.basket.delete(productId),
  },
  actions: {
    addProductElement: ({ state, commit }, { productId, productObject }) => {
      if (state.basket.has(productId)) {
        productObject = state.basket.get(productId);
        productObject.quantityInBasket++;
      } else {
        productObject.quantityInBasket = 1;
      }

      commit("setProduct", { productId, productObject });
    },

    removeProductElement: ({ state, commit }, productId) => {
      if (state.basket.has(productId)) {
        const productObject = state.basket.get(productId);

        if (productObject.quantityInBasket <= 1) {
          commit("deleteProduct", productId);
        } else {
          productObject.quantityInBasket--;
          commit("setProduct", productId, productObject);
        }
      }
    },
  },
  modules: {},
};
