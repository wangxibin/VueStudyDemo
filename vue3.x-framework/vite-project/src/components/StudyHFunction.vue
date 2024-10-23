<script lang="ts">
import { defineComponent, h } from "vue";
import HelloWorld from "./HelloWorld.vue";

export default defineComponent({
  name: "StudyHFunction",
  components: [HelloWorld],
  setup() {
    // h(tag, props, children)
    // tag：节点的标签名称，可以是一个字符串（表示HTML的标签名或组件名），也可以是一个组件对象
    // props：节点的属性，可以包括节点的属性、事件监听器、插槽等
    // children：子节点，可以是字符串、数组或另一个VNode。

    // 1、创建一个最简单的div
    const vNode = h("div", { id: "mId", class: "mClass" }, "Hello Vue");

    // 2、创建一个带有子元素span的div
    const vNode1 = h(
      "div",
      { id: "mId1", class: "mClass1" },
      h("span", "Hello Vue")
    );

    // 2、创建一个带有N个子元素span的div
    const vNode2 = h("div", { id: "mId2", class: "mClass2" }, [
      h("div", "Hello Vue"),
      h("div", "Hello Vue"),
      h(
        "button",
        {
          style: { color: "red" },
          onClick: () => {
            alert("Hello Vue");
          },
        },
        "点点我"
      ),
    ]);

    // 3、引用一个子组件并传递props
    const vNode3 = h(HelloWorld, { msg: "Vue h函数学习，Hello Vue" });

    // 通过setup()函数中的return返回一个vNode，vue进一步把vNode渲染成dom，优先级高于<template>
    return () => vNode2;
  },
  // 通过render()函数渲染出来dom，优先级高于<template>，
  // render函数有个问题就是：调试环境下，如果把setup()中的return渲染dom改为render需要重启项目
  // render() {
  //   return h(HelloWorld, { msg: "Vue h函数学习，Hello Vue" });
  // },
});
</script>
