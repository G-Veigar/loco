
import schema, { hehe } from '../loco-schema/demo'

const messageTypeHandler = {
  drop (data: any): void{
    if (data.isDropToSlot) {
      // console.log('拖放到了一个slot', demoSchema)
      // demoSchema.rootNode.childNodes[1].remove()
      console.log('fk')
      hehe()
    } else {
      console.log('拖放了')
    }
  }
}

function initMessenger (): void {
  window.addEventListener('message', e => {
    const { origin, data } = e
    console.log('hava a message', data)
    if (data.type) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      messageTypeHandler[data.type](data.data)
    }
  })
}

export { initMessenger }
