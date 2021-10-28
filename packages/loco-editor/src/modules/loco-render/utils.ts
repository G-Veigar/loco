// type createNodeElementParmas = {
//   tag: string,
//   prop: any,
//   children: [] | null | string,
// }
import locoButton from '../loco-component//base/loco-button/view.vue'
import locoImage from '../loco-component//base/loco-image/view.vue'
import locoContainer from '../loco-component//base/loco-container/view.vue'

const componentMap = {
  'loco-button': locoButton,
  'loco-image': locoImage,
  'loco-container': locoContainer
}

function schema2RenderParmas (schema: any, h: any): any {
  if (schema._isRoot) {
    return schema2RenderParmas(schema.container, h)
  }
  const res = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    tag: componentMap[schema.tag] || 'div',
    prop: {},
    children: null
  }
  let children = []
  if (schema.children) {
    children = schema.children.map((item: any) => {
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
