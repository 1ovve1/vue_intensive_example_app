<template>
  <AppHeader />
  <div class="container mt-5">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore dignissimos
    quisquam sint quod aliquid, cupiditate velit at facere eveniet iure sequi
    exercitationem enum, aperiam veniam reprehenderit ipsum, ad mollitia
    excepturi?
    <el-button type="primary" @click="addProduct">Push</el-button>
  </div>
</template>

<script>
import { ElButton } from "element-plus";
import AppHeader from "./components/Header.vue";
import { mapActions } from "vuex";

export default {
  components: {
    ElButton,
    AppHeader,
  },

  data: () => ({
    test: 1234,
  }),

  methods: {
    ...mapActions({
      addProductInCatalog: "catalog/addProductInCatalog",
    }),
    addProduct() {
      this.addProductInCatalog({
        id: 1,
        price: 500,
        count: 1,
      });
    },
  },
};
</script>

<style lang="scss"></style>
