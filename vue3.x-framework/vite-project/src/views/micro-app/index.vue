<script setup lang="ts">
import { unref } from 'vue';
import { useRoute } from 'vue-router';

const TAG = "micro-app=>index.vue=>";

const route = useRoute();
console.log(`${TAG}route`, unref(route));

</script>

<template>
  <h1>MicroApp</h1>
  <h2>时间：{{route.query.t}}</h2>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
