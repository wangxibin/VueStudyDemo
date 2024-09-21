<template>
  <h2 ref="country">中国</h2>
  <h2 id="city">北京</h2>
  <h2 ref="company">尚硅谷</h2>
  <button @click="showCompany">点我输出h2这个元素</button>
</template>

<script lang="ts" setup :name="VueDefineExpose">
import { ref, defineExpose } from "vue";

const country = ref();
const company = ref();

const showCompany = () => {
  console.log(country.value);

  // 使用id时会出现不同组件的id相同导致的异常问题
  const city = document.getElementById("city");
  console.log(city);

  console.log(company.value);
};

defineExpose({ country, city, company });
</script>

<style></style>
