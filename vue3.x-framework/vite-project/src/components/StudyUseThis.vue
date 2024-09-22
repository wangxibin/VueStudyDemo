<script setup lang="ts">

const TAG = "StudyUseThis.vue=>";

// vue3中是无法跟vue2中一样使用this关键字的
console.log(`${TAG}在vue3中打印this`, this);

// 通过vue提供的getCurrentInstance()方法来获取到vue的实例
import { getCurrentInstance } from "vue";

const app = getCurrentInstance();

console.log(`${TAG}app`, app);

console.log(`${TAG}$myLoading`, app?.appContext.config.globalProperties.$myLoading);

</script>

<template>
  <div>
    <h2>Vue3获取类似vue2种的this</h2>
  </div>
</template>
