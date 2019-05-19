<template>
  <div>
    <div class="list_shopcar" v-for="(item,index) in fetchData.list" :key="index">
      <div>
        <div class="list_shopcar_title">
          <div class="list_shopcar_name">
            <span></span>
            <span>{{item.shop_name}}</span>
          </div>
          <div class="list_shopcar_desc">{{item.pro_brand}}</div>
        </div>
        <div class="list_shopcar_content" v-for="(list,index) in item.products">
          <div
            class="list_shopcar_circle"
            :class="list.checked?'checked':''"
            @click="choose(item,list)"
          ></div>
          <div class="list_shopcar_pic">
            <img :src="item.pro_img">
          </div>
          <div class="list_shopcar_com">
            <div class="list_shopcar_com_top">
              <div class="list_shopcar_com_top_title">
                <p>{{list.pro_text}}</p>
                <p>{{list.pro_place}}</p>
                <p>{{list.pro_depot}}</p>
              </div>
              <div class="list_shopcar_com_top_gift">{{list.pro_purity}}</div>
              <div style="clear:both"></div>
            </div>
            <div class="list_shopcar_com_bottom">
              <div class="list_shopcar_com_price">{{list.pro_price}}</div>
              <div class="list_shopcar_com_num">
                <ul>
                  <li>-</li>
                  <li>{{list.pro_num}}</li>
                  <li>+</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 脚部 -->
     
    </div>
    <!-- 一个商品结束 -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      is_checked: 0,
      checked: false
    };
  },
  computed: {
    ...mapState({
      fetchData: state => state.shopCar.fetchData
    })
  },
  methods: {
    choosetrue(item, list) {
      list.checked = true; //将商品选中状态改为true
      ++item.choose === item.products.length ? (item.check = true) : ""; //这里执行了两部，选中商品数量先+1，再与该店铺商品数量比较，如果相等就更改店铺选中状态为true
      item.check
        ? ++this.fetchData.allchoose === this.fetchData.list.length
          ? (this.fetchData.status = true)
          : (this.fetchData.status = false)
        : ""; //如果店铺选中状态改为true，选中店铺数量先+1，再与店铺数量比较，如果相等就更改全选选中状态为true
    },
    choosefalse(item, list) {
      list.checked = false; //将商品选中状态改为false
      --item.choose; //选中商品数量-1
      if (item.check) {
        //如果店铺是被选中的，更改店铺选中状态
        item.check = false;
        --this.fetchData.allchoose; //并且选中店铺数量-1
      }
      this.fetchData.status = false; //无论之前全选的状态，将其改为false就行
    },
    choose(item, list) {
      !list.checked
        ? this.choosetrue(item, list)
        : this.choosefalse(item, list);
    } //这里是绑定到html上的方法，取反是由于你在触发方法的时候取的是之前的状态
  },
  mounted() {}
};
</script>

<style scoped>
.list_shopcar {
  padding-left: 38px;
  border-bottom: 1px solid #d8d8d8;
  background: #fff;
  min-height: 547px;
}
.list_shopcar_title {
  min-height: 54px;
  padding-top: 20px;
  font-size: 26px;
  color: #666;
  font-weight: 900;
  border-bottom: 1px solid #d8d8d8;
}
.list_shopcar_name {
  float: left;
}
.list_shopcar_name span:nth-of-type(1) {
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
  color: #f5a623;
  margin-right: 23px;
  font-weight: 400;
}
.list_shopcar_content {
  padding-top: 21px;
  font-size: 24px;
  color: #666;
  min-height: 200px;
  border-bottom: 1px solid #d8d8d8;
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
.checked {
  background: url("../images/car_checkcircle.png") no-repeat center;
  background-size: 100%;
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
  min-height: 70px;
}
.list_shopcar_com_top {
  margin-bottom: 30px;
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
.list_shopcar_com_num ul li:nth-of-type(2),
.list_shopcar_com_num ul li:nth-of-type(3) {
  border-left: none;
}
</style>
