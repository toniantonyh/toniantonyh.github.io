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
    <picture>
      <source
        type="image/avif"
        srcset="@/assets/images/slide-3.avif">

      <source
        type="image/webp"
        srcset="@/assets/images/slide-3.webp">

      <img
        :class="[isActive || isAnimated ? 'translate-x-0' : '-translate-x-full']"
        src="@/assets/images/slide-3.png"
        class="transition-transform duration-500 h-full w-full object-cover"
        alt="">
    </picture>

    <div
      :class="[isActive || isAnimated ? 'translate-x-0' : 'translate-x-full']"
      class="transition-transform duration-500 order-first lg:order-none flex flex-col gap-y-4 lg:gap-y-6 justify-center px-8 lg:pr-10 xl:pr-12 2xl:pr-14 py-12 lg:py-0">

      <h2
        class="font-light leading-normal text-3xl lg:text-4xl lg:leading-relaxed xl:text-5xl xl:leading-relaxed 2xl:text-6xl 2xl:leading-normal">
        <span class="font-medium">In rhythmic steps,</span> <br>
        Moonlit waltz <br class="hidden xl:block">
        under starry sky, <br class="hidden xl:block">
        Silent whispers dance.
      </h2>
    </div>
  </div>
</template>
