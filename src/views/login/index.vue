<template>
  <div class="mark"></div>
  <div v-if="isLogin" class="login-dialog center-50">
    <div class="title rowBC">
      <div class="text">登录后内容更精彩</div>
      <div class="close rowCC" @click="closeDialog">
        <el-icon><Close /></el-icon>
      </div>
    </div>
    <div class="iptItem columnSS">
      <div class="sub">账号密码登录</div>
      <input v-model="userInfo.phone" class="ipt mt-1" placeholder="请输入账号：" type="tel" autocomplete="tel" />
      <input v-model="userInfo.password" class="ipt mt-1" placeholder="请输入密码：" type="password" />
      <div class="toSubmit change" @click="isLogin = !isLogin">还没有账号？立即注册</div>
      <div class="loginBtn" :class="allowLogin(userInfo.phone, userInfo.password)" @click="login">登录</div>
    </div>
  </div>
  <div v-if="!isLogin" class="submit-dialog center-50">
    <div class="title rowBC">
      <div class="text">注册账号</div>
      <div class="close rowCC" @click="closeDialog">
        <el-icon><Close /></el-icon>
      </div>
    </div>
    <div class="iptItem columnSS">
      <div class="rowSS">
        <div class="left">
          <div class="mt-1">手机号：</div>
          <div class="mt-1">密码：</div>
          <div class="mt-1">昵称：</div>
          <div class="mt-1">性别：</div>
        </div>
        <div class="right columnSS">
          <input v-model="userInfo.phone" class="ipt mt-1" placeholder="请输入账号：" />
          <input v-model="userInfo.password" class="ipt mt-1" placeholder="请输入密码：" type="password" />
          <input v-model="userInfo.username" class="ipt mt-1" placeholder="请输入昵称：" maxlength="10" />
          <div class="rowSC mt-1 radio">
            <input v-model="userInfo.gender" class="btn" type="radio" :value="0" /> 男
            <input v-model="userInfo.gender" class="btn sec" type="radio" :value="1" /> 女
          </div>
        </div>
      </div>
      <div class="toLogin change" @click="isLogin = !isLogin">已有账号？立即登录</div>
      <div class="loginBtn submit" :class="allowLogin()">注册</div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'

const userInfo = reactive({
  phone: '',
  password: '',
  username: '',
  gender: 0
})
const isLogin = ref(true)

const $emit = defineEmits(['close'])

// 登录逻辑
const login = () => {
  localStorage.setItem('phone', userInfo.phone)
  closeDialog()
}

// 关闭登录注册弹窗
const closeDialog = () => {
  clearInfo()
  $emit('close', false)
}

// 清空信息
const clearInfo = () => {
  userInfo.phone = ''
  userInfo.password = ''
  userInfo.username = ''
  userInfo.gender = 0
}

const allowLogin = () => {
  if (userInfo.phone && userInfo.password) {
    return 'allow'
  }
}
</script>

<style lang="scss" scoped>
.mark {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
}
.login-dialog {
  width: 500px;
  height: 400px;
  border-radius: 10px;
  background-color: #eee;
  z-index: 999;
}
.submit-dialog {
  width: 500px;
  height: 470px;
  border-radius: 10px;
  background-color: #eee;
  z-index: 999;
}
.title {
  padding: 0 20px;
  height: 80px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.05);
  .text {
    font-size: 24px;
  }
  .close {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #ddd;
    cursor: pointer;
  }
}
.iptItem {
  padding-left: 30px;
  padding-top: 30px;
  font-size: 20px;
  .sub {
    margin-bottom: 10px;
  }
  .left .mt-1 {
    height: 45px;
    line-height: 45px;
    font-size: 18px;
  }
  .right {
    font-size: 16px;

    .radio {
      height: 45px;

      .btn {
        margin-right: 3px;
      }
      .sec {
        margin-left: 15px;
      }
    }
  }
  .ipt {
    padding: 1px 10px;
    width: 300px;
    height: 45px;
    font-size: 16px;
    border: none;
    border-radius: 7px;
  }
  .toSubmit {
    left: 150px;
  }
  .toLogin {
    left: 220px;
  }
  .change {
    position: relative;
    margin-top: 15px;
    font-size: 14px;
    cursor: pointer;
  }
  .loginBtn {
    margin-top: 20px;
    width: 300px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    color: #fff;
    background-color: rgba(240, 65, 66, 0.5);
    border-radius: 8px;
    cursor: pointer;
  }
  .submit {
    margin-left: 70px;
  }
  .allow {
    background-color: #f04142;
  }
}
</style>
