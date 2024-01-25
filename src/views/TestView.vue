<script setup>
  import ModalWindow from '@/components/Functional/ModalWindow.vue'
  import { createComponent } from '@/helpers/utils'
  import SubscribeForm from '@/components/Common/SubscribeForm.vue'


  function openSubscriptionModal () {
    const modalProps = {
      wrapperClass: 'bg-[#f0f0f0] shadow-lg h-full w-full max-h-[40rem]  max-w-3xl',
      showCloseButton: false,
      allowCloseByClickOutside: true
    }

    createComponent(ModalWindow, modalProps, SubscribeForm, {})
  }
</script>

<template>
  <div class="mt-24 p-10 max-w-3xl w-full mx-auto">
    <button
      type="button"
      class="btn"  
      @click="openSubscriptionModal">
      Subscribe form
    </button>
    <!--<iframe-->
    <!--  class="h-screen w-full"-->
    <!--  src="https://docs.google.com/forms/d/e/1FAIpQLScTa4HOd0o7x53S-bEVUiYDObASadXemOHEMcBxEHblWsphQA/viewform"-->
    <!--  title="Subscribe"/>-->
  </div>
</template>