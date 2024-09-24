<template>
  <div class="container">
    <div class="header">空间列表</div>
    <div>
      <div v-for="(item,index) in dataList" :key="item.title" class="main">
        
        <div 
          class="box" 
          :style="{ backgroundImage: `url(${item.img})` }"
          @click="$router.push(`/detail/${index}`)"
        >
          <div class="overlay"></div>
          <div class="title">{{ item.title }}</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="tab"  >
        <div class="iconfont icon-home"></div>
        <div>智建</div>
        
      </div>
      <div class="tab" >
        <div class="iconfont icon-wode1"></div>
        <div>我的</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';


import { fetchData } from '../apis/index';

let dataList = ref([]);
let picList = ref([
  { img: 'https://cyberdownload.anrunlu.net/Fgz-UX9_AusF5zV89Z07Zgs92wHo' },
  { img: 'https://cyberdownload.anrunlu.net/Fs2NicDMd5YJKghjUtPtVNFPxEFL' }
]);
let list = []
const getData = async () => {
  const res = await fetchData();
  dataList.value = res.data;
  list=res.data
  mergeData();
};

const mergeData = () => {
  let mergedArray = dataList.value.map((item, index) => {
    return {
      ...item,
      img: picList.value[index]?.img
    };
  });
  
  dataList.value = mergedArray;
};

onMounted( async() => {
  await getData();
  
});



</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  position: absolute;
}
.header {
  margin-top: 10px;
  font-size: 25px;
  height: 110px;
  margin-left: 5.3333vw;
  display: flex;
}
.main {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.box {
  position: relative;
  margin-top: 20px;
  width: 91.3333vw;
  height: 27vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  overflow: hidden; 
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1; 
  border-radius: 20px;
}

.title {
  position: absolute;
  z-index: 2;
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0px;
  height: 16vw;
  width: 100vw;
  background-color: #F7FBF1;
  z-index: 10;

}
.iconfont{
  font-size: 22px;
}
.tab{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>

