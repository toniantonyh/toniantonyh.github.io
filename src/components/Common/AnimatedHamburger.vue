<!--suppress HtmlUnknownTag -->
<script setup>
import baseState from '@/components/Base/Store/base-state.js'

const {
  sidebarIsOpen
} = baseState
</script>

<template>
  <button
    :class="{ 'active': sidebarIsOpen }"
    class="hamburger hamburger--collapse drop-shadow"
    type="button"
    @click="sidebarIsOpen = !sidebarIsOpen">
    <div class="inner">
      <span class="bar"/>
      <span class="bar"/>
      <span class="bar"/>
    </div>
  </button>
</template>