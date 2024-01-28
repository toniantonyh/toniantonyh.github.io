<script setup>
  import { ref, watch } from 'vue'
  import { openSubscriptionModal } from '@/helpers/modals.js'
  
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
      class="transition-transform duration-500 order-first lg:order-none flex lg:flex-col gap-x-8 gap-y-4 lg:gap-y-6 justify-center items-start px-8 lg:px-10 xl:px-12 2xl:px-14 pb-10 lg:py-0">
      <a
        class="underline text-brand-red text-2xl lg:text-5xl mt-4 lg:mt-8"
        href="mailto:toniantonyh@gmail.com">
        CONTACT
      </a>

      <button
        type="button"
        class="underline text-brand-red text-2xl lg:text-5xl mt-4 lg:mt-8"
        @click="openSubscriptionModal">
        PURCHASE
      </button>
    </div>

    <picture>
      <source
        type="image/avif"
        srcset="@/assets/images/slide-8.avif">

      <source
        type="image/webp"
        srcset="@/assets/images/slide-8.webp">

      <img
        :class="[isActive || isAnimated ? '-translate-x-0' : 'translate-x-full']"
        src="@/assets/images/slide-8.png"
        class="hidden lg:block transition-transform duration-500 h-full w-full object-cover"
        alt="">
    </picture>
  </div>
</template>
