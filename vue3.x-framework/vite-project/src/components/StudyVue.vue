<script setup lang="ts">
import { ref } from "vue";

const description = ref("Vue太好用了，学习Vue让我开心，让我快乐！");

</script>

<template>
  <div>
    <h2>{{ description }}</h2>
  </div>
</template>

<style lang="less" scoped>
button {
  margin: 0 5px;
}
</style>
