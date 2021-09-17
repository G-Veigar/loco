const General = {
  name: 'General',
  keys: [
    {
      key: 'ctrl+r, command+r',
      prevent: true,
      ctx: 'all', // 全局上下文
      desc: 'xxx',
      handler (e: Event): void {
        alert('r clicked')
        console.log(e)
      }
    }
  ]
}

export default [
  General
]
