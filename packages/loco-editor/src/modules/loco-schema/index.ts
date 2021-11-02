import SchemaNode from './schema-node'

class Schema {
  rootNode: SchemaNode;
  // currentNode: SchemaNode | null;
  constructor (schemaData: any) {
    // 初始化nodeTree
    if (schemaData._isRoot) {
      this.rootNode = new SchemaNode(schemaData.container)
    } else {
      this.rootNode = new SchemaNode(schemaData)
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
