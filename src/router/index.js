import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import TestView from '@/views/TestView.vue'

export const router = [
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]
