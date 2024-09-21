// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // Vue编译方式有两种：Runtime+Compiler、Runtime Only
  // 两种模式的区别：
  // （1）runtime-only 比 runtime-compiler 轻 6kb，代码量更少
  // （2）runtime-only 运行更快，性能更好
  // （3）runtime-only 其实只能识别render函数，不能识别template，.vue 文件中的template也是被
  //      vue-template-compiler 翻译成了render函数，所以只能在.vue里写 template

  // Vue Build:Runtime + Compiler
  // Runtime + Compiler: recommended for most users
  // 它的代码运行过程是：template -> ast -> render -> virtual dom -> UI
  // 1、首先将vue中的template模板进行解析解析成abstract syntax tree （ast）抽象语法树
  // 2、将抽象语法树在编译成render函数
  // 3、将render函数再翻译成virtual dom（虚拟dom）
  // 4、将虚拟dom显示在浏览器上
  components: { App },
  template: '<App/>'

  // Vue Build:Runtime Only
  // Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML)
  // are ONLY allowed in .vue files - render functions are required elsewhere
  // 它的代码运行过程是：render -> virtual dom -> UI
  // 1、可以看出它省略了从template -> ast -> render的过程
  // 2、所以runtime-only比runtime-compiler更快，代码量更少
  // 3、runtime-only 模式中不是没有写 template ，只是把 template 放在了.vue 的文件中了，
  // 并有一个叫 vue-template-compiler 的开发依赖时将.vue文件中的 template 解析成 render 函数。
  // 因为是开发依赖，不在最后生产中，所以最后生产出来的运行的代码没有template
  // render: h => h(App)

  // render 函数和 template 一样都是创建 html 模板的，但是有些场景中用 template 实现起来代码冗长繁琐而且有大量重复，这时候就可以用 render 函数。
  // h函数真实名称是：createElement
  // render: function (createElement) {
  //  return createElement(App)
  // }
  // createElement会生成一个 VNode节点，render 函数得到这个 VNode 节点之后，返回给 Vue.js 的 mount 函数，渲染成真实 DOM 节点，并挂载到根节点上。

})
