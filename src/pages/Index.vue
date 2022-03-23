<template>
  <div class="content">
    <xxv-icon-list :data="data" :columns="columns">
      <template #time="scope">
        {{ scope.row.time }}
      </template>
    </xxv-icon-list>
  </div>
</template>

<script setup lang="ts">
import XxvIconList from '@/component/table/ScrollTable.vue';
import { ref } from 'vue';
const data = ref([
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
  {
    pm: 4,
    code: 'MG-569246S',
    num: 361334,
    time: '7.496',
  },
  {
    pm: 5,
    code: 'MG-569246S',
    num: 361335,
    time: '8.496',
  },
  {
    pm: 6,
    code: 'MG-569246S',
    num: 361336,
    time: '9.496',
  },
  {
    pm: 7,
    code: 'MG-569246S',
    num: 361337,
    time: '10.496',
  },
  {
    pm: 8,
    code: 'MG-569246S',
    num: 361338,
    time: '11.496',
  },
  {
    pm: 9,
    code: 'MG-569246S',
    num: 361339,
    time: '12.496',
  },
  {
    pm: 10,
    code: 'MG-569246S',
    num: 3613310,
    time: '13.496',
  },
  {
    pm: 11,
    code: 'MG-569246S',
    num: 3613310,
    time: '14.496',
  },
  {
    pm: 12,
    code: 'MG-569246S',
    num: 3613310,
    time: '15.496',
  },
  {
    pm: 13,
    code: 'MG-569246S',
    num: 3613310,
    time: '16.496',
  },
  {
    pm: 14,
    code: 'MG-569246S',
    num: 3613310,
    time: '17.496',
  },
  {
    pm: 15,
    code: 'MG-569246S',
    num: 3613310,
    time: '18.496',
  },
]);
const columns = ref([
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
]);
</script>

<style lang="scss" scoped>
.content {
  width: 400px;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
