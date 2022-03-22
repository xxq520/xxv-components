import { App } from "vue";
export declare interface xxv {
  install: (app: App) => void;
}
function xxvcomponent(main): xxv {
  return {
    install: (app: App) => {
      app.component(main.name, main);
    },
  };
}
export default xxvcomponent;
