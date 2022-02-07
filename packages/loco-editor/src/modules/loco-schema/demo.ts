import Schema from './schema.class'
import { ref } from 'vue'
import SchemaNode from './schema-node.class'

const demoSchemaStr = {
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
    childNodes: [
      {
        tag: 'loco-button',
        text: 'p11111',
        nodeId: '111',
        style: {
          fontWeight: 'bold',
          marginTop: '120px'
        },
        event: {
          on: {
            '#mybtn@click': {
              type: 'base',
              action: 'hide',
              params: {
                nodeId: '123'
              }
            }
          },
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
        },
        childNodes: [
          // {
          //   tag: 'card-demo',
          //   text: 'p1111122',
          //   nodeId: '11122',
          //   style: {
          //     fontWeight: 'bold',
          //     marginTop: '100px'
          //   },
          //   event: {
          //     on: {},
          //     emit: {
          //       click: '#mybtn@click'
          //     }
          //   }
          // },
          // {
          //   tag: 'card-demo',
          //   text: 'p1111122',
          //   nodeId: '11122222',
          //   style: {
          //     fontWeight: 'bold',
          //     marginTop: '100px'
          //   },
          //   event: {
          //     on: {},
          //     emit: {
          //       click: '#mybtn@click'
          //     }
          //   }
          // },
          // {
          //   tag: 'card-demo',
          //   text: 'p1111122',
          //   nodeId: '111333',
          //   style: {
          //     fontWeight: 'bold',
          //     marginTop: '100px'
          //   },
          //   event: {
          //     on: {},
          //     emit: {
          //       click: '#mybtn@click'
          //     }
          //   }
          // },
          // {
          //   tag: 'card-demo',
          //   text: 'p1111122',
          //   nodeId: '111444',
          //   style: {
          //     fontWeight: 'bold',
          //     marginTop: '100px'
          //   },
          //   event: {
          //     on: {},
          //     emit: {
          //       click: '#mybtn@click'
          //     }
          //   }
          // },
          {
            tag: 'slot-zone',
            nodeId: '111555',
            props: {
              id: '111555',
              includes: ['button']
            }
          }
        ],
        editorInfo: {
          // slot: {
          //   width: '100%',
          //   height: '200px'
          // },
          slot: [
            {
              name: 'header',
              width: '100%',
              height: '100px'
            },
            {
              name: 'footer',
              width: '100%',
              height: '100px'
            }
          ]
        }
      },
      // {
      //   tag: 'loco-button',
      //   nodeId: 'img000',
      //   style: {
      //     fontWeight: 'bold'
      //   },
      //   props: {
      //     src: {
      //       type: 'static',
      //       value: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2203133702,1040096964&fm=26&gp=0.jpg'
      //     },
      //     other: {
      //       type: 'ref',
      //       path: 'root.module1'
      //     }
      //   }
      // },
      {
        tag: 'loco-image',
        nodeId: 'img000',
        props: {
          src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2203133702,1040096964&fm=26&gp=0.jpg'
        },
        style: {
          width: '100px'
        }
      }
      // {
      //   tag: 'loco-popup',
      //   nodeId: 'popup000',
      //   props: {
      //     popupPosition: {
      //       type: 'static',
      //       value: 'middle'
      //     }
      //   },
      //   childNodes: [
      //     // {
      //     //   tag: 'slot-zone',
      //     //   nodeId: '11155522',
      //     //   props: {
      //     //     id: '11155522',
      //     //     height: '100%'
      //     //   }
      //     // }
      //   ]
      // }
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

const demoSchema = ref(new Schema(demoSchemaStr))

export default demoSchema
export { demoSchemaStr }
