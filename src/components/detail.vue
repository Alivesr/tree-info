<!-- <template>
  <div>{{ dataList.value[route.params.index] }}</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

let dataList = ref([]);
const route = useRoute();

const getData = async () => {
  // 模拟一个异步数据获取函数
  const res = await fetchData();
  dataList.value = res.data;
};

onMounted( 
  // console.log(dataList.value[route.params.index]);  // 数据获取后再执行
  ()=>{
    getData()
  }
);
console.log(dataList,'123')

</script>

<style>
/* 样式可根据需要添加 */
</style> -->
<template>
  
</template>

<script>
export default {

}
</script>

<style>

</style>