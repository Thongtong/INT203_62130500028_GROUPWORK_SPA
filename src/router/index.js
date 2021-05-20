import { createRouter, createWebHistory } from 'vue-router'
import Booking from '../components/booking.vue'
import Home from '../views/Home.vue'
import ReBooking from '../components/reBooking.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/booking',
    name: 'Booking',
    component: Booking ,
  },
  {
    path:'/rebooking/:id',
    name : 'ReBooking',
    component : ReBooking,
    props : true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
