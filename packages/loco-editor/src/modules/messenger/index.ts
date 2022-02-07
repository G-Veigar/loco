
// import schema from '../loco-schema/demo'

// const messageTypeHandler = {
//   drop (data: any): void{
//     if (data.isDropToSlot) {
//       // console.log('拖放到了一个slot', demoSchema)
//       // demoSchema.rootNode.childNodes[1].remove()
//       console.log('fk')
//     } else {
//       console.log('拖放了')
//     }
//   }
// }

class Messenger {
  messengerReady = false
  receiver: Window | null = null

  init (receiver: Window | null, msgHandlers: any): void{
    this.receiver = receiver
    window.addEventListener('message', e => {
      const { origin, data } = e
      if (data.type?.startsWith('loco-')) {
        // console.log('a message', data.data)
        if (msgHandlers[data.type]) {
          msgHandlers[data.type](data.data)
        }
      }
    })
    this.messengerReady = true
  }

  emit (type: string, data: any): void{
    if (this.receiver) {
      this.receiver.postMessage({
        type,
        data
      }, '*')
    }
  }

  on (msg: string, callback: (data: any) => void):void {
    window.addEventListener('message', e => {
      const { origin, data } = e
      if (data.type === msg) {
        callback(data)
      }
    })
  }
}

const messenger = new Messenger()

export default messenger
