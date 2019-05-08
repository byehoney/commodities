<template>
  <div>
    <div id="cart">
      <section class="cartMain">
        <div class="cartMain_hd">
          <ul class="order_lists cartTop">
            <li class="list_chk">
              <!--所有商品全选-->
              <input type="checkbox" id="all" class="whole_check">
              <label for="all" :class="fetchData.status?'mark':''" @click="cartchoose()"></label>
              全选
            </li>
            <li class="list_con">商品信息</li>
            <li class="list_info">商品参数</li>
            <li class="list_price">单价</li>
            <li class="list_amount">数量</li>
            <li class="list_sum">金额</li>
            <li class="list_op">操作</li>
          </ul>
        </div>
        <div class="cartBox" v-for="(item,index) in fetchData.list" :key="index">
          <div class="shop_info">
            <div class="all_check">
              <input type="checkbox" id="shop_a" class="shopChoice">
              <label
                for="shop_a"
                class="shop"
                :class="item.check?'mark':''"
                @click="shopchoose(item)"
              ></label>
            </div>
            <div class="shop_name">
              店铺：
              <a href="javascript:;">{{item.shop_name}}</a>
            </div>
          </div>
          <div class="order_content">
            <ul class="order_lists" v-for="(pro,index) in item.products" :key="index">
              <li class="list_chk">
                <input type="checkbox" id="checkbox_2" class="son_check">
                <label for="checkbox_2" :class="pro.checked?'mark':''" @click="choose(item,pro)"></label>
              </li>
              <li class="list_con">
                <div class="list_img">
                  <a href="javascript:;">
                    <img :src="pro.img" alt>
                  </a>
                </div>
                <div class="list_text">
                  <a href="javascript:;">{{pro.text}}</a>
                  <span class="list_custom">定制</span>
                </div>
              </li>
              <li class="list_info">
                <p>规格：默认</p>
                <p>尺寸：16*16*3(cm)</p>
              </li>
              <li class="list_price">
                <p class="price">￥{{pro.price}}</p>
                <div class="charge">
                  <p>更多促销</p>
                  <div class="chargebox">测试</div>
                </div>
              </li>
              <li class="list_amount">
                <div class="amount_box">
                  <a href="javascript:;" class="reduce reSty" @click="reduce(pro)">-</a>
                  <input type="text" v-model="pro.num" class="sum" v-on:input="calculate(pro)">
                  <a href="javascript:;" class="plus" @click="add(pro)">+</a>
                </div>
              </li>
              <li class="list_sum">
                <p class="sum_price">￥{{pro.sum}}</p>
              </li>
              <li class="list_op">
                <p class="collect">
                  <a href="javascript:;" class="colBtn">收藏商品</a>
                </p>
                <p class="del">
                  <a href="javascript:;" class="delBtn">移除商品</a>
                </p>
                <p class="custom">
                  <a href="javascript:;" class="cusBtn">定制商品</a>
                </p>
                <div class="custombox">测试</div>
              </li>
            </ul>
          </div>
        </div>

        <!--底部-->
        <div class="bar-wrapper">
          <div class="bar-right">
            <div class="piece">
              已选商品
              <strong class="piece_num">{{this.fetchData.allnum}}</strong>件
            </div>
            <div class="totalMoney">
              共计:
              <strong class="total_text">￥{{this.fetchData.allsum}}</strong>
            </div>
            <div class="calBtn">
              <a href="javascript:;">结算</a>
            </div>
          </div>
        </div>
      </section>
      <section class="model_bg"></section>
      <section class="my_model">
        <p class="title">
          删除宝贝
          <span class="closeModel">X</span>
        </p>
        <p>您确认要删除该宝贝吗？</p>
        <div class="opBtn">
          <a href="javascript:;" class="dialog-sure">确定</a>
          <a href="javascript:;" class="dialog-close">关闭</a>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fetchData: {
        list: [
          {
            shop_id: 1,
            shop_name: "搜猎人艺术生活",
            products: [
              {
                pro_id: 101,
                text: "洗面奶洗面奶洗面奶洗面奶洗面奶洗面奶洗面奶洗面奶",
                price: 480,
                num: 1,
                img: "./images/1.png",
                sum: 480,
                checked: false //商品选中状态
              },
              {
                pro_id: 102,
                text: "花露水花露水花露水花露水花露水花露水花露水花露水",
                price: 680,
                num: 1,
                img: "./images/2.png",
                sum: 680,
                checked: false
              },
              {
                pro_id: 103,
                text: "燕麦片燕麦片燕麦片燕麦片燕麦片燕麦片燕麦片燕麦片",
                price: 380,
                num: 1,
                img: "./images/3.png",
                sum: 380,
                checked: false
              }
            ],
            check: false, //店铺选中状态
            choose: 0 //商品选中个数
          },
          {
            shop_id: 2,
            shop_name: "卷卷旗舰店",
            products: [
              {
                pro_id: 201,
                text: "剃须刀剃须刀剃须刀剃须刀剃须刀剃须刀剃须刀剃须刀",
                price: 580,
                num: 1,
                img: "./images/4.png",
                sum: 580,
                checked: false
              },
              {
                pro_id: 202,
                text: "卫生纸卫生纸卫生纸卫生纸卫生纸卫生纸卫生纸卫生纸",
                price: 780,
                num: 1,
                img: "./images/5.png",
                sum: 780,
                checked: false
              }
            ],
            check: false,
            choose: 0
          },
          {
            shop_id: 3,
            shop_name: "瓜皮的神秘商店",
            products: [
              {
                pro_id: 301,
                text: "眼镜片眼镜片眼镜片眼镜片眼镜片眼镜片眼镜片眼镜片",
                price: 180,
                num: 1,
                img: "./images/6.png",
                sum: 180,
                checked: false
              },
              {
                pro_id: 302,
                text: "凑数的凑数的凑数的凑数的凑数的凑数的凑数的凑数的",
                price: 280,
                num: 1,
                img: "./images/7.png",
                sum: 280,
                checked: false
              }
            ],
            check: false,
            choose: 0
          }
        ],
        status: false, //全选选中状态
        allchoose: 0, //店铺选中个数
        allsum: 0, //总计价格
        allnum: 0 //总计数量
      }
    };
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
      this.fetchData.allsum += pro.sum;
      this.fetchData.allnum += parseInt(pro.num);
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
      this.fetchData.allsum -= pro.sum; //商品总计价格变动
      this.fetchData.allnum -= pro.num;
    },
    choose(item, pro) {
      !pro.checked ? this.choosetrue(item, pro) : this.choosefalse(item, pro);
    },
    shoptrue(item) {
      item.products.forEach(pro => {
        pro.checked === false ? this.choosetrue(item, pro) : ""; //循环店铺中的商品，先筛选出目前没选中的商品，给它执行choosetrue函数
      });
    },
    shopfalse(item) {
      item.products.forEach(pro => {
        pro.checked === true ? this.choosefalse(item, pro) : ""; //循环店铺中的商品，先筛选出目前被选中的商品，给它执行choosefalse函数
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
      pro.num++;
      pro.checked ? this.fetchData.allnum++ : "";
      pro.sum += pro.price;
      pro.checked
        ? (this.fetchData.allsum += pro.price)
        : this.fetchData.allsum;
    },
    reduce(pro) {
      if (pro.num === 1) {
        pro.num;
      } else {
        pro.num--;
        pro.checked ? this.fetchData.allnum-- : "";
        pro.sum -= pro.price;
        pro.checked
          ? (this.fetchData.allsum -= pro.price)
          : this.fetchData.allsum;
      }
    },
    calculate(pro) {
      let oldsum = pro.sum; //之前的总价
      let oldnum = oldsum / pro.price; //之前的数量
      pro.num = parseInt(pro.num); //现在的数量
      pro.num > 0 ? (pro.sum = pro.num * pro.price) : (pro.num = oldnum); //如果输入数量大于0，计算价格，否则返回之前的数量
      let diffsum = pro.sum - oldsum; //差价
      let diffnum = pro.num - oldnum; //差量
      if (pro.checked) {
        //如果商品被选中
        this.fetchData.allsum += diffsum; //计算总价
        this.fetchData.allnum += diffnum; //计算总量
      }
    }
  }
};
</script>

<style scoped>
.cartMain{
    position: relative;
    width: 1200px;
    min-width: 1200px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0px 0px 100px;
    
}
/*购物车头部*/
.cartMain_hd{
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #3c3c3c;
}
.cartMain_hd .cartTop{
    height: 50px;
}
.cartMain_hd .cartTop .list_chk{
    width: 80px;
    text-indent: 30px;
}
.cartMain_hd .cartTop .list_con{
    width: 312px;
}
.cartMain_hd .cartTop .list_chk label{
    position: absolute;
    left: 10px;
    top:19px;
    margin: 0;
}
.cartMain_hd .cartTop .list_info{
    padding: 0;
    text-indent: 15px;
}
.cartMain_hd .cartTop .list_con{
    text-indent: 140px;
}


.cartBox{
    width: 100%;
    margin-bottom: 15px;
}
.cartBox .shop_info{
    position: relative;
    width: 100%;
    height: 38px;
    background-color: #fff;
    line-height: 38px;
    vertical-align: baseline;
}
.cartBox .shop_info .all_check{
    position: relative;
    float: left;
    width: 30px;
    height: 38px;
}

.cartBox .shop_info .all_check input[type="checkbox"]{
    position: absolute;
    z-index: 0;
    left: -20px;
    top: -20px;
}
.cartBox .shop_info .all_check .shop{
    position: absolute;
    top:13px;
}
.cartBox .shop_info .shop_name{
    float: left;
}



/*商品列表*/
.cartBox .order_content{
    border: 1px solid #ccc;
}
.cartBox .order_content a{
    display: block;
}
.order_charge{
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #e7e7e7;
}
.order_charge p{
    display: inline-block;
    line-height: 40px;
}
.order_charge p.charge_info{
    margin:0 30px 0 50px;
}
.order_charge p.charge_info span{
    border: 1px solid #f60;
    padding:2px;
    color: #f60;
}
.order_lists{
    width: 100%;
    height: 130px;
    border-bottom: 1px solid #e7e7e7;
}
.order_lists:last-child{
    border-bottom: none;
}
.order_lists li{
    float: left;
    height: 100%;
}

.order_lists .list_chk{
    position: relative;
    width: 50px;
}
.order_lists .list_chk input[type="checkbox"]{
    position: absolute;
    z-index: 0;
    left: -20px;
    top: -20px;
}
.order_lists .list_chk label{
    margin: 20px 0 0 24px;
}

.order_lists .list_con{
    width: 342px;
}
.order_lists .list_con .list_img{
    width: 80px;
    height: 80px;
    margin-top: 20px;
    float: left;
}
.order_lists .list_con .list_img img{
    width: 100%;
    vertical-align: top;
}
.order_lists .list_con .list_text{
    margin: 20px 0 0 10px;
    line-height: 18px;
    width: 200px;
    float: left;
}
.order_lists .list_con .list_text a{
    color: #3c3c3c;
    margin-bottom: 5px;
}
.order_lists .list_con .list_text a:hover{
    color: #ff873e;
    text-decoration: underline;
}
.order_lists .list_con .list_text .list_custom{
    background-color:#ff8000;
    padding:3px;
    border-radius: 3px;
    color: #fff;
}
.order_lists .list_info{
    width: 252px;
    box-sizing: border-box;
    padding: 20px 0;
}
.order_lists .list_info p{
    color: #9c9c9c;
    line-height: 18px;
    margin-left: 15px;
}
.order_lists .list_price{
    width: 130px;
}
.order_lists .list_price .price{
    margin-top: 20px;
    line-height: 18px;
    font-family: Verdana,Tahoma,arial;
    color: #3c3c3c;
    font-weight: bold;
}
.order_lists .list_price .charge{
    position: relative;
    z-index: 4
}
.order_lists .list_price .charge p{
    color: #ff0000;
    border:1px solid #ff0000;
    width: 50px;
    height:15px;
    line-height: 15px;
    padding:3px;
}
.order_lists .list_price .charge .chargebox{
    display: none;
    width: 300px;
    height: 110px;
    background: #000;
    z-index: 1;
}
.order_lists .list_amount{
    width: 120px;
}
.order_lists .list_amount .amount_box{
    margin-top: 20px;
    width: 77px;
    height: 25px;
    position: relative;
}
.order_lists .list_amount .amount_box input{
    width: 39px;
    height: 15px;
    line-height: 15px;
    border: 1px solid #aaa;
    color: #343434;
    text-align: center;
    padding: 4px 0;
    background-color: #fff;
    z-index: 2;
    position: absolute;
    left: 18px;
    float: left;
}
.order_lists .list_amount .amount_box a{
    float: left;
    height: 23px;
    width: 17px;
    border: 1px solid #e5e5e5;
    background: #f0f0f0;
    text-align: center;
    line-height: 23px;
    color: #444;
    position: absolute;
    top:0;
}
.order_lists .list_amount .amount_box a:hover{
    border-color: #ff873e;
    text-decoration: none;
    color: #ff873e;
    z-index: 3;
}

.order_lists .list_amount .amount_box .reduce{
    left: 0;
}

.order_lists .list_amount .amount_box .reSty{
    color: #cbcbcb;
}
.order_lists .list_amount .amount_box .reSty:hover{
    border-right: none;
    border-color: #e5e5e5;
    text-decoration: none;
    color: #cbcbcb;
}

.order_lists .list_amount .amount_box .plus{
    border-left-color: transparent;
    right: 0;
}


.order_lists .list_sum{
    width: 140px;
}
.order_lists .list_sum .sum_price{
    line-height: 18px;
    margin-top: 20px;
    font-family: Verdana,Tahoma,arial;
    color: #900;
    font-weight: bold;
}
.order_lists .list_op{
    width: 164px;
}
.order_lists .list_op .collect{
    margin-top: 20px;
}
.order_lists .list_op .del{
    line-height: 18px;
    margin:5px 0;
}
.order_lists .list_op .custombox{
    width: 200px;
    height: 350px;
    background-color: #000;
    display: none;
    position: relative;
    z-index: 9
}
/*底部总计算价*/
.bar-wrapper{
    width: 1200px;
    height: 50px;
    position: fixed;
    bottom: -1px;
    z-index: 99;
    background: #e5e5e5;
}
.bar-wrapper .bar-right{
    float: right;
    color: #3c3c3c;
}
.bar-wrapper .bar-right strong{
    color: #900;
}

.bar-wrapper .bar-right .piece{
    float: left;
    min-width: 110px;
    margin-right: 20px;
    height: 50px;
    line-height: 50px;
}
.bar-wrapper .bar-right .piece .piece_num{
    display: inline-block;
    padding: 0 10px;
    font-weight: 700;
    font-size: 18px;
    font-family: tohoma,arial;
}
.bar-wrapper .bar-right .totalMoney{
    float: left;
    min-width: 100px;
    height: 50px;
    line-height: 50px;
}
.bar-wrapper .bar-right .totalMoney .total_text{
    float: right;
    font-weight: 400;
    font-size: 20px;
    font-family: Arial;
    vertical-align: middle;
    margin-right: 10px;
    margin-left: 15px;
}
.bar-wrapper .bar-right .calBtn{
    float: left;
}
.bar-wrapper .bar-right .calBtn a{
    display: block;
    width: 120px;
    height: 50px;
    color: #fff;
    background: #B0B0B0;
    cursor: not-allowed;
    font-size: 22px;
    letter-spacing: 5px;
    text-decoration: none;
    line-height: 50px;
    text-align: center;
    border-radius: 2px;
}
.bar-wrapper .bar-right .calBtn a.btn_sty{
    background: #ff873e;
    cursor: pointer;
}

/*自己定义的模态框*/
.model_bg{
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,.6);
    z-index: 999;
    display: none;
}
.my_model{
    position: fixed;
    display: none;
    top:50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -200px;
    z-index: 9999;
    width: 360px;
    height: 120px;
    border: 1px solid #aeaeae;
    border-radius: 3px;
    padding: 20px;
    background: #fff;
}
.my_model .title{
    font-size: 14px;
    color: #3c3c3c;
    font-weight: 700;
    margin-bottom: 20px;
}
.my_model .title .closeModel{
    float: right;
    cursor: pointer;
}
.my_model p{
    line-height:16px;
}
.my_model .opBtn{
    margin-top: 20px;
}
.my_model .opBtn a{
    width: 58px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    -webkit-border-radius: 1px;
    -moz-border-radius: 1px;
    -ms-border-radius: 1px;
    border-radius: 1px;
    display: inline-block;
    margin-right: 10px;
    font-weight: 700;
}
.my_model .dialog-sure{
    background: #52a0e5;
    color: #fff;
    border: 1px solid #52a0e5;
}

.my_model .dialog-close{
    background: #fff;
    border: 1px solid #d9d9d9;
    color: #3c3c3c;
}

</style>
