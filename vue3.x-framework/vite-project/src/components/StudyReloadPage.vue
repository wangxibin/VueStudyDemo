<template>
  <div style="width: 100%; display: flex">
    <p>{{ message }}</p>
    <button @click="refreshByWindow">通过location刷新页面</button>
    <button @click="refreshByRouter">通过router.replace刷新页面</button>
    <button @click="refreshByRender">通过手动挂载刷新页面</button>
  </div>
</template>

// 测试vue3三种刷新页面方式
<script lang="jsx">
import { defineComponent, ref, unref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "",
  props: {},
  emits: [],
  setup(_) {
    const TAG = "TestReloadPage.vue=>";

    const message = ref("Hello, Vue!");

    const router = useRouter();
    const route = useRoute();

    const key = ref(0);

    // 通过window.location.reload()来刷新整个页面
    // 这种方式刷新整个页面会重载整个系统的资源（html、css、javascript），
    // 一些公共数据会恢复到原来的状态值
    const refreshByWindow = () => window.location.reload();

    // 通过router.replace()来刷新当前页面
    // 该方案要注意对路由数据的监听，防止刷新完页面报错或者异常
    const refreshByRouter = () => {
      console.log(`${TAG}route:`, route);
      router.replace({
        path: route.path,
        query: { ...route.query, t: Date.now() },
      });
    };

    // 通过手动触发组件的卸载和挂载
    const refreshByRender = () => {
      key.value += 1;
      console.log(`${TAG}key:`, unref(key));
    };

    return {
      message,
      refreshByWindow,
      refreshByRouter,
      refreshByRender,
    };
  },
  render() {
    return (
      <div style="width: 100%; display: flex" key={this.key}>
        <p>{this.message}</p>
        <p>{`current key: ${this.key}`}</p>
        <button onclick={this.refreshByWindow}>通过location刷新页面</button>
        <button onclick={this.refreshByRouter}>
          通过router.replace刷新页面
        </button>
        <button onclick={this.refreshByRender}>通过手动挂载刷新页面</button>
      </div>
    );
  },
});
</script>

<style></style>
