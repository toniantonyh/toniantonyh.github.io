import ModalWindow from '@/components/Functional/ModalWindow.vue'
import { createComponent } from '@/helpers/utils'
import SubscribeForm from '@/components/Common/SubscribeForm.vue'

function openSubscriptionModal () {
  const modalProps = {
    wrapperClass: 'bg-[#f0f0f0] shadow-lg h-full w-full !max-h-[40rem] max-w-3xl pt-10 pb-2 lg:pl-0.5',
    showCloseButton: false,
    allowCloseByClickOutside: true
  }

  createComponent(ModalWindow, modalProps, SubscribeForm, {})
}

export {
  openSubscriptionModal
}