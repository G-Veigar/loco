import Schema from "./schema.class";
import { ref } from "vue";
import SchemaNode from "./schema-node.class";

const demoSchemaStr = {
  title: "抽奖活动", // 页面title
  manifest: {
    version: "1.0.0", // 当前活动版本
    description: "端午节抽奖，抽iphone",
    icon: "", // 页面图标
    creator: "gaoge@qq.com", // 活动创建者,
    createTime: 123242435, // 活动创建时间
    lastModifiedTime: 123242435, // 上次编辑时间
  },
  _isRoot: true, // 是否是根组件
  // 根容器组件
  container: {
    tag: "div", // TODO: 兼容page
    nodeId: "container",
    // style: {
    //   color: '#333',
    //   fontSize: 16,
    // },
    props: {
      // innerText: ''
    },
    event: {},
    childNodes: [
      {
        tag: "loco-button",
        text: "弹出Dialog",
        nodeId: "button111",
        // style: {
        //   fontWeight: "bold",
        //   marginTop: "120px",
        // },
      },
      {
        tag: "loco-button",
        text: "弹出Toast",
        nodeId: "button222",
      },
      {
        tag: "loco-button",
        text: "显隐图片",
        // style: [
        //   {
        //     state: "default",
        //     style: {
        //       color: "#fff",
        //     },
        //   },
        //   {
        //     state: "disabled",
        //     style: {
        //       color: "#ccc",
        //     },
        //   },
        // ],
        nodeId: "button333",
      },
      {
        tag: "loco-button",
        text: "组合action",
        nodeId: "button444",
      },
      {
        tag: "loco-button",
        text: "组合action2",
        nodeId: "button555",
      },
      {
        tag: "loco-button",
        nodeId: "button666",
      },
      {
        tag: "loco-button",
        text: "setData",
        style: {
          width: "200px",
          margin: "10px 0",
          backgroundColor: "orange",
        },
        nodeId: "button777",
      },
      {
        tag: "loco-button",
        text: "长按",
        nodeId: "button888",
      },
      {
        tag: "loco-image",
        text: "p11111",
        nodeId: "img11122",
        props: {
          src: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2203133702,1040096964&fm=26&gp=0.jpg",
        },
      },
      // {
      //   tag: "loco-dialog",
      //   nodeId: "dialog111",
      //   props: {
      //     title: "确定xxx吗？",
      //     message: "哈哈哈哈哈",
      //     showCancelBtn: true,
      //   },
      // },
      {
        tag: "loco-container",
        nodeId: "container123",
        childNodes: [
          {
            tag: "card-demo",
            text: "p1111122",
            nodeId: "11122",
            // style: {
            //   fontWeight: "bold",
            //   marginTop: "100px",
            // },
            event: {
              on: {},
              emit: {
                click: "#mybtn@click",
              },
            },
          },
          {
            tag: "card-demo",
            text: "p1111122",
            nodeId: "11122222",
            // style: {
            //   fontWeight: "bold",
            //   marginTop: "100px",
            // },
            event: {
              on: {},
              emit: {
                click: "#mybtn@click",
              },
            },
          },
          {
            tag: "card-demo",
            text: "p1111122",
            nodeId: "111333",
            // style: {
            //   fontWeight: "bold",
            //   marginTop: "100px",
            // },
            event: {
              on: {},
              emit: {
                click: "#mybtn@click",
              },
            },
          },
          {
            tag: "card-demo",
            text: "p1111122",
            nodeId: "111444",
            // style: {
            //   fontWeight: "bold",
            //   marginTop: "100px",
            // },
            event: {
              on: {},
              emit: {
                click: "#mybtn@click",
              },
            },
          },
          {
            tag: "slot-zone",
            nodeId: "111555",
            props: {
              id: "111555",
              includes: ["button"],
            },
          },
        ],
        editorInfo: {
          // slot: {
          //   width: '100%',
          //   height: '200px'
          // },
          slot: [
            {
              name: "header",
              width: "100%",
              height: "100px",
            },
            {
              name: "footer",
              width: "100%",
              height: "100px",
            },
          ],
        },
      },
      {
        tag: "loco-tab",
        nodeId: "tab000",
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
    ],
  },
  // 全局状态
  states: {
    $root: {},
    123: {
      $show: true,
    },
    img11122: {
      $show: false,
    },
    button666: {
      $show: true,
      $disabled: true,
      $loading: true,
      $for: [
        {
          text: "循环按钮1",
        },
        {
          text: "循环按钮2",
        },
      ],
    },
  },
  // 事件处理器
  actions: {
    // 全局事件，如window，document上的或者一些自定义事件
    $root: {
      pageScrollTop: {
        type: "base",
        action: "toast",
        params: {
          msg: "页面已经滚动到了顶部",
        },
      },
    },
    button111: {
      click: {
        type: "base",
        action: "showDialog",
        params: {
          showCancelBtn: true,
          title: "hehe",
          message: "hahahaha",
        },
      },
      dbclick: {
        type: "combine",
      },
    },
    button222: {
      click: {
        type: "base",
        action: "showToast",
        params: {
          message: "大大法人个人沟通欢迎欢迎",
        },
      },
    },
    button333: {
      click: {
        type: "base",
        action: "toggleShow",
        params: {
          nodeId: "img11122",
        },
      },
    },
    button444: {
      click: {
        type: "compose",
        actionData: [
          [
            {
              type: "base",
              action: "showDialog",
              params: {
                showCancelBtn: true,
                title: "提示",
                message: "确定要toast吗",
              },
            },
            {
              type: "condition",
              handles: [
                {
                  condition: "confirm",
                  type: "base",
                  action: "showToast",
                  params: {
                    message: "你确定了",
                  },
                },
                {
                  condition: "cancel",
                  type: "base",
                  action: "showToast",
                  params: {
                    message: "你取消了",
                  },
                },
              ],
            },
          ],
        ],
      },
    },
    button555: {
      click: {
        type: "base",
        action: "showLoading",
        params: {
          message: "加载中...",
        },
      },
    },
    button777: {
      click: {
        type: "base",
        action: "setData",
        params: {
          nodeId: "button666",
          key: "$for",
          value: [
            {
              text: "我被改变了1",
            },
            {
              text: "我被改变了2",
            },
          ],
        },
      },
    },
    button888: {
      $longPress: {
        type: "base",
        action: "showToast",
        params: {
          message: "我长按了",
        },
      },
    },
  },
};

const demoSchema = ref(new Schema(demoSchemaStr));

export default demoSchema;
export { demoSchemaStr };
