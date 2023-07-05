import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

createApp(App).use(store).mount("#app");

// css imports
import "element-plus/dist/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
