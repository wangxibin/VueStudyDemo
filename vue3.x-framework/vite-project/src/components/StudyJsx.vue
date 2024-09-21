<script lang="jsx">
import { defineComponent, ref, unref } from "vue";
import Index from "@/jsx/index.jsx";

// vue3+vite的项目默认不支持jsx，所以需要安装插件：pnpm i @vitejs/plugin-vue-jsx
export default defineComponent({
  name: "StudyJsx",
  setup() {
    const TAG = "index.jsx=>";

    const message = ref("Hello, Vue! Hello Jsx!");

    // 在vue组件中使用
    // return () => (
    //   <div>
    //     <h1>在vue组件中使用</h1>
    //     <h2>时间：{Date.now()}</h2>
    //     <p>{unref(message)}</p>
    //   </div>
    // );

    // 使用jsx文件
    return () => (
      <Index></Index>
    );
  },
});
</script>

<template>
  <div></div>
</template>
