<template>
  <div class="home">
    <!-- <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>
        </div>

        <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div id="nav">
      <div>扫一扫</div>
      <div>
        <input type="text">
      </div>
      <div>分享</div>
    </div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <img slot="icon" src="../assets/logo.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../assets/logo.png">
        选品
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../assets/logo.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/phone_ico.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import { getIndex } from 'api/index';
export default {
  name: "home",
  data(){
      return{
          selected:""
      }
  },
  components: {
    // HelloWorld
  },
  async created() {
    // try {
    //     await getIndex({ pageSiza: 100, num: 10 });
    // } catch (err) {
    // }
  },
  mounted() {},

  methods: {}
};
</script>
