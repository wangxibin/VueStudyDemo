<script setup lang="ts">
import { computed, reactive, ref, watch, watchEffect } from "vue";

const TAG = "StudyWatchChild.vue=>";

const mProps = defineProps({
  mString: {
    // 定义一个基本数据类型String
    type: String,
    default: "",
  },
  mNumber: {
    // 定义一个基本数据类型Number
    type: Number,
    default: 0,
  },
  mBoolean: {
    // 定义一个基本数据类型Boolean
    type: Boolean,
    default: false,
  },
  staticList: {
    type: Array<any>,
    default: [],
  },
  dynamicList: {
    type: Array<any>,
    default: [],
  },
});

const string = ref(mProps.mString);
const number = ref(mProps.mNumber);
const boolean = ref(mProps.mBoolean);

// 直接监听props
watch(mProps, (newVal, oldVal) => {
  console.log(`${TAG}mProps=>newVal`, newVal);
  console.log(`${TAG}mProps=>oldVal`, oldVal);
});

// 在子组件创建存放基本数据类型的ref响应式数据，
// 并把props中的基本数据类型赋值给这些响应式数据。
// 监听这些响应式数据是否变化
watch(string, (newVal, oldVal) => {
  console.log(`${TAG}string=>newVal`, newVal);
  console.log(`${TAG}string=>oldVal`, oldVal);
});

watch(number, (newVal, oldVal) => {
  console.log(`${TAG}number=>newVal`, newVal);
  console.log(`${TAG}number=>oldVal`, oldVal);
});

watch(boolean, (newVal, oldVal) => {
  console.log(`${TAG}boolean=>newVal`, newVal);
  console.log(`${TAG}boolean=>oldVal`, oldVal);
});

// 直接监听props中的基本数据类型变量
watch(() => mProps.mString, (newVal, oldVal) => {
  console.log(`${TAG}mString=>newVal`, newVal);
  console.log(`${TAG}mString=>oldVal`, oldVal);
});

watch(() => mProps.mNumber, (newVal, oldVal) => {
  console.log(`${TAG}mNumber=>newVal`, newVal);
  console.log(`${TAG}mNumber=>oldVal`, oldVal);
});

watch(() => mProps.mBoolean, (newVal, oldVal) => {
  console.log(`${TAG}mBoolean=>newVal`, newVal);
  console.log(`${TAG}mBoolean=>oldVal`, oldVal);
});



// 监听props中的内存不会变的数据
watch(mProps.staticList, (newVal, oldVal) => {
  console.log(`${TAG}staticList=>newVal`, newVal);
  console.log(`${TAG}staticList=>oldVal`, oldVal);
});

// 监听props中的内存会变的数据
watch(mProps.dynamicList, (newVal, oldVal) => {
  console.log(`${TAG}dynamicList=>newVal`, newVal);
  console.log(`${TAG}dynamicList=>oldVal`, oldVal);
});
// 监听一个getter方法
watch(()=> mProps.dynamicList, (newVal, oldVal) => {
  console.log(`${TAG}getter=>dynamicList=>newVal`, newVal);
  console.log(`${TAG}getter=>dynamicList=>oldVal`, oldVal);
});

computed(()=>{
    console.log(`${TAG}computed=>string`, mProps);
    return mProps;
});

computed(()=>{
    console.log(`${TAG}computed=>number`, number);
    return number;
});

computed(()=>{
    console.log(`${TAG}computed=>boolean`, boolean);
    return boolean;
});

computed(()=>{
    console.log(`${TAG}computed=>boolean`, mProps.mString);
    return  mProps.mString;
});


computed(()=>{
    console.log(`${TAG}computed=>mProps.staticList`, mProps.staticList);
    return mProps.staticList;
});

const cDynamicList = computed(()=>{
    console.log(`${TAG}computed=>mProps.dynamicList`, mProps.dynamicList);
    const a = mProps.dynamicList;
    return a;
});


watchEffect(()=>{
    console.log(`${TAG}watchEffect=>string=>`, string);
    console.log(`${TAG}watchEffect=>mProps.mString=>`, mProps.mString);
    console.log(`${TAG}watchEffect=>mProps.staticList=>`, mProps.staticList);
    console.log(`${TAG}watchEffect=>mProps.dynamicList=>`, mProps.dynamicList);
});

</script>

<template>
  <div>
    <h2>Vue Watch学习子组件</h2>
    <h3>mProps:{{ mProps }}</h3>
    <h3>string:{{ string }}</h3>
    <h3>number:{{ number }}</h3>
    <h3>boolean:{{ boolean }}</h3>
    <h3>mString:{{ $props.mString }}</h3>
    <h3>mNumber:{{ $props.mNumber  }}</h3>
    <h3>mBoolean:{{ $props.mBoolean  }}</h3>
    <h3>staticList:{{ $props.staticList  }}</h3>
    <h3>dynamicList:{{ $props.dynamicList  }}</h3>
  </div>
</template>

<style lang="less" scoped>
button {
  margin: 0 5px;
}
</style>
