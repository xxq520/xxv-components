import { App } from "vue";
import { XxvIconList } from "./component/icon-list/icon-list";
import { XxvScrollTable } from "./component/table/scroll-table";

const components = [XxvIconList, XxvScrollTable];

/** 全局注册 */
const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};


/** 局部注册(按需引入) */
export { XxvIconList, XxvScrollTable, install };

export default {
  install,
};
