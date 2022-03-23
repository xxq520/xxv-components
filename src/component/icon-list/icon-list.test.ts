/** 单文件组件测试用例 */
import Test from './IconList.vue';
/** node-module */
import { mount } from '@vue/test-utils';

/**
 * 测试样例
 * 更多测试样例参考:
 * https://uino-hndep.yuque.com/docs/share/06343c3d-012d-4fb3-9462-620fabea7153?# 《测试框架Jest》
 * */
test('SFC: test Request.vue', async () => {
  const props = {
    renderData: [
      {
        name: '计算设备',
        value: 0,
      },
      {
        name: '网络设备',
        value: 0,
      },
      {
        name: '安全设备',
        value: 0,
      },
      {
        name: '存储设备',
        value: 0,
      },
    ],
  };
  /** 渲染挂载组件 */
  const wrapper = mount(Test, { props });
  /** 判断渲染的数量是传输进去的7个数据 */
  expect(wrapper.findAll('.item-box').length).toBe(4);
});
