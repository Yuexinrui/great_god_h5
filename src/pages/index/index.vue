<template>
  <div id="app">
    <img alt="Vue logo" src="../../assets/logo.png">
    <a href="/greatGod.html">跳转到大神页</a>
    <van-button type="danger">开始跳大神</van-button>
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model="show">
      <van-image width="300" height="300" fit="cover" src="./images/微信图片_20201121164618.jpg" />
    </van-popup>
    <van-image width="300" height="300" fit="cover" src="/images/微信图片_20201121164618.jpg" />
    <van-collapse v-model="activeNames">
      <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
      <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
      <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      activeNames: ['1'],
      show: false,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  a {
    color: yellowgreen;
    font-size: 20px;
  }
}
</style>
