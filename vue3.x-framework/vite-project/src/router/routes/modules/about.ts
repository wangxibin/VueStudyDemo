const aboutRoute = {
  // 传递id
  path: "/about",
  name: "about",
  component: () => import("@/views/about/index.vue"),
  children: [
    {
      path: "avator", // 相对路径
      name: "avator",
      component: () => import("@/views/about/modules/avator.vue"),
      children: [
      ],
    },
    {
      path: "name",
      name: "name",
      component: () => import("@/views/about/modules/name.vue"),
    },
    {
      path: "sex",
      name: "sex",
      component: () => import("@/views/about/modules/sex.vue"),
    },
    {
      path: "address",
      name: "address",
      component: () => import("@/views/about/modules/address.vue"),
    },
  ],
};

export default aboutRoute;
