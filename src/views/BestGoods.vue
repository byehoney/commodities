<template>
    <div class="telContainer">
        <TopNav></TopNav>
        <div class="telContent">
           <div
            class="scrollBox"
            style="max-height: 100vh; overflow-y: auto;"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
                <div class="scrollItem">
                    <div class="top">
                        <div class="title">XXX精品活动 满10赠4</div>
                    </div>
                    <div class="bottom">
                        <img class="sel_icon" src="../images/car_circle.png" alt="">
                        <div class="box">
                            <div class="left">
                                <img src="../images/shopcar.png" alt="">
                            </div>
                            <div class="right">
                                <p class="name">春日大地红喜庆12响</p>
                                <p class="factory">河北保定星星烟花制造厂</p>
                                <p class="size">规格：35g*1支</p>
                                <p class="oPrice">原价：￥8.80</p>
                                <div class="fun">
                                    <p class="nPrice">￥6.50</p>
                                    <div class="counter">
                                        <p class="reduce">-</p>
                                        <p class="num">0</p>
                                        <p class="add">+</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tip">
                        <div class="left">商品活动</div>
                        <div class="middle">
                            <p>累积购买可或赠品，点击查看更多活动规则</p>
                            <p>春日大地红喜庆12响满20赠蓝色星星璀璨闪光冷焰火迷你桶一件</p>
                        </div>
                        <img src="../images/arrow_down.png" alt="">
                    </div>
                </div>
           </div>
        </div>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
import TopNav from '@/components/TopNav'
export default {
    data(){
        return{
           
        }
    },
    components:{
        TopNav,
    },
    methods:{
        loadMore(){

        }
    }
}
</script>
<style lang="scss" scoped>
.telContainer{
    width: 100vw;
    min-height: 100vh;
    background:rgba(235,235,235,1);
    .nav{
        border-bottom: 2px solid #ebebeb;
    }
    .telContent{
        padding-top: 92px;
        background-color:#fff; 
        .scrollBox{
            padding-left: 44px;

        }
        .scrollItem{
            .top{
                font-size:26px;
                color:rgba(102,102,102,1);
                line-height:35px;
                letter-spacing:2px;
                padding: 17px 39px 20px 0;
                border-bottom: 2px solid #ebebeb;
            }
            .bottom{
                display: flex;
                align-items: center;
                .sel_icon{
                    width: 40px;
                    height: 40px;
                }
                .box{
                    display: flex;
                    align-items: center;
                    flex: 1;
                    padding-right: 39px;
                    .left{
                        width: 220px;
                        height: 176px;
                        img{
                            width: 100%;
                            height: 100%;
                            object-fit: scale-down;
                        }
                    }
                    .right{
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        .name{
                            font-size:26px;
                            color:rgba(102,102,102,1);
                            line-height:35px;
                        }
                        .factory,.size,.oPrice{
                            font-size:18px;
                            color:rgba(153,153,153,1);
                            line-height:24px;
                            letter-spacing:1px;
                            margin-top: 8px;
                        }
                        .oPrice{
                            text-decoration: line-through;
                        }
                        .fun{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            .nPrice{
                                font-size:26px;
                                color:rgba(255,25,0,1);
                                line-height:35px;
                            }
                            .counter{
                                display: flex;
                                width: 180px;
                                height: 50px;
                                .reduce,.add{
                                    width: 45px;
                                    height: 46px;
                                    line-height: 36px;
                                    text-align: center;
                                    border:2px solid #ebebeb;
                                    font-size:28px;
                                    color:rgba(102,102,102,1);
                                    line-height:46px;
                                    letter-spacing:2px;
                                }
                                .num{
                                    height: 46px;
                                    border-top: 2px solid #ebebeb;
                                    border-bottom: 2px solid #ebebeb;
                                    font-size:28px;
                                    color:rgba(102,102,102,1);
                                    line-height:46px;
                                    letter-spacing:2px;
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
</style>
