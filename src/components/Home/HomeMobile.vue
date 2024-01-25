<script setup>
  import HomeSlide1 from '@/components/Home/Includes/HomeSlide1.vue'
  import HomeSlide2 from '@/components/Home/Includes/HomeSlide2.vue'
  import HomeSlide3 from '@/components/Home/Includes/HomeSlide3.vue'
  import HomeSlide5 from '@/components/Home/Includes/HomeSlide5.vue'
  import HomeSlide6 from '@/components/Home/Includes/HomeSlide6.vue'
  import HomeSlide7 from '@/components/Home/Includes/HomeSlide7.vue'
  import HomeSlide8 from '@/components/Home/Includes/HomeSlide8.vue'
</script>

<template>
  <main class="flex gap-4 flex-col items-center">
    <HomeSlide1/>
  
    <HomeSlide2 :is-active="true"/>

    <HomeSlide3 :is-active="true"/>

    <HomeSlide5 :is-active="true"/>

    <HomeSlide6 :is-active="true"/>

    <HomeSlide7 :is-active="true"/>

    <HomeSlide8 :is-active="true"/>
  </main>
</template>