import { createRouter, createWebHistory } from 'vue-router';
import index from '../components/index.vue'
import detail from '../components/detail.vue';
import map from '../components/map.vue';
// import { onMounted, ref } from 'vue';
// import { fetchData } from '../apis/index';
// let dataList = ref([]);
// const getData = async () => {
//   const res = await fetchData();
//   dataList.value = res.data;
// }




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'',
      component:index,
    },
    {
      path:'/detail/:index',
      component:detail
    },
    {
      path:'/map/:index',
      component:map,
    }
  ],
  

  scrollBehavior() {
    return {
      top: 0
    }
  }

})
// router.beforeEach((to, from, next) => {
//   if (to.meta.title) {
//     document.title = to.meta.title; // 设置页面标题
//   } else {
//     document.title = '默认标题'; // 如果没有设置，使用默认标题
//   }
//   next();
// });

export default router

