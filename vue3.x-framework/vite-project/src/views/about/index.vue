<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
// console.log(`${import.meta.hot.ownerPath}=>route`, route);
// const router = useRouter();
// console.log(`${import.meta.hot.ownerPath}=>router`, router);
</script>

<template>
  <h1>About</h1>
  <RouterLink to="/about/avator" active-class="linkClass"
        >About1（RouteLink标签）</RouterLink
      >
  <RouterView></RouterView>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
