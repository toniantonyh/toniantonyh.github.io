<script setup>
  import { onMounted, onBeforeUnmount, ref } from 'vue'

  const emit = defineEmits(['intersect'])
  const rootElement = ref(null)

  const props = defineProps({
    options: {
      type: Object,
      default: () => {},
      required: false
    }
  })

  let observer = null

  onMounted(() => {
    const options = props.options || {}

    observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        emit('intersect')
      }
    }, options)

    observer.observe(rootElement.value)
  })
  
  onBeforeUnmount(() => {
    observer.disconnect()
  })
</script>

<template>
  <div
    ref="rootElement"
    class="observer"/>
</template>

<style>
  .observer {
    padding: 1px;
    border: 0;
  }
</style>
