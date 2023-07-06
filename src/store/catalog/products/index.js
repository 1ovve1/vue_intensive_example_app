export default {
  namespaced: true,
  state: {
    products: [
      {
        id: 1,
        name: "Car",
        price: 10_000,
        countAvaliable: 10,
      },
      {
        id: 2,
        name: "Bus",
        price: 30_000,
        countAvaliable: 4,
      },
      {
        id: 3,
        name: "Airplain",
        price: 2_000_000,
        countAvaliable: 2,
      },
      {
        id: 4,
        name: "Tank",
        price: 10_000_000,
        countAvaliable: 1,
      },
    ],
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
