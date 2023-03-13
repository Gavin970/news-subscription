<template>
  <div class="top"></div>
  <div class="content">
    <div class="user-info rowSS">
      <div class="head"></div>
      <div class="columnSS">
        <div class="username">用户{{ username }}</div>
        <div class="rowSC">
          <div class="subscribe-num">{{ mySubscribe.length }}</div>
          订阅
        </div>
      </div>
    </div>
    <div class="nav rowSC">
      <div class="item" :class="checkIndex === 0 ? 'checked' : ''" @click="checkIndex = 0">已订阅</div>
      <div class="item" :class="checkIndex === 1 ? 'checked' : ''" @click="checkIndex = 1">收藏</div>
    </div>
    <subscribe-list :check-index="checkIndex"></subscribe-list>
  </div>
</template>

<script setup>
import SubscribeList from './components/subscribe-list.vue'
import useStore from '@/store'

const { newsStore } = useStore()

const mySubscribe = newsStore.mySubscribe
const username = ref('')
const checkIndex = ref(0)

onMounted(() => {
  username.value = localStorage.getItem('phone') || ''
})
</script>

<style lang="scss" scoped>
.top {
  height: 60px;
}
.content {
  margin: 0 auto;
  width: 1066px;
}
.user-info {
  margin-top: 100px;
  font-size: 14px;
  .head {
    margin-right: 20px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: url('../../../assets/user.png');
    background-size: contain;
    background-repeat: no-repeat;
  }
  .username {
    margin-bottom: 10px;
    font-size: 28px;
    font-weight: bold;
  }
  .subscribe-num {
    margin-right: 3px;
    font-size: 24px;
    font-weight: bold;
  }
}
.nav {
  margin-top: 40px;
  padding-bottom: 7px;
  font-size: 18px;
  border-bottom: 1px solid #eee;
  .item {
    margin-right: 50px;
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
    width: 20px;
    height: 2px;
    background-color: #f04142;
    content: '';
  }
}
</style>
