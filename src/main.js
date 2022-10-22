import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// disable right click
document.addEventListener('contextmenu', event => event.preventDefault());

createApp(App).mount("#app");
