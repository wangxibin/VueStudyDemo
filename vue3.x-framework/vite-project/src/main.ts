import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { setupRouterGuard } from "./router/guard";
import { setupStore } from "./store";
import StudyVue from "./js/studyUseThis";

const TAG = "main.ts=>";

const app = createApp(App);

setupStore(app);

app.use(router);

app.use(StudyVue);

// 全局注册directive指令，另一种是局部注册directive指令
app.directive("focus", {
  mounted(el, binding, vnode, preVnode) {
    console.log("directive=>focus=>el", el);
    console.log("directive=>focus=>binding", binding);
    console.log("directive=>focus=>vnode", vnode);
    console.log("directive=>focus=>preVnode", preVnode);
  },
});

setupRouterGuard(router);

app.mount("#app");

console.log(`${TAG}=>app`, app);
