import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { setupRouterGuard } from "./router/guard";
import { setupStore } from "./store";
import { createGlobalDirective } from "./directive";
import StudyVue from "./js/studyUseThis";

const TAG = "main.ts=>";

const app = createApp(App);

setupStore(app);

app.use(router);

app.use(StudyVue);

createGlobalDirective(app);

setupRouterGuard(router);

app.mount("#app");

console.log(`${TAG}=>app`, app);
