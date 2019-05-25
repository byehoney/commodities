<template>
    <div class="detailContainer">
        <TopNav></TopNav>
        <div class="main">
            <div class="header">
                <span>部分到货</span>
            </div>
            <div class="addInfo">
                <img class="left" src="../images/local_icon.png" alt="">
                <div class="mid">
                    <div class="top">张建 139****0381</div>
                    <div class="bottom">辽宁 沈阳市 铁西区 肇工北街4甲1号15门</div>
                </div>
                <img class="right" src="../images/arrow_right.png" alt="">
            </div>
            <div class="shopInfo">
                <div class="infoBox">
                    <div class="shopItem">
                        <div class="imgBox">
                            <img src="" alt="">
                        </div>
                        <div class="imgBox">
                            <img src="" alt="">
                        </div>
                        <div class="imgBox">
                            <img src="" alt="">
                        </div>
                    </div>
                    <div class="shopRight">
                        <div class="shopDes">
                            <div class="desState">未到货</div>
                            <div class="desNum">未到货24件</div>
                        </div>
                        <img class="desIcon" src="../images/arrow_right.png" alt="">
                    </div>
                </div>
                <div class="infoBox">
                    <div class="shopItem">
                        <div class="imgBox">
                            <img src="" alt="">
                        </div>
                        <div class="imgBox">
                            <img src="" alt="">
                        </div>
                        <div class="imgBox">
                            <img src="" alt="">
                        </div>
                    </div>
                    <div class="shopRight">
                        <div class="shopDes">
                            <div class="desState">厂商拒开</div>
                            <div class="desNum">未到货24件</div>
                        </div>
                        <img class="desIcon" src="../images/arrow_right.png" alt="">
                    </div>
                </div>
            </div>
            <div class="orderInfo">
                <div class="orderItem">
                    订单编号：987539759348
                </div>
                <div class="orderItem">
                    创建时间：2019-04-25 14：19：00
                </div>
            </div>
            <div class="priceInfo">
                <div class="priceItem">
                    <div class="left">商品总额</div>
                    <div class="right">￥120</div>
                </div>
                <div class="priceItem">
                    <div class="left">立减优惠</div>
                    <div class="right red">￥120</div>
                </div>
                <div class="priceItem">
                    <div class="left">实付金额</div>
                    <div class="right red">￥120</div>
                </div>
            </div>
            <div class="nextBtn">
                <img src="../images/kefu_icon.png"  alt="">
                <span>联系客服</span>
            </div>
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
    .detailContainer{
        width: 100vw;
        min-height: 100vh;
        background: rgba(235, 235, 235, 1);
        .nav{
            border-bottom: 2px solid #ebebeb;
        }
        .header{
            width: 100%;
            height: 168px;
            background:linear-gradient(182deg,rgba(245,81,81,0.9) 0%,rgba(195,41,24,1) 100%);
            margin-top: 92px;
            span{
                font-size:30px;
                color:rgba(255,255,255,1);
                line-height:40px;
                letter-spacing:3px;
                margin-left: 92px;
            }
        }
        .addInfo{
            display: flex;
            align-items: center;
            width: 100%;
            height: 176px;
            background-color: #fff;
            justify-content: space-around;
            margin-bottom: 8px;
            .left{
                width: 44px;
                height: 44px;
                margin-left: 45px;
            }
            .mid{
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-left: 27px;
                width: 541px;
                .top{
                    font-size:26px;
                    color:rgba(102,102,102,1);
                    line-height:35px;
                    letter-spacing:3px;
                }
                .bottom{
                    font-size:24px;
                    color:rgba(102,102,102,1);
                    line-height:31px;
                    letter-spacing:3px;
                }
            }
            .right{
                width: 17px;
                height: 30px;
                margin-right: 46px;
            }
        }
        .shopInfo{
            // display: flex;
            // justify-content: space-between;
            background-color: #fff;
            padding: 0 46px 0 0;
            .infoBox{
                display: flex;
                justify-content: space-between;
                flex: 1;
                margin-left: 38px;
                padding-top: 16px;
                padding-bottom: 17px;
                border-bottom: 2px solid #ebebeb;
            }
            .shopItem{
                width: 530px;
                display: flex;
                .imgBox{
                    width: 150px;
                    height: 120px;
                    background:rgba(235,235,235,1);
                    margin-right: 24px;
                    img{
                        object-fit: contain;
                    }
                }
            }
            .shopRight{
                display: flex;
                align-items: center;
                .shopDes{
                    display: flex;
                    flex-direction: column;
                    margin-right: 10px;
                    width: 110px;
                    text-align: center;
                    .desState{
                        font-size:24px;
                        color:rgba(255,0,0,1);
                        line-height:31px;
                        letter-spacing:1px;
                    }
                    .desNum{
                        font-size:20px;
                        color:rgba(155,155,155,1);
                        line-height:26px;
                    }
                }
                img{
                    width: 17px;
                    height: 30px;
                }
            }
        }
        .orderInfo{
            margin: 8px 0;
            background-color: #fff;
            width: 100%;
            height: 126px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .orderItem{
                font-size:24px;
                color:rgba(102,102,102,1);
                line-height:31px;
                letter-spacing:1px;
                margin-left:38px; 
            }
        }
        .priceInfo{
            background-color: #fff;
            width: 100%;
            .priceItem{
                width: 660px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 49px 51px 31px 0;
                margin-left: 38px;
                border-bottom: 2px solid #ebebeb;
                .left{
                    font-size:24px;
                    color:rgba(102,102,102,1);
                    line-height:31px;
                    letter-spacing:1px;
                }
                .right{
                    font-size:24px;
                    color:rgba(102,102,102,1);
                    line-height:31px;
                    letter-spacing:1px;
                    &.red{
                        color:rgba(255,0,0,1);
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
