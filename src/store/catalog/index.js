import basket from "./basket";
import products from "./products";

export default {
  namespaced: true,
  state: {},
  getters: {
    getProductsInBasketMap: (_, getters) => {
      const productsInBasket = new Map();
      const basketItemsMap = getters["basket/getBasketItemsMap"];

      for (const [productId, basketItem] of basketItemsMap) {
        const productInCatalog = getters["products/getProductById"](productId);

        // merge basket item and product items fields
        Object.assign(productInCatalog, basketItem);

        productsInBasket.set(productId, productInCatalog);
      }

      return productsInBasket;
    },

    getProductsMap: (_, getters) => {
      const productsMap = new Map();
      const products = getters["products/getProducts"];

      for (const product of products) {
        const productId = product.id;

        productsMap.set(productId, product);
      }

      return productsMap;
    },

    getBasketItemsMap: (_, getters) => {
      return getters["basket/getBasketItemsMap"];
    },
  },
  mutations: {},
  actions: {
    addProductInBasket: ({ dispatch, getters }, productId) => {
      const productInCatalog = getters["products/getProductById"](productId);
      const basketItem = getters["basket/getBasketItemById"](productId);

      if (productInCatalog.available - basketItem.basketQuantity <= 0) {
        throw new Error(
          `Not found available product (productId: ${productId}) in catalog`
        );
      }

      dispatch("basket/addProductInBasket", productId);
    },

    removeProductFromBasket: ({ dispatch }, productId) => {
      dispatch("basket/removeProductFromBasket", productId);
    },
  },
  modules: {
    basket,
    products,
  },
};
