import { createRouter, createWebHistory } from 'vue-router';
import index from '../components/index.vue'
import detail from '../components/detail.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'',
      component:index
    },
    {
      path:'/detail/:index',
      component:detail
    }
  ],
  scrollBehavior() {
    return {
      top: 0
    }
  }

})

export default router