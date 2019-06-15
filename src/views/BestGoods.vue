<template>
  <div class="telContainer" style="opacity:1">
    <TopNav></TopNav>
    <div class="telContent">
      <div
        class="scrollBox"
        style="max-height: 100vh; overflow-y: auto;"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
      >
        <div class="scrollItem">
          <div class="top">
            <div class="title">XXX精品活动 满10赠4</div>
          </div>
          <div class="bottom">
            <img class="sel_icon" src="../images/car_circle.png" alt>
            <div class="box">
              <div class="left">
                <img src="../images/shopcar.png" alt>
              </div>
              <div class="right">
                <p class="name">春日大地红喜庆12响</p>
                <p class="factory">河北保定星星烟花制造厂</p>
                <p class="size">规格：35g*1支</p>
                <p class="oPrice">原价：￥8.80</p>
                <div class="fun">
                  <p class="nPrice">￥6.50</p>
                  <div class="counter">
                    <p class="reduce" @click="reduce(index)">-</p>
                    <p class="num" @click="popInput(index)">0</p>
                    <p class="add" @click="add(index)">+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 商品活动 -->
          <div class="shop_gift">
            <div class="shop_gift_top">
              <div class="shop_gift_left">
                <h3>商品活动</h3>
              </div>
              <div class="shop_gift_right">累积购买可或赠品，点击查看更多活动规则</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer_guide fix">
      <div class="footer_guide_left fix">
        <p class="badge"></p>
        <p>¥0</p>
      </div>
      <div class="footer_guide_right fix">
        <ul>
          <li>
            <span @click="handlerClick">确定</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="mask" v-show="showInput">
      <div class="inputModal">
        <p class="title">修改购买数量</p>
        <div class="funArea">
          <div class="reduce" @click="popReduce">-</div>
          <input type="number" min="1" v-model="num" class="num">
          <div class="add" @click="popAdd">+</div>
        </div>
        <div class="btnGroup">
          <div class="cancel btn" @click="closeInput">取消</div>
          <div class="confirm btn" @click="confirmInput">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import TopNav from "@/components/TopNav";
import { getBestGoodsList } from '@/api/index'
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      showInput:true,//是否显示输入框
      num:1,//输入框内数字
    };
  },
  computed:{
    ...mapGetters('login',['token','userId','corpCode','companyId','userRole'])
  },
  components: {
    TopNav
  },
  mounted() {
    this.getData();
  },
  methods: {
    popReduce(){
      if(this.num<=1){
        this.num = 1;
        return;
      }else{
        this.num = this.num-1;
      }
    },
    popAdd(){
      this.num = this.num+1;
    },
    popInput(){
      this.showInput = true;
      this.num = 1;
    },
    closeInput(){
      this.showInput = false;
    },
    confirmInput(){
      this.showInput = false;
    },
    handlerClick(){

    },
    async getData(){
      let defaulParams = {
        token:this.token,
        userId:this.userId,
        corpCode:this.corpCode,
        companyId:this.companyId,
        userRole:this.userRole,
      };
      let res = await getBestGoodsList(defaulParams);
    },
    loadMore() {}
  }
};
</script>
<style lang="scss" scoped>
.telContainer {
  width: 100vw;
  min-height: 100vh;
  background: rgba(235, 235, 235, 1);
  .nav {
    border-bottom: 2px solid #ebebeb;
  }
  .mask{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.3);
    z-index: 1000;
    .inputModal{
      width: 500px;
      height: 250px;
      background-color: #fff;
      border-radius: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -125px;
      margin-left: -250px;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
      .btnGroup{
        display: flex;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 60px;
        border-top: 2px solid #ebebeb;
        .btn{
          width: 50%;
          text-align: center;
          line-height: 60px;
          font-size: 26px;
          &.confirm{
            background-color: #ff1900;
            color: #fff;
            padding-right: 2px;
          }
        }
      }
      .title{
        font-size: 26px;
        color: rgba(102, 102, 102, 1);
        line-height: 35px;
        letter-spacing: 2px;
        text-align: center;
        padding: 30px 0;
      }
      .funArea{
        display: flex;
        align-items: center;
        justify-content: center;
        .reduce,.add{
          width: 50px;
          height: 50px;
          border: 2px solid #ebebeb;
          font-size: 26px;
          line-height: 50px;
          text-align: center;
        }
        .num{
          width: 100px;
          height: 50px;
          border-left: none;
          border-right: none;
          border-top: 2px solid #ebebeb;
          border-bottom: 2px solid #ebebeb;
          text-align: center;
          font-size: 26px;
          line-height: 50px;
          outline: none;
          color:#333;
        }
      }
    }
  }
  .telContent {
    padding-top: 92px;
    background-color: #fff;
    .scrollBox {
      padding-left: 44px;
    }
    .scrollItem {
      .top {
        font-size: 26px;
        color: rgba(102, 102, 102, 1);
        line-height: 35px;
        letter-spacing: 2px;
        padding: 17px 39px 20px 0;
        border-bottom: 2px solid #ebebeb;
        margin-bottom: 24px;
      }
      .bottom {
        display: flex;
        align-items: center;
        .sel_icon {
          width: 40px;
          height: 40px;
        }
        .box {
          display: flex;
          align-items: center;
          flex: 1;
          border-bottom: 1px solid #e5e5e5;
          padding-right: 39px;
          padding-bottom: 16px;
          .left {
            width: 220px;
            height: 176px;
            img {
              width: 100%;
              height: 100%;
              object-fit: scale-down;
            }
          }
          .right {
            flex: 1;
            display: flex;
            flex-direction: column;
            .name {
              font-size: 26px;
              color: rgba(102, 102, 102, 1);
              line-height: 35px;
            }
            .factory,
            .size,
            .oPrice {
              font-size: 18px;
              color: rgba(153, 153, 153, 1);
              line-height: 24px;
              letter-spacing: 1px;
              margin-top: 8px;
            }
            .oPrice {
              text-decoration: line-through;
            }
            .fun {
              display: flex;
              justify-content: space-between;
              align-items: center;
              .nPrice {
                font-size: 26px;
                color: rgba(255, 25, 0, 1);
                line-height: 35px;
              }
              .counter {
                display: flex;
                width: 180px;
                height: 50px;
                .reduce,
                .add {
                  width: 45px;
                  height: 46px;
                  line-height: 36px;
                  text-align: center;
                  border: 2px solid #ebebeb;
                  font-size: 28px;
                  color: rgba(102, 102, 102, 1);
                  line-height: 46px;
                  letter-spacing: 2px;
                }
                .num {
                  height: 46px;
                  border-top: 2px solid #ebebeb;
                  border-bottom: 2px solid #ebebeb;
                  font-size: 28px;
                  color: rgba(102, 102, 102, 1);
                  line-height: 46px;
                  letter-spacing: 2px;
                  width: 76px;
                  text-align: center;
                }
              }
            }
          }
        }
      }
    }
  }
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
.footer_guide_left p {
  font-size: 32px;
  float: left;
  margin-left: 49px;
}
.footer_guide_left p:nth-of-type(2){
    margin-left:16px;
    color:#ff0000
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
  float: right;
  background: url("../images/result.png") no-repeat top;
  background-size: 100%;
  span{
    font-size: 32px;
  }
}
.on {
  color: #02a774;
}
span {
  display: inline-block;
  font-size: 12px;
}
.badge {
  width: 62px;
  height: 62px;
  font-size: 26px;
  text-align: center;
  color: #666;
margin-top:15px;
  background: url("../images/choose_car.png") no-repeat top;
  background-size: 100% 100%;
  span {
    color: #ff0000;
    font-size: 26px;
  }
}
.iconfont {
  font-size: 22px;
}
</style>
