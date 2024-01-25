import HomeView from '@/views/HomeView.vue'
import TestView from '@/views/TestView.vue'
import WhitepaperView from '@/views/WhitepaperView.vue'

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
    path: '/whitepaper',
    name: 'whitepaper',
    component: WhitepaperView
  }
]