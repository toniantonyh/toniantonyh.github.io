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
      <h2 class="font-medium lg:text-right leading-normal text-3xl lg:text-4xl lg:leading-relaxed xl:text-5xl xl:leading-relaxed 2xl:text-6xl 2xl:leading-normal">
        OUR MISSION
      </h2>

      <p class="lg:text-right font-light leading-normal text-2xl">
        We believe in a better world where people spend money <br class="hidden xl:block">
        not to buy expensive goods to impress others but <br class="hidden xl:block">
        spend their wealth on helping people
      </p>
      
      <router-link
        to="/about"
        class="lg:text-right underline text-brand-red text-2xl lg:text-5xl mt-4 lg:mt-8">
        READ ABOUT ME
      </router-link>
    </div>
  </div>
</template>
