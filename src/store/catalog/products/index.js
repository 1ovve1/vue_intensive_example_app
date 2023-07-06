export default {
  namespaced: true,
  state: {
    products: [
      {
        id: 1,
        name: "Car",
        price: 10_000,
        img: require("@/assets/images/car.png"),
        countAvailable: 10,
      },
      {
        id: 2,
        name: "Bus",
        price: 30_000,
        img: require("@/assets/images/bus.png"),
        countAvailable: 4,
      },
      {
        id: 3,
        name: "Airplain",
        price: 2_000_000,
        img: require("@/assets/images/airplane.webp"),
        countAvailable: 2,
      },
      {
        id: 4,
        name: "Tank",
        img: require("@/assets/images/tank.png"),
        price: 10_000_000,
        countAvailable: 1,
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
