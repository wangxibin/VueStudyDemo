<script setup lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
// import MyComponent from "./components/MyComponent.vue";
import { storeToRefs } from "pinia";
import { useStore } from "@/store/modules/app";

const store = useStore();

// 解构会影响相应式
const { counter: newCounter, name: newName } = store;

const { counter: newCounterRef, name: newNameRef } = storeToRefs(store);

store.counter++;

store.$patch({
  counter: store.counter + 1,
  name: "王熙斌",
});

store.$patch((state) => {
  state.address = "广东省深圳市南山区科兴科学院D2栋6层华润银行深圳研发中心";
  state.sex = "male";
});

store.setCounter(4);

store.randomizeCounter();
</script>

<template>
  <div>
    <h2>Pinia学习</h2>
    <div>newCounter is {{ newCounter }}</div>
    <div>newCounterRef is {{ newCounterRef }}</div>
    <div>Double count is {{ store.doubleCounter }}</div>
    <div>newName is {{ newName }}</div>
    <div>newName is {{ newNameRef }}</div>
    <div>name is {{ store.name }}</div>
    <div>age is {{ store.age }}</div>
    <div>sex is {{ store.sex }}</div>
    <div>weight is {{ store.weight }}</div>
    <div>address is {{ store.address }}</div>
  </div>
</template>
