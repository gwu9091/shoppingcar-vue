import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
import shoppcar1 from '../views/shoppcar1.vue'
import shoppcar2 from '../views/shoppcar2.vue'
import shoppcar3 from '../views/shoppcar3.vue'
import shoppcar4 from '../views/shoppcar4.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(){
    return{
      top:0,
    }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        title: '首頁',
      }
    },
    {
      path: '/shoppcar1',
      name: 'shoppcar1',
      component: shoppcar1,
      meta: {
        title: '購物車-1',
      }
    },
    {
      path: '/shoppcar2',
      name: 'shoppcar2',
      component: shoppcar2,
      meta: {
        title: '購物車-2',
      }
    },
    {
      path: '/shoppcar3',
      name: 'shoppcar3',
      component: shoppcar3,
      meta: {
        title: '購物車-3',
      }
    },
    {
      path: '/shoppcar4',
      name: 'shoppcar4',
      component: shoppcar4,
      meta: {
        title: '購物車-4',
      }
    },
  ],
})
router.beforeEach((to, from, next) => {
    // 尋找最匹配的路由記錄中的 meta.title
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    if (nearestWithTitle) {
        // 設定頁面標題
        document.title = nearestWithTitle.meta.title;
    } else {
        document.title = '預設網站名稱'; // 如果沒有 title，設定預設值
    }

    // 繼續導航
    next(); 
});
export default router
