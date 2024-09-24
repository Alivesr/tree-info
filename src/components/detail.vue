<template>
<div class="contianer">
    <div class="header">
    <div class="iconfont arrow icon-fanhuijiantou" @click="$router.push(`/`)"></div>
    <h1 class="title">{{ item.title }}</h1>
</div>
<div class="wrapper">
    <div class="box">
        <div class="iconfont icon-wendu"></div>
        <p class="text1">温度</p>
        <p class="text2">{{ item.温度 }}</p>
    </div>
    <div class="box">
        <div class="iconfont icon-5"></div>
        <p class="text1">含水率</p>
        <p class="text2">{{ item.含水率 }}</p>
    </div>
    <div class="box">
        <div class="iconfont icon-lightning-full"></div>
        <p class="text1">电导率</p>
        <p class="text2">{{ item.电导率 }}</p>
    </div>
    <div class="box">
        <div class="iconfont icon-shiji"></div>
        <p class="text1">PH</p>
        <p class="text2">{{ item.PH }}</p>
    </div>
    <div class="box">
        <div class="iconfont icon-shuidi"></div>
        <p class="text1">盐度</p>
        <p class="text2">{{ item.盐度 }}</p>
    </div>
    <div class="box">
        <div class="iconfont icon-guti"></div>
        <p class="text1">总溶解固体</p>
        <p class="text2">{{ item.总溶解固体TDS }}</p>
    </div>
</div>
</div>
  
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import  {fetchData} from '../apis/index'

let dataList = ref([]);
const item =ref([])
const route = useRoute();

const getData = async () => {
  // 模拟一个异步数据获取函数
  const res = await fetchData();
  dataList.value = res.data;
  item.value=dataList.value[route.params.index]
};

onMounted(()=>{
  getData()
})


</script>

<style scoped>
    .container{
        height: 100%;
        min-width: 100vw;
    }
    .header{
        margin-top: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 6vh;
    }
    .title{
        font-size: 30px ;
        font-weight: bolder;
        font-weight: 500;
        margin-left: 30px;
    }
    .img1{
        margin-left: 3vw;
        width: 3.5vh;
    }
    .wrapper{
        margin-top: 5vh;
        margin-bottom: 5vh;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 100%;
    }
    .iconfont.arrow{
        margin-left:20px;
        color: #213547;
        font-size: 30px;
    }
    
    .box{
        margin-top: 30px;
        word-break: break-all;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 43vw;
        height: 25vh ;
        background:linear-gradient(130deg,#bcdcfb,#9cccf7,#76baf8);
        border-radius: 15%;
    }
    .box:nth-of-type(-n+2){
        margin-top:0
    }
    .img2{
        width: 15vw;
    }
    .iconfont{
      font-size: 40px;
      color: #fff;
    }
    .text1{
        margin-top: 5px;
        font-size: 3.5vh;
        font-weight: 1000;
        color: rgb(255, 255, 255);
    }
    .text2{
        margin-top: 1vh;
        font-size: 3.2vh;
        font-weight: 550;
        color: rgb(255, 255, 255);
    }
</style>
