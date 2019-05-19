<template>
  <div class="joinContainer">
    <TopNav></TopNav>
    <div class="join_area">
      <div class="title">选择XX店地址</div>
      <div class="sel_area">
        <div class="sel_item">
            <div class="info_item" @click="handlerArea">
                <div class="left">所在地区</div>
                <div class="right">
                    <span>{{sel_value}}</span>
                    <img src="../images/arrow_right.png" alt>
                </div>
            </div>
        </div>
        <div>
          <div class="sel_shop" @click="selShop">
            <div class="left">请选择门店</div>
            <div class="right">
              <span>{{sel_shop}}</span>
              <img src="../images/arrow_right.png" alt>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="creat_new" @click="creatNew">+创建新店</div>
    <div class="nextBtn">下一步</div>
    <mt-popup v-model="popupVisible" position="bottom">
      <mt-picker :slots="slots" @change="onValuesChange" showToolbar>
        <div class="barContent">
          <div @click="shopCancel" class="cancel">取消</div>
          <div class="tip">请选择</div>
          <div @click="handleConfirm" class="sure">确认</div>
        </div>
      </mt-picker>
    </mt-popup>
    <CityPicker :areaVisible="areaVisible" :setArea="handleSetArea" :cancel="handleCancel"></CityPicker>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import TopNav from "@/components/TopNav";
import CityPicker from "@/components/CityPicker";
export default {
  data() {
    return {
      popupVisible: false,
      areaVisible:false,
      set_value: "", //滑动变化值
      sel_value: "请选择", //选择的值
      set_shop:'',//选择门店滑动变化值
      sel_shop:'请选择门店',//选中门店
      slots: [
        {
          flex: 1,
          values: ["门店1", "门店2", "门店3", "门店4"],
          className: "slot1",
          textAlign: "center"
        }
      ]
    };
  },
  components: {
    TopNav,
    CityPicker
  },
  methods: {
    handlerArea(){
        this.areaVisible = !this.areaVisible;
    },
    handleSetArea(value){
        this.sel_value = value;
        this.areaVisible = false;
    },
    handleCancel(){
        this.areaVisible = false;
    },
    onValuesChange(picker, values) {
      this.set_shop = values[0];
    },
    selShop() {
      this.popupVisible = !this.popupVisible;
    },
    shopCancel() {
      this.popupVisible = false;
    },
    handleConfirm() {
      this.popupVisible = false;
      this.sel_shop = this.set_shop;
    },
    creatNew() {
      this.$router.push("./creatNewShop");
    }
  }
};
</script>
<style lang="scss" scoped>
.joinContainer {
  width: 100vw;
  height: 100vh;
  background: rgba(235, 235, 235, 1);
  .title {
    padding-top: 88px;
    width: 100%;
    height: 88px;
    line-height: 88px;
    text-align: center;
    font-size: 28px;
    color: rgba(102, 102, 102, 1);
    letter-spacing: 2px;
  }
  .sel_item{
      background-color:#fff; 
      height: 122px;
      .info_item{
        display: flex;
        align-items: center;
        margin-left: 39px;
        border-bottom: 2px solid #ebebeb;
        justify-content: space-between;
        height: 100%;
        padding-right: 47px;
        .left{
            font-size:26px;
            color:rgba(102,102,102,1);
            letter-spacing:1px;
        }
        .right{
            display: flex;
            align-items: center;
            span{
                font-size:26px;
                color:rgba(153,153,153,1);
                letter-spacing:3px;
                margin-right: 30px;
            }
            img{
                width: 17px;
                height: 30px;
            }
        }
      }
  }
  .sel_shop {
    height: 122px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 26px;
    color: rgba(102, 102, 102, 1);
    line-height: 35px;
    letter-spacing: 1px;
    padding: 0 47px 0 39px;
    background-color: #fff;
    .right {
      display: flex;
      align-items: center;
      span {
        margin-right: 30px;
      }
      img {
        width: 17px;
        height: 30px;
      }
    }
  }
  .mint-popup-bottom {
    width: 100%;
  }
  .picker-toolbar {
    height: 96px;
    border-bottom: 2px solid #ebebeb;
  }
  .barContent {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 38px;
    color: #666;
    .cancel,
    .sure {
      height: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 30px;
      font-size: 26px;
      color: rgba(102, 102, 102, 1);
      letter-spacing: 2px;
    }
    .sure {
      color: #ff0000;
    }
    .tip {
      font-size: 30px;
      color: rgba(51, 51, 51, 1);
      letter-spacing: 3px;
    }
  }
  .slot1 {
    width: 100vw;
    .picker-item {
      font-size: 30px;
      color: rgba(51, 51, 51, 1);
      height: 78px;
      line-height: 78px;
      letter-spacing: 3px;
    }
  }
  .creat_new {
    width: 266px;
    height: 82px;
    line-height: 82px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    border: 1px solid rgba(255, 0, 0, 1);
    margin: 62px auto 46px;
    font-size: 26px;
    color: rgba(255, 0, 0, 1);
    letter-spacing: 3px;
    text-align: center;
  }
  .nextBtn {
    width: 671px;
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

