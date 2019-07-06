<template>
  <div>
    <ManageHeader :title="title" class="fixed"></ManageHeader>
    <div class="userInfo">
        <img src="../images/manage_local_icon.png" alt="">
        <div class="info">
            <p class="detail">河北省保定市西王村星星烟花旗舰店</p>
            <p class="detail">张建 13811199990</p>
            <p class="detail">大西街3栋42-6</p>
        </div>
    </div>
    <div class="goodsInfo">
        <div class="goodsItem">
            <img src="../images/default_logo.jpg" alt="">
            <div class="infos">
                <p class="name">烟花商品名称</p>
                <p class="fName">河北保定星星烟花制造厂</p>
                <p class="scale">规格：35g*1支 数量：20</p>
                <p class="tags">
                    <span class="tag">8.8折</span>
                </p>
                <p class="price">
                    <span class="nPrice">￥6.50</span>
                    <span class="oPrice">8.80</span>
                </p>
            </div>
        </div>
    </div>
    <div class="orderInfo">
        <div class="orderTop">
            <p class="info">订单编号：987539759348</p>
            <p class="info">下单时间：2019-04-25 14：19：00</p>
            <p class="info">订单备注：</p>
            <p class="info price">￥120</p>
        </div>
        <div class="orderBot">
            <p class="info">
                <span>总件数：</span>
                <span>99</span>
            </p>
            <p class="info">
                <span>商品总额：</span>
                <span>￥999</span>
            </p>
            <p class="info">
                <span>立减：</span>
                <span class="red">-￥20</span>
            </p>
            <p class="info">
                <span>实付款：</span>
                <span class="red">￥120</span>
            </p>
            <div class="btn">待出库</div>
        </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { mapGetters } from 'vuex'
import ManageHeader from "../components/ManageHeader";
export default {
  data() {
    return {
      title: "订单详情",
    };
  },
  components: { ManageHeader },
  computed: {
    ...mapGetters('login',['token','userId','corpCode','companyId','userRole'])
  },
  mounted() {
    
  },
  methods:{
  
  }
};
</script>

<style scoped lang="scss">
.orderInfo{
    background-color: #fff;
    .orderTop{
        border-bottom: 2px solid #ebebeb;
        padding: 23px 51px 31px 0;
        margin-left: 39px;
        .info{
            font-size:24px;
            color:rgba(102,102,102,1);
            line-height:31px;
            letter-spacing:1px;
            margin-bottom: 16px;
            &.price{
                text-align: right;
            }
        }
    }
    .orderBot{
        padding: 34px 51px 33px 0;
        margin-left: 39px;
        display: flex;
        flex-direction: column;
        .info{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size:24px;
            color:rgba(102,102,102,1);
            line-height:31px;
            letter-spacing:1px;
            margin-bottom: 16px;
            .red{
                color: #FF0000;
            }
        }
        .btn{
            width:145px;
            height:50px;
            background:rgba(255,255,255,1);
            border-radius:35px;
            border:2px solid rgba(74,144,226,1);
            text-align: center;
            line-height:50px;
            font-size:22px;
            color:rgba(74,144,226,1);
            letter-spacing:2px;
            align-self: flex-end;
            margin-top: 80px;
        }
    }
}
.goodsInfo{
    background: #fff;
    .goodsItem{
        margin-left: 40px;
        border-bottom: 2px solid #ebebeb;
        display: flex;
        align-items: center;
        padding: 34px 51px 31px 0;
        img{
            width:200px;
            height:224px;
            object-fit: scale-down;
            margin-right: 37px;
        }
        .infos{
            .name{
                font-size:26px;
                color:rgba(51,51,51,1);
                line-height:35px;
                letter-spacing:2px;
                margin-bottom: 20px;
            }
            .fName,.scale{
                font-size:18px;
                color:rgba(102,102,102,1);
                line-height:24px;
                letter-spacing:1px;
                margin-bottom: 5px;
            }
            .tags{
                display:flex;
                .tag{
                    display: inline-block;
                    padding:0 5px;
                    border:2px solid #FF220A;
                    border-radius:4px;
                    font-size:18px;
                    color:rgba(255,34,10,1);
                    height: 30px;
                    line-height:30px;
                    letter-spacing:1px;
                    margin-bottom: 39px;
                }
            }
            .price{
                display: flex;
                align-items: center;
                .nPrice{
                    font-size:28px;
                    color:rgba(102,102,102,1);
                    line-height:37px;
                    margin-right: 22px;
                }
                .oPrice{
                    font-size:18px;
                    color:rgba(153,153,153,1);
                    line-height:24px;
                    letter-spacing:1px;
                }
            }
        }
    }
}
.userInfo{
    display: flex;
    width: 100%;
    height: 178px;
    align-items: center;
    background-color: #fff;
    margin-top: 100px;
    border-bottom: 2px solid #ebebeb;
    img{
        width: 48px;
        height: 59px;
        margin: 0 26px 0 40px;
    }
    p.detail{
        font-size:24px;
        color:rgba(51,51,51,1);
        line-height:31px;
        letter-spacing:1px;
        margin-bottom: 13px;
    }
}
.fixed{
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}
</style>
