<template>
  <div>
    <div class="content-container">
      <div v-for="(item, index) in getData" :key="index">
        <div class="item-box">
          <div class="img-commom">
            <img src="@/assets/img/icon/icon_left_one.png" alt="" />
          </div>
          <div class="right-text">
            <div class="text-name">{{ item.name }}</div>
            <div>
              <span class="text-value">
                {{ item.value }}
              </span>
              <span class="unit">台</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
interface IrenderData {
  renderData: {
    name: string;
    value: number;
  }[];
}
export default defineComponent({
  name: "XxvIconList",
  props: {
    renderData: {
      type: Array,
      default: () => [],
    },
  },
  emits: {},
  setup(props) {
    let { renderData } = <IrenderData>props;
    /** 处理数据 */
    const getData = computed(() => {
      return (
        renderData.length ? renderData : [
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
          {
            name: '视频会议',
            value: 0,
          },
          {
            name: '动环设备',
            value: 0,
          },
          {
            name: '多媒体设备',
            value: 0,
          },
          {
            name: '物联设备',
            value: 0,
          },
        ]
      );
    });
    return {
      getData,
    };
  },
});
</script>

<style lang="scss" scoped>
.content-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 4px;
  margin-top: -15px;
  margin-bottom: 43px;
  .item-box {
    width: 160px;
    display: flex;
    flex-direction: row;
    margin-top: 33px;
    .img-commom {
      width: 55px;
      height: 55px;
      img {
        width: 50px;
        height: 50px;
      }
    }
    .right-text {
      padding-left: 10px;
      .text-name {
        font-size: 18px;
        font-family: SourceHanSansCN-Normal, SourceHanSansCN;
        font-weight: 400;
        color: #dae6ff;
      }
      .text-value {
        width: 144px;
        font-size: 20px;
        font-family: DINCond-Bold, DINCond;
        font-weight: bold;
        color: #e0eaff;
        background: linear-gradient(180deg, #0afff5 0%, #139bff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .unit {
        font-size: 24px;
        font-family: SourceHanSansCN-Normal, SourceHanSansCN;
        font-weight: 400;
        color: #dae6ff;
      }
    }
  }
}
</style>
