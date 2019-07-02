<template>
    <div class="mangeContainer">
        <mt-header title="门店详情" class="manageHeader">
            <router-link to="" slot="left">
                <mt-button icon="back" @click.native="$router.back(-1)"></mt-button>
            </router-link>
        </mt-header>
        <div class="tabs">
            <div :class="['tab',actIndex==0?'active':'']" @click="changeType(0)">基本信息</div>
            <div :class="['tab',actIndex==1?'active':'']" @click="changeType(1)">品规查询</div>
        </div>
        <div class="content" v-show="actIndex==0">
            <div class="title">基本信息</div>
            <div class="allInfos">
                <div class="infos">门店名称：<span>河北省保定市西昌路文明村25号6栋</span></div>
                <div class="infos">联系人：<span>张建</span></div>
                <div class="infos">联系电话：<span>13811166660</span></div>
                <div class="infos">注册地址：<span>河北省保定市西昌路</span></div>
            </div>
            <div class="title">销售数据</div>
            <div class="datas">
                <div class="dataInfo bleft">
                    <p class="name">今日订单数</p>
                    <p class="des top">0</p>
                </div>
                <div class="dataInfo bleft">
                    <p class="name">今日订单额</p>
                    <p class="des top">0.00万元</p>
                </div>
                <div class="dataInfo">
                    <p class="name">今日品规数</p>
                    <p class="des top">0</p>
                </div>
                <div class="dataInfo noBorder bleft">
                    <p class="name">总订单数</p>
                    <p class="des bottom">0</p>
                </div>
                <div class="dataInfo noBorder bleft">
                    <p class="name">总订单额</p>
                    <p class="des bottom">0</p>
                </div>
                <div class="dataInfo noBorder">
                    <p class="name">总品规数</p>
                    <p class="des bottom">0</p>
                </div>
            </div>
        </div>
        <div class="searchContainer" v-show="actIndex==1">
            <div class="searchContent">
                <div class="searchArea">
                    <div class="sName">商品信息：</div>
                    <input type="text" placeholder="请输入商品编码，通用名称" class="input">
                </div>
                <div class="searchBtn">查询</div>
            </div>
            <div class="divide"></div>
            <div class="shoList">
                <div class="listItem">
                    <p>通用名称：<span>星星闪烁冷焰火</span></p>
                    <p>厂&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;商：<span>星星闪烁冷焰火</span></p>
                    <p>商品编码：<span>星星闪烁冷焰火</span></p>
                    <p>规&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格：<span>星星闪烁冷焰火</span></p>
                    <div class="sales">
                        <p>销售额&nbsp;&nbsp;&nbsp;&nbsp;：<span>￥1020.00</span></p>
                        <p>销量：<span>200件</span></p>
                    </div>
                </div>
            </div>
        </div>
        <ManageTabBarBotttom></ManageTabBarBotttom>
    </div>
</template>
<script>
import ManageTabBarBotttom from '@/components/ManageTabBarBottom';
export default {
    data(){
        return{
            actIndex:0,
            loading:false,
            list:[],
            moreLoading:false,
            pageSize:10,
            pageNum:1,
            noData:false,//是否有数据
            hasMore:true,
        }
    },
    components:{
       ManageTabBarBotttom,
    },
    methods: {
        changeType(index){
            this.actIndex = index;
        }
    },
}
</script>
<style lang="scss" scoped>
    .mangeContainer{
        background-color: #fff;
        .shoList{
            .listItem{
                margin-left: 39px;
                border-bottom: 2px solid #ebebeb;
                padding-right: 39px;
                display: flex;
                flex-direction: column;
                padding-top: 24px;
                padding-bottom: 25px;
                p{
                    font-size:20px;
                    color:rgba(102,102,102,1);
                    line-height:26px;
                    margin-bottom: 10px;
                    span{
                        font-size:20px;
                        color:rgba(153,153,153,1);
                        line-height:26px;
                    }
                }
                .sales{
                    display: flex;
                    p{
                        width: 50%;
                    }
                }
            }
        }
        .searchContainer{
            .divide{
                width: 100%;
                height: 12px;
                background-color: #ebebeb;
            }
            .searchContent{
                padding-bottom: 25px;
                .searchBtn{
                    width:384px;
                    height:90px;
                    background:linear-gradient(180deg,rgba(250,217,97,1) 0%,rgba(247,107,28,1) 100%);
                    border-radius:50px;
                    margin: 24px auto 28px;
                    font-size:28px;
                    color:rgba(255,255,255,1);
                    line-height:90px;
                    letter-spacing:2px;
                    text-align: center;
                }
                .searchArea{
                    display: flex;
                    align-items: center;
                    margin-left: 39px;
                    border-bottom: 2px solid #ebebeb;
                    padding: 25px 0; 
                    .sName{
                        font-size:24px;
                        color:rgba(51,51,51,1);
                        line-height:31px;
                        letter-spacing:1px;
                        flex-shrink: 0;
                    }
                    .input{
                        font-size:24px;
                        color:rgba(51,51,51,1);
                        line-height:31px;
                        letter-spacing:1px;
                        border: none;
                        outline: none;
                    }
                }
            }
        }
        .content{
            margin-left: 39px;
            .title{
                padding: 24px 0;
                font-size:24px;
                color:rgba(51,51,51,1);
                line-height:31px;
                letter-spacing:1px;
                border-bottom: 2px solid #ebebeb;
            }
            .allInfos{
                padding: 14px 39px 19px 0;
                border-bottom: 2px solid #ebebeb;
                .infos{
                    font-size:20px;
                    color:rgba(102,102,102,1);
                    line-height:26px;
                    margin: 10px 0;
                    span{
                        color:rgba(153,153,153,1);
                    }
                }
            }
            .datas{
                display: flex;
                flex-wrap: wrap;
                .dataInfo{
                    width: 33%;
                    padding: 29px 0;
                    border-bottom:2px solid #ebebeb; 
                    &.noBorder{
                        border: none;
                    }
                    &.bleft{
                        border-right: 2px solid #ebebeb;
                    }
                    .name{
                        font-size:22px;
                        color:rgba(153,153,153,1);
                        line-height:29px;
                        text-align: center;
                        margin-bottom: 22px;
                    }
                    .des{
                        font-size:30px;
                        font-weight:bold;
                        line-height:40px;
                        letter-spacing:1px;
                        text-align: center;
                        &.top{
                            color:rgba(245,166,35,1);
                        }
                        &.bottom{
                            color: #007AFF;
                        }
                    }
                }
            }
        }
        .tabs{
            display: flex;
            width: 100%;
            height: 94px;
            line-height: 94px;
            text-align: center;
            margin-top: 12px;
            .tab{
                font-size:24px;
                color:rgba(255,255,255,1);
                letter-spacing:2px;
                width: 50%;
                height: 100%;
                background-color: #A5C1DF;
                &.active{
                    background:linear-gradient(180deg,rgba(0,122,255,1) 0%,rgba(24,152,247,1) 100%);
                }
            }
        }
    }
</style>
