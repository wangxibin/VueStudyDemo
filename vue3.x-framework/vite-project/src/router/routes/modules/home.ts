import Home from "@/views/home/index.vue";

const homeRoute = {
  // 跳转路径
  path: "/home/:name?/:age?/:sex?",
  // name属性：路由记录独一无二的名称
  name: "home",
  // meta属性：自定义的数据
  meta: { title: "Home", description: "let us study vue router" },
  // 路由懒加载 路由分包处理 npm run build  /* webpackChunkName: "home" */ => 魔法注释 分包后进行打包后 包的名字
  component: Home,
  // props属性可以用于在路由组件中传递数据，数据会以props的形式传递给目标组件
  // props: true,
  // 函数式写法，可以自己决定将什么作为props给路由组件
  props: (router) => {
    return router.query;
  },
};

export default homeRoute;
