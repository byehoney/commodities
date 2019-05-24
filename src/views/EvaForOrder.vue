<template>
    <div class="hasEvaContainer">
        <TopNav></TopNav>
        <div class="evaArea">
            <div class="top">
                <div class="shopArea">
                    <div class="shopImg">
                        <img src="../images/shopcar.png" alt="">
                    </div>
                    <div class="tip">分享你的使用体验吧</div>
                </div>
                <div class="inputArea">
                    <mt-field label="" placeholder="请输入您对本产品的评价" type="textarea" rows="4" v-model="evaContent"></mt-field>
                </div>
                <div class="upArea">
                    <div class="upBox">
                        
                    </div>
                    <div class="up_tip">
                        上传晒图
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <mt-cell title="物流服务评价">
                <img class="star" slot="icon" src="../images/waite_get.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="快递包装">
                <template v-for="(item,index) in packStars">
                    <img class="star" src="../images/star_grey.png" v-if="!item" alt="" :key="index">
                    <img class="star" src="../images/eva_star.png" v-else alt="" :key="index">
                </template>
            </mt-cell>
            <mt-cell title="送货速度">
                <img class="star" src="../images/star_grey.png" alt="">
            </mt-cell>
            <mt-cell title="配送员服务">
                <img class="star" src="../images/star_grey.png" alt="">
                <img class="star" src="../images/star_grey.png" alt="">
            </mt-cell>
        </div>
    </div>
</template>
<script>
import TopNav from '@/components/TopNav'
export default {
    data(){
        return{
            evaContent:'',
            packStars:[false,false,false,false,true],
        }
    },
    components:{
        TopNav,
    },
    methods:{
       
    },
}
</script>
<style lang="scss" scoped>
    .hasEvaContainer{
        width: 100vw;
        min-height: 100vh;
        background:rgba(235,235,235,1);
        .nav{
            border-bottom: 2px solid #ebebeb;
        }
        .evaArea{
            padding: 118px 41px 10px 39px;
            background-color: #fff;
            .mint-field.is-textarea{
                height: 100%;
            }
            .top{
                .shopArea{
                    display: flex;
                    .shopImg{
                        width:168px;
                        height:140px;
                        overflow: hidden;
                        // background:rgba(235,235,235,1);
                        img{
                            width: 100%;
                        }
                    }
                    .tip{
                        font-size:24px;
                        color:rgba(51,51,51,1);
                        line-height:31px;
                        letter-spacing:2px;
                        margin-left: 28px;
                        align-self: flex-end;
                    }
                }
                .inputArea{
                    width: 658px;
                    height: 269px;
                    margin:25px auto 38px;
                    background:rgba(255,255,255,1);
                    border:1px solid rgba(151,151,151,1)
                }
                .upArea{
                    display: flex;
                    margin-bottom: 34px;
                    .upBox{
                        width:168px;
                        height:124px;
                        border-radius:12px;
                        border:2px solid rgba(235,235,235,1);
                        background: url('../images/upload_icon.png') no-repeat center center;
                        background-size: 87px 63px;
                    }
                    .up_tip{
                        align-items: flex-end;
                        font-size:24px;
                        color:rgba(51,51,51,1);
                        line-height:31px;
                        letter-spacing:2px;
                        display: flex;
                        margin-left: 28px;
                    }
                }
            }
        }
        .bottom{
            margin-top: 10px;
            .star{
                width: 36px;
                height: 34px;
                margin-right: 15px;
            }
        }
    }
</style>
