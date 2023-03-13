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
          <router-link class="rtlk" to="/about">关于我们</router-link>
          <router-link class="rtlk" to="/feedback">反馈</router-link>
          <router-link class="rtlk" to="/complaint">投诉举报</router-link>
        </div>
        <login-btn :user="user" @showDialog="showDialog"></login-btn>
      </div>
      <div class="center-50">
        <div class="title">新闻订阅系统</div>
      </div>
    </div>
    <div class="content rowBS">
      <div class="left columnSS">
        <nav-bar></nav-bar>
        <!--        <div class="nav rowBC">-->
        <!--          <div class="channel" :class="checkIndex === -2 ? 'checked' : ''" @click="check(-2)">已订阅</div>-->
        <!--          <div class="channel" :class="checkIndex === -1 ? 'checked' : ''" @click="check(-1)">推荐</div>-->
        <!--          <div-->
        <!--            v-for="(item, index) in newsStore.channel"-->
        <!--            :key="item.id"-->
        <!--            class="channel"-->
        <!--            :class="checkIndex === index ? 'checked' : ''"-->
        <!--            @click="check(index)"-->
        <!--          >-->
        <!--            {{ item.name }}-->
        <!--          </div>-->
        <!--          <div class="channel">更多</div>-->
        <!--        </div>-->
        <div class="news">
          <div v-for="(item, index) in newsStore.newsInfo" :key="index" class="news-item">
            <!--            <div class="title">{{ item.title }}</div>-->
            <router-link class="rtlk" :to="{ path: '/newsDetail', query: item }">{{ item.title }}</router-link>
            <div class="author">{{ item.author }}</div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="hot-news rowSC">
          <div class="ico"></div>
          <div class="title">热点新闻</div>
        </div>
        <div v-for="(item, index) in newsStore.newsInfo" :key="index" class="news-item rowSS">
          <div :class="rankColor(index)" class="rank">{{ index + 1 }}</div>
          <router-link class="rtlk" :to="{ path: '/newsDetail', query: item }">{{ item.title }}</router-link>
        </div>
      </div>
    </div>
  </div>
  <login v-if="loginDialog" @close="closeDialog"></login>
</template>

<script setup>
import Login from '@/views/login/index.vue'
import LoginBtn from '@/views/home/components/login-btn.vue'
import NavBar from './components/nav-bar.vue'
import useStore from '@/store'

const { newsStore } = useStore()

const loginDialog = ref(false)

const user = ref('')

onMounted(() => {
  user.value = localStorage.getItem('phone') || ''
})
const showDialog = (value) => {
  loginDialog.value = value
}

const rankColor = (index) => {
  switch (index) {
    case 0:
      return 'first'
    case 1:
      return 'second'
    case 2:
      return 'third'
    default:
      return 'other'
  }
}

const closeDialog = () => {
  loginDialog.value = false
  user.value = localStorage.getItem('phone') || ''
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
      .rtlk {
        margin-right: 36px;
        font-size: 16px;
        color: #fff;
      }
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

  .rtlk {
    color: #000;
  }
  .rtlk:hover {
    color: #f04142;
  }
  .left {
    width: 676px;

    .news {
      margin-top: 25px;

      &-item {
        height: 60px;
        margin-bottom: 20px;
      }
      .title {
        padding: 10px 0;
        cursor: pointer;
      }
      .author {
        font-size: 14px;
      }
    }
  }
  .right {
    margin-top: 30px;
    width: 318px;
    height: 100px;
    .ico {
      width: 20px;
      height: 20px;
      background-image: url('./src/assets/hot-ico.png');
      background-size: contain;
      background-repeat: no-repeat;
    }
    .news-item {
      margin-top: 10px;
      font-size: 16px;

      .rank {
        margin-right: 10px;
        font-size: 18px;
        font-weight: bold;
      }
      .first {
        color: #a82e2e;
      }
      .second {
        color: #f04142;
      }
      .third {
        color: #ff9a03;
      }
      .other {
        color: #999;
      }
    }
  }
}
</style>
