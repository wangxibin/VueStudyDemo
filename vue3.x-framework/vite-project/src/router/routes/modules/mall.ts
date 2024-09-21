const mallRoute = {
  path: "/mall",
  name: "mall",
  component: () => import("@/views/mall/index.vue"),
  // 独享路由守卫只有前置，没有后置
  // 重要：独享路由在当前组件路由改变后，不会进行触发
  // 独享路由守卫的作用与对应的组件内路由守卫beforeRouteEnter相同，可以选择任一使用
  beforeEnter: (to, from, next) => {
    console.log("独享路由守卫beforeEnter，to", to, "from", from);
    if (to.meta.isAuth) {
      next();
    } else {
      next();
    }
  },
};

export default mallRoute;
