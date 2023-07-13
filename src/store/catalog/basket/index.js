export default {
  namespaced: true,
  state: {
    basket: new Map(),
    default: {
      basketQuantity: 0,
    },
  },
  getters: {
    getBasketItemsMap: (state) => state.basket,

    getBasketItemById: (state) => (productId) => {
      if (state.basket.has(productId)) {
        return state.basket.get(productId);
      } else {
        return state.default;
      }
    },
  },
  mutations: {
    addProductInBasket: (state, productId) => {
      state.basket.set(productId, Object.assign({}, state.default));
    },
    removeProductFromBasket: (state, productId) => {
      state.basket.delete(productId);
    },
    incBasketQuantity: (state, productId) => {
      const basketItem = state.basket.get(productId);

      basketItem.basketQuantity++;

      state.basket.set(productId, basketItem);
    },
    decBasketQuantity: (state, productId) => {
      const basketItem = state.basket.get(productId);

      basketItem.basketQuantity--;

      state.basket.set(productId, basketItem);
    },
  },
  actions: {
    addProductInBasket: ({ state, commit }, productId) => {
      if (!state.basket.has(productId)) {
        commit("addProductInBasket", productId);
      }
      commit("incBasketQuantity", productId);
    },

    removeProductFromBasket: ({ commit, getters }, productId) => {
      const basketItem = getters["getBasketItemById"](productId);

      if (basketItem.basketQuantity > 1) {
        commit("decBasketQuantity", productId);
      } else {
        commit("removeProductInBasket", productId);
      }
    },
  },
  modules: {},
};
