import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('../views/Home.vue')
  },
  

    {
    path: '/contact',
    name: 'contact',
    component:()=>import('../views/contact.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
