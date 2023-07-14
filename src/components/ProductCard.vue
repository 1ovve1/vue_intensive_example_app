<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title text-center">{{ name }}</h4>

      <img class="card-img-top" :src="img" alt="Title" />

      <p class="card-text text-end">
        Price: <AppPrice :value="price" :bold="false" />
      </p>

      <div class="container d-flex justify-content-center">
        <el-button class="col-2" type="primary" @click="incQuantity()">
          +
        </el-button>
        <el-button class="col-2" type="primary" @click="decQuantity()">
          -
        </el-button>
        <input v-model="quantityInput" class="col-2 ms-2" type="text" />
      </div>
      <i class="d-block text-center"> Available: {{ availableWithBasket }} </i>

      <el-button
        class="d-block mx-auto mt-2"
        type="success"
        @click="addToBasket()"
        :disabled="availableWithBasket <= 0"
      >
        Add To Basket
      </el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import { ElButton } from "element-plus";
import AppPrice from "./Price.vue";

export default {
  name: "AppProductCard",
  components: {
    AppPrice,
    ElButton,
  },
  props: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: String, default: "" },
    available: { type: Number, default: 0 },
  },
  data: () => ({
    quantityInput: 1,
  }),
  computed: {
    ...mapGetters({
      basketItemsMap: "catalog/getBasketItemsMap",
    }),
    quantityInputNumber() {
      const number = parseInt(this.quantityInput);

      if (isNaN(number)) {
        return 1;
      } else {
        return number;
      }
    },
    availableWithBasket() {
      if (this.basketItemsMap.has(this.id)) {
        const basketItem = this.basketItemsMap.get(this.id);

        return this.available - basketItem.basketQuantity;
      }

      return this.available;
    },
  },
  methods: {
    incQuantity() {
      if (this.quantityInput < this.availableWithBasket) {
        this.quantityInput++;
      }
    },
    decQuantity() {
      if (this.quantityInput > 0) {
        this.quantityInput--;
      }
    },
    addToBasket() {
      this.quantityInput = this.quantityInputNumber;

      if (this.quantityInput > this.availableWithBasket) {
        alert(
          `For product "${this.name}" available only ${this.availableWithBasket} items`
        );
        this.quantityInput = this.availableWithBasket;
      } else {
        this.$emit("addproduct", {
          target: { quantity: this.quantityInputNumber },
        });
      }
    },
  },
};
</script>
