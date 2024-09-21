<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
</script>

<template>
  <div>
    <h2>Vue3路由学习</h2>
    <div style="display: flex; flex-direction: column; align-items: flex-start">
      <!-- 会被渲染成一个<a>标签，点击时触发路由切换 -->
      <!-- RouteLink标签不会刷新页面 -->
      <RouterLink to="/home" active-class="linkClass"
        >首页（RouteLink标签）</RouterLink
      >
      <!-- a标签会刷新页面 -->
      <a href="/home">首页（a标签）</a>
      <span class="btn" @click="router.push('/home')"
        >首页（router.push('/home')）</span
      >
      <span class="btn" @click="router.replace('/home')"
        >首页（router.replace('/home')）</span
      >
      <span class="btn" @click="router.push({ path: '/home' })"
        >首页（router.push({path:'/home'})）</span
      >
      <span class="btn" @click="router.push({ name: 'home' })"
        >首页（router.push({name:'home'})）</span
      >
      <span
        class="btn"
        @click="
          router.push({
            path: '/home',
            query: { ...route.query, t: Date.now() },
          })
        "
        >测试首页刷新</span
      >
      <RouterLink
        :to="{
          path: '/home',

          params: { name: '王熙斌', age: 31, sex: '男' },
        }"
        active-class="linkClass"
        >首页（query传参）</RouterLink
      >
      <!-- 1、使用params进行传参时，不能传递对象和数组 -->
      <!-- 2、在路径上存在占位参数，params也一定要进行传递，不然会报错，可以通过设置?来表示非必要参数保证不报错 -->
      <!-- 3、在路径上存在占位参数，params也一定要进行传递，不然会报错 -->
      <span
        class="btn"
        @click="
          router.push({
            name: 'home',
            params: { name: '王熙斌', age: 31, sex: '男' },
          })
        "
        >首页（param传参）</span
      >
      <span
        class="btn"
        @click="
          router.push({
            name: 'home',
            query: { name: 'Jimmy Wang', age: 31, sex: 'male' },
            params: { name: '王熙斌', age: 31, sex: '男' },
          })
        "
        >首页（query和param传参）</span
      >
      <RouterLink to="/about/wangxibin" active-class="linkClass"
        >关于（带参数）</RouterLink
      >
      <RouterLink to="/about/wangxibin" replace="" active-class="linkClass"
        >关于（带参数，使用replace属性）</RouterLink
      >
      <span class="btn" @click="router.push('/about/wangxibin')">
        关于（带参数，使用router.push）
      </span>
      <span class="btn" @click="router.go(-1)"> go(-1) </span>
      <span class="btn" @click="router.go(1)"> go(1) </span>
      <span class="btn" @click="router.back()"> back() </span>
      <span class="btn" @click="router.forward()">forward()</span>
      >
    </div>
  </div>
</template>
