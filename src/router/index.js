import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/layout'

const routes = [
  {
    path: '/',
    component: layout,
    redirect:'/home',
    children:[
      {
        path: '/home',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/home/index.vue')
      },
    ]
  },
  {
    path:'/doodles',
    component:layout,
    children:[
        {
          path:'/doodles/introduction',
          name:'introduction',
          component: () => import(/* webpackChunkName: "about" */ '../views/doodles/introduction.vue')
        },
        {
          path:'/doodles/spacedoodle',
          name:'spacedoodle',
          component: () => import(/* webpackChunkName: "about" */ '../views/doodles/spacedoodle.vue')
        },
        {
          path:'/doodles/doodles2',
          name:'doodles2',
          component: () => import(/* webpackChunkName: "about" */ '../views/doodles/doodles2.vue')
        }

    ]
  },
  {
    path:'/doobros',
    component:layout,
    children:[
        {
          path:'/doobros/introduction',
          name:'doobros-introduction',
          component: () => import(/* webpackChunkName: "about" */ '../views/doobros/introduction.vue')
        },
        {
          path:'/doobros/teaminfo',
          name:'doobros-teaminfo',
          component: () => import(/* webpackChunkName: "about" */ '../views/doobros/teamInfo.vue')
        },
    ]
  }
 
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
