<!--suppress CssUnusedSymbol -->
<script setup>
  import HomeSlide1 from '@/components/Home/Includes/HomeSlide1.vue'
  import HomeSlide2 from '@/components/Home/Includes/HomeSlide2.vue'
  import HomeSlide3 from '@/components/Home/Includes/HomeSlide3.vue'
  import HomeSlide4 from '@/components/Home/Includes/HomeSlide4.vue'
  import HomeSlide5 from '@/components/Home/Includes/HomeSlide5.vue'
  import HomeSlide6 from '@/components/Home/Includes/HomeSlide6.vue'
  import HomeSlide7 from '@/components/Home/Includes/HomeSlide7.vue'
  import HomeSlide8 from '@/components/Home/Includes/HomeSlide8.vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Keyboard, Mousewheel } from 'swiper/modules'
  import 'swiper/css'
  import { ref, computed } from 'vue'
  import chevronDownSvg from '@/assets/fontawesome/solid/chevron-down.svg'
  import circleSvg from '@/assets/fontawesome/solid/circle.svg'

  const modules = [Keyboard, Mousewheel]

  function onSlideChange(event) {
    activeSlideIndex.value = event.activeIndex
  }

  const swiper = ref(null)
  const activeSlideIndex = ref(0)
  const isLastSlide = computed(() => activeSlideIndex.value === 7)

  const onSwiper = (s) => {
    swiper.value = s
  }
</script>

<template>
  <main class="relative h-full w-full">
    <Swiper
      :direction="'vertical'"
      :navigation="true"
      :initial-slide="activeSlideIndex"
      :modules="modules"
      :mousewheel="true"
      :keyboard="{
        enabled: true
      }"
      :slides-per-view="1"
      @slide-change="onSlideChange"
      @swiper="onSwiper">
      <SwiperSlide>
        <HomeSlide1/>
      </SwiperSlide>

      <SwiperSlide v-slot="{ isActive }">
        <HomeSlide2 :is-active="isActive"/>
      </SwiperSlide>

      <SwiperSlide v-slot="{ isActive }">
        <HomeSlide3 :is-active="isActive"/>
      </SwiperSlide>

      <SwiperSlide v-slot="{ isActive }">
        <HomeSlide4 :is-active="isActive"/>
      </SwiperSlide>

      <SwiperSlide v-slot="{ isActive }">
        <HomeSlide5 :is-active="isActive"/>
      </SwiperSlide>

      <SwiperSlide v-slot="{ isActive }">
        <HomeSlide6 :is-active="isActive"/>
      </SwiperSlide>

      <SwiperSlide v-slot="{ isActive }">
        <HomeSlide7 :is-active="isActive"/>
      </SwiperSlide>

      <SwiperSlide v-slot="{ isActive }">
        <HomeSlide8 :is-active="isActive"/>
      </SwiperSlide>
    </Swiper>

    <transition name="fade">
      <button
        v-if="!isLastSlide"
        type="button"
        class="absolute bottom-6 left-0 right-0 flex items-center justify-center h-14 w-14 mx-auto z-10 focus:outline-none outline-none rounded-full"
        @click="swiper.slideNext()">
        <span class="relative w-full h-full">
          <circleSvg class="h-full w-full text-black/80"/>
          <chevronDownSvg class="h-7 w-7 text-white absolute inset-0 m-auto"/>
        </span>
      </button>
    </transition>
  </main>
</template>

<style>
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
  }
</style>