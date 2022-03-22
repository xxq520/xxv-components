<!--
 * @author: xiexiangquan
 * @Date: 2022-03-21 09:09:15
 * @description: 自动滚动表格组件
-->
<template>
  <div ref="container" class="content-container">
    <el-table
      :show-header="showHeader"
      :max-height="400"
      :empty-text="emptyText"
      :data="data"
      style="width: 100%"
    >
      <el-table-column
        v-for="(item, index) in getColumns"
        :key="index"
        :prop="item.key"
        :label="item.title"
        :align="item.align"
        :width="item.width || 'auto'"
      >
        <!-- 插槽定义 -->
        <template #default="scope">
          <slot :name="item.key" :row="scope.row">
            {{ item.key === 'index' ? scope.row.pm : scope.row[item.key] }}
          </slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
/** element样式引入 */
import 'element-plus/theme-chalk/base.css';
import 'element-plus/theme-chalk/el-table.css';
import 'element-plus/theme-chalk/el-scrollbar.css';
import { ElTable, ElTableColumn } from 'element-plus';
import { defineComponent, onMounted, ref, onUnmounted, computed } from 'vue';
interface IColumns {
  key: string;
  title: string;
  align: 'center' | 'left' | 'right';
  width: number;
}
export default defineComponent({
  name: 'XxvScrollTable',
  components: {
    ElTable,
    ElTableColumn,
  },
  props: {
    /** 表格的高度设置 */
    height: {
      type: [String, Number],
      default: '100%',
    },
    /** 表格数据(array) */
    data: {
      type: Array,
      default: () => [],
    },
    /** 表头设置(array) */
    columns: {
      type: Array,
      default: () => [],
    },
    /** 是否显示表头(boolean) */
    showHeader: {
      type: Boolean,
      default: true,
    },
    /** 内容超出视高后自动滚动(自动轮播)(boolean) */
    autoPlay: {
      type: Boolean,
      default: true,
    },
    /** 表格的滚动配置(object) */
    scrollConfig: {
      type: Object,
      default: () => ({
        duration: 500,
        interval: 3000,
      }),
    },
    /** 空数据时显示的文本内容 */
    emptyText: {
      type: String,
      default: '暂无数据可显示',
    },
  },
  emits: {},
  setup(props) {
    /** 获取表头内容 */
    const getColumns = computed(() => props.columns as Array<IColumns>);
    const container = ref();
    /** 表格内容容器 */
    const tableContent = ref();
    /** 表格主体包裹每一行的容器 */
    const tableRow = ref();
    /** 滚动定时器 */
    let autoPlayTimer: any = null;
    let intersectionObserver: any = null;

    /** 获取表格中每行的高度 */
    const getRowHeight = () => {
      const table = tableContent.value;
      /** 有表头的话需要除去表头的高度 */
      return (table.scrollHeight || table.offsetHeight) / props.data.length;
    };

    /** 设置表格自动滚动 */
    const setTableAutoPlay = () => {
      /**
       * 每次获取dom为了确保dom更新后数量是最新的
       * 表格所有行的容器tbody */
      tableRow.value = container.value
        .getElementsByClassName('el-table__body')[0]
        .getElementsByTagName('tbody')[0];
      let tableBody = tableRow.value;

      /** 可视高度及包含滚动高度 */
      const { offsetHeight, scrollHeight } = tableContent.value;
      /** 判断当前是否有滚动区域，有才进行滚动 */
      if (!tableRow.value.children.length || !(offsetHeight <= scrollHeight))
        return;
      autoPlayTimer && clearTimeout(autoPlayTimer);

      /** 进行自动滚动操作(整体滚动) */
      autoPlayTimer = setTimeout(() => {
        /** 是否触底判断 */
        let isDiBottom = false;
        /** 监听元素前，先把上一次监听的事件销毁 */
        intersectionObserver?.disconnect();
        intersectionObserver = new IntersectionObserver((entries) => {
          if (entries[0].intersectionRatio >= 0.7) {
            isDiBottom = true;
            setTableBackTop();
          }
        });
        /** 监听是否触底 */
        intersectionObserver.observe(
          tableBody.children[tableBody.children.length - 1],
        );
        /** 没有触底，继续滚动下一行 */
        !isDiBottom && scrollLine();
      }, props.scrollConfig.interval);
    };

    /** 表格回到顶部 */
    const setTableBackTop = () => {
      let table = tableContent.value;
      clearTimeout(autoPlayTimer);
      /** 判断当前容器是否已经回到顶部（回到顶部） */
      if (table.scrollTop <= 0)
        return setTimeout(setTableAutoPlay.bind(this), 1000);
      /** 重新开始向下滚动 */
      autoPlayTimer = setTimeout(() => {
        table.scrollTop -= table.scrollTop / 10;
        setTableBackTop();
      }, 10);
    };

    /** 单行滚动 */
    const scrollLine = () => {
      let tableBody = tableRow.value;
      let table = tableContent.value as HTMLDivElement;
      /** 获取滚动单行的行高 */
      const lineHeight = getRowHeight();
      /** 获取当前滚动的行 */
      const nowLine = Math.round(table.scrollTop / lineHeight);
      /** 滚动到多少进行停止滚动 */
      const stopHeight = tableBody.children[nowLine].offsetTop + lineHeight;
      /** 上一次滚动的位置 */
      let prevScroll = table.scrollTop;
      const handle = () => {
        clearTimeout(autoPlayTimer);
        /** 单行滚动已经结束，开始下一行的滚动 */
        if (table.scrollTop >= stopHeight) return setTableAutoPlay();

        /** 继续单行滚动 */
        autoPlayTimer = setTimeout(() => {
          table.scrollTop += 1;

          /** 相同位置则判断为到底了 */
          if (table.scrollTop === prevScroll) return setTableAutoPlay();
          prevScroll = table.scrollTop;
          handle();
        }, props.scrollConfig.duration / lineHeight);
      };
      handle();
    };

    /** 初始化表格监听事件 */
    const init = () => {
      /** 移入事件 */
      container.value.addEventListener('mouseenter', () =>
        clearTimeout(autoPlayTimer),
      );
      /** 移出事件 */
      container.value.addEventListener('mouseleave', () => setTableAutoPlay());

      /** 表格容器 */
      tableContent.value =
        container.value.getElementsByClassName('el-scrollbar__wrap')[0];

      /** 设置自动轮播 */
      setTimeout(setTableAutoPlay, 100);
    };
    onMounted(() => {
      init();
    });
    onUnmounted(() => clearTimeout(autoPlayTimer));
    return {
      container,
      getColumns,
    };
  },
});
</script>

<style lang="scss" scoped>
.content-container {
  width: auto;
  overflow-y: hidden;
}
table {
  margin: 0;
}
</style>
