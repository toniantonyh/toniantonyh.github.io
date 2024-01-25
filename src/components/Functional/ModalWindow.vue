<script setup>
  import { ref, onMounted, onUnmounted, provide } from 'vue'
  import { onCodeDown, key_Escape } from 'on-hotkey'

  const props = defineProps({
    wrapperClass: {
      type: String,
      default: 'bg-white rounded-lg'
    },
    onDestroy: {
      type: Function,
      default: () => {}
    },
    allowCloseByClickOutside: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'items-center'
    }
  })

  const isOpen = ref(false)
  const scrollbarWidth = ref(0)

  const documentExists = typeof document !== 'undefined'
  const htmlElement = documentExists ? document.documentElement : {}

  onMounted(() => {
    scrollbarWidth.value = documentExists ? (window.innerWidth - document.documentElement.clientWidth) : 0

    isOpen.value = true

    htmlElement.style.overflow = 'hidden'
    htmlElement.style.paddingRight = scrollbarWidth.value + 'px'
  })

  function close (type) {
    if (type === 'overlay') {
      if (!props.allowCloseByClickOutside) {
        return
      }
    }

    isOpen.value = false
    htmlElement.style.overflow = ''
    htmlElement.style.paddingRight = ''

    setTimeout(() => {
      props.onDestroy()
    }, 200)
  }

  provide('close', close)

  const unsubscribeEscapeKey = onCodeDown(key_Escape, () => {
    close()
  })

  onUnmounted(() => {
    unsubscribeEscapeKey()
  })

  defineExpose({
    isOpen
  })
</script>

<template>
  <div
    role="dialog"
    class="fixed inset-0 z-40 overflow-y-auto h-full w-full"
    aria-modal="true"
    @click="close('overlay')">
    <!-- Overlay -->
    <transition name="fade">
      <div
        v-show="isOpen"
        class="fixed inset-0 bg-black bg-opacity-70 backdrop-blur"/>
    </transition>

    <!-- Panel -->
    <transition name="fade-appear">
      <div
        v-show="isOpen"
        :style="{ paddingRight: scrollbarWidth + 'px' }"
        :class="[isOpen ? 'visible' : 'invisible']"
        class="relative w-full h-full flex items-center justify-center">
        <div
          :class="[wrapperClass]"
          class="overflow-auto max-h-screen relative overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded-full"
          @click.stop>
          <slot/>
        </div>
      </div>
    </transition>
  </div>
</template>
