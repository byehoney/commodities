<template>
  <div>
    <div class="detail_header">
      <div class="detail_back">返回</div>
      <div class="detail_title">商品详情</div>
    </div>
    <div class="detail_loop">
      <div class="detsil_loop_center"></div>
    </div>
    <div class="detail_content">
      <div class="detail_content_one">
        <div class="detail_content_one_left">
          <ul>
            <li>$50</li>
            <li>
              <p>$50</p>
              <p>仅剩50件</p>
            </li>
            <li>限购999件</li>
          </ul>
        </div>
        <div class="detail_content_one_right">
          <ul>
            <li>
              <span>
                <img src="../images/clock.png">
              </span>
              <span>限时秒杀</span>
            </li>
            <li>
              <span>10</span>:
              <span>10</span>:
              <span>10</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="detail_content_two">
        <div class="detail_content_title">星星闪耀</div>
        <div class="detail_content_two_left">
          <ul>
            <li>
              <span>所在地区：</span>
              <span>北京</span>
            </li>
            <li>
              <span>销量：</span>
              <span>22</span>
            </li>
            <li>
              <span>库存：</span>
              <span>22</span>
            </li>
          </ul>
        </div>
        <div class="detail_content_two_right">
          <img src="../images/detail_shop.png">
        </div>
        <div style="clear:both"></div>
      </div>
      <div class="detail_content_three">
        <div class="detail_content_three_header">
          <span></span>
          <span>商品信息</span>
        </div>
        <div class="detail_content_three_desc">
          <ul>
            <li>
              <p>商品名称：星星闪耀飞天散花五彩造型烟花</p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </li>
            <li>
              <p>最小包装：xxxg</p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </li>
            <li>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 底部 -->
      <div class="footer_guide">
        <a href="javascript:;" class="guide_item">
          <!-- <span>1</span> -->
          <span class="shop_car">
            <img src="../images/shopcar.png">
            <p class="badge">{{shopnum}}</p>
          </span>
        </a>
        <a href="javascript:;" class="guide_item">
          <span @click="addshop">加入购物车</span>
        </a>
        <a href="javascript:;" class="guide_item">
          <span @click="handlerClick">立即购买</span>
        </a>
      </div>
    </div>
    <!-- popup弹出框 -->
    <div>
      <mt-popup v-model="popupVisible" position="bottom" class="detail_popup_content">
        <div class="detail_popup">
          <div class="detail_popup_title">
            <span>苏丹诺夫结果</span>
            <span @click="popupVisible = !popupVisible">
              <img src="../images/close.png">
            </span>
          </div>
          <div class="detail_popup_price">¥3200</div>
          <div class="detail_popup_num">
            <div class="detail_popup_num_left">购买数量</div>
            <div class="detail_popup_num_right">
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div>
            <span>单品合集：</span>
            <span>¥3200</span>
          </div>
        </div>
        <div class="detail_popup_num_shop">立即购买</div>
      </mt-popup>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      shopnum: 1,
      popupVisible: false
    };
  },
  methods: {
    addshop() {
      Toast({
        message: "加入购物车成功", //弹窗内容
        position: "middle", //弹窗位置
        duration: 300 //弹窗时间毫秒,如果值为-1，则不会消失
      });
      this.shopnum += 1;
    },
    handlerClick() {
      this.popupVisible = true;
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #333;
}
.detail_header {
  width: 750px;
  min-height: 100px;
  background: #c32918;
  font-size: 30px;
  line-height: 100px;
  position: relative;
  color: #fff;
}
.detail_back {
  position: absolute;
  margin-left: 46px;
}
.detail_title {
  text-align: center;
}
.detail_loop {
  width: 656px;
  min-height: 466px;
  background: #fff;
  margin-bottom: 6px;
  padding: 37px 47px;
}
.detsil_loop_center {
  width: 660px;
  height: 460px;
  margin: 0 auto;
  background: #f6f6f6;
}
.detail_content {
  width: 750px;
  min-height: 199px;
}
.detail_content_one,
.detail_content_two,
.detail_content_three {
  margin-bottom: 6px;
  background: #fff;
  padding: 24px 46px;
}
.detail_content_one {
  min-height: 117px;
  background: #c32918;
  padding: 0;
}
.detail_content_one_left {
  width: 480px;
  float: left;
}
.detail_content_one_left ul li {
  width: 110px;
  float: left;
  font-size: 22px;
  margin-left: 46px;
  color: #fff;
}
.detail_content_one_left ul li:nth-of-type(1) {
  font-size: 50px;
  margin-top: 30px;
}
.detail_content_one_left ul li:nth-of-type(2) {
  margin-top: 15px;
}
.detail_content_one_left ul li:nth-of-type(2) p {
  line-height: 45px;
}
.detail_content_one_left ul li:nth-of-type(3) {
  margin-top: 45px;
  width: 120px;
}
.detail_content_one_right {
  width: 260px;
  min-height: 117px;
  float: right;
  background: url("../images/detail_flash.png") no-repeat top;
  background-size: 100%;
  line-height: 0;
}
.detail_content_one_right ul li {
  margin-left: 60px;
  font-size: 30px;
  color: #fff;
  margin-top: 20px;
}
.detail_content_one_right span {
  display: inline-block;
  font-size: 0.3rem
}
.detail_content_one_right ul li span:nth-of-type(1) {
  width: 26px;
  height: 26px;
  margin-right: 10px;
  font-size: 40px;
}
.detail_content_one_right span img {
  width: 100%;
  vertical-align: middle;
  /* margin-right:10px; */
}
.detail_content_one_right ul li:nth-of-type(2) {
  margin-left: 80px;
}
.detail_content_one_right ul li:nth-of-type(2) span {
  display: inline-block;
  width: 33px;
  height: 33px;
  line-height: 33px;
  text-align: center;
  font-size: 22px;
  background: #db9d53;
}

.detail_content_title {
  font-size: 34px;
  color: #333;
  margin-bottom: 27px;
}
.detail_content_price {
  min-height: 61px;
  line-height: 61px;
}
.detail_content_price ul li {
  float: left;
}
.detail_content_price ul li:nth-of-type(1) {
  font-size: 22px;
  color: #999999;
  text-decoration: line-through;
}
.detail_content_price ul li:nth-of-type(2) {
  font-size: 28px;
  color: #c32918;
  float: right;
}
.detail_content_two_left {
  width: 480px;
  font-size: 22px;
  color: #999999;
  float: left;
  line-height: 39px;
}
.detail_content_two_left span:nth-of-type(2) {
  color: #c32918;
}
.detail_content_two_right {
  width: 173px;
  float: left;
}
.detail_content_two_right img {
  width: 100%;
}
.detail_content_three {
  min-height: 648px;
}
.detail_content_three_header {
  font-size: 28px;
  color: #333;
  margin-bottom: 31px;
}
.detail_content_three_header span:nth-of-type(1) {
  background: url("../images/home/block.png") no-repeat center;
  display: inline-block;
  width: 10px;
  height: 25px;
  margin-right: 8px;
}
.detail_content_three_desc {
  color: #666;
  font-size: 22px;
}
.detail_content_three_desc ul li {
  margin-bottom: 30px;
}

.footer_guide {
  border-top: 1px soild #e4e4e4;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 1px;
  background-color: #fff;
  width: 100%;
  height: 100px;
  line-height: 100px;
  display: flex;
}
.footer_guide a span:nth-of-type(2) {
  /* background:#c32918 */
}
.guide_item {
  display: flex;
  flex: 1;
  text-align: center;
  flex-direction: column;
  align-items: center;
  color: #999999;
  background: #c32918;
  color: #fff;
}
.guide_item:nth-of-type(1) {
  background: #fff;
}
.guide_item:nth-of-type(2) {
  background: #f6bf64;
}
.on {
  color: #02a774;
}
span {
  font-size: 12px;
  /* color:#f00 */
}
.shop_car {
  width: 62px;
  height: 62px;
  margin-top: 19px;
  position: relative;
}
.shop_car img {
  width: 100%;
}
.badge {
  width: 29px;
  height: 29px;
  line-height: 30px;
  border-radius: 50%;
  background: #f00;
  position: absolute;
  top: -10px;
  right: -8px;
  font-size: 12px;
}
.iconfont {
  font-size: 22px;
}
.detail_popup_content {
  width: 100%;
  font-size: 28px;
}
.detail_popup {
  width: 675px;
  height: 451px;
  color: #333;
  padding: 44px 30px 0 45px;
}
.detail_popup_title {
  font-size: 28px;
  min-height: 50px;
  margin-bottom: 24px;
}
.detail_popup_title span:nth-of-type(2) {
  /* float:right; */
  display: inline-block;
  width: 50px;
  height: 50px;
  float: right;
}
.detail_popup_title span img {
  width: 100%;
  vertical-align: middle;
}
.detail_popup_price {
  margin-bottom: 24px;
}
.detail_popup_num {
  border-top: 3px dashed #ccc;
  border-bottom: 3px dashed #ccc;
  line-height: 88px;
  margin-bottom: 24px;
}
.detail_popup_num_shop {
  position: fixed;
  bottom: 0;
  text-align: center;
  line-height: 100px;
  color: #fff;
  background: #c32918;
  width: 750px;
  font-size: 30px;
}
</style>
