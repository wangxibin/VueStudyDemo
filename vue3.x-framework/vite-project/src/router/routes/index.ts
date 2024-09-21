import { AppRouteModule } from "../types";

export const rootRoute: AppRouteModule = {
  path: "/",
  name: "root", // 路由命名
  redirect: "/home", // redirect:可以使用path和name
  // redirect: {name:'home'},
  meta: {
    isAuth: true,
    title: "root",
  },
};
