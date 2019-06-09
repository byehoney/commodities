<template>
    <div class="mangeContainer">
        <ManageTopNav></ManageTopNav>
        <div class="main">
            <mt-swipe class="manage_swiper" :auto="0" :show-indicators="false">
                <mt-swipe-item class="item">
                    <div class="top">￥66880.00</div>
                    <div class="center">今日销售额</div>
                    <div class="bottom">
                        <div class="left">采购店数：68</div>
                        <div class="right">销售数量：8800</div>
                    </div>
                    <img class="arrow" src="../images/m_arrow_right.png" alt="">
                </mt-swipe-item>
                <mt-swipe-item class="item total">
                    <div class="top">￥66880.00</div>
                    <div class="center">总销售额</div>
                    <div class="bottom">
                        <div class="left">总订单数：88900</div>
                        <div class="right">总客户数：3500</div>
                    </div>
                    <img class="arrow arrow_left" src="../images/m_arrow_left.png" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="infos">
            <div class="infoItem">
                <div class="left">
                    <img class="icon" src="../images/shopcar.png" alt="">
                    <div class="text">今日订单数/未处理</div>
                </div>
                <div class="right">77/77</div>
            </div>
            <div class="infoItem">
                <div class="left">
                    <img class="icon" src="../images/shopcar.png" alt="">
                    <div class="text">今日退款单</div>
                </div>
                <div class="right">0</div>
            </div>
            <div class="infoItem">
                <div class="left">
                    <img class="icon" src="../images/shopcar.png" alt="">
                    <div class="text">在售商品</div>
                </div>
                <div class="right">99999/6780</div>
            </div>
            <div class="infoItem">
                <div class="left">
                    <img class="icon" src="../images/shopcar.png" alt="">
                    <div class="text">今日新增客户</div>
                </div>
                <div class="right">30</div>
            </div>
            <div class="infoItem">
                <div class="left">
                    <img class="icon" src="../images/shopcar.png" alt="">
                    <div class="text">库存不足7日商品</div>
                </div>
                <div class="right">30</div>
            </div>
            <div class="infoItem">
                <div class="left">
                    <img class="icon" src="../images/shopcar.png" alt="">
                    <div class="text">缺货商品</div>
                </div>
                <div class="right">30</div>
            </div>
            <div class="infoItem">
                <div class="left">
                    <img class="icon" src="../images/shopcar.png" alt="">
                    <div class="text">30天未动销（商品/门店）</div>
                </div>
                <div class="right">30</div>
            </div>
        </div>
        <ManageTabBarBotttom></ManageTabBarBotttom>
    </div>
</template>
<script>
import ManageTabBarBotttom from '@/components/ManageTabBarBottom'
import ManageTopNav from '@/components/ManageTopNav'
export default {
    data(){
        return{

        }
    },
    components:{
        ManageTabBarBotttom,
        ManageTopNav
    }
}
</script>
<style lang="scss" scoped>
    .mangeContainer{
        background-color: #ebebeb;
        // min-height: 100vh;
        padding-top: 100px;
        .main{
            padding: 21px 37px;
            background-color: #fff;
        }
        .manage_swiper{
            width: 676px;
            height: 326px;
            .item{
                width: 676px;
                height: 326px;
                background:rgba(245,164,26,1);
                border-radius:20px;
                display: flex;
                flex-direction: column;
                align-items: center;
                // position: relative;
                &.total{
                    background-color: #8589FF;
                }
                .top{
                    width: 582px;
                    font-size:56px;
                    font-weight:bold;
                    color:rgba(255,255,255,1);
                    line-height:74px;
                    letter-spacing:2px;
                    margin: 76px auto 0;
                    text-align: center;
                }
                .center{
                    width: 582px;
                    font-size:26px;
                    color:rgba(255,255,255,1);
                    line-height:35px;
                    letter-spacing:1px;
                    margin: 23px auto 0;
                    text-align: center;
                }
                .bottom{
                    display: flex;
                    justify-content: space-between;
                    margin: 37px auto 0;
                    width: 582px;
                    .left,.right{
                        font-size:26px;
                        color:rgba(255,255,255,1);
                        line-height:35px;
                        letter-spacing:1px;
                        text-align: center;
                    }
                    
                }
                .arrow{
                    width: 24px;
                    height: 46px;
                    position: absolute;
                    top: 142px;
                    right: 16px;
                    &.arrow_left{
                        left: 16px;
                    }
                }
            }
        }
        .infos{
            padding: 0 0 100px 38px;
            background-color: #fff;
            .infoItem{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 26px 37px  24px 0;
                border-bottom: 2px solid #ebebeb;
                &:last-child{
                    border-bottom: none;
                }
                .left{
                    display: flex;
                    .icon{
                        width: 36px;
                        height: 36px;
                    }
                    .text{
                        font-size:24px;
                        color:rgba(51,51,51,1);
                        line-height:31px;
                        letter-spacing:1px;
                        margin-left: 14px;
                    }
                }
                .right{
                    font-size:22px;
                    color:rgba(102,102,102,1);
                    line-height:29px;
                }
            }
        }
    }
</style>
