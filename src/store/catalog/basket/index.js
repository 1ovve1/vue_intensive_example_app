export default {
  namespaced: true,
  state: {
    basket: [],
  },
  getters: {
    getProducts: (state) => state.basket,

    getProductByIndex: (state, index) =>
      state.basket.find((elem) => elem.id === index),

    getProductsQuantityByIdInBasket: (state) => {
      const dict = new Map();

      for (const product of state.basket) {
        const id = product.id;
        let quantity = 0;

        if (dict.has(id)) {
          quantity = dict.get(id);
        }

        dict.set(id, quantity + 1);
      }

      return dict;
    },
  },
  mutations: {
    addProduct: (state, productObject) => state.basket.push(productObject),

    removeProduct: (state, productLocalIndex) =>
      state.basket.splice(productLocalIndex, 1),
  },
  actions: {
    addProductElement: (state, productObject) => {
      state.commit("addProduct", productObject);
    },

    removeProductElement: ({ commit, state }, productId) => {
      const element = state.basket.find((product) => product.id === productId);

      if (element) {
        const localIndex = state.basket.indexOf(element);

        commit("removeProduct", localIndex);
      }
    },
  },
  modules: {},
};
