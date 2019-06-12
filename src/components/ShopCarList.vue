<template>
  <div>
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
                    <li> <input type="number" v-model="list.pro_num" class="sum" v-on:input="calculate(pro)"></li>
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
              <div class="shop_gift_right">累积购买可或赠品，点击查看更多活动规则</div>
            </div>
            <div class="shop_gift_bottom">
              <router-link to="/choosegift">选择赠品</router-link>
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
        <div class="shop_footer_right" v-if="shopResult">
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
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      is_checked: 0,
      checked: false
    };
  },
  computed: {
    ...mapState({
      // 获取所有数据
      fetchData: state => state.shopCar.fetchData,
      // 获取管理和完成的状态
      shopResult: state => state.shopCar.fetchData.is_success
    })
  },
  methods: {
    choosetrue(item, pro) {
      pro.checked = true; //将商品选中状态改为true
      ++item.choose === item.products.length ? (item.check = true) : ""; //这里执行了两部，选中商品数量先+1，再与该店铺商品数量比较，如果相等就更改店铺选中状态为true
      item.check
        ? ++this.fetchData.allchoose === this.fetchData.list.length
          ? (this.fetchData.status = true)
          : (this.fetchData.status = false)
        : ""; //如果店铺选中状态改为true，选中店铺数量先+1，再与店铺数量比较，如果相等就更改全选选中状态为true
      this.fetchData.allsum += pro.pro_sum;
      this.fetchData.allnum += pro.pro_num;
    },
    choosefalse(item, pro) {
      pro.checked = false; //将商品选中状态改为false
      --item.choose; //选中商品数量-1
      if (item.check) {
        //如果店铺是被选中的，更改店铺选中状态
        item.check = false;
        --this.fetchData.allchoose; //并且选中店铺数量-1
      }
      this.fetchData.status = false; //无论之前全选的状态，将其改为false就行
      this.fetchData.allsum -= pro.pro_sum; //商品总计价格变动
      this.fetchData.allnum -= pro.pro_num;
    },
    choose(item, pro) {
      !pro.checked ? this.choosetrue(item, pro) : this.choosefalse(item, pro);
    },
    shoptrue(item) {
      item.products.forEach(pro => {
        pro.checked === false && this.choosetrue(item, pro); //循环店铺中的商品，先筛选出目前没选中的商品，给它执行choosetrue函数
      });
    },
    shopfalse(item) {
      item.products.forEach(pro => {
        pro.checked === true && this.choosefalse(item, pro); //循环店铺中的商品，先筛选出目前被选中的商品，给它执行choosefalse函数
      });
    },
    shopchoose(item) {
      !item.check ? this.shoptrue(item) : this.shopfalse(item);
    },
    cartchoose() {
      this.fetchData.status = !this.fetchData.status; //取反改变状态
      this.fetchData.status
        ? this.fetchData.list.forEach(item => this.shoptrue(item))
        : this.fetchData.list.forEach(item => this.shopfalse(item)); //根据取反后的状态进行相应的店铺按钮操作
    },
    add(pro) {
      console.log(pro)
      pro.pro_num++;
      pro.pro_sum += pro.pro_price;
      if (pro.checked) {
        this.fetchData.allnum++;
        this.fetchData.allsum += pro.price;
      }
    },
    reduce(pro) {
      if (pro.pro_num === 1) return;
      pro.pro_num--;
      pro.pro_sum -= pro.pro_price;
      if (pro.checked) {
        this.fetchData.allnum--;
        this.fetchData.allsum -= pro.pro_price;
      }
    },
    calculate(pro) {
      let oldsum = pro.pro_sum; //之前的总价
      let oldnum = oldsum / pro.pro_price; //之前的数量
      pro.pro_num = parseInt(pro.pro_num);
      pro.pro_num > 0 ? (pro.pro_sum = pro.pro_num * pro.pro_price) : (pro.pro_num = oldnum); //如果输入数量大于0，计算价格，否则返回之前的数量
      let diffsum = pro.pro_sum - oldsum; //差价
      let diffnum = pro.pro_num - oldnum; //差量
      if (pro.checked) {
        //如果商品被选中
        this.fetchData.allsum += diffsum; //计算总价
        this.fetchData.allnum += diffnum; //计算总量
      }
    },

    del(data) {
      var data = data.list;
      for (var i = 0; i < data.length; i++) {
        if (data[i].check) {
          data.splice(i, 1);
          console.log(this.fetchData.status)
         this.fetchData.allchoose--
         console.log(this.fetchData)
         console.log(this.fetchData.allnum)
          this.fetchData.status=false
          i--;
        } else {
          for (var j = 0; j < data[i].products.length; j++) {
            var check = data[i].products[j].checked;
            if (check) {
              data[i].products.splice(j, 1);
              --data[i].choose;
              if (data[i].products.length == 0) {
                this.fetchData.allsum = 0;
                data.splice(i, 1);
              }
            }
          }
        }
      }
    }
  },

  // methods:{
  //     ...mapActions("chooseAll",["CHOOSEALL"])
  // },
  mounted() {}
};
</script>

<style scoped>
.list_shopcar {
  padding-left: 38px;
  background: #fff;
  min-height: 547px;
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
.shop_gift_top {
  display: flex;
  color: #999;
  margin-bottom: 18px;
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
.list_shopcar_com_num ul li input{
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
