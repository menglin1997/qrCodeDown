<!--
 * @Descripttion: 
 * @version: 
 * @Author: zml
 * @Date: 2020-04-09 15:34:01
 * @LastEditors: zml
 * @LastEditTime: 2020-04-09 15:44:57
 -->
<template>
  <div class="home">
    <van-collapse v-model="activeNames">
      <van-collapse-item name="1">
        <template #title>
          <div>标题1 <van-icon name="question-o" /></div>
        </template>
        内容
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Second",
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
  }

};
</script>
