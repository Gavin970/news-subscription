<template>
  <el-button class="btn" @click="login">登录</el-button>
</template>

<script setup>
import api from '@/api'
import router from '../router/index.js'
import { useStore } from '@/store'

const store = useStore()

const props = defineProps({
  userName: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  }
})

function login() {
  api.user
    .login({
      userName: props.userName,
      password: props.password
    })
    .then(
      (res) => {
        console.log('res：', res)
        store.user.setUserInfo(res)
        localStorage.setItem('token', res.token)
        localStorage.setItem('type', res.type)
        router.push({ name: 'Home' })
      },
      (err) => {
        console.error(err.message)
      }
    )
}
</script>

<style scoped></style>
