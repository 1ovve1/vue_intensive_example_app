export default {
  namespaced: true,
  state: {
    products: [
      {
        id: 1,
        name: "Car",
        price: 10_000,
        img: require("@/assets/images/car.png"),
        available: 10,
      },
      {
        id: 2,
        name: "Bus",
        price: 30_000,
        img: require("@/assets/images/bus.png"),
        available: 4,
      },
      {
        id: 3,
        name: "Airplain",
        price: 2_000_000,
        img: require("@/assets/images/airplane.webp"),
        available: 2,
      },
      {
        id: 4,
        name: "Tank",
        img: require("@/assets/images/tank.png"),
        price: 10_000_000,
        available: 1,
      },
    ],
  },
  getters: {
    getProducts: (state) => state.products,
    getProductById: (state) => (productId) => {
      const product = state.products.find((elem) => elem.id === productId);

      if (product === undefined) {
        throw new Error(
          `Product (productId: ${productId}) was not found in catalog`
        );
      }

      return product;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
};
