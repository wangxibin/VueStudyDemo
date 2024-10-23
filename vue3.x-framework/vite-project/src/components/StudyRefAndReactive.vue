<script lang="ts">
import { reactive, ref, watch, watchEffect } from "vue";

export default {
  setup() {
    const TAG = "StudyRefAndReactive.vue=>";

    // 使用ref定义的数据
    const nameRef = ref("JimmyWang");

    const personRef = ref({
      name: "PersonRef",
      age: 31,
      sex: "male",
      car: { car1: "奔驰E300", car2: "宝马740" },
    });

    // 使用reactive定义的数据
    const personReactive = reactive({
      name: "PersonReactive",
      age: 31,
      sex: "male",
      car: { car1: "奔驰E300", car2: "宝马740" },
    });

    watch(nameRef, (newVal, oldVal) => {
      console.log(`${TAG}nameRef=>newVal`, newVal);
      console.log(`${TAG}nameRef=>oldVal`, oldVal);
    });

    watch(
      personRef,
      (newVal, oldVal) => {
        console.log(`${TAG}personRef=>newVal`, newVal);
        console.log(`${TAG}personRef=>oldVal`, oldVal);
      },
      { deep: true }
    );

    watch(
      () => {
        return personReactive.age;
      },
      (newVal, oldVal) => {
        console.log(`${TAG}personReactive=>newVal`, newVal);
        console.log(`${TAG}personReactive=>oldVal`, oldVal);
      },
      { deep: true }
    );

    // watchEffect(() => {
    //   console.log(`${TAG}nameRef`, nameRef.value);
    //   console.log(`${TAG}personRef`, personRef.value);
    //   console.log(`${TAG}personReactive`, personReactive);
    // });

    const changeNameRef = () => {
      nameRef.value = "NewNameRef";
    };

    const changePersonRefName = () => {
      personRef.value.name = "NewPersonRef";
    };

    const changePersonRefAge = () => {
      personRef.value.age = 100;
    };

    const changePersonRefCar1 = () => {
      personRef.value.car.car1 = "坦克300";
    };

    const changePersonRefCar = () => {
      personRef.value.car = { car1: "法拉利", car2: "兰博基尼" };
    };

    const changePersonRef = () => {
      personRef.value = {
        name: "NewPersonRef",
        age: 100,
        sex: "male",
        car: { car1: "法拉利", car2: "兰博基尼" },
      };
    };

    const changePersonReactiveName = () => {
      personReactive.name = "NewPersonReactive";
    };

    const changePersonReactiveAge = () => {
      personReactive.age = 100;
    };

    const changePersonReactiveCar1 = () => {
      personReactive.car.car1 = "坦克300";
    };

    const changePersonReactiveCar = () => {
      personReactive.car = { car1: "法拉利", car2: "兰博基尼" };
    };

    return {
      nameRef,
      personRef,
      personReactive,
      changeNameRef,
      changePersonRefName,
      changePersonRefAge,
      changePersonRefCar1,
      changePersonRefCar,
      changePersonRef,
      changePersonReactiveName,
      changePersonReactiveAge,
      changePersonReactiveCar1,
      changePersonReactiveCar,
    };
  },
};
</script>

<template>
  <div>
    <h2>Vue Watch学习</h2>
    <h3>nameRef:{{ nameRef }}</h3>
    <h3>personRef:{{ personRef }}</h3>
    <h3>personReactive:{{ personReactive }}</h3>
  </div>
  <div>
    <button @click="changeNameRef">修改nameRef</button>
    <button @click="changePersonRefName">修改personRef的name</button>
    <button @click="changePersonRefAge">修改personRef的age</button>
    <button @click="changePersonRefCar1">修改personRef的car中的car1</button>
    <button @click="changePersonRefCar">修改personRef的car</button>
    <button @click="changePersonRef">修改整个personRef</button>
    <button @click="changePersonReactiveName">修改personReactive的name</button>
    <button @click="changePersonReactiveAge">修改personReactive的age</button>
    <button @click="changePersonReactiveCar1">
      修改personReactive的car中的car1
    </button>
    <button @click="changePersonReactiveCar">修改personReactive的car</button>
  </div>
</template>

<style lang="less" scoped>
button {
  margin: 0 5px;
}
</style>
