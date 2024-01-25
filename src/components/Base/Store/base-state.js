import { reactive, toRefs } from 'vue'

const state = reactive({
  sidebarIsOpen: false
})

export default toRefs(state)