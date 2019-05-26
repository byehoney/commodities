<!--购物车头部组件-->
<template>
  <div>
    <mt-header title="购物车" class="shopCar_header">
      <router-link to="/" slot="left">
        <mt-button icon="back" class="text"></mt-button>
      </router-link>
      <mt-button title="管理" slot="right" class="text">
        <span v-if="is_success"  @click="manage">管理</span>
        <span v-else>完成</span>
      </mt-button>
    </mt-header>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    is_success: {
      get: function() {
        return this.$store.state.shopCar.fetchData.is_success;
      },
      set: function() {}
    }
  },
  methods:{
      manage(){
          console.log(this.shopResult)
        // this.shop_result=!this.shop_result
        
      }
  },
  mounted() {
      console.log(this.shopResult)
  }
};
</script>

<style scoped>
.shopCar_header {
  background: #ffffff;
  min-height: 89px;
  color: #333333;
  border-bottom: 1px solid #dcdcdc;
}
.text {
  font-size: 24px;
  color: #999;
}
</style>
