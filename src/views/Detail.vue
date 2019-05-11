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
        <div class="detail_content_title">星星闪耀</div>
        <div class="detail_content_tag">
          <span>
            <img src="../images/detail_xing.png">
          </span>
          <span>
            <img src="../images/detail_sale.png">
          </span>
        </div>
        <div class="detail_content_price">
          <ul>
            <li>原价：4590</li>
            <li>¥3200</li>
          </ul>
        </div>
      </div>
      <div class="detail_content_two">
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
          <span>热门分类</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
.detail_content_title {
  font-size: 34px;
  color: #333;
  line-height: 45px;
  margin-bottom: 11px;
}
.detail_content_tag {
  height: 43px;
  line-height: 30px;
}
.detail_content_tag span {
  display: inline-block;
  width: 60px;
  height: 30px;
  margin-right: 10px;
}
.detail_content_tag span img {
  width: 100%;
  vertical-align: top;
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
  margin-bottom: 45px;
}
.detail_content_three_header  span:nth-of-type(1) {
  background: url("../images/home/block.png") no-repeat center;
  display: inline-block;
  width: 10px;
  height: 25px;
  margin-right: 8px;
}
</style>
