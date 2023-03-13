<template>
  <div v-if="!props.user" class="login" @click="showDialog">登录</div>
  <div v-else class="user rowSC" @click="showControl">
    <div class="head"></div>
    {{ props.user }}
  </div>
  <div v-if="isShowControl" class="control">
    <router-link to="./mySubscribe" class="item">个人中心</router-link>
    <router-link to="./mySubscribe" class="item">订阅管理</router-link>
    <router-link to="./mySubscribe" class="item">阅读历史</router-link>
    <router-link to="./mySubscribe" class="item">退出登录</router-link>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

const $emit = defineEmits(['showDialog'])
const props = defineProps({
  user: {
    type: String,
    default: ''
  }
})

const isShowControl = ref(false)

const showControl = () => {
  isShowControl.value = !isShowControl.value
}

const showDialog = () => {
  $emit('showDialog', true)
}
</script>

<style lang="scss" scoped>
.login {
  width: 50px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #2d8cf0;
  border-radius: 6px;
  cursor: pointer;
}
.user {
  cursor: pointer;
  user-select: none;

  .head {
    margin-right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgba(200, 200, 200, 0.45);
    background-image: url('./src/assets/user.png');
    background-size: contain;
    background-repeat: no-repeat;
  }
}
.control {
  position: absolute;
  top: 50px;
  right: 20px;
  border-radius: 10px;
  background-color: #fff;

  .item {
    margin: 10px 0;
    display: block;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #000;
    cursor: pointer;
  }
  .item:hover {
    background-color: #eee;
  }
}
.control:before {
  position: absolute;
  top: -5px;
  left: 45px;
  width: 10px;
  height: 10px;
  font-size: 30px;
  background-color: #fff;
  content: '';
  transform: rotate(45deg);
}
</style>
