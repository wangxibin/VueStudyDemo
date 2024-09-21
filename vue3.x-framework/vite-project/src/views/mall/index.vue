<script lang="ts">
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";

export default {
  name: "Mall",
  components: {},
  // 在渲染该组件的对应路由被验证前调用
  // 不能后去组件实例：this
  // 因为当守卫执行时，组件实例还没有被创建
  // 在vue3中的setup函数中是不可以使用beforeRouterEnter这个路由守卫的，
  // 方法1：可以选择独享路由守卫beforeEnter代替
  // 方法2：选择使用vue2的写法，使用选项是api
  // 触发优先级：全局beforeEach->组件beforeRouteEnter->全局beforeResolve->全局afterEach
  beforeRouteEnter(to, from, next) {
    // 1、to：将要访问的路由对象
    // 2、from：将要离开的路由信息对象
    // 3、next：函数
    // （1）调用next()表示放行，允许这次路由导航
    // （2）调用next(false)表示不放行，不允许此次路由导航
    // （3）调用next(routePath)表示导航到此地址，一般情况用户未登录时，会导航到登陆界面
    // （4）该函数在导航守卫中可出现多次，但是只能被调用一次
    console.log("组件内路由守卫beforeRouteEnter，to", to, "from", from);
    next();
  },
  // 当前组件路由改变后，进行触发，比如：页面停留在当前页面，但是url中传值变化了就会触发该方法。
  // 当前url:http://localhost/#/mall，变成：http://localhost/#/mall?name=a&age=20
  // 与setup方法中onBeforeRouteUpdate同样的效果。
  // 触发优先级：全局beforeEach->beforeRouteUpdate->全局beforeResolve->全局afterEach
  beforeRouteUpdate(to, from) {
    console.log("组件内路由守卫beforeRouteUpdate，to", to, "from", from);
    // next;
  },
  // 离开当前的组件触发
  // 触发优先级：当前页面离开时，最先触发，比全局路由守卫触发早。
  // 触发优先级：beforeRouteUpdate->全局beforeEach->全局beforeResolve->全局afterEach
  beforeRouteLeave(to, from) {
    console.log("组件内路由守卫beforeRouteLeave，to", to, "from", from);
    // next;
  },
  setup() {
    // 当前组件路由改变后，进行触发，比如：页面停留在当前页面，但是url中传值变化了就会触发该方法。
    // 当前url:http://localhost/#/mall，变成：http://localhost/#/mall?name=a&age=20
    // 触发优先级：全局beforeEach->onBeforeRouteUpdate->全局beforeResolve->全局afterEach
    onBeforeRouteUpdate((to, from) => {
      console.log("组件内路由守卫onBeforeRouteUpdate，to", to, "from", from);
    });
    // 离开当前的组件触发
    // 触发优先级：当前页面离开时，最先触发，比全局路由守卫触发早。
    // 触发优先级：onBeforeRouteLeave->全局beforeEach->全局beforeResolve->全局afterEach
    onBeforeRouteLeave((to, from) => {
      console.log("组件内路由守卫onBeforeRouteLeave，to", to, "from", from);
    });
  },
};
</script>

<template>
  <div>
    <h1>Mall</h1>
    <input />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
