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
      class="transition-transform duration-500 order-first lg:order-none flex flex-col gap-y-4 lg:gap-y-6 justify-center px-8 lg:px-10 xl:px-12 2xl:px-14 py-12 lg:py-0">
      <h2 class="font-medium leading-normal text-3xl lg:text-4xl lg:leading-relaxed xl:text-5xl xl:leading-relaxed 2xl:text-6xl 2xl:leading-normal">
        Nature's gentle lullaby
      </h2>

      <p class="font-light leading-normal text-2xl">
        Rain transforms into a figurative abstraction, each drop <br class="hidden xl:block">
        painting a fluid mosaic. It's nature's art, blending <br class="hidden xl:block">
        reality with a splash of whimsy.
      </p>
    </div>

    <picture>
      <source
        type="image/avif"
        srcset="@/assets/images/slide-6.avif">

      <source
        type="image/webp"
        srcset="@/assets/images/slide-6.webp">

      <img
        :class="[isActive || isAnimated ? 'translate-x-0' : 'translate-x-full']"
        src="@/assets/images/slide-6.png"
        class="transition-transform duration-500 h-full w-full object-cover object-left"
        alt="">
    </picture>
  </div>
</template>