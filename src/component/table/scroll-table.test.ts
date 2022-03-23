/** 单文件组件测试用例 */
import Test from './ScrollTable.vue';
/** node-module */
import { mount } from '@vue/test-utils';
// 模拟对 element-plus 的导入
jest.mock('element-plus', () => ({
  ElTable: () => '<div>Email Editor</div>',
  ElTableColumn: () => '<div>Email Editor</div>',
}));
jest.mock('element-plus/theme-chalk/base.css', () => ({}));
jest.mock('element-plus/theme-chalk/el-table.css', () => ({}));
jest.mock('element-plus/theme-chalk/el-scrollbar.css', () => ({}));
/**
 * 测试样例
 * 更多测试样例参考:
 * https://uino-hndep.yuque.com/docs/share/06343c3d-012d-4fb3-9462-620fabea7153?# 《测试框架Jest》
 * */
test('SFC: test Request.vue', async () => {
  const props = {
    data: [
      {
        pm: 1,
        code: 'MG-569246S',
        num: 361331,
        time: '4.496',
      },
      {
        pm: 2,
        code: 'MG-569246S',
        num: 361332,
        time: '5.496',
      },
      {
        pm: 3,
        code: 'MG-569246S',
        num: 361333,
        time: '6.496',
      },
    ],
    columns: [
      {
        key: 'index',
        title: '下标',
        align: 'center',
        width: 60,
      },
      {
        title: '功能号',
        key: 'code',
        align: 'left',
        width: 150,
      },
      {
        title: '数量/笔',
        key: 'num',
        align: 'center',
        width: '',
      },
      {
        title: '耗时(ms)',
        key: 'time',
        align: 'center',
        width: '',
      },
    ],
  };
  /** 渲染挂载组件 */
  mount(Test, { props });
  /** 判断渲染的数量是传输进去的7个数据 */
  // expect(wrapper.findAll(".item-box").length).toBe(4);
});
