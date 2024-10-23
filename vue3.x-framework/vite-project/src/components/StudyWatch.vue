<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import StudyWatchChild from "./StudyWatchChild.vue";

const TAG = "StudyWatch.vue=>";

// vue3中watch只能监视一下四种数据

// 使用ref定义的数据
const nameRef = ref("JimmyWang");
const personRef = ref({
  name: "JimmyWang",
  age: 31,
  sex: "male",
  car: { car1: "奔驰E300", car2: "宝马740" },
});

// 使用reactive定义的数据
const personReactive = reactive({
  name: "JimmyWang",
  age: 31,
  sex: "male",
  car: { car1: "奔驰E300", car2: "宝马740" },
});

// 使用
const nameFun = () => {
  return "JimmyWang";
};

const personFun = () => {
  return {
    name: "JimmyWang",
    age: 31,
    sex: "male",
    car: { car1: "奔驰E300", car2: "宝马740" },
  };
};

const personArr = [nameRef, personRef, personReactive, nameFun, personFun];

watch(nameRef, (newVal, oldVal) => {
  console.log(`${TAG}refA=>newVal`, newVal);
  console.log(`${TAG}refA=>oldVal`, oldVal);
});

watch(personRef, (newVal, oldVal) => {
  console.log(`${TAG}refB=>newVal`, newVal);
  console.log(`${TAG}refB=>oldVal`, oldVal);
});

watch(personReactive, (newVal, oldVal) => {
  console.log(`${TAG}reactiveA=>newVal`, newVal);
  console.log(`${TAG}reactiveA=>oldVal`, oldVal);
});

watch(nameFun, (newVal, oldVal) => {
  console.log(`${TAG}funA=>newVal`, newVal);
  console.log(`${TAG}funA=>oldVal`, oldVal);
});

watch(personFun, (newVal, oldVal) => {
  console.log(`${TAG}funB=>newVal`, newVal);
  console.log(`${TAG}funB=>oldVal`, oldVal);
});

watch(personArr, (newVal, oldVal) => {
  console.log(`${TAG}arrA=>newVal`, newVal);
  console.log(`${TAG}arrA=>oldVal`, oldVal);
});

// 创建子组件的数据

const mString = ref("你好子组件");
const mNumber = ref(31);
const mBoolean = ref(false);
const staticList = ref([
  {
    name: "Vue2",
    age: 10,
  },
  {
    name: "Vue3",
    age: 4,
  },
]);
const dynamicList = ref([
  {
    name: "Vue2",
    age: 10,
  },
  {
    name: "Vue3",
    age: 4,
  },
]);

const changeDynamicList = () => {
  dynamicList.value = [
    {
      name: "Java",
      age: 20,
    },
    {
      name: "PHP",
      age: 30,
    },
  ];
};
</script>

<template>
  <div>
    <h2>Vue Watch学习</h2>
    <h3>nameRef:{{ nameRef }}</h3>
    <h3>personRef:{{ personRef }}</h3>
    <h3>personReactive:{{ personReactive }}</h3>
    <h3>nameFun:{{ nameFun }}</h3>
    <h3>personFun:{{ personFun }}</h3>
    <button>修改nameRef</button>
    <button>修改personRef</button>
    <button>修改personReactive</button>
    <button>修改nameFun</button>
    <button>修改personFun</button>
    <button>深度监视</button>
  </div>
  <div>
    <StudyWatchChild
      :mString="mString"
      :mNumber="mNumber"
      :m-boolean="mBoolean"
      :static-list="staticList"
      :dynamicList="dynamicList"
    />
    <button
      @click="
        () => {
          mString += mString;
        }
      "
    >
      修改String
    </button>
    <button
      @click="
        () => {
          mNumber += mNumber;
        }
      "
    >
      修改Number
    </button>
    <button
      @click="
        () => {
          mBoolean = !mBoolean;
        }
      "
    >
      修改Boolean
    </button>
    <button
      @click="
        () => {
          staticList.push({ name: mString, age: mNumber });
        }
      "
    >
      给staticList新增数据
    </button>
    <button @click="changeDynamicList">给dynamicList重新赋值</button>
  </div>
</template>

<style lang="less" scoped>
button {
  margin: 0 5px;
}
</style>
