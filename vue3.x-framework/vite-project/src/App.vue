<script setup lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
// import MyComponent from "./components/MyComponent.vue";
// import StudyReloadPage from "./components/StudyReloadPage.vue";
// import StudyReloadPage from "./components/StudyJsx.vue";
// import StudyWatch from "./components/StudyWatch.vue";
// import StudyUseThis from "./components/StudyUseThis.vue";
// import StudyUseGlobalDirective from "./components/StudyUseGlobalDirective.vue";
// import StudyRefAndReactive from "./components/StudyRefAndReactive.vue";
import StudyHFunction from "./components/StudyHFunction.vue";
</script>

<template>
  <div>
    <a>
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <!-- 只缓存Mall组件，不写include默认缓存所有组件 -->
    <!-- <KeepAlive include="Mall">
      <RouterView></RouterView>
    </KeepAlive> -->
    <!-- 缓存多个组件，用数组的形式，不写include默认缓存所有组件 -->
    <!-- <KeepAlive :include="['Mall']">
      <RouterView></RouterView>
    </KeepAlive> -->
    <!-- <HelloWorld msg="Vite + Vue" /> -->
    <!-- <StudyUseThis /> -->

    <!-- 测试使用自定义全局directive -->
    <!-- <StudyUseGlobalDirective /> -->

    <!-- 测试Ref和Reactive -->
    <!-- <StudyRefAndReactive /> -->

    <!-- 测试watch和watchEffect -->
    <!-- <StudyWatch /> -->

    <!-- 测试 -->
    <StudyHFunction />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

span {
  cursor: pointer;
  color: #646cff;
}
</style>
