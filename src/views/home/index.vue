<template>
  <div>
    <div class="top-bar">
      <div class="bg">
        <div class="video-poster"></div>
        <video muted="" loop="" autoplay="" preload="auto" class="bg-video">
          <source src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ploeh7plmlpe/vedio.mp4" />
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
      <div class="center-50">
        <div class="title">新闻订阅系统</div>
      </div>
    </div>
    <div class="content rowBS">
      <div class="left columnSS">
        <div class="nav rowBC">
          <div class="channel" :class="checkIndex === -2 ? 'checked' : ''" @click="check(-2)">已订阅</div>
          <div class="channel" :class="checkIndex === -1 ? 'checked' : ''" @click="check(-1)">推荐</div>
          <div
            v-for="(item, index) in newsStore.channel"
            :key="item.id"
            class="channel"
            :class="checkIndex === index ? 'checked' : ''"
            @click="check(index)"
          >
            {{ item.name }}
          </div>
          <div class="channel">更多</div>
        </div>
        <div class="news">
          <div v-for="(item, index) in newsStore.newsInfo" :key="index" class="news-item">
            <div class="title">{{ item.title }}</div>
            <div class="author">{{ item.author }}</div>
          </div>
        </div>
      </div>
      <div class="right"></div>
    </div>
  </div>
  <login v-if="loginDialog" @close="closeDialog"></login>
</template>

<script setup>
import Login from '@/views/login/index.vue'
import useStore from '@/store'
const { newsStore } = useStore()

const loginDialog = ref(false)
const checkIndex = ref(-1)

const check = (index) => {
  checkIndex.value = index
}

const closeDialog = () => {
  loginDialog.value = false
  console.log(newsStore.channel)
}
</script>

<style lang="scss" scoped>
.top-bar {
  position: relative;
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
      background-image: url('https://lf3-static.bytednsdoc.com/obj/eden-cn/ploeh7plmlpe/first_page.jpg');
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
  .title {
    font-size: 36px;
    font-weight: bold;
    color: #fff;
  }
}
.content {
  margin: 0 auto;
  padding: 16px;
  width: 1066px;
  font-size: 20px;
  .left {
    width: 676px;
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
    .news {
      margin-top: 25px;

      &-item {
        margin-bottom: 20px;
      }
      .title {
        padding: 10px 0;
        cursor: pointer;
      }
      .title:hover {
        color: #f04142;
      }
      .author {
        font-size: 14px;
      }
    }
  }
  .right {
    width: 318px;
    height: 100px;
  }
}
</style>
