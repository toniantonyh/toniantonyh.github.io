const isDev = import.meta.env.MODE === 'development'
const isDebug = import.meta.env.VITE_APP_DEBUG_VISIBLE === 'yes'
import { h, render } from 'vue'

// https://github.com/pearofducks/mount-vue-component
// https://stackoverflow.com/a/69491554
// https://wmartins.github.io/2019/05/a-deep-dive-into-children-in-vue/

// Usage

// import ModalWindow
// import ComponentContent
// modalWindowProps = { wrapperClass: 'max-w-2xl overflow-y-auto rounded-xl bg-white p-4 shadow-lg' }
// componentContent = { heading: 'hello world' }
// createComponent(ModalWindow, modalWindowProps, ComponentContent, componentContent)

function createComponent (wrapperComponent, wrapperProps = {}, componentContent = {}, componentProps = {}) {
  const documentExists = typeof document !== 'undefined'

  if (!documentExists) return

  let el = document.createElement('div')
  document.body.appendChild(el)

  let vNode = null

  function destroy () {
    render(null, el)
    vNode = null
    el.remove()
    el = null
  }

  componentProps = { ...componentProps, onDestroy: destroy }
  componentContent = h(componentContent, componentProps)

  wrapperProps = { ...wrapperProps, onDestroy: destroy }
  vNode = h(wrapperComponent, wrapperProps, () => componentContent)

  render(vNode, el)
  return { vNode, destroy }
}

export {
  isDev,
  isDebug,
  createComponent
}
