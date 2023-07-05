export default {
  nammespacing: true,
  state: {
    productCount: Number,
    totalPrice: Number,
  },
  getters: {
    productCount: (state) => state.productCount,
    totalPrice: (state) => state.totalPrice,
  },
  mutations: {
    setCount: (state, value) => (state.count = value),
    setTotal: (state, value) => (state.total = value),
  },
  actions: {
    incrementCount: (state) => state.productCount++,
    decrementCount: (state) => state.productCount--,

    addTotalPrice: (state, value) => (state.totalPrice += value),
    removeTotalPrice: (state, value) => (state.totalPrice -= value),

    addProduct: (state, productObject) => {
      const productCount = state.productCount + productObject.count;
      const totalPrice = state.totalPrice + productObject.price;

      state.commit("setCount", productCount);
      state.commit("addTotalPrice", totalPrice);
    },
  },
  modules: {},
};
