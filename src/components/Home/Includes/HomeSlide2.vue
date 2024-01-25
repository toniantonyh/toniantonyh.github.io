<script setup>
  import { ref, watch } from 'vue'

  const isAnimated = ref(false)

  const props = defineProps({
    isActive: {
      type: Boolean,
      default: false
    }
  })

  const stopWatch = watch(() => props.isActive, (value) => {
    if (value) {
      stopWatch()
      isAnimated.value = true
    }
  })
</script>

<template>
  <div class="grid gap-y-4 gap-x-3 lg:grid-cols-2 h-full overflow-hidden max-w-lg lg:max-w-full">
    <div
      :class="[isActive || isAnimated ? 'translate-x-0' : '-translate-x-full']"
      class=" transition-transform duration-500 flex flex-col justify-center px-8 lg:pl-10 xl:pl-12 2xl:pl-14 py-12 lg:py-0">
      <h2
        class="font-light leading-normal text-3xl lg:text-4xl lg:leading-relaxed xl:text-5xl xl:leading-relaxed 2xl:text-6xl 2xl:leading-normal">
        <span class="font-medium">WEPURPOSE</span> is a <br>
        movement to change the <br class="hidden lg:block">
        overconsumption culture for <br class="hidden lg:block">
        admiring those who help <br class="hidden lg:block">
        others!
      </h2>
    </div>

    <picture>
      <source
        type="image/avif"
        srcset="@/assets/images/slide-2.avif">

      <source
        type="image/webp"
        srcset="@/assets/images/slide-2.webp">

      <img
        :class="[isActive || isAnimated ? 'translate-x-0' : 'translate-x-full']"
        src="@/assets/images/slide-2.png"
        class="transition-transform duration-500 h-full w-full object-cover object-right"
        alt="">
    </picture>
  </div>
</template>