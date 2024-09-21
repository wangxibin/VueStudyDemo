<template>
  <h2>当前水温：{{ temp }}℃</h2>
  <h2>当前水位：{{ height }}cm</h2>
  <button @click="changeTemp">水温+10</button>
  <button @click="changeHeight">水温+10</button>
</template>

<script lang="ts" setup>
import { ref, watch, watchEffect } from "vue";

const temp = ref(10);
const height = ref(0);

const changeTemp = () => {
  temp.value = temp.value + 10;
};

const changeHeight = () => {
  height.value = height.value + 10;
};

// 监视
watch([temp, height], (newVal) => {
  console.log("新值：", newVal);
  const [newTemp, newHeight] = newVal;
  if (newTemp >= 60 || newHeight >= 80) {
    console.log("给服务器发请求");
  }
});

// 监视
watchEffect(()=>{
  if (temp.value >= 60 || height.value>= 80) {
    console.log("给服务器发请求");
  }
});
</script>

<style></style>
