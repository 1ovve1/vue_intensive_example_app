<template>
  <div class="container mt-5">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore dignissimos
    quisquam sint quod aliquid, cupiditate velit at facere eveniet iure sequi
    exercitationem enum, aperiam veniam reprehenderit ipsum, ad mollitia
    excepturi?
    <el-button type="primary">Push</el-button>
  </div>
</template>

<script>
import { ElButton } from "element-plus";

export default {
  components: {
    ElButton,
  },

  data: () => ({
    test: 1234,
  }),
};
</script>

<style lang="scss"></style>
