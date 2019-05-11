<template>
    <div class="container">
       <!-- choose 图片上传
        <SimpleCropper></SimpleCropper> -->
        <div class="topFix">
            <div class="header">
                <div class="header_logo"></div>
                <input class="header_input" type="text" placeholder="请输入烟花名称" value="3434">
                <div class="header_search"></div>
            </div>
            <div class="selBar">
                <div :class="['selBar_item',{'active':curType==index}]" 
                     @click="changeType(index)"
                     v-for="(item,index) in typeList"
                     :key="index"
                     >
                    {{item}}
                </div>
            </div>
        </div>
        <div
        class="scrollBox"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
            <div class="ms_area">
                <div class="ms_content">
                    <div class="ms_item active">
                        <div class="time">12:00</div>
                        <div class="state">抢购中</div>
                    </div>
                    <div class="ms_item">
                        <div class="time">14:00</div>
                        <div class="state">即将开始</div>
                    </div>
                    <div class="ms_item">
                        <div class="time">16:00</div>
                        <div class="state">即将开始</div>
                    </div>
                </div>
                <p class="tip">抢购中 数量有限哦</p>
            </div>
            <div v-for="(item,index) in list" :key="index">
                <div class="scrollItem" v-if="curType==0||curType==1||curType==2">
                    <div class="left">
                        <img src="../images/bomb_01.png" alt="">
                    </div>
                    <div class="right">
                        <div class="name">烟花商品名称 500g</div>
                        <div class="factory">路尼克（广州）烟花制造厂</div>
                        <div class="item_bot">
                            <div class="bot_left">
                                <div class="discount" v-if="curType==0||curType==1">8.8折</div>
                                <div class="star_dis" v-if="curType==2">
                                    <div class="starIcon">星选</div>
                                    <div class="discount">8.8折</div>
                                </div>
                                <div class="price">
                                    <span class="nPrice">￥6.50</span>
                                    <span class="oPrice">8.80</span>
                                </div>
                            </div>
                            <div class="bot_right">
                                <img class="car" src="../images/choose_car.png" alt="">
                                <div class="saled">已销：70件</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="curType==3">
                    <div class="scrollItem ms_item">
                        <div class="left">
                            <div class="limt">限2000件</div>
                            <img src="../images/bomb_01.png" alt="">
                        </div>
                        <div class="right">
                            <div class="name">烟花商品名称 500g</div>
                            <div class="progress">
                                <div class="pro_bar">
                                    <div class="barInner"></div>
                                </div>
                                <div class="status">30%</div>
                                <div class="saled">已销：70件</div>
                            </div>
                            <div class="Info">
                                <div class="infoLeft">
                                    <div class="size">规格：35g*1支</div>
                                    <div class="price">
                                        <span class="nPrice">￥6.50</span>
                                        <span class="oPrice">8.80</span>
                                    </div>
                                </div>
                                <div class="infoRight">马上抢</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <TabBarBottom curTab="choose"/>
    </div>
</template>

<script>
import SimpleCropper from "../components/SimpleCropper"
import TabBarBottom from '@/components/TabBarBottom'
export default {
    data(){
        return{
            typeList:['销量','价格','主推','秒杀'],
            curType:0,
            list:[1,2,3],
            loading:false
        }
    },
    components:{
        SimpleCropper,
        TabBarBottom
    },
    methods:{
        changeType(index){
            this.curType = index;
        },
        loadMore() {
            this.loading = true;
            setTimeout(() => {
                let last = this.list[this.list.length - 1];
                for (let i = 1; i <= 10; i++) {
                    this.list.push(last + i);
                }
                this.loading = false;
            }, 100);
        }
    }
}
</script>

<style scoped lang="scss">
    body{
        background-color: #fcfcfc;
    }
    .container{
        display: flex;
        flex-direction: column;
    }
    .topFix{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10000;
    }
    .header{
        width: 100vw;
        height: 88px;
        // padding: 15px 0;
        background:linear-gradient(182deg,rgba(245,81,81,0.89) 0%,rgba(195,41,24,1) 100%);
        display: flex;
        justify-content: space-around;
        align-items: center;
        // flex: 1;
        .header_logo{
            width: 105px;
            height: 58px;
            background: url('../images/logo.png') no-repeat 0 4px;
            background-size: contain;
            margin-left: 27px;
            margin-right: 21px;
            flex: 1;
        }
        .header_input{
            width: 506px;
            height: 58px;
            background-color: #fff;
            border-radius:29px;
            border:none;
            font-size:22px;
            font-family:MicrosoftYaHeiLight;
            color:rgba(153,153,153,1);
            line-height:30px;
            letter-spacing:2px;
            padding-left: 27px;
        }
        .header_search{
            width: 34px;
            height: 34px;
            background: url('../images/sousuo.png') no-repeat 0 0;
            background-size: contain;
            flex: 1;
            margin-left: 21px;
        }
    }
    .selBar{
        width:100vw;
        height:93px;
        background:rgba(255,255,255,1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 6px;
        // flex: 1;
        .selBar_item{
            width: 25%;
            height: 93px;
            line-height: 93px;
            font-size:28px;
            font-family:'MicrosoftYaHeiLight';
            color:rgba(51,51,51,1);
            letter-spacing:2px;
            text-align: center;
             &.active{
                color:#C32918;
            }
        }
    }
    .scrollBox{
        margin-top: 187px;
        padding-bottom: 100px;
        background-color: #fff;
        .scrollItem{
            display: flex;
            // justify-content: space-between;
            align-items: center;
            padding: 16px 24px 16px 46px;
            border-bottom: 2px solid #eee;
            .left{
                width: 204px;
                height: 192px;
                // overflow: hidden;
                margin-right: 48px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .right{
                display: flex;
                flex-direction: column;
                flex: 1;
                .name{
                    font-size:28px;
                    font-family:'MicrosoftYaHeiLight';
                    color:rgba(51,51,51,1);
                    line-height:37px;
                    letter-spacing:2px;
                    margin-bottom: 11px;
                    width: 453px;
                    overflow: hidden;
                    white-space: nowrap;
                    word-break: break-all;
                    text-overflow: ellipsis;
                }
                .factory{
                    font-size:22px;
                    font-family:'MicrosoftYaHeiLight';
                    color:rgba(51,51,51,1);
                    line-height:30px;
                    letter-spacing:2px;
                    margin-bottom: 11px;
                    width: 453px;
                    overflow: hidden;
                    white-space: nowrap;
                    word-break: break-all;
                    text-overflow: ellipsis;
                }
                .item_bot{
                    display: flex;
                    justify-content: space-between;
                    height: 100px;
                    .bot_left{
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        .star_dis{
                            display: flex;
                            .starIcon{
                                width: 60px;
                                height: 30px;
                                background-color: #ffbe50;
                                font-size: 18px;
                                line-height: 30px;
                                text-align: center;
                                color: #C32918;
                                border-radius: .05rem;
                                margin-right: 10px;
                                border: 2px solid #ffbe50;
                            }
                        }
                        .discount{
                            width: 60px;
                            height: 30px;
                            line-height: 30px;
                            color: #C32918;
                            font-size: 18px;
                            border: 2px solid #C32918;
                            text-align: center;
                            border-radius: .05rem;
                        }
                        .price{
                            display: flex;
                            align-items: flex-end;
                            .nPrice{
                                font-size:32px;
                                font-family:'MicrosoftYaHei-Bold';
                                font-weight:bold;
                                color:rgba(195,41,24,1);
                                line-height:42px;
                                margin-right: 18px;
                            }
                            .oPrice{
                                font-size:18px;
                                font-family:'MicrosoftYaHeiLight';
                                color:rgba(153,153,153,1);
                                line-height:24px;
                                letter-spacing:1px;
                                text-decoration: line-through;
                            }
                        }
                    }
                    .bot_right{
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                        .car{
                            width: 62px;
                            height: 62px;
                            margin-bottom: 11px;
                        }
                        .saled{
                            font-size:18px;
                            font-family:'MicrosoftYaHeiLight';
                            color:rgba(51,51,51,1);
                            line-height:24px;
                            letter-spacing:1px;
                        }
                    }
                }
            }
        }
        .ms_area{
            width: 100vw;
            height: 248px;
            border-bottom: 2px solid #e5e5e5;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .tip{
                font-size:24px;
                font-family:'MicrosoftYaHei-Bold';
                font-weight:bold;
                color:rgba(51,51,51,1);
                line-height:31px;
                letter-spacing:2px;
                align-self: flex-start;
                padding-left: 43px;
            }
            .ms_content{
                width: 664px;
                height: 149px;
                background-color: #fce9eb;
                border: 2px dashed #ccc;
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin-top: 36px;
                .ms_item{
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    .time{
                        font-size:32px;
                        font-family:'MicrosoftYaHei-Bold';
                        font-weight:bold;
                        color:rgba(153,153,153,1);
                        line-height:42px;
                        letter-spacing:3px;
                        text-align: center;
                        margin-bottom: 5px;
                    }
                    .state{
                        font-size:24px;
                        font-family:'MicrosoftYaHei';
                        color:rgba(153,153,153,1);
                        line-height:31px;
                        letter-spacing:3px;
                        text-align: center;
                    }
                    &.active{
                        position: relative;
                        .time{
                            color:#C32918;
                            font-family:'MicrosoftYaHei-Bold';
                            font-weight: bold;
                            
                        }
                        .state{
                            color: #C32918;
                            font-family:'MicrosoftYaHei-Bold';
                            font-weight: bold;
                        }
                        &:after{
                            content: '';
                            width:0;
                            height:0;
                            border-width:0 15px 25px;
                            border-style:solid;
                            border-color:transparent transparent #c32918;/*透明 透明  灰*/
                            margin:40px auto;
                            position:absolute;
                            bottom: -39px;
                            left: 50%;
                            margin-left: -20px;
                        }
                    }
                }
                .ms_item{
                    position: relative;
                    .limt{
                        font-size:20px;
                        font-family:'MicrosoftYaHei';
                        color:rgba(195,41,24,1);
                        line-height:26px;
                    }
                }
            }
        }
        .ms_item{
            position: relative;
            .left{
                position: relative;
            }
            .limt{
                font-size:20px;
                font-family:'MicrosoftYaHei';
                color:rgba(195,41,24,1);
                line-height:43px;
                position: absolute;
                bottom: 8px;
                left: -46px;
                width: 125px;
                height: 43px;
                background: url('../images/ms_limt.png') no-repeat 0 0;
                background-size: contain;
                padding-left: 19px;

            }
            .progress{
                display: flex;
                align-items: center;
                font-size:20px;
                font-family:'MicrosoftYaHeiLight';
                color:rgba(51,51,51,1);
                line-height:27px;
                letter-spacing:2px;
                .pro_bar{
                    width: 210px;
                    height: 11px;
                    border: 2px dashed #ccc;
                    position: relative;
                    margin-right: 24px;
                    .barInner{
                        width: 120px;
                        height: 11px;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background-color: #c32918;
                    }
                }
                .status{
                    margin-right: 21px;
                }
                .saled{
                     align-self: flex-end;
                }
            }
            .Info{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 49px;
                .infoLeft{
                    display: flex;
                    flex-direction: column;
                    .size{
                        font-size:20px;
                        font-family:'MicrosoftYaHeiLight';
                        color:rgba(51,51,51,1);
                        line-height:27px;
                        letter-spacing:2px;
                        margin-bottom: 10px;
                    }
                    .price{
                        display: flex;
                        align-items: flex-end;
                        margin-bottom: 20px;
                        .nPrice{
                            font-size:32px;
                            font-family:'MicrosoftYaHei-Bold';
                            font-weight:bold;
                            color:rgba(195,41,24,1);
                            line-height:42px;
                            margin-right: 18px;
                        }
                        .oPrice{
                            font-size:18px;
                            font-family:'MicrosoftYaHeiLight';
                            color:rgba(153,153,153,1);
                            line-height:24px;
                            letter-spacing:1px;
                            text-decoration: line-through;
                        }
                    }
                }
                .infoRight{
                    width: 125px;
                    height: 60px;
                    line-height: 60px;
                    text-align: center;
                    font-size: 30px;
                    color: #fff;
                    background-color: #c32918;
                    border-radius: 5px;
                }
            }
        }
    }
</style>
