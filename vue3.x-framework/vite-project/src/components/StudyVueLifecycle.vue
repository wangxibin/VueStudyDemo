<script setup lang="ts">
import { onBeforeMount, onMounted, onActivated, onDeactivated } from "vue";

// 路由组件所独有的两个钩子，用于捕获路由组件的激活状态
// 路由组件被激活时触发
onActivated(() => {
  console.log("onActivated...");
});

// 路由组件失活时触发
onDeactivated(() => {
  console.log("onDeactivated...");
});

onBeforeMount(() => {
  console.log("onDeactivated...");
});

onMounted(() => {
  console.log("onDeactivated...");
});
</script>

<template>
  <div></div>
</template>
