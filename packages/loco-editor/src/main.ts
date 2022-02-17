import { createPinia } from "pinia";
import requiredElements from "./element-plus";
import router from "./router";
import { app } from "./app";
import "modern-normalize";

// 按需注册element-plus组件
requiredElements.forEach((element) => {
  app.component(element.name, element);
});

app.use(createPinia());
app.use(router);

app.mount("#app");
