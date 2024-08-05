import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/main.css";
import "./assets/navButton.css";
<<<<<<< HEAD
import "./assets/socialButton.css";
=======
>>>>>>> a5f2c29 (chore: upload vue config)
import App from "./App.vue";
import router from "./router";
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
