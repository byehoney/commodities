<template>
  <div class="joinContainer" style="opacity:1">
    <TopNav></TopNav>
    <div class="join_area">
      <div class="title">选择门店地址</div>
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
    <div class="creat_new" @click="creatNew()">+创建新店</div>
    <div class="nextBtn" @click="joinShop()" v-if="!is_add_relative">下一步</div>
    <div class="nextBtn" @click="addEffectShop()" v-if="is_add_relative">完成</div>
    <mt-popup v-model="popupVisible" position="bottom">
      <mt-picker :slots="slots" @change="onValuesChange" showToolbar valueKey="clientName">
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
import {mapState,mapMutations} from 'vuex';
import {getRegShopList} from '@/api/index';
export default {
  data() {
    return {
      is_add_relative:false,//页面来源是否是  我的 --  添加关联门店
      popupVisible: false,//门店选择开关
      areaVisible:false,//地区选择开关
      set_value: "", //滑动变化值
      sel_value: "请选择", //选择的值
      pCode:'',
      cCode:'',
      aCode:'',
      set_shop:'',//选择门店滑动变化值
      set_shopCode:'',//选择门店滑动变化是选中的门店编码
      sel_shop:'请选择门店',//选中门店
      sel_shopCode:'',//选择门店对应的编码
      slots: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          textAlign: "center"
        }
      ]
    };
  },
  computed:{
    ...mapState('register',['joinInfo'])
  },
  components: {
    TopNav,
    CityPicker
  },
  mounted(){
    if(this.$router.history.current.query.addRelate){
      this.is_add_relative = true;
    }
    this.pCode = this.joinInfo.pCode;
    this.cCode = this.joinInfo.cCode;
    this.aCode = this.joinInfo.aCode;
    this.sel_value = this.joinInfo.addr||'请选择地区';
    this.sel_shop = this.joinInfo.shopName||'请选择门店';
    this.sel_shopCode = this.joinInfo.shopCode;
    console.log(this.$store.state)
    if(this.sel_shopCode&&this.aCode){
      this.getShopList();
    }
  },
  methods: {
    ...mapMutations('register',['saveJoinInfo']),
    handlerArea(){
        this.areaVisible = !this.areaVisible;
    },
    handleSetArea(value,pCode,cCode,aCode){
        console.log(pCode,cCode,aCode)
        this.sel_value = value;
        this.pCode = pCode;
        this.cCode = cCode;
        this.aCode = aCode;
        this.areaVisible = false;
        this.sel_shop = '请选择门店';
        this.sel_shopCode = '';
        this.getShopList();
    },
    handleCancel(){
        this.areaVisible = false;
    },
    onValuesChange(picker, values) {
      console.log(values)
      if(values[0]){
        this.set_shop = values[0].clientName;
        this.set_shopCode = values[0].clientCode;
      }
      console.log(this.set_shopCode)
      console.log(this.set_shop)
    },
    selShop() {
      if(!this.pCode||!this.cCode||!this.aCode){
        Toast({
            message: "请选择所在区域",
            position: "middle",
            duration: 2000
        });
        return;
      }else if(!this.slots[0].values.length){
        Toast({
            message: "你选则的区域暂无门店",
            position: "middle",
            duration: 2000
        });
        return;
      }
      this.popupVisible = !this.popupVisible;
    },
    shopCancel() {
      this.popupVisible = false;
    },
    handleConfirm() {
      this.popupVisible = false;
      this.sel_shop = this.set_shop;
      this.sel_shopCode = this.set_shopCode;
    },
    async getShopList(){//获取门店列表
      let res = await getRegShopList({regionCode:this.aCode});
      this.$set(this.slots[0],'values',res.data.list);
    },
    creatNew() {
      if(this.is_add_relative){
        this.$router.push({name:'creatNewShop',query:{is_add_relative:true}});
      }else{
        this.$router.push({name:'creatNewShop'});
      }
    },
    joinShop(){
      if(!this.sel_shop||!this.sel_shopCode||!this.sel_value||this.sel_value=='请选择地区'||this.sel_shop=='请选择门店'){
        return;
      }
      let data = {
        pCode:this.pCode,
        cCode:this.cCode,//市编码
        aCode:this.aCode,//区域编码
        shopCode:this.sel_shopCode,//门店编码
        addr:this.sel_value,//注册选择的加入门店地址（省市区）
        shopName:this.sel_shop//注册选择加入的门店名称
      }
      this.saveJoinInfo(data);
      this.$router.push({name:'salerInfo'})
    },
    addEffectShop(){

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
        height: 120px;
        justify-content: space-between;
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

