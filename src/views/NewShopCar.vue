<template>
  <div>
    <div>
      <mt-header title="购物车" class="shopCar_header">
        <router-link to="/" slot="left">
          <mt-button icon="back" class="text"></mt-button>
        </router-link>
        <mt-button title="管理" slot="right" class="text">
          <span @click="complete">{{result?'管理':'完成'}}</span>
        </mt-button>
      </mt-header>
    </div>
    <div class="lists">
      <div class="list_shopcar fix" v-for="(item,index) in fetchData.list" :key="index">
        <div>
          <div class="list_shopcar_title">
            <div class="list_shopcar_name">
              <div
                class="list_shopcar_circle"
                :class="item.check?'checked':''"
                @click="shopchoose(item)"
              ></div>
              <span>{{item.shop_name}}</span>
            </div>
            <div class="list_shopcar_desc">{{item.pro_brand}}</div>
          </div>
          <div class="list_shopcar_content fix" v-for="(list,index) in item.products" :key="index">
            <div class="contentTop">
                <p class="ms">秒杀</p>
                <p class="ms_des">距离活动结束时间还剩</p>
                <p class="ms_time">10</p>
                <p class="ms_time">10</p>
                <p class="ms_time">10</p>
            </div>
            <div class="contentBottom">
              <div
                class="list_shopcar_circle"
                :class="list.checked?'checked':''"
                @click="choose(item,list)"
              ></div>
              <div class="com_add">
                <div class="list_shopcar_pic">
                  <img :src="item.pro_img">
                </div>
                <div class="list_shopcar_com fix">
                  <div class="list_shopcar_com_top fix">
                    <div class="list_shopcar_com_top_title">
                      <p>{{list.pro_text}}</p>
                      <p>{{list.pro_place}}</p>
                      <p>{{list.pro_depot}}</p>
                    </div>
                  </div>
                  <div class="list_shopcar_com_bottom fix">
                    <div class="list_shopcar_com_price">¥{{list.pro_price}}</div>
                    <div class="list_shopcar_com_num">
                      <ul>
                        <li @click="reduce(list)">-</li>
                        <li>
                          <input
                            type="number"
                            v-model="list.pro_num"
                            class="sum"
                            v-on:input="calculate(pro)"
                          >
                        </li>
                        <li @click="add(list)">+</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="shop_gift">
                <div class="shop_gift_top">
                  <div class="shop_gift_left">
                    <h3>商品活动</h3>
                  </div>
                  <div class="shop_gift_right">
                    <p>累积购买可获赠品，点击查看更多活动规则</p>
                    <div class="activity">
                      <p>累积购买可获赠品，点击查看更多活动规则</p>
                      <p>累积购买可获赠品，点击查看更多活动规则</p>
                    </div>
                  </div>
                  <img class="arrIcon" src="../images/arrow_down.png">
                </div>
                <div class="shop_gift_bottom">
                  <router-link to="/choosegift">选择赠品</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 脚部 -->
      </div>
      <!-- 一个商品结束 -->
      <div>
        <mt-tabbar fixed class="shop_footer">
          <div class="shop_footer_left" @click="cartchoose()">
            <span :class="this.fetchData.status?'checked':'first'"></span>
            <span>全选</span>
          </div>
          <div class="shop_footer_right" v-if="result">
            <div class="shop_footer_price">
              <span>合计：</span>
              <span>¥</span>
              <span>{{this.fetchData.allsum}}</span>
            </div>
            <div class="shop_footer_result">
              <span>结算</span>
              <span>({{this.fetchData.allnum}})</span>
            </div>
          </div>
          <div class="shop_footer_right" v-else>
            <div class="remove" @click="del(fetchData)">删除</div>
          </div>
        </mt-tabbar>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import { mapGetters,mapState } from 'vuex'
import { getCarList } from '@/api/index'
import TopNav from "@/components/TopNav";
export default {
  data() {
    return {
      result: true, //购物车编辑态
      head:{},//公共头
      list:[],//普通列表
      mzList:[],//买赠列表

    };
  },
  computed:{
    ...mapGetters('login',['token','userId','corpCode','companyId','userRole']),
    ...mapState('login',['user']),
  },
  methods: {
    complete() {
      this.result = !this.result;
    },
    async getData(){
      let defaulParams = {
        token:this.token,
        userId:this.userId,
        corpCode:this.corpCode,
        companyId:this.companyId,
        userRole:this.userRole,
      };
      let res = await getCarList(defaulParams);
      this.head = res.data.head;
      this.list = res.data.list;
      this.mzList = res.data.mzList;
    }
  },
  components: {
    TopNav
  },
  mounted() {
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
.shopCar_header {
  background: #ffffff;
  min-height: 89px;
  color: #333333;
  border-bottom: 1px solid #dcdcdc;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
}
.text {
  font-size: 24px;
  color: #999;
}
.lists {
  margin-top: 89px;
  margin-bottom: 108px;
}
.list_shopcar {
  padding-left: 38px;
  background: #fff;
  min-height: 547px;
  margin-bottom: 11px;
}
.list_shopcar_title {
  min-height: 54px;
  padding-top: 20px;
  font-size: 26px;
  color: #666;
  line-height: 40px;
  font-weight: 900;
  border-bottom: 1px solid #d8d8d8;
}
.list_shopcar_name {
  float: left;
}
.list_shopcar_name span:nth-of-type(2) {
  display: inline-block;
  width: 26px;
  height: 23px;
  background: url("../images/car_dianpu.png") no-repeat center;
  background-size: 100%;
  margin-right: 8px;
}
.list_shopcar_desc {
  float: right;
  font-size: 18px;
  color: #666666;
  margin-right: 23px;
  font-weight: 400;
}
.list_shopcar_content {
  padding-top: 21px;
  font-size: 24px;
  color: #666;
  min-height: 200px;
  border-bottom: 1px solid #d8d8d8;
  background: #fff;
}
.list_shopcar_content:last-child {
  border-bottom: none;
}
.list_shopcar_circle {
  width: 40px;
  height: 40px;
  background: url("../images/car_circle.png") no-repeat center;
  background-size: 100%;
  margin-right: 8px;
  float: left;
}
.list_shopcar_com_bottom {
  width: 380px;
}
.checked {
  background: url("../images/car_checkcircle.png") no-repeat center;
  background-size: 100%;
}
.com_add {
  min-height: 206px;
  border-bottom: 1px solid #d8d8d8;
}
.list_shopcar_pic {
  width: 220px;
  height: 176px;
  background: #ccc;
  float: left;
  margin-right: 28px;
}
.list_shopcar_pic img {
  width: 100%;
}
.list_shopcar_com {
  float: left;
  line-height: 35px;
  /* min-height: 70px; */
}
.list_shopcar_com_top {
  margin-bottom: 25px;
}
.list_shopcar_com_top_title {
  float: left;
}
.list_shopcar_com_top_title p {
  font-size: 18px;
}
.list_shopcar_com_top_title p:first-child {
  font-size: 24px;
}
.list_shopcar_com_top_gift {
  float: right;
  color: #ff0000;
  font-size: 18px;
}
.shop_gift {
  margin-left: 47px;
  width: 618px;
  min-height: 40px;
  margin-top: 12px;
  margin-bottom: 15px;
  line-height: 40px;
  font-size: 20px;
}
.contentTop{
    display: flex;
    align-items: center;
    padding-left: 56px;
    margin-bottom: 20px;
    .ms{
        font-size:20px;
        color:rgba(255,0,31,1);
        line-height:26px;
        margin-right: 27px;
    }
    .ms_time{
        width:34px;
        height:34px;
        line-height: 34px;
        text-align: center;
        border-radius:6px;
        border:2px solid rgba(153,153,153,1);
        margin-left: 10px;
    }
}
.shop_gift_top {
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #999;
  margin-bottom: 18px;
  .shop_gift_right {
    width: 425px;
  }
  .arrIcon {
    width: 24px;
    height: 15px;
  }
}
.shop_gift_left h3 {
  color: #ff1900;
  font-weight: 400;
  margin-right: 26px;
}
.shop_gift_bottom {
  width: 104px;
  height: 43px;
  border: 1px solid #4a90e2;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4a90e2;
  border-radius: 4px;
}
.list_shopcar_com_price {
  float: left;
  margin-top: 20px;
  font-size: 28px;
  color: #ff0000;
}
.list_shopcar_com_num {
  float: right;
}
.list_shopcar_com_num ul li {
  width: 48px;
  height: 48px;
  float: left;
  border: 1px solid #ccc;
  line-height: 48px;
  text-align: center;
}
.list_shopcar_com_num ul li input {
  width: 47px;
  height: 47px;
  border: 1px solid #ccc;
  border-left: none;
  text-align: center;
}
.list_shopcar_com_num ul li:nth-of-type(2),
.list_shopcar_com_num ul li:nth-of-type(3) {
  border-left: none;
}
.shop_footer {
  background: #fff !important;
  min-height: 98px;
  font-size: 26px;
  line-height: 98px;
  color: #666;
}
.shop_footer_left {
  width: 244px;
  height: 98px;
  float: left;
}
.shop_footer_left span {
  display: inline-block;
}
.shop_footer_left span.first {
  width: 40px;
  height: 40px;
  margin-right: 11px;
  position: relative;
  top: 10px;
  background: url("../images/car_circle.png") no-repeat left 50%;
  background-size: 100%;
}
.checked {
  width: 40px;
  height: 40px;
  margin-right: 11px;
  position: relative;
  /* top: 10px; */
  background: url("../images/car_checkcircle.png") no-repeat left 50%;
  background-size: 100%;
}
/*  */
.shop_footer_right {
  width: 506px;
  float: left;
}
.remove {
  width: 134px;
  height: 68px;
  line-height: 70px;
  text-align: center;
  color: #ff0000;
  font-size: 28px;
  border: 2px solid #ff0000;
  border-radius: 50px;
  float: right;
  margin-top: 15px;
  margin-right: 39px;
}
.shop_footer_price {
  float: left;
  margin-left: 90px;
}
.shop_footer_price span {
  color: #ff0000;
}
.shop_footer_price span:first-child {
  color: #333;
}
.shop_footer_result {
  width: 244px;
  height: 98px;
  background: url("../images/result.png") no-repeat top;
  background-size: 100%;
  color: #fff;
  float: right;
}
.shop_footer_result img {
  width: 100%;
}
</style>
