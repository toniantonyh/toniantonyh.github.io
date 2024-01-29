<script setup>
  import baseState from '@/components/Base/Store/base-state.js'
  import { openSubscriptionModal } from '@/helpers/modals.js'

  const {
    sidebarIsOpen
  } = baseState
</script>

<template>
  <aside
    :class="[sidebarIsOpen ? 'translate-x-0' : 'translate-x-full']"
    class="shadow-lg fixed top-0 right-0 z-20 w-80 min-h-full h-screen transition-transform duration-300"
    aria-label="Sidebar">
    <div class="h-full px-6 py-4 overflow-y-auto bg-black/70 pt-24 flex flex-col items-start gap-4">
      <router-link
        to="/"
        class="underline text-2xl"
        @click="sidebarIsOpen = false">
        HOME
      </router-link>

      <router-link
        to="/about"
        class="underline text-2xl"
        @click="sidebarIsOpen = false">
        ABOUT
      </router-link>

      <a
        class="underline text-2xl"
        href="https://www.instagram.com/tony_antony_h_art/"
	target="_blank">
        INSTAGRAM
      </a>

      <button
        type="button"
        class="underline text-2xl"
        @click="sidebarIsOpen = false; openSubscriptionModal()">
        PURCHASE
      </button>

      <a
        class="underline text-2xl"
        href="mailto:toniantonyh@gmail.com">
        CONTACT
      </a>
    </div>
  </aside>
</template>
