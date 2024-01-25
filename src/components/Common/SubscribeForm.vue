<script setup>
  import { inject } from 'vue'
  import xmarkSvg from '@/assets/fontawesome/light/xmark.svg'

  const close = inject('close')
</script>

<template>
  <div class="h-full w-full relative ">
    <button
      type="button"
      title="Close popup"
      class="p-1 absolute -top-9 right-2 text-gray-900"
      @click="close">
      <xmarkSvg class="w-7"/>
    </button>

    <iframe
      class="h-full w-full"
      src="https://docs.google.com/forms/d/e/1FAIpQLScTa4HOd0o7x53S-bEVUiYDObASadXemOHEMcBxEHblWsphQA/viewform"
      title="Subscribe"/>
  </div>
</template>