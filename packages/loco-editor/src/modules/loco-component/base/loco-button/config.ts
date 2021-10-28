export default {
  state: [
    'active',
    'disabled'
  ],
  prop: [
    {
      grounpName: '基础配置',
      items: [
        {
          label: '按钮文字',
          path: 'text',
          type: 'text-input',
          default: '按钮',
          required: false
        },
        {
          label: '点击操作',
          path: 'action',
          type: 'select',
          options: [
            {
              label: '跳转其他页面',
              value: 'navTo'
            },
            {
              label: '什么都不做',
              value: 'none'
            }
          ],
          default: '按钮',
          required: false
        },
        {
          if: ($scope:any):boolean => {
            return $scope.path === 'navTo'
          },
          label: '跳转链接',
          key: 'link',
          type: 'text-input'
        }
      ]
    },
    {
      grounpName: '样式配置',
      items: [
        {
          label: '字体',
          path: 'style',
          type: 'size-input'
        },
        {
          label: '字体',
          path: 'style',
          type: 'custom' // 自定义输入组件
          // component: ''
        }
      ]
    }
  ]
}
