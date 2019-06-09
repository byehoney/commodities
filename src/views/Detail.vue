<template>
  <div>
    <div class="detail_header">
      <div class="detail_back" @click="$router.go(-1)">返回</div>
      <div class="detail_title">商品详情</div>
    </div>
    <div class="detail_loop">
      <div class="detsil_loop_center">
         <img :src='shopDetail.slt'/>
        </div>
    </div>

    <div class="detail_content">
      <!-- 价格栏位 -->
      <div class="detail_content_one">
        <div class="detail_content_title">{{shopDetail.cj}}</div>
        <div class="detail_content_content">
          <div class="detail_content_tag">
            <span>
              <img src="../images/detail_xing.png">
            </span>
            <span>
              <img src="../images/detail_sale.png">
            </span>
            <div class="detail_content_price">
              <ul>
                <li>原价：4590</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="newprice">¥{{shopDetail.cxj}}</div>
        <div style="clear:both"></div>
      </div>
      <!-- 所在地区 -->
      <div class="detail_content_two">
        <div class="detail_content_two_left">
          <ul>
            <li>
              <span>所在地区：</span>
              <span>北京</span>
            </li>
            <li>
              <span>销量：</span>
              <span>{{shopDetail.ljsl}}</span>
            </li>
          </ul>
        </div>
        <div style="clear:both"></div>
        <div class="detail_content_add">
          <ul>
            <li>
              <span>优惠</span>
              <span>优惠相关文案展示内容</span>
            </li>
            <li>
              <span>活动</span>
              <span>满88员，省10元</span>
            </li>
          </ul>
        </div>
        <div class="detail_content_two_right">
          <!-- <img src="../images/detail_shop.png"> -->
        </div>
        <div style="clear:both"></div>
      </div>
      <!-- 商品信息栏位 -->
      <div class="detail_content_three">
        <div class="detail_content_three_header">
          <span></span>
          <span>商品信息</span>
        </div>
        <div class="detail_content_three_desc">
          <ul>
            <li>
              <p>商品名称：{{shopDetail.spmc}}</p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </li>
            <li>
              <p>最小包装：{{shopDetail.xbz}}g</p>
              <p>采集量:{{shopDetail.cjl}}</p>
              <p>中包装:{{shopDetail.zbz}}</p>
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
      <div class="footer_guide fix">
        <div class="footer_guide_left fix">
          <ul>
            <li>
              <img src="../images/shopcar.png">
              <p class="badge">{{shopnum}}</p>
            </li>
            <li>
              <img src="../images/kefu.png">
            </li>
          </ul>
        </div>
        <div class="footer_guide_right fix">
          <ul>
            <li>
              <span @click="addshop">加入购物车</span>
            </li>
            <li>
              <span @click="handlerClick">立即购买</span>
            </li>
          </ul>
        </div>
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
                <li @click="reduce">-</li>
                <li>{{shopnum}}</li>
                <li @click="add">+</li>
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
import { getChooseDetail } from "@/api/index";
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      shopnum: 1,
      popupVisible: false,
      shopDetail:[]
    };
  },
  computed: {
    ...mapState("login", ["user"]),
    ...mapGetters("login", [
      "token",
      "userId",
      "corpCode",
      "companyId",
      "userRole"
    ])
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
    },
    add() {
      this.shopnum += 1;
    },
    reduce() {
      this.shopnum == 0 ? (this.shopnum = 0) : this.shopnum--;
    },
    async getShopDetail() {
      let defaulParams = {
        token: this.token,
        userId: this.userId,
        corpCode: this.corpCode,
        companyId: this.companyId,
        userRole: this.userRole,
        productId:this.$route.query.id
      };
      let result = await getChooseDetail(defaulParams);
      this.shopDetail=result.data
    }
  },
  deactivated(){
      this.loading = true;
  },
  mounted() {
    console.log(this.$route.query.id);
    this.getShopDetail();
  }
};
</script>

<style scoped lang="scss">
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
  img{
    width:100%;
    height: 100%;
  }
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
}
.detail_content_tag {
  height: 43px;
  line-height: 43px;
  margin-bottom: 20px;
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
  text-decoration: line-through;
}
.detail_content_price ul li:nth-of-type(2) {
  font-size: 28px;
  color: #ff0000;
  float: right;
}
.detail_content_two_left {
  width: 610px;
  font-size: 22px;
  color: #999999;
  float: left;
  line-height: 39px;
}
.detail_content_two_left ul li {
  float: left;
}
.detail_content_two_left ul li:nth-of-type(2) {
  float: right;
}
.detail_content_two_left span:nth-of-type(2) {
  color: #ff0000;
}
.detail_content_add ul li {
  line-height: 30px;
  color: #666;
}
.detail_content_add ul li span:nth-of-type(1) {
  color: #ff0000;
  margin-right: 25px;
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
  line-height: 35px;
}
/* 底部样式 */
.footer_guide {
  border-top: 5px solid #e4e4e4;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 1px;
  background-color: #fff;
  width: 100%;
  height: 95px;
  line-height: 95px;
}
.footer_guide_left {
  width: 262px;
  float: left;
  min-height: 100px;
}
.footer_guide_left ul li {
  width: 62px;
  height: 62px;
  float: left;
  margin-left: 49px;
}
.footer_guide_left ul li:nth-of-type(1) {
  position: relative;
}
.footer_guide_left ul li:nth-of-type(2) {
  width: 49px;
  height: 62px;
  float: left;
}
.footer_guide_left ul li img,
.footer_guide_right ul li img {
  width: 100%;
}
.footer_guide_right {
  width: 488px;
  float: left;
  text-align: center;
  color: #fff;
}
.footer_guide_right ul li {
  width: 244px;
  height: 100px;
  line-height: 50px;
  float: left;
  background: url("../images/resultgray.png") no-repeat top;
  background-size: 100%;
}
.footer_guide_right ul li:nth-of-type(2) {
  background: url("../images/result.png") no-repeat top;
  background-size: 100%;
}
.on {
  color: #02a774;
}
span {
  display: inline-block;
  font-size: 12px;
}
.badge {
  width: 29px;
  height: 29px;
  line-height: 30px;
  border-radius: 50%;
  background: #f00;
  position: absolute;
  z-index: 100;
  top: 10px;
  right: -8px;
  font-size: 12px;
  text-align: center;
  color: #fff;
  line-height: 29px;
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
.detail_content_content {
  float: left;
}
.newprice {
  float: right;
  font-size: 50px;
  color: #ff0000;
  margin-top: 30px;
}
.detail_popup_price {
  margin-bottom: 24px;
}
.detail_popup_num {
  border-top: 3px dashed #ccc;
  border-bottom: 3px dashed #ccc;
  line-height: 88px;
  min-height: 88px;
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
.detail_popup_num_left {
  float: left;
}
.detail_popup_num_right {
  float: right;
  width: 180px;
  height: 50px;
}
.detail_popup_num_right ul li {
  float: left;
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  line-height: 50px;
  margin-top: 15px;
  text-align: center;
  cursor: pointer;
}
</style>
