<template>
    <div class="nameContainer">
        <div class="nav">
            <img @click="goBack" src="../images/leftArrow.png" class="leftIcon" alt="">
            <span class="title">确认订单</span>
            <span class="btn">完成</span>
        </div>
        <div class="main">
            <div class="orderAddInfo">
                <img src="../images/local_icon.png" class="localIcon" alt="">
                <div class="addInfo">
                    <div class="infoTop">张建 139****0381</div>
                    <div class="infoBottom">辽宁 沈阳市 铁西区 肇工北街4甲1号15门</div>
                </div>
                <img src="../images/arrow_right.png" class="rightIcon" alt="">
            </div>
            <div class="orderDetailInfo">
                <div class="proImgs">
                    <div class="imgBox">
                        <img src="../images/shopcar.png" alt="">
                    </div>    
                   <div class="imgBox">
                        <img src="../images/shopcar.png" alt="">
                    </div>
                    <div class="imgBox">
                        <img src="../images/shopcar.png" alt="">
                    </div>
                </div>
                <div class="proNum">共100件</div>
                <img src="../images/arrow_right.png" class="rightIcon" alt="">
            </div>
            <div class="orderSelInfo">
                <div class="selItem">
                    <div class="selLeft">
                        赠品选择
                    </div>
                    <div class="selRight">
                        <span class="text">请选择</span>
                        <img src="../images/arrow_right.png" class="rightIcon" alt="">
                    </div>
                </div>
                <div class="selItem" @click="selTicket">
                    <div class="selLeft">
                        发票
                    </div>
                    <div class="selRight">
                        <span class="text">请选择发票类型</span>
                        <img src="../images/arrow_right.png" class="rightIcon" alt="">
                    </div>
                </div>
                <div class="selItem">
                    <div class="selLeft">
                        备注
                    </div>
                    <input type="text" placeholder="请输入备注">
                </div>
            </div>
            <div class="orderPriceInfo">
                <div class="priceItem">
                    <div class="priceLeft">商品金额</div>
                    <div class="priceRight">￥120</div>
                </div>
            </div>
        </div>
        <div class="fixBottom">
            <div class="left">
                <span class="text">实付款</span>
                <span class="price">￥120</span>
            </div>
            <div class="right">提交订单</div>
        </div>
        <mt-popup
            v-model="popupVisible"
            position="bottom"
        >
            <mt-picker value-key="businessName" ref="picker"  :slots="slots" @change="onValuesChange" showToolbar>
                <div class="barContent">
                    <div @click="handleCancel" class="cancel">取消</div>
                    <div class="tip">请选择</div>
                    <div @click="handleConfirm" class="sure">确认</div>
                </div>
            </mt-picker>
        </mt-popup>
    </div>
</template>
<script>
import {mapGetters} from 'vuex' 
export default {
    data(){
        return{
            popupVisible:false,
            set_value:'',
            setCode:'',
            sel_value:'',
            selCode:'',
            slots: [
                {
                    flex: 1,
                    values: [],
                    className: 'slot1',
                    textAlign: 'center'
                }   
            ],
        }
    },
    computed:{
        ...mapGetters('login',['token','userId','corpCode','companyId','userRole'])
    },
    methods:{
        selTicket(){
            this.popupVisible = !this.popupVisible;
        },
        onValuesChange(picker, values){
            if(!values.length||!values[0]){
                return
            }
            this.set_value = values[0].businessName;
            this.setCode = values[0].businessCode;
        },
        handleCancel(){
            this.popupVisible = false
        },
        handleConfirm() {
            this.popupVisible = false;
            this.sel_value = this.set_value;
            this.selCode = this.setCode;
        },
        goBack(){
            this.$router.go(-1);
        },
    }
}
</script>
<style lang="scss" scoped>
.nameContainer{
    width: 100vw;
    min-height: 100vh;
    background:rgba(235,235,235,1);
    .fixBottom{
        width:100%;
        height:98px;
        background:rgba(255,255,255,1);
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        .left{
            width: 67%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .text{
                font-size:26px;
                color:rgba(102,102,102,1);
                line-height:35px;
                letter-spacing:2px;
            }
            .price{
                font-size:26px;
                color:rgba(255,0,0,1);
                line-height:35px;
                letter-spacing:2px;
                margin-right: 61px;
            }
        }
        .right{
            width: 33%;
            height: 98px;
            background: url('../images/result.png') no-repeat 0 0;
            background-size: 100% 100%;
            text-align: center;
            line-height: 98px;
            font-size:30px;
            color:rgba(255,255,255,1);
            letter-spacing:3px;
        }
    }
    .main{
        padding-top: 90px;
        .orderPriceInfo{
            background-color: #fff;
            .priceItem{
                margin-left: 38px;
                border-bottom: 2px solid #ebebeb;
                padding: 34px 46px 34px 55px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                &:last-child{
                    border: none;
                }
                .priceLeft{
                    font-size:24px;
                    color:rgba(102,102,102,1);
                    line-height:31px;
                    letter-spacing:1px;
                }
                .priceRight{
                    font-size:24px;
                    color:rgba(255,0,0,1);
                    line-height:31px;
                    letter-spacing:1px;
                }
            }
        }
        .orderSelInfo{
            background-color: #fff;
            margin-bottom: 8px;
            .selItem{
                margin-left: 38px;
                border-bottom: 2px solid #ebebeb;
                padding: 34px 46px 34px 55px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .selLeft{
                    font-size:24px;
                    color:rgba(102,102,102,1);
                    line-height:31px;
                    letter-spacing:1px;
                }
                .selRight{
                    display: flex;
                    align-items: center;
                    .text{
                        font-size:24px;
                        color:rgba(102,102,102,1);
                        line-height:31px;
                        letter-spacing:1px;
                    }
                    .rightIcon{
                        width: 17px;
                        height: 30px;
                        margin-left: 37px;
                    }
                }
                input{
                    border: none;
                    outline: none;
                    font-size:24px;
                    line-height:31px;
                    letter-spacing:1px;
                    flex: 1;
                    margin-left: 69px;
                }
            }
        }
        .orderDetailInfo{
            padding: 28px 46px 37px 38px;
            background-color: #fff;
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            .proImgs{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 500px;
                .imgBox{
                    width: 146px;
                    height: 116px;
                    border: 2px solid #ebebeb;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: scale-down;
                    }
                }
            }
            .proNum{
                font-size:24px;
                color:rgba(102,102,102,1);
                line-height:31px;
                letter-spacing:1px;
                margin-left: 32px;
            }
            .rightIcon{
                width: 17px;
                height: 30px;
                margin-left: 23px;
            }
        }
        .orderAddInfo{
            display: flex;
            align-items: center;
            background-color: #fff;
            padding: 29px 46px 34px 45px;
            border-bottom: 4px solid #FF3B3C;
            margin-bottom: 8px;
            .localIcon{
                width: 44px;
                height: 44px;
                margin-right: 27px;
            }
            .addInfo{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                width: 541px;
                .infoTop{
                    font-size:26px;
                    color:rgba(102,102,102,1);
                    line-height:35px;
                    letter-spacing:3px;
                    margin-bottom: 21px;
                }
                .infoBottom{
                    font-size:26px;
                    color:rgba(102,102,102,1);
                    line-height:35px;
                    letter-spacing:3px;
                }
            }
            .rightIcon{
                width: 17px;
                height: 30px;
                margin-left: 30px;
            }
        }
    }
    .nav{
        width: 100%;
        height: 88px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        border-bottom: 2px solid #ebebeb;
        .leftIcon{
            width: 17px;
            height: 30px;
            position: absolute;
            top: 29px;
            left: 30px;
        }
        .title{
            font-size: 30px;
        }
        .btn{
            width:116px;
            height:35px;
            font-size:26px;
            color:rgba(153,153,153,1);
            line-height:35px;
            letter-spacing:3px;
            position: absolute;
            top: 26px;
            right: 41px;
            text-align: right;
        }
    }
    .mint-popup-bottom{
        width: 100%;
    }
    .picker-toolbar{
        width: 100%;
        height: 96px;
        border-bottom: 2px solid #ebebeb;
    }
    .barContent{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 38px;
        color:#666;
        .cancel,.sure{
            height: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding:0 30px;
            font-size:26px;
            color:rgba(102,102,102,1);
            letter-spacing:2px;
        }
        .sure{
            color:#FF0000;
        }
        .tip{
            font-size:30px;
            color:rgba(51,51,51,1);
            letter-spacing:3px;
        }
    }
    .slot1{
        width: 100vw;
        .picker-item{
            font-size:30px;
            color:rgba(51,51,51,1);
            height: 78px;
            line-height:78px;
            letter-spacing:3px;
        }
    }
}
</style>
