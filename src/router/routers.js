const Routers = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/home/components/about.vue')
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: () => import('@/views/home/components/feedback.vue')
  },
  {
    path: '/complaint',
    name: 'Complaint',
    component: () => import('@/views/home/components/complaint.vue')
  },
  {
    path: '/mySubscribe',
    name: 'MySubscribe',
    component: () => import('@/views/control/my-subscribe/index.vue')
  },
  {
    path: '/newsDetail',
    name: 'NewsDetail',
    component: () => import('@/views/home/components/news-detail.vue')
  }
]

export default Routers

// 动态路由处理
// export const generatorRouters = [
//   {
//     path: '/home',
//     name: 'Home',
//     component: () => import('@/views/home/index.vue'),
//   }
// ]
