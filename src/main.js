import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { router } from './router'
// import { register } from 'swiper/element/bundle'

import './assets/style/index.css'

export const createApp = ViteSSG(App, { routes: router }, ({ app, router, initialState }) => {
  // register()

  router.beforeEach((to, from, next) => {
    next()
  })
})

export async function includedRoutes (paths, routes) {
  // Runs during build time
  return Promise.all(
    routes.map(async (route) => {
      return route.path
    })
  )
}