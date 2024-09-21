<template>
    <h1>姓名：{{ name }}</h1>
    <h1>性别：{{ sex }}</h1>
    <h1>年龄：{{ age }}</h1>
    <button @click="changeName">修改姓名</button>
    <button @click="changeSex">修改性别</button>
    <button @click="changeAge">修改年龄</button>
    <h2>汽车品牌：{{ carReactive.name }}</h2>
    <h2>汽车型号：{{ carReactive.brand }}</h2>
    <h2>汽车描述：{{ carReactive.description }}</h2>
    <!-- <h2>汽车详情：{{ carDetails }}</h2> -->
    <button @click="changeCarReactive">changeCarReactive</button>
    <button @click="changeCarRef">changeCarRef</button>
    <div ref="company_info">
      <h2 ref="company_county">中国</h2>
      <h2 ref="company-city">深圳</h2>
      <h2 ref="company">重点金信</h2>
      <button @click="outCompany">输出公司信息</button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, reactive, watch } from 'vue';
  
  const name = ref('王熙斌');
  const sex = ref('男');
  const age = ref(31);
  
  const changeName = () => {
    name.value = 'JimmyWang';
  };
  
  const changeSex = () => {
    sex.value = 'male';
  };
  
  const changeAge = () => {
    age.value = ++age.value;
  };
  
  let carReactive = reactive({ name: '奇瑞', brand: 'iCar03', description: { name: '奇瑞', brand: 'iCar03' } });
  let carRef = ref({ name: '奇瑞', brand: 'iCar03', description: { name: '奇瑞', brand: 'iCar03' } });
  
  const changeCar = () => {
    // car.name = '上汽大众';
    // car.brand = 'POLO2024款';
    // car = { name: '奔驰', brand: 'GLB' };
    // car = reactive({ name: '奔驰', brand: 'GLB' });
    Object.assign(carReactive, { name: '奔驰', brand: 'GLB' });
    console.log(carReactive);
  };
  
  let { name: nameReactive, brand: brandReactive, description: descriptionReactive } = carReactive;
  
  // console.log(nameReactive);
  // console.log(brandReactive);
  // console.log(descriptionReactive);
  
  const changeCarReactive = () => {
    // nameReactive = nameReactive + '~';
    // brandReactive = brandReactive + '~';
    // descriptionReactive.name = '大众你个鬼佬';
    // descriptionReactive = { name: '大众你个鬼佬', brand: '大众你个鬼佬' };
    // console.log(nameReactive);
    // console.log(brandReactive);
    // console.log(descriptionReactive);
    // carReactive.name = carReactive.name + '~';
    // carReactive.brand = carReactive.brand + '~';
    // carReactive = { name: '奔驰', brand: 'GLB' };
    carReactive.name = '奔驰';
    carReactive.brand = 'GLB';
    carReactive.description.name = '奔驰';
    carReactive.description.brand = 'GLB';
    // carReactive.description = { name: '奔驰', brand: 'GLB' };
    // Object.assign(carReactive, { name: '奔驰', brand: 'GLB' });
    // Object.assign(carReactive, { name: carReactive.name + '~', brand: carReactive.brand + '~' });
    // const { name, brand, description } = toRefs(carReactive);
    // console.log(name);
    // console.log(brand);
    // console.log(description);
    // // reactivity.esm-bundler.js:1069 toRefs() expects a reactive object but received a plain one.
    // const { nameRef, brandRef, descriptionRef } = toRefs(carRef);
    // console.log(nameRef);
    // console.log(brandRef);
    // console.log(descriptionRef);
  
    // const ne = toRef(carReactive, 'name');
    // console.log(ne);
  };
  
  let { name: nameRef, brand: brandRef, description: descriptionRef } = carRef.value;
  
  // console.log(carRef);
  // console.log(nameRef);
  // console.log(brandRef);
  // console.log(descriptionRef);
  
  const changeCarRef = () => {
    // nameRef = nameRef + '~';
    // brandRef = brandRef + '~';
    // descriptionRef = { name: '大众你个鬼佬', brand: '大众你个鬼佬' };
    // console.log(nameRef);
    // console.log(brandRef);
    // console.log(descriptionRef);
    // console.log(carRef.value);
    // carRef.value.name = carRef.value.name + '~';
    // carRef.value.brand = carRef.value.brand + '~';
    // carRef.value = { name: '奔驰', brand: 'GLB', description: { name: '奔驰', brand: 'GLB' } };
    carRef.value.name = '奔驰';
    carRef.value.brand = 'GLB';
    carRef.value.description = { name: '奔驰', brand: 'GLB' };
  };
  
  // const carDetails = computed({
  //   get() {
  //     return `品牌：${carReactive.name}，型号：${carReactive.brand}，描述：${carReactive.description.toString()}`;
  //   },
  
  //   set(v: string) {
  //     console.log(v);
  //   },
  // });
  
  watch(
    [
      () => {
        return carReactive.name;
      },
      () => {
        return carReactive.brand;
      },
    ],
    (newVal, oldVal) => {
      console.log('carReactive数据发生了变化：', oldVal, newVal);
    },
    { deep: true, immediate: true },
  );
  
  watch(
    () => {
      return carRef.value.name;
    },
    (newVal, oldVal) => {
      console.log('carRef数据发生了变化：', oldVal, newVal);
    },
    { deep: true, immediate: true },
  );
  
  const company_county = ref();
  const companyCity = ref();
  const company = ref();
  
  const outCompany = () => {
    console.log(company_county.value);
    console.log(companyCity.value);
    console.log(company.value);
  };
  </script>
  
  <style></style>
  