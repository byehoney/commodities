<template>
    <div class="logistContainer">
       <TopNav></TopNav>
       <div class="map" id="map">

       </div>
       <div class="infoBox">
           <div class="infoItem">
               <div class="title">订单信息</div>
               <div class="content">
                   <div class="left">订单号码：</div>
                   <div class="right">8475694068308534-40</div>
               </div>
               <div class="content">
                   <div class="left">下单时间：</div>
                   <div class="right">2019-05-1719：00：00</div>
               </div>
                <div class="content">
                   <div class="left">支付方式：</div>
                   <div class="right">在线支付</div>
               </div>
           </div>
           <div class="infoItem">
               <div class="title">配送信息</div>
               <div class="content">
                   <div class="left">
                       配送服务：
                   </div>
                   <div class="right">
                       顺丰快递
                   </div>
               </div>
               <div class="content">
                   <div class="left">
                       配送地址：
                   </div>
                   <div class="right">
                       北京市朝阳区东三环中路66号 三门 2022楼
                   </div>
               </div>
           </div>
       </div>
       <div class="nextBtn">
           <img src="../images/kefu_icon.png"  alt="">
           <span>联系客服</span>
       </div>
    </div>
</template>
<script>
import TopNav from "@/components/TopNav";
export default {
    data(){
        return{
            
        }
    },
    components: {
        TopNav,
    },
}
</script>
<style lang="scss" scoped>
    .logistContainer{
        width: 100vw;
        min-height: 100vh;
        background: rgba(235, 235, 235, 1);
        .nav{
            border-bottom: 2px solid #ebebeb;
        }
        .map{
            width: 100%;
            height: 500px;

        }
        .infoBox{
            padding: 0 41px 0 39px;
            background-color: #fff;
            .infoItem{
                border-bottom: 2px solid #ebebeb;
                padding-bottom: 59px;
                padding-top: 42px;
                .title{
                    font-size:24px;
                    color:rgba(51,51,51,1);
                    line-height:31px;
                    letter-spacing:1px;
                    border-left: 10px solid #FF1240;
                    padding-left: 10px;
                    margin-bottom: 46px;
                }
                .content{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 16px;
                    .left{
                        font-size:24px;
                        color:rgba(153,153,153,1);
                        line-height:31px;
                        letter-spacing:1px;
                        width: 125px;
                        flex: 1;
                    }
                    .right{
                        width: 500px;
                        font-size:24px;
                        color:rgba(153,153,153,1);
                        line-height:31px;
                        letter-spacing:1px;
                    }
                }
            }
        }
        .nextBtn{
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100vw;
            height: 98px;
            line-height: 98px;
            text-align: center;
            font-size:36px;
            color:rgba(255,255,255,1);
            letter-spacing:3px;
            background-color: #fff;
            margin: 0 auto;
            img{
                width: 32px;
                height: 35px;
                margin-right: 16px;
            }
            span{
                font-size:26px;
                color:rgba(255,0,0,1);
                line-height:35px;
                letter-spacing:2px;
                position: relative;
                bottom: 5px;
            }
        }
    }
</style>
