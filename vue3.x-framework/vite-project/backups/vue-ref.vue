<template>
    <h2 ref="country">中国</h2>
    <h2 id="city">北京</h2>
    <!-- ref 加在普通html标签上 -->
    <!-- 可以通过ref()获取到该dom -->
    <h2 ref="company">尚硅谷</h2>
    <!-- ref加在子组件上 -->
    <!-- vue3有保护机制，父组件无法直接通过ref来获取子组件上的参数和方法 -->
    <!-- 父组件只能访问子组件通过defineExpose方法暴露的参数和方法 -->
    <VueDefineExpose ref="vueDefineExpose" />
    <button @click="showCompany">点我输出h2这个元素</button>
  </template>
  
  <script lang="ts" setup>
  import { ref } from "vue";
  import VueDefineExpose from "./vue-define-expose.vue";
  
  const country = ref();
  const company = ref();
  const vueDefineExpose = ref();
  
  const showCompany = () => {
    console.log(country.value);
  
    // 使用id时会出现不同组件的id相同导致的异常问题
    const city = document.getElementById("city");
    console.log(city);
  
    console.log(company.value);
    console.log(vueDefineExpose.value);
  };
  </script>
  
  <style></style>
  