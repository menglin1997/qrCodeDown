<!--
 * @Descripttion: 二维码
 * @version: 
 * @Author: zml
 * @Date: 2020-04-09 15:34:01
 * @LastEditors: zml
 * @LastEditTime: 2020-04-11 10:17:41
 -->
<template>
  <div class="home">
    <van-tabs v-model="active">
      <van-tab :title="item" v-for="(item, index) in nav" :key="index" @click="check(index)">
        <show v-if="active === 0" />
        <show-and-down v-if="active === 1" />
        <down v-if="active === 2" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import show from './components/showQrcode'
import showAndDown from './components/showAndDown'
import down from './components/downloadQrcode'
export default {
  name: "Home",
  data() {
    return {
      active: 0,
      // nav
      nav: [
        '显示二维码','显示并下载','不显示下载'
      ]
    };
  },
  components: {
    show,
    showAndDown,
    down
  },
  methods: {
    // 点击nav切换组件
    check(i) {
      this.active = i
    }
  },
};
</script>

<style scoped>

</style>
