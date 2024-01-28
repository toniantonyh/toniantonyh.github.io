<script setup>
  import MainSidebar from '@/components/Base/MainSidebar.vue'
  import AnimatedHamburger from '@/components/Common/AnimatedHamburger.vue'
  import baseState from '@/components/Base/Store/base-state.js'

  const {
    sidebarIsOpen
  } = baseState
</script>

<template>
  <nav class="fixed top-0 w-full z-10 bg-gradient-to-b from-gray-900 to-gray-900/0">
    <div class="mx-auto px-8 lg:px-10 xl:px-12 2xl:px-14 flex justify-between items-center py-8">
      <router-link
        to="/">
        <div class="font-medium text-2xl leading-5 drop-shadow-xl">
          Tomislav Hrabrić
        </div>

        <span class="text-xs drop-shadow-xl">
          Figurative abstraction
        </span>
      </router-link>

      <AnimatedHamburger class="z-30 relative drop-shadow-xl"/>
    </div>

    <MainSidebar/>

    <transition name="fade">
      <div
        v-show="sidebarIsOpen"
        class="fixed inset-0 z-10 bg-gray-900/60"
        @click="sidebarIsOpen = false"/>
    </transition>
  </nav>
</template>
