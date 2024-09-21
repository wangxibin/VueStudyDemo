import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import { rootRoute } from "./routes";

// import.meta.glob() 直接引入所有的模块 Vite 独有的功能
const modules = import.meta.glob("./routes/modules/**/*.ts", { eager: true });
const routeModuleList: AppRouteModule[] = [];

const meta = import.meta;

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = (modules as Recordable)[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

const routes = [...routeModuleList, rootRoute];

// 新建一个路由器
const router = createRouter({
  // 对于一个url来说，什么是hash值？#及其后面的内容就是hash值。
  // hash值不会包含在http请求中，即：hash值不会带给服务器。
  // hash模式：
  // 1、地址中永远带着#号，不美观。
  // 2、若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法。
  // 3、兼容性较好。
  history: createWebHashHistory(), // hash模式
  // history模式：
  // 1、地址干净，美观。
  // 2、兼容性和hash模式相比略差。
  // 3、应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题。
  // history: createWebHistory(), // 创建一个html5 history路由实例，从而能够支持浏览器的前进和后退按钮
  routes: routes, // 存放一个一个的路由，在这里每一个路由都是一个对象
});

export default router;
