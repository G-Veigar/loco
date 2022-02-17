import SchemaNode from './schema-node.class'

class Schema {
  rootNode: SchemaNode | null;
  states: any;
  actions: any;
  // currentNode: SchemaNode | null;
  constructor (schemaData: any) {
    // 初始化nodeTree
    if (schemaData) {
      if (schemaData._isRoot) {
        this.rootNode = new SchemaNode(schemaData.container)
        this.states = schemaData.states
        this.actions = schemaData.actions
      } else {
        this.rootNode = new SchemaNode(schemaData)
      }
    } else {
      this.rootNode = null
      this.states = null
      this.actions = null
    }
    // this.currentNode = null
  }

  // 设置当前节点
  // public setCurrentNode (node: SchemaNode): void{
  //   // node = this._getNode(node)
  //   this.currentNode = node
  // }

  // 创建新节点
  public createNode (options: any):SchemaNode {
    const node = new SchemaNode({
      tag: options.tag,
      text: options.name
    })
    return node
  }

  // TODO：完善功能
  // public getNodeById (nodeId: string):SchemaNode | undefined {
  //   if (this.rootNode.nodeId === nodeId) {
  //     return this.rootNode
  //   } else {
  //     const resNode = this.rootNode.childNodes.find((item:SchemaNode) => {
  //       return item.nodeId === nodeId
  //     })
  //     return resNode
  //   }
  // }

  // public removeNode (node: SchemaNode) {
  //   // node = this._getNode(node)
  //   this.removeNodeFrom(node.parent, node)
  // }
}

export default Schema
