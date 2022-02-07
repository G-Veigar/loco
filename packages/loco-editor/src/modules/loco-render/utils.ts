// type createNodeElementParmas = {
//   tag: string,
//   prop: any,
//   children: [] | null | string,
// }
import locoButton from '../loco-component/base/loco-button/view.vue'
import locoImage from '../loco-component/base/loco-image/view.vue'
import locoContainer from '../loco-component/base/loco-container/view.vue'
import locoPopup from '../loco-component/base/loco-popup/view.vue'
// TODO: delete
import cardDemo from '../loco-component/base/loco-container/card-demo.vue'
import slotZone from '../loco-component/slot-zone/index.vue'
import mitt from 'mitt'

const emitter = mitt()

const componentMap = {
  'loco-button': locoButton,
  'loco-image': locoImage,
  'loco-container': locoContainer,
  'card-demo': cardDemo,
  'slot-zone': slotZone,
  'loco-popup': locoPopup
}

function schema2RenderParmas (schema: any, h: any, mode: string): any {
  // if (schema._isRoot) {
  //   return schema2RenderParmas(schema.container, h)
  // }
  const res = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    tag: componentMap[schema.tag] || 'div',
    prop: {},
    children: null
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  res.prop.id = schema.nodeId
  // props处理逻辑
  if (schema.props) {
    res.prop = schema.props
  }
  // 处理childNodes
  let children = []
  if (schema.childNodes) {
    children = schema.childNodes.map((item: any) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const { tag, prop, children } = schema2RenderParmas.call(this, item, h, mode)
      return h(tag, prop, children)
    })
  }
  res.children = children

  // 处理event
  if (schema.event) {
  }
  // 编辑模式下处理
  if (mode === 'edit' && schema.nodeId !== 'container') {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    res.prop.onMouseover = () => {
      emitter.emit('hoverEl', {
        nodeId: schema.nodeId
      })
    }
  }

  return res
}

export {
  schema2RenderParmas,
  emitter
}
