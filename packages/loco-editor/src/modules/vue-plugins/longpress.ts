export default {
  install: (app: any) => {
    app.directive("longpress", {
      mounted(el: any) {
        let timer: any;
        el.addEventListener("touchstart", () => {
          timer = setTimeout(function () {
            console.log("长按了");
          }, 500);
        });

        el.addEventListener("touchmove", () => {
          clearTimeout(timer);
        });

        el.addEventListener("touchend", () => {
          clearTimeout(timer);
          return false;
        });
      },
    });
  },
};
