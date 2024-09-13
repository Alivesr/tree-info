<template>
  <div>{{dataList[route.params.index]?.title}}</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import{fetchData} from '../apis/index'

let dataList = ref([]);
const route = useRoute();

const getData = async () => {
  // 模拟一个异步数据获取函数
  const res = await fetchData();
  dataList.value = res.data;
  
};

onMounted(()=>{
  getData()
})


</script>

<style>
/* 样式可根据需要添加 */
</style>
