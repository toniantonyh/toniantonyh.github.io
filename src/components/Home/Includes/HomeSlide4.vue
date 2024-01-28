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
        FIGURATIVE ABSTRACTION
      </h2>

      <div class="space-y-4">
        <p class="font-light leading-normal text-2xl">
          Virtual waves is a visual representation of <br class="hidden xl:block">
          the movement of water that is created using <br class="hidden xl:block">
          computer software.
        </p>

        <p class="font-light leading-normal text-2xl">
          Tomislav explores the unique aesthetic and <br class="hidden xl:block">
          qemotional ualities of virtual waves, using <br class="hidden xl:block">
          them as a subject matter and as a medium.
        </p>
      </div>
    </div>

    <picture>
      <source
        type="image/avif"
        srcset="@/assets/images/slide-4.avif">

      <source
        type="image/webp"
        srcset="@/assets/images/slide-4.webp">

      <img
        :class="[isActive || isAnimated ? 'translate-x-0' : 'translate-x-full']"
        src="@/assets/images/slide-4.png"
        class="transition-transform duration-500 h-full w-full object-cover object-right"
        alt="">
    </picture>
  </div>
</template>