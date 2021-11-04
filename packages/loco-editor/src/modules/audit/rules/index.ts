const AUDIT_RULES = [
  {
    name: '隐藏元素没有触发逻辑',
    desc: '一个隐藏的元素，如果没有触发展示的逻辑，则永远不会展示在页面上，造成性能浪费',
    type: 'node', // 规则类型，'node' 节点校验，'global'校验
    validator (node:any, schema: any, editorInfo: any) {
      const nodeId = node.id
      const nodeState = schema.state[nodeId]
      // 配置了显隐控制逻辑
      if ('$show' in nodeState) {

      }
    }
  }
]

export default AUDIT_RULES
