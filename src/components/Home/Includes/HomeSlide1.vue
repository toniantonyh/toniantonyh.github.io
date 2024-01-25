<script setup>
  import { ref } from 'vue'

  let poster = ref('')
  
  if (typeof document !== 'undefined') {
    poster.value = document.body.clientWidth <= 1023 ? '/mobile-poster.jpg' : '/desktop-poster.jpg'
  }
</script>

<template>
  <div class="h-screen w-full">
    <video
      class="h-full w-full object-cover"
      playsinline
      autoplay
      muted
      onloadedmetadata="this.muted = true"
      loop
      :poster="poster">
      <source
        src="/mobile.mp4"
        type="video/mp4"
        media="(max-width: 1023px)">

      <source
        src="/desktop.mp4"
        type="video/mp4"
        media="(min-width: 1024px)">

      Your browser does not support the video tag.
    </video>
  </div>
</template>