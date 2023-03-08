<template>
  <div>
    <div class="top-bar">
      <div class="bg">
        <div class="video-poster"></div>
        <video muted="" loop="" autoplay="" preload="auto" class="bg-video">
          <source src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ploeh7plmlpe/vedio.mp4">
        </video>
      </div>
      <div class="bar rowBC">
        <div class="left rowSC">
          <router-link class="item" to="/about">关于我们</router-link>
          <router-link class="item" to="/feedback">反馈</router-link>
          <router-link class="item" to="/complaint">投诉举报</router-link>
        </div>
        <div class="login" @click="loginDialog = true">登录</div>
      </div>
    </div>
    <div class="content"></div>
  </div>
  <login v-if="loginDialog" @close="closeDialog"></login>
</template>

<script setup>
import Login from '@/views/login/index.vue'
let loginDialog = ref(false)

const closeDialog = () => {
  loginDialog.value = false
}

</script>

<style lang="scss" scoped>
.top-bar {
  width: 100%;
  height: 360px;
  min-width: 1280px;

  .bg {
    position: absolute;
    width: 100%;
    height: 360px;
    overflow: hidden;

    .video-poster {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image:url("https://lf3-static.bytednsdoc.com/obj/eden-cn/ploeh7plmlpe/first_page.jpg");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .bg-video {
      position: relative;
      width: 100%;
      height: 360px;
      object-fit: cover;
      z-index: 1;
    }
  }

  .bar {
    position: relative;
    padding: 0 20px;
    height: 53px;
    font-size: 16px;
    color: #fff;
    z-index: 2;

    .left {

      .item {
        margin-right: 36px;
        font-size: 16px;
        color: #fff;
      }
    }

    .login {
      width: 50px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background-color: #2d8cf0;
      border-radius: 6px;
      cursor: pointer;
    }
  }
}
</style>
