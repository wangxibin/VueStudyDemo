import type { Router } from "vue-router";

// Don't change the order of creation
export function setupRouterGuard(router: Router) {
  createPageGuard(router);
}

/**
 * Hooks for handling page state
 * 路由守卫
 * 1、我们可以用路由守卫来进行鉴权等操作                                                                                                                                                                                                             
 */
function createPageGuard(router: Router) {
  const loadedPageMap = new Map<string, boolean>();

  // 全局前置路由守卫，每次路由切换之前被调用
  router.beforeEach(async (to, from) => {
    // The page has already been loaded, it will be faster to open it again, you don’t need to do loading and other processing
    to.meta.loaded = !!loadedPageMap.get(to.path);
    // Notify routing changes
    console.log("全局前置路由守卫，to", to, "from", from);
    // if(from.fullPath === '/' && to.fullPath === '/home'){
    //   router.push({path: '/about'});
    // }
    return true;
  });

  // 全局解析守卫
  // 导航在确认之前，所有组件内守卫和异步路由组件被解析之后，解析守卫才能被正确调用
  router.beforeResolve((to, from, next) => {
    console.log("全局解析守卫，to", to, "from", from);
    next();
  });

  // 全局后置路由守卫，每次路由切换之后被调用
  // 无next函数，不会改变导航本身
  // 作用：分析、更改页面标题，声明页面等辅助功能以及许多其他事情都很有用
  router.afterEach((to, from) => {
    console.log("全局后置路由守卫，to", to, "from", from);
  });
}
