<template>
  <div>
    <LocalHeader :data="notice"></LocalHeader>
    <div class="public_pic">
      <div class="public_pic_left">
        <img src alt>
      </div>
      <div class="public_pic_right">
        <div class="public_pic_right_title">河北佳和万家烟花有限公司</div>
        <div class="public_pic_right_desc">
          <p>
            <span>上架999种</span>
            <span>发货999万件</span>
          </p>
          <p>(300元起配)</p>
        </div>
        <div class="public_pic_right_user">
          <ul>
            <li>
              <span>综合评分:</span>
              <span>8.5</span>
              <span></span>
            </li>
            <li>
              <span>用户评价:</span>
              <span>10.0</span>
              <span class="you"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="public_nav fix">
      <ul>
        <li>
          <p>
            <img src="../images/public_hone.png">
          </p>
          <p>商家首页</p>
        </li>
        <li>
          <p>6780</p>
          <p>全部商品</p>
        </li>
        <li>
          <p>
            <img src="../images/public_car.png">
          </p>
          <p>待收货</p>
        </li>
        <li>
          <p>3250</p>
          <p>成交量</p>
        </li>
        <li>
          <p>
            <img src="../images/public_chat.png">
          </p>
          <p>联系客服</p>
        </li>
      </ul>
    </div>
    <div class="public_bill">
      <div class="public_bill_header">
        <h3>
          <span></span>发票随货
        </h3>
      </div>
      <div class="public_bill_list">
        <ul>
          <li>
            <span>开户</span>
            <span>仅纸质版开户，客户必须先邮寄纸质版，收到纸质 版资料再开户</span>
          </li>
          <li>
            <span>配送</span>
            <span>300元起送，车配</span>
          </li>
          <li>
            <span>发票</span>
            <span>普通纸质发票（随货）、支持专票（随货）</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="public_msg">
      <div class="public_bill_header">
        <h3>
          <span></span>商家公告
        </h3>
      </div>
      <div class="public_msg_info">
          <p>商家公告文案占位符商家公告文案占位符，商家公告文案占位 商家公告文案占位符。商家公告文案占位符，商家公告文案占 位符，商家公告文案占位符。 商家公告文案占位符，商家公告文案占位符商家公告文案占位符，商家公告文案占位 商家公告文案占位符。商家公告文案占位符，商家公告文案占 位符，商家公告文案占位符。 商家公告文案占位符，商家公告文案占位符商家公告文案占位符，商家公告文案占位 商家公告文案占位符。商家公告文案占位符，商家公告文案占 位符，商家公告文案占位符。 商家公告文案占位符，商家公告文案占位符商家公告文案占位符，商家公告文案占位 商家公告文案占位符。商家公告文案占位符，商家公告文案占 位符，商家公告文案占位符。</p>
      </div>
    </div>
  </div>
</template>

<script>
import LocalHeader from "@/components/Header";
export default {
  data() {
    return {
      notice: "notice"
    };
  },
  components: {
    LocalHeader
  }
};
</script>

<style scoped lang="scss">
.public_pic {
  width: 750px;
  min-height: 320px;
  display: flex;
  margin-top: 85px;
  align-items: center;
  background: url("../images/public_pic.png") no-repeat top;
  background-size: 100%;
  .public_pic_left {
    width: 180px;
    height: 180px;
    display: flex;
    margin-left: 46px;
    margin-right: 22px;
    background: #fff;
    img {
      width: 100%;
    }
  }
  .public_pic_right {
    font-size: 30px;
    color: #fff;
    .public_pic_right_title {
      margin-bottom: 20px;
      margin-left: 33px;
    }
    .public_pic_right_desc {
      font-size: 26px;
      margin-bottom: 25px;
      margin-left: 33px;
      p {
        margin-bottom: 4px;
        span {
          margin-right: 28px;
        }
      }
    }
    .public_pic_right_user ul li {
      display: inline-block;
      margin-right: 25px;
      font-size: 24px;
      color: #f8e71c;
      span {
      }
      span:nth-of-type(3) {
        background: url("../images/l.png") no-repeat left center;
        width: 30px;
        height: 30px;
        vertical-align: bottom;
        background-size: 100% 100%;

        margin-left: 6px;
        display: inline-block;
      }
      .you {
        background: url("../images/y.png") no-repeat left center !important;
        background-size: 100% 100% !important;
        width: 30px !important;
        height: 30px !important;
        vertical-align: bottom !important;
        margin-left: 6px !important;
        display: inline-block;
      }
    }
  }
}
.public_nav {
  width: 658px;
  min-height: 93px;
  background: #fff;
  font-size: 24px;
  padding: 43px 46px;
  border-bottom: 10px solid #dddd;
}
.public_nav ul li {
  width: 100px;
  margin-right: 38px;
  float: left;
  text-align: center;
  font-size: 24px;
  color: #666;
}
.public_nav ul li:last-child {
  margin-right: 0;
}
.public_nav ul li p:nth-of-type(1) {
  width: 59px;
  height: 59px;
  margin: 0 auto;
  margin-bottom: 19px;
  text-align: center;
  img {
    width: 100%;
  }
}
.public_bill,.public_msg{
  width: 664px;
  min-height: 251px;
  padding: 33px 41px 47px 45px;
  background: #fff;
  .public_bill_header h3 ,.public_msg h3{
    color: #ff0000;
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 21px;

    span {
      padding-left: 10px;
      margin-right: 20px;
      background: url("../images/block.png") no-repeat left;
      background-size: 100%;
    }
  }
  .public_bill_list ul li {
    font-size: 24px;
    margin-bottom: 40px;
    color: #333;
    span:nth-of-type(1) {
      display: inline-block;
      color: #f5a623;
      width: 63px;
      height: 38px;
      border: 1px solid #f5a623;
      text-align: center;
      border-radius: 4px;
      line-height: 38px;
      margin-right: 18px;
    }
  }
}
.public_msg{
   margin-top:10px;
   .public_msg_info{
       color:#666;
       font-size: 24px;
   }
}
</style>
