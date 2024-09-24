<template >  
  <div>  
    <div class="detail">
    
      <!-- <div class="iconfont arrow icon-fanhuijiantou" @click="$router.push(`/`)"></div> -->
      <p class="title">{{ item.title }}</p>

      <p >地点:{{ item.addr }}</p>
      <p >温度:{{ item.温度 }}</p>
      <p >含水率:{{ item.含水率 }}</p>
      <p >电导率:{{ item.电导率 }}</p>
      <p >PH:{{ item.PH }}</p>
      <p >盐度:{{ item.盐度 }}</p>
      <p >总溶解固体:{{ item.总溶解固体TDS }}</p>
    </div>
    <div id="container" style="width: 100vw; height: 100vh;"></div>  
    <!-- <canvas id="myCanvas" style="width: 100%; height: 200px;"></canvas>   -->
  </div>  
</template>  
  
<script setup>  
import AMapLoader from '@amap/amap-jsapi-loader';  
import { onMounted, ref } from 'vue';  
import { fetchData } from '../apis/index';
import { useRoute } from 'vue-router';
  
let dataList=ref([])
const item=ref([])
const route=useRoute()
let map = ref(null);  


const getData =async()=>{
  const res=await fetchData()
  dataList.value=res.data
  item.value=dataList.value[route.params.index]
  initMap()
}

const initMap = () => {  
  AMapLoader.load({  
    key: "409f1ce699c8fe2b7ca64bd2d8f2a3ba",  
    version: "2.0",  
    plugins: []  
  }).then((AMap) => {  
    map.value = new AMap.Map("container", {  
      viewMode: "2D",  
      zoom: 10,  
      center: [item.value.lng,item.value.lat]  
    });  
  
    // 添加Marker示例  
    const marker = new AMap.Marker({  
      position: [item.value.lng,item.value.lat] // 示例经纬度  
    });  
    map.value.add(marker);  
    map.value.setFitView();  
  
    // 绑定Marker点击事件  
    map.value.on('click', function(e) {  
      // alert(`您在[ ${e.lnglat.getLng()},${e.lnglat.getLat()} ]的位置点击了地图！`);  

    });  
  }).catch(e => {  
    console.error(e);  
  });  
};  
  
// onMounted(initMap);  
onMounted(()=>{
  initMap()
  getData()
})

</script>  
  
<style scoped>  
#container {  
  position: relative;
  z-index: 0;
  width: 100vw;  
  height: 100vh;  
}  
.iconfont{
  font-size: 30px;
}
.detail{
  margin-left: 10px;
  position: absolute;
  z-index: 1;
  width: 210px;
  height: 285px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10%;
}
.title{
  font-size: 25px;
}
p{
  font-size: 20px;
  color: black;

}
</style>