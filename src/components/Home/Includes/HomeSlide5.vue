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
        srcset="@/assets/images/slide-5.avif">

      <source
        type="image/webp"
        srcset="@/assets/images/slide-5.webp">

      <img
        :class="[isActive || isAnimated ? 'translate-x-0' : '-translate-x-full']"
        src="@/assets/images/slide-5.png"
        class="transition-transform duration-500 h-full w-full object-cover object-right"
        alt="">
    </picture>

    <div
      :class="[isActive || isAnimated ? 'translate-x-0' : 'translate-x-full']"
      class="transition-transform duration-500 order-first lg:order-none flex flex-col gap-y-4 lg:gap-y-6 justify-center px-8 lg:px-10 xl:px-12 2xl:px-14 py-12 lg:py-0">
      <h2 class="font-medium lg:text-right leading-normal text-3xl lg:text-4xl lg:leading-relaxed xl:text-5xl xl:leading-relaxed 2xl:text-6xl 2xl:leading-normal">
        BLENDING THE REALITY
      </h2>

      <div class="space-y-4">
        <p class="lg:text-right font-light leading-normal text-2xl">
          Creating and provoking thoughts and ideas with a blend <br class="hidden xl:block">
          of mediums, challenging perception of the reality.
        </p>

        <p class="lg:text-right font-light leading-normal text-2xl">
          Fabstraction references the real world, conveying <br class="hidden xl:block">
          emotions and thoughts symbolically.
        </p>

        <p class="lg:text-right font-light leading-normal text-2xl">
          Spontaneous and direct painting method, with paint <br class="hidden xl:block">
          thrown onto canvas for thick, vibrant abstract layers.
        </p>
      </div>
    </div>
  </div>
</template>
