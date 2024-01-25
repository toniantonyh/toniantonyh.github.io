import mitt from 'mitt'

// Usage
// import emitter from '@/plugins/mittPlugin'
//
// emitter.emit('scroll-chat-to-bottom', { data })
//
// emitter.on('scroll-chat-to-bottom', () => {
//   scrollChatToBottom()
// })

const emitter = mitt()

export default emitter
