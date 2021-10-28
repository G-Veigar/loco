const schema = {
  title: '抽奖活动', // 页面title
  manifest: {
    version: '1.0.0', // 当前活动版本
    description: '端午节抽奖，抽iphone',
    icon: '', // 页面图标
    creator: 'gaoge@qq.com', // 活动创建者,
    createTime: 123242435, // 活动创建时间
    lastModifiedTime: 123242435 // 上次编辑时间
  },
  _isRoot: true, // 是否是根组件
  // 根容器组件
  container: {
    tag: 'div', // TODO: 兼容page
    nodeId: 'container',
    style: {
      // color: '#333',
      // fontSize: 16,
    },
    props: {
      // innerText: ''
    },
    event: {},
    children: [
      {
        tag: 'loco-button',
        text: 'p11111',
        nodeId: '111',
        style: {
          fontWeight: 'bold',
          marginTop: '100px'
        },
        event: {
          on: {},
          emit: {
            click: '#mybtn@click'
          }
        }
      },
      {
        tag: 'loco-container',
        nodeId: '123',
        text: 'p222',
        style: {
          color: '#369'
        },
        event: {
          emit: {},
          on: {
            '#123@click': {
              type: 'base',
              name: 'hide',
              params: {
                nodeId: '123'
              }
            },
            '#mybtn@click': {
              type: 'base',
              name: 'hide',
              params: {
                nodeId: '123'
              }
              // params: {
              //   url: 'http://www.baidu.com'
              // }
              // app
              //   .setData()
              //   .hide()
              //   .show()
              //   .showToast()
              //   .showLoading()
              //   .closeToast()
              //   .navTo()
              //   .routerPush()
              //   .routerReplace()
              //   .routerBack()
              //   .requestApi()
              //   .track()
            }
          }
        }
      },
      {
        tag: 'loco-button',
        nodeId: 'img000',
        style: {
          fontWeight: 'bold'
        },
        props: {
          src: {
            type: 'static',
            value: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2203133702,1040096964&fm=26&gp=0.jpg'
          },
          other: {
            type: 'ref',
            path: 'root.module1'
          }
        }
      }
    ]
  },
  // 全局状态
  state: {
    $root: {},
    123: {
      $show: true,
      $for: [
        {
          text: '123'
        },
        {
          text: '456'
        }
      ]
    }
  }
}

export default schema
