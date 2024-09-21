<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <h1>Home</h1>
  <h2>时间：{{route.query.t}}</h2>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
