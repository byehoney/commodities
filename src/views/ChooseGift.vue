<template>
  <!-- 选择赠品 -->
  <div class="gift_wrap">
    <div>
      <mt-header title="选择赠品" class="shopgift_header">
        <router-link to="/shopcar" slot="left">
          <mt-button icon="back" class="text"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="shopgift_subheader">
      <h3>组合满10件可选择以下商品</h3>
    </div>
    <div class="shopgift_list" v-for="(item,index) in list.product" :key="index">
      <div class="shopgift_list_content">
        <div
          class="list_shopcar_circle"
          :class="item.checked?'checked':''"
          @click="checkgift()"
        ></div>
        <div class="shopgift_list_pic"></div>
        <div class="shopgift_list_text">
          <div class="shopgift_text_top">
            <h3>{{item.name}}</h3>
            <p>{{item.address}}</p>
            <p>{{item.sum}}</p>
          </div>
          <div class="shopgift_text_bottom">
            <ul>
              <li>{{item.price}}</li>
              <li>{{item.num}}件</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { constants } from 'crypto';
export default {
  data() {
    return {
      list: {
        product: [
          {
            name: "赠品冷焰火",
            address: "河北保定星星烟花制造厂",
            sum: "规格：35g*1支",
            price: "￥0.00",
            num: "2",
            checked: true,
          },
          {
            name: "赠品冷焰火",
            address: "河北保定星星烟花制造厂",
            sum: "规格：35g*1支",
            price: "￥0.00",
            num: "3",
            checked: true,
          }
        ]
      }
    };
  },
  methods: {
    checkgift() {
        let data=this.list.product
       data.forEach((item,index)=>{
           console.log(item)
           item.checked=!item.checked
          
       })
    }
  }
};
</script>

<style scoped lang="scss">
.gift_wrap {
  background: #fff;
}
.shopgift_header {
  background: #fff;
  color: #333333;
  font-size: 30px;
  .text {
    font-size: 30px;
  }
}
.list_shopcar_circle {
  width: 40px;
  height: 40px;
  background: url("../images/car_circle.png") no-repeat center;
  background-size: 100%;
  margin-right: 8px;
  float: left;
}
.checked {
  background: url("../images/car_checkcircle.png") no-repeat center;
  background-size: 100%;
}
.shopgift_subheader {
  min-height: 42px;
  line-height: 42px;
  color: #8b572a;
  background: #ffe6bc;
  margin-bottom: 19px;
  h3 {
    font-weight: 400;
    margin-left: 38px;
    font-size: 20px;
  }
}
.shopgift_list {
  min-height: 221px;
  font-size: 18px;
  padding-left: 45px;
  background: #fff;
  margin-bottom: 10px;
  .shopgift_list_content {
    width: 705px;
    display: flex;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 26px;
  }
  .shopgift_list_pic {
    width: 220px;
    min-height: 176px;
    background: #ccc;
    margin-right: 26px;
  }
  .shopgift_text_top h3 {
    font-size: 24px;
    color: #666;
    line-height: 40px;
  }
  .shopgift_text_top p {
    color: #999;
    line-height: 35px;
  }
}
.shopgift_text_bottom {
  width: 400px;
  color: #999;
  margin-top: 46px;
}
.shopgift_text_bottom ul li {
  float: left;
  height: 40px;
  width: 180px;
}
.shopgift_text_bottom ul li:nth-of-type(2) {
  float: right;
  text-align: center;
}
</style>
