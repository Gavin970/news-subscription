<template>
  <div class="nav rowBC">
    <div class="left rowSC">
      <div class="logo">新闻订阅系统</div>
      <nav-bar :is-check="false"></nav-bar>
    </div>
    <div class="right">
      <div class="login" @click="loginDialog = true">登录</div>
    </div>
  </div>
  <div class="news">
    <div class="title">{{ newsItem.title }}</div>
    <div class="info">{{ newsItem.date }} · {{ newsItem.author }}</div>
    <div class="content">{{ newsItem.content }}</div>
  </div>

  <login v-if="loginDialog" @close="closeDialog"></login>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import Login from '@/views/login/index.vue'
import NavBar from './nav-bar.vue'
import useStore from '@/store'

const { newsStore } = useStore()

const route = useRoute()
const newsItem = route.query

const loginDialog = ref(false)

const closeDialog = () => {
  loginDialog.value = false
  console.log(newsStore.channel)
}
</script>

<style lang="scss" scoped>
.nav {
  padding: 0 20px;
  height: 64px;
  .left {
    font-size: 16px;
  }
  .logo {
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #f04142;
  }
  .login {
    width: 50px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    background-color: #f04142;
    border-radius: 6px;
    cursor: pointer;
  }
}
.news {
  margin: 40px auto;
  width: 60vw;
  .title {
    font-size: 32px;
    font-weight: bold;
  }
  .info {
    margin: 20px 0 20px 20px;
    color: #666;
  }
  .content {
    font-size: 18px;
    white-space: pre-wrap;
  }
}
</style>
