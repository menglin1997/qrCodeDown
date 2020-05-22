<!--
 * @Descripttion: 双层折叠面板
 * @version: 
 * @Author: zml
 * @Date: 2020-04-09 15:34:01
 * @LastEditors: zml
 * @LastEditTime: 2020-04-11 09:39:24
 -->
<template>
  <div class="home">
    <van-collapse v-model="activeNames">
      <van-collapse-item name="1">
        <template #title>
          <div class="firstTitle">
            <div class="left">
              
            </div>
            <div class="right">
              <div>2344</div>
              <div>15人</div>
            </div>
          </div>
        </template>
        <!-- 下一级 -->
        <second />
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
// @ is an alias to /src
import second from "./components/second";

export default {
  name: "About",
  data() {
    return {
       activeNames: ['1'],
      list: [
        {
          name: "123123123",
          age: 19,
          children: [
            {
              name: "123123123",
              age: 19
            },
            {
              name: "123123123",
              age: 19
            }
          ]
        },
        {
          name: "123123123",
          age: 19,
          children: [
            {
              name: "123123123",
              age: 19
            },
            {
              name: "123123123",
              age: 19
            }
          ]
        }
      ]
    };
  },
  components: {
    second
  }
};
</script>

<style scoped>
.home {
  background: #ccc;
}
  .firstTitle {
    display: flex;
    justify-content: space-between;
  }
  .right {
    height: 50px;
     display: flex;
     flex-direction: column;
    justify-content: space-between;
  }
  .van-cell {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    overflow: hidden;
    color: #323233;
    font-size: 14px;
    /* line-height: 24px; */
    background-color: #fff;
    align-items: center !important;
}
</style>
