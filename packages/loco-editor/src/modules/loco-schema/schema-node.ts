import uid from '@/utils/uid'

class SchemaNode {
  nodeId: string;
  tag: string;
  text: string;
  style: any;
  props: any;
  event: {on: any, emit: any};
  parent: SchemaNode | null;
  childNodes: SchemaNode[] = [];

  constructor (options: any) {
    const { props, parent, tag, nodeId, text, style, event, childNodes } = options
    this.nodeId = nodeId || uid() // 节点唯一标识
    this.tag = tag
    this.text = text
    this.style = style
    this.props = props
    this.event = event || { on: {}, emit: {} }
    this.parent = parent || null // 父节点

    // 递归初始化子节点
    if (childNodes) {
      this.childNodes = childNodes.map((childItem: any) => {
        return new SchemaNode({
          ...childItem,
          parent: this
        })
      })
    }
  }

  // 获取到子节点的index位置
  getChildIndex (childNode: SchemaNode):number {
    if (this.childNodes) {
      return this.childNodes.indexOf(childNode)
    } else {
      return -1
    }
  }

  // 复制节点
  cloneNode ():SchemaNode {
    const newNode = new SchemaNode(this)
    newNode.nodeId = uid()
    newNode.parent = null
    return newNode
  }

  // 删除子节点，（不会递归子节点的子节点）
  removeChild (childNode: SchemaNode):number {
    const childs = this.childNodes
    for (let i = 0; i < childs.length; i++) {
      const currentChild = childs[i]
      if (childNode === currentChild) {
        childs.splice(i, 1)
        return i
      }
    }
    return -1
  }

  // 新增节点到结尾
  appendChild (node: SchemaNode): void{
    if (this.childNodes) {
      this.childNodes.push(node)
    }
    node.parent = this // 父子关系绑定
  }

  // 在指定位置前插入节点
  insertBefore (node: SchemaNode, index: number): void {
    let childs = this.childNodes
    if (!childs) {
      childs = this.childNodes = []
      childs.push(node)
    } else if (index > childs.length) {
      childs.push(node)
    } else {
      childs.splice(index, 0, node)
    }
    node.parent = this
  }

  // 在指定位置后插入子节点
  insertAfter (node: SchemaNode, index: number): void{
    this.insertBefore(node, ++index)
  }

  // 新增事件触发
  addEventEmitter (eventType: string): void {
    const eventName = `#${this.nodeId}@${eventType}`
    this.event.emit[eventType] = eventName
  }
}

export default SchemaNode
