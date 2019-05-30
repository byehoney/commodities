<template>
  <div class="hasEvaContainer">
    <TopNav></TopNav>
    <div class="orderInfo">
      <span>订单编号：</span>
      <span>BJ5332100986457</span>
    </div>
    <div class="evaArea">
      <div class="top">
        <div class="selArea">
          <div class="selItem">
            <img src="../images/car_circle.png" v-if="!qCheck" alt>
            <img src="../images/car_checkcircle.png" v-else alt>
            <p>质量问题</p>
          </div>
          <div class="selItem">
            <img src="../images/car_circle.png" v-if="!sCheck" alt>
            <img src="../images/car_checkcircle.png" v-else alt>
            <p>物流速度太慢</p>
          </div>
          <div class="selItem">
            <img src="../images/car_circle.png" v-if="!oCheck" alt>
            <img src="../images/car_checkcircle.png" v-else alt>
            <p>其他原因</p>
          </div>
        </div>
        <div class="tipArea">
          <p class="tip_title">留言</p>
          <div class="tip_text">
            <textarea v-model="evaContent" placeholder="填写您要退货的详细原因"></textarea>
          </div>
        </div>
        <div class="upArea">
          <div class="selectPic">
            <UploadImages
              :setList="setImgList"
              :multiple="true"
              :max="6"
              :list="imgList"
              ref="upload"
            ></UploadImages>
          </div>
          <div class="up_tip">上传晒图</div>
        </div>
      </div>
    </div>
    <div class="nextBtn" @click="sendEva">提交</div>
  </div>
</template>
<script>
import TopNav from "@/components/TopNav";
import UploadImages from "@/components/UploadImages";
let starOffImg = require("@/images/star_grey.png");
let starOnImg = require("@/images/eva_star.png");
export default {
  data() {
    return {
      qCheck:false,
      sCheck:false,
      oCheck:false,
      evaContent: "",
      imgList: []
    };
  },
  components: {
    TopNav,
    UploadImages
  },
  methods: {
    setImgList(list) {
      console.log(list);
    },
    sendEva() {
      console.log(this.imgList);
    }
  }
};
</script>
<style lang="scss" scoped>
.hasEvaContainer {
  width: 100vw;
  min-height: 100vh;
  background: rgba(235, 235, 235, 1);
//   padding-bottom: 120px;
  .nav {
    border-bottom: 2px solid #ebebeb;
  }
  .orderInfo {
    height: 136px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 43px 0 48px;
    background-color: #fff;
    padding-top: 92px;
    font-size: 30px;
    color: rgba(51, 51, 51, 1);
    line-height: 40px;
    letter-spacing: 3px;
    margin-bottom: 7px;
  }
  .evaArea {
    padding: 0 0 10px 46px;
    background-color: #fff;
    .top {
        .selArea{
            .selItem{
                width: 100%;
                border-bottom: 2px solid #e9e9e9;
                font-size:26px;
                color:rgba(102,102,102,1);
                line-height:35px;
                letter-spacing:1px;
                display: flex;
                align-items: center;
                height: 104px;
                img{
                    width: 40px;
                    height: 40px;
                    margin-right: 28px;
                }
            }
        }
        .tipArea{
            .tip_title{
                font-size:26px;
                color:rgba(51,51,51,1);
                line-height:35px;
                letter-spacing:2px;
                padding-top: 45px;
                padding-bottom: 24px;
            }
            .tip_text{
                width:662px;
                height:184px;
                border:2px solid rgba(151,151,151,1);
                margin-bottom: 62px;
                textarea{
                    width: 624px;
                    height: 146px;
                    border: none;
                    outline: none;
                    font-size:24px;
                    color:rgba(155,155,155,1);
                    line-height:31px;
                    letter-spacing:2px;
                    resize:none;
                    padding: 16px 0;
                    margin: 0 16px;
                }
            }
        }
        .upArea {
            // display: flex;
            margin-bottom: 34px;
            .selectPic {
            width: 100%;
            }
            .upBox {
            width: 168px;
            height: 124px;
            border-radius: 12px;
            border: 2px solid rgba(235, 235, 235, 1);
            background: url("../images/upload_icon.png") no-repeat center center;
            background-size: 87px 63px;
            }
            .up_tip {
            align-items: flex-end;
            font-size: 24px;
            color: rgba(51, 51, 51, 1);
            line-height: 31px;
            letter-spacing: 2px;
            display: flex;
            margin-left: 28px;
            }
        }
    }
  }
  .bottom {
    margin-top: 10px;
    .star {
      width: 36px;
      height: 34px;
      margin-right: 15px;
    }
  }
  .nextBtn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 98px;
    line-height: 98px;
    text-align: center;
    font-size: 36px;
    color: rgba(255, 255, 255, 1);
    letter-spacing: 3px;
    background-color: #666;
    margin: 0 auto;
  }
}
</style>