<template>
    <div class="refuseContainer">
        <TopNav></TopNav>
        <div class="orderTabs">
            <div :class="['tabItem',actIndex==index?'active':'']" v-for="(item,index) in tabList" :key="index" @click="selType(index)">
                {{item}}
            </div>
        </div>
        <ul
            class="content"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
        >
            <li v-for="(item,index) in list" :key="index" class="listItem">
                <div class="listInner" v-if="actIndex==0">
                    <div class="top">
                        <div class="topInfo">
                            <div class="orderNum">订单号：990789789889</div>
                            <div class="orderState">待收货</div>
                        </div>
                        <div class="topImgs">
                            <img src="../images/shopcar.png" alt="">
                            <img src="../images/shopcar.png" alt="">
                            <img src="../images/shopcar.png" alt="">
                            <img src="../images/shopcar.png" alt="">
                        </div>
                        <div class="topDetail">
                            <div class="total">共120件商品</div>
                            <div class="name">金额：</div>
                            <div class="num">￥68.95</div>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="scanBtn" @click="scanOper">
                            <img src="../images/saoma.png" alt="">
                            <span>付款码</span>
                        </div>
                        <router-link class="goDetail" to="/">查看详情</router-link>
                    </div>
                </div>
                <div class="listInner" v-if="actIndex==3">
                    <div class="top">
                        <div class="topInfo">
                            <div class="orderNum">订单号：990789789889</div>
                            <div class="orderState">待评价</div>
                        </div>
                        <div class="topImgs">
                            <img src="../images/shopcar.png" alt="">
                            <img src="../images/shopcar.png" alt="">
                            <img src="../images/shopcar.png" alt="">
                            <img src="../images/shopcar.png" alt="">
                        </div>
                        <div class="topDetail">
                            <div class="total">共120件商品</div>
                            <div class="name">金额：</div>
                            <div class="num">￥68.95</div>
                        </div>
                    </div>
                    <div class="bottom">
                        <router-link class="goEva" to="/">评价</router-link>
                        <router-link class="hasEva" to="/">已评价</router-link>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
import TopNav from '@/components/TopNav'
export default {
    data(){
        return{
            actIndex:0,
            tabList:['全部','待发货','待收货','待评价','退货'],
            loading:false,
            list:[1,2,3]
        }
    },
    methods:{
        selType(index){
            this.actIndex = index;
        },
        scanOper(){
            Toast({
                message: "在线付款尚未开通",
                position: "middle",
                duration: 2000
            });
        },
        loadMore(){
            let data = ['load','load','load'];
            this.list = [...this.list,...data];
        }
    },
    components:{
        TopNav,
    },
}
</script>
<style lang="scss" scoped>
    .refuseContainer{
        width: 100vw;
        min-height: 100vh;
        background:rgba(235,235,235,1);
        .nav{
            border-bottom: 2px solid #ebebeb;
        }
        .orderTabs{
            width: 100%;
            height: 84px;
            border-bottom: 2px solid #ebebeb;
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: fixed;
            top: 88px;
            left: 0;
            z-index: 100;
            background-color: #fff;
            .tabItem{
                height: 84px;
                line-height: 84px;
                font-size:28px;
                color:rgba(51,51,51,1);
                letter-spacing:2px;
                &.active{
                    font-size:28px;
                    color:rgba(255,25,0,1);
                    letter-spacing:2px;
                }
            }
        }
        .content{
            padding-top: 176px;
            .listItem{
                margin-bottom: 10px;
                background-color: #fff;
                .listInner{
                    display: flex;
                    flex-direction: column;
                    .top{
                        display: flex;
                        flex-direction: column;
                        padding: 29px 43px 20px 46px;
                        border-bottom: 2px solid #ebebeb;
                        .topInfo{
                            display: flex;
                            justify-content: space-between;
                            margin-bottom: 43px;
                            .orderNum{
                                font-size:24px;
                                color:rgba(102,102,102,1);
                                line-height:31px;
                                letter-spacing:3px;
                            }
                            .orderState{
                                font-size:24px;
                                color:rgba(245,166,35,1);
                                line-height:31px;
                                letter-spacing:1px;
                            }
                        }
                        .topImgs{
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: space-between;
                            margin-bottom: 20px;
                            img{
                                width: 150px;
                                height: 120px;
                                // margin-right: 20px;
                            }
                        }
                        .topDetail{
                            display: flex;
                            justify-content: flex-end;
                            align-items: center;
                            .total,.name{
                                font-size:24px;
                                color:rgba(102,102,102,1);
                                line-height:31px;
                                letter-spacing:3px;
                                margin-left: 10px;
                            }
                            .num{
                                font-size:24px;
                                color:rgba(255,0,0,1);
                                line-height:31px;
                                letter-spacing:3px;
                            }
                        }
                    }
                    .bottom{
                        display: flex;
                        justify-content: flex-end;
                        padding: 29px 43px 34px 46px;
                        .scanBtn{
                            width: 176px;
                            height: 68px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background:-webkit-linear-gradient(left,#ff6238ed,#ff1240);
                            margin-right: 20px;
                            border-radius: 5px;
                            img{
                                width: 33px;
                                height: 31px;
                                margin-right: 10px;
                            }
                            span{
                                font-size:24px;
                                color:rgba(255,255,255,1);
                                line-height:31px;
                                letter-spacing:3px;
                            }
                        }
                        .goDetail{
                            display: block;
                            width: 176px;
                            height: 68px;
                            line-height: 68px;
                            font-size:24px;
                            color:rgba(255,255,255,1);
                            letter-spacing:3px;
                            background-color: #9b9b9b;
                            text-align: center;
                            border-radius: 5px;
                        }
                        .goEva{
                            width: 128px;
                            height: 64px;
                            border:2px solid #d0021b;
                            border-radius: 50px;
                            line-height: 64px;
                            font-size:24px;
                            color:rgba(208,2,27,1);
                            letter-spacing:1px;
                            display: block;
                            text-align: center;
                        }
                        .hasEva{
                            width: 128px;
                            height: 64px;
                            border:2px solid #797979;
                            border-radius: 50px;
                            line-height: 64px;
                            font-size:24px;
                            color:rgba(102,102,102,1);
                            letter-spacing:1px;
                            display: block;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
</style>
