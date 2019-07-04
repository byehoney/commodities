<template>
    <div :class="['mangeContainer',showDrawLeft?'pop':'']">
        <ManageTopNav @trigerLeft="trigerDrawerLeft"></ManageTopNav>
        <DrawerLeft ref="leftDrwaer"></DrawerLeft>
        <div class="main">
            <mt-swipe class="manage_swiper" :auto="0" :show-indicators="false">
                <mt-swipe-item class="item">
                    <div class="top">￥66880.00</div>
                    <div class="center">今日销售额</div>
                    <div class="bottom">
                        <div class="left">采购店数：68</div>
                        <div class="right">销售数量：8800</div>
                    </div>
                    <img class="arrow" src="../images/m_arrow_right.png" alt="" v-show="user.userRole=='04'||user.userRole=='05'">
                </mt-swipe-item>
                <mt-swipe-item class="item total" v-if="user.userRole=='04'||user.userRole=='05'">
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
        <!-- 厂家管理员和业务员 -->
        <div class="infos" v-if="user.userRole=='02'||user.userRole=='03'||user.userRole=='08'">
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
            <div class="infoItem">
                <div class="left">
                    <img class="icon" src="../images/shopcar.png" alt="">
                    <div class="text">业务（已覆盖/未覆盖）</div>
                </div>
                <div class="right">167/2980</div>
            </div>
        </div>
        <!-- 商业管理员和业务员 -->
        <div class="infos" v-if="user.userRole=='04'||user.userRole=='05'">
            <div class="infoItem">
                <div class="left">
                    <img class="icon" src="../images/shopcar.png" alt="">
                    <div class="text">app今日打开次数</div>
                </div>
                <div class="right">77/77</div>
            </div>
            <div class="infoItem">
                <div class="left">
                    <img class="icon" src="../images/shopcar.png" alt="">
                    <div class="text">未处理总额</div>
                </div>
                <div class="right">0</div>
            </div>
            <div class="infoItem">
                <div class="left">
                    <img class="icon" src="../images/shopcar.png" alt="">
                    <div class="text">未处理采购门店数</div>
                </div>
                <div class="right">99999/6780</div>
            </div>
            <div class="infoItem">
                <div class="left">
                    <img class="icon" src="../images/shopcar.png" alt="">
                    <div class="text">今日订单数/未处理（总数）</div>
                </div>
                <div class="right">30</div>
            </div>
            <div class="infoItem">
                <div class="left">
                    <img class="icon" src="../images/shopcar.png" alt="">
                    <div class="text">今日退款单</div>
                </div>
                <div class="right">30</div>
            </div>
            <div class="infoItem">
                <div class="left">
                    <img class="icon" src="../images/shopcar.png" alt="">
                    <div class="text">在售商品/有库存</div>
                </div>
                <div class="right">30</div>
            </div>
            <div class="infoItem">
                <div class="left">
                    <img class="icon" src="../images/shopcar.png" alt="">
                    <div class="text">无库存商品数量</div>
                </div>
                <div class="right">30</div>
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
                <div class="right">1897/1334</div>
            </div>
            
        </div>
        <div class="hotsale scrollBox" v-if="user.userRole=='04'||user.userRole=='05'">
            <div class="title">今日热销商品</div>
            <div class="hotList">
                <div class="hotItem">
                    <img src="../images/shopcar.png" alt="">
                    <div class="hotInfo">
                        <p class="sName">烟花商品名称</p>
                        <p class="fName">河北保定星星烟花制造厂</p>
                        <p class="price">￥6.50</p>
                        <p class="money">金额：38156.73</p>
                        <p class="buyShopNum">采购店数：229</p>
                        <p class="sales">销量：6600</p>
                    </div>
                </div>
            </div>
        </div>
        <ManageTabBarBotttom curTab="manageHome"></ManageTabBarBotttom>
        <div class="mask" v-show="showDrawLeft" @click="handleMaskClick"></div>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
import ManageTabBarBotttom from '@/components/ManageTabBarBottom'
import DrawerLeft from '@/components/DrawerLeft'
import ManageTopNav from '@/components/ManageTopNav'
import {mapGetters,mapMutations,mapState} from 'vuex'
export default {
    data(){
        return{
            
        }
    },
    computed: {
        ...mapState({
          user:state=>state.login.user,
          token:state=>state.login.token,
          showDrawLeft:state=>state.mange.showDrawLeft
        }),
        ...mapGetters('login',['token','userId','corpCode','companyId','userRole'])
    },
    components:{
        ManageTabBarBotttom,
        ManageTopNav,
        DrawerLeft
    },
    methods: {
        ...mapMutations('mange',['changeDrawLeft']),
        trigerDrawerLeft(){
            this.changeDrawLeft(true);
        },
        handleMaskClick(){
            this.changeDrawLeft(false)
        },
    },
}
</script>
<style lang="scss" scoped>
    .mask{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,.6);
      z-index:99999;
    }
    .mangeContainer{
        background-color: #ebebeb;
        // min-height: 100vh;
        &.pop{
            height: 100vh;
            overflow: hidden;
        }
        .hotsale {
            padding-top: 36px;
            background-color: #fff;
            .title{
                width:188px;
                height:40px;
                font-size:30px;
                color:rgba(0,145,255,1);
                line-height:40px;
                letter-spacing:1px;
                margin: 0 auto 20px;
                padding-bottom: 12px;
                border-bottom: 6px solid #0091FF;

            }
            .hotList{
                padding-bottom: 1rem;
                .hotItem{
                    margin-left: 46px;
                    border-bottom: 2px solid #ebebeb;
                    padding: 36px 36px 34px 0;
                    display: flex;
                    align-items: center;
                    img{
                        width: 200px;
                        height: 210px;
                        object-fit: scale-down;
                        flex-shrink: 0;
                    }
                    .hotInfo{
                        flex-shrink: 0;
                        margin-left: 26px;
                        .sName{
                            font-size:26px;
                            color:rgba(51,51,51,1);
                            line-height:35px;
                            letter-spacing:2px;
                            margin-bottom: 8px;
                        }
                        .fName{
                            font-size:20px;
                            color:rgba(153,153,153,1);
                            line-height:26px;
                            letter-spacing:2px;
                            margin-bottom: 4px;
                        }
                        .price{
                            font-size:32px;
                            font-weight:bold;
                            color:rgba(255,25,0,1);
                            line-height:42px;
                            margin-bottom: 5px;
                        }
                        .money,.buyShopNum,.sales{
                            font-size:20px;
                            color:rgba(153,153,153,1);
                            line-height:26px;
                            letter-spacing:2px;
                            margin-bottom: 5px;
                        }
                    }
                }
            }
        }
        .main{
            padding: 121px 37px 31px;
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
