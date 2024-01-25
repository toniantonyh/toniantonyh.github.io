<script setup>
  import HomeMobile from '@/components/Home/HomeMobile.vue'
  import HomeDesktop from '@/components/Home/HomeDesktop.vue'

  if (typeof document !== 'undefined') {
    document.title = 'WePurpose – Home'
  }
</script>

<template>
  <main class="h-screen">
    <HomeMobile class="lg:hidden"/>
    
    <HomeDesktop
      style="display: none"
      class="hidden lg:!block"/>
  </main>
</template>

