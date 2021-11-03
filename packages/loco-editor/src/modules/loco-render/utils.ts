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

const componentMap = {
  'loco-button': locoButton,
  'loco-image': locoImage,
  'loco-container': locoContainer,
  'card-demo': cardDemo,
  'slot-zone': slotZone,
  'loco-popup': locoPopup
}

function schema2RenderParmas (schema: any, h: any): any {
  // if (schema._isRoot) {
  //   return schema2RenderParmas(schema.container, h)
  // }
  const res = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    tag: componentMap[schema.tag] || 'div',
    prop: null,
    children: null
  }
  // props处理逻辑
  if (schema.props) {
    res.prop = schema.props
  }
  let children = []
  if (schema.childNodes) {
    children = schema.childNodes.map((item: any) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const { tag, prop, children } = schema2RenderParmas.call(this, item, h)
      return h(tag, prop, children)
    })
  }
  res.children = children

  return res
}

export {
  schema2RenderParmas
}
