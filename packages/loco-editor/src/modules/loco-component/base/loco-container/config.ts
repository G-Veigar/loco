import { CONTAINER_TYPE } from './const'
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
          label: '容器类型',
          path: 'type',
          type: 'select',
          options: [
            {
              label: '基础容器',
              value: CONTAINER_TYPE.BASE
            },
            {
              label: 'flex容器',
              value: CONTAINER_TYPE.FLEX
            },
            {
              label: 'grid容器',
              value: CONTAINER_TYPE.GRID
            },
            {
              label: '列表容器',
              value: CONTAINER_TYPE.LIST
            }
          ],
          required: true,
          default: '按钮'
        },
        {
          type: 'inline-block', // 整体配置内联平铺展示
          description: '列表容器配置项',
          if: `$scope.type === ${CONTAINER_TYPE.LIST}`,
          items: [
            {
              label: '虚拟列表',
              key: 'link',
              type: 'text-input'
            },
            {
              label: '列表方向',
              key: 'direction',
              type: 'radio'
            }
          ]
        },
        {
          type: 'popup-block', // 整体配置通过一个配置按钮，点击后弹出配置弹框
          label: '配置Grid',
          if: `$scope.type === ${CONTAINER_TYPE.GRID}`,
          items: [
            {
              label: '虚拟列表',
              key: 'link',
              type: 'text-input'
            }
          ]
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
