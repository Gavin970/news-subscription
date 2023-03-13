<template>
  <div class="nav rowBC">
    <div class="channel" :class="checkIndex === -2 && props.isCheck ? 'checked' : ''" @click="check(-2)">已订阅</div>
    <div class="channel" :class="checkIndex === -1 && props.isCheck ? 'checked' : ''" @click="check(-1)">推荐</div>
    <div
      v-for="(item, index) in newsStore.channel"
      :key="item.id"
      class="channel"
      :class="checkIndex === index && props.isCheck ? 'checked' : ''"
      @click="check(index)"
    >
      {{ item.name }}
    </div>
    <div class="channel">更多</div>
  </div>
</template>

<script lang="ts" setup>
import useStore from '@/store'
import { defineProps } from 'vue'

const { newsStore } = useStore()

const props = defineProps({
  isCheck: {
    type: Boolean,
    default: true
  }
})

const checkIndex = ref(-1)

const check = (index) => {
  checkIndex.value = index
}
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
}
.channel {
  cursor: pointer;
}
.checked {
  position: relative;
  color: #f04142;
}
.checked:after {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 3px;
  background-color: #f04142;
  content: '';
}
</style>
