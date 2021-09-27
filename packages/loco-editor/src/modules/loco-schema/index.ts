import SchemaNode from './schema-node'

class Schema {
  rootNode: SchemaNode;
  currentNode: SchemaNode | null;
  constructor (schemaData: any) {
    // 初始化nodeTree
    this.rootNode = new SchemaNode(schemaData)
    this.currentNode = null
  }

  // 设置当前节点
  public setCurrentNode (node: SchemaNode): void{
    // node = this._getNode(node)
    this.currentNode = node
  }
}

export default Schema
