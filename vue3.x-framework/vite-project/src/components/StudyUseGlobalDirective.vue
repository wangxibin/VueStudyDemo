<template>
  <div>
    <div style="width: 300px; height: 100px" v-color="'#23a6e9'" @click="text = '你好 Vue Directive'">
      {{text}}
    </div>
    <input style="width: 300px; height: 100px" v-focus />
    <div class="class1" style="width: 300px; height: 100px" v-log.class></div>
  </div>
</template>

<script setup>

import { ref } from 'vue';

const text = ref('测试使用自定义全局directive');

</script>

<style></style>
