<template>
  <div v-if="props.checkIndex === 0" class="list">
    <div v-if="!mySubscribe.length" class="nothing">
      <div class="img"></div>
      <div class="message">暂无订阅内容</div>
    </div>
    <div v-for="(item, index) in mySubscribe" v-else :key="index" class="list-wrap rowSC">
      <img :src="item.headUrl" alt="" class="head" />
      <div class="name">{{ item.name }}</div>
      <div v-if="item.isSubscribe" class="delete btn" @click="change(index, item.isSubscribe)">取消订阅</div>
      <div v-else class="subscribe btn" @click="change(index, item.isSubscribe)">订阅</div>
    </div>
  </div>
  <div v-if="props.checkIndex === 1" class="list">
    <div v-if="!myCollect.length" class="nothing">
      <div class="img"></div>
      <div class="message">暂无收藏内容</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import useStore from '@/store'

const { newsStore } = useStore()
const props = defineProps({
  checkIndex: {
    type: Number,
    default: 0
  }
})

const mySubscribe = newsStore.mySubscribe
const myCollect = newsStore.myCollect

const change = (index, isSubscribe) => {
  newsStore.setMySubscribeInfo({
    index: index,
    isSubscribe: !isSubscribe
  })
}
</script>

<style lang="scss" scoped>
.list {
  padding: 50px 30px;
}
.nothing {
  margin-top: 300px;
  margin-left: 50%;
  color: #999;
  .img {
    width: 100px;
    height: 100px;
    background-image: url('./src/assets/none.png');
    background-size: contain;
    background-repeat: no-repeat;
  }
}
.list-wrap {
  height: 120px;

  .head {
    margin-right: 20px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  .name {
    font-size: 18px;
    flex: 1;
  }
  .delete {
    color: #999;
    background-color: #ddd;
  }
  .subscribe {
    color: #fff;
    background-color: #f04142;
  }
  .btn {
    width: 80px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    border-radius: 7px;
    cursor: pointer;
  }
}
</style>
