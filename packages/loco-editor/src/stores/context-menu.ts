import { defineStore } from "pinia";

export const useContextMenuStore = defineStore({
  id: "contextMenu",
  state: () => ({
    menuList: [
      {
        label: "hehe",
        id: "hehe",
        action: () => {
          console.log("hehe");
        },
      },
      {
        isGroup: true,
        id: "haha-grounp",
        items: [
          {
            label: "haha",
            id: "haha",
            childs: [
              {
                label: "haha111",
                id: "haha111",
                action: () => {
                  console.log("haha111");
                },
              },
              {
                label: "haha222",
                id: "haha222",
                action: () => {
                  console.log("haha222");
                },
              },
            ],
          },
          {
            label: "xixi",
            id: "xixi",
            action: () => {
              console.log("xixi");
            },
          },
        ],
      },
      {
        label: "kds kc",
        id: "kds",
        action: () => {
          console.log("kds kc");
        },
      },
    ],
    show: false,
    position: {
      left: 500,
      top: 250,
    },
    childMenus: {
      left: 0,
      top: 0,
      childs: undefined,
    },
  }),
  actions: {
    setContextMenu(options: { key: string; value: unknown }): void {
      const { key, value } = options;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this[key] = value;
    },
  },
});
