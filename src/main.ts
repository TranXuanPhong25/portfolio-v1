import { createApp } from "vue";
import "./assets/main.css";
import "./assets/navButton.css";
import "./assets/code-typing-styles.css";
import "./assets/socialButton.css";

import App from "./App.vue";
import router from "./router";
const app = createApp(App);

app.use(router);

app.mount("#app");
