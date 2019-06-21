<template>
    <div class="mangeContainer">
        <ManageTopNav></ManageTopNav>
        <div class="main">
            <div class="top">
                <div :class="['date long',dateActive?'active':'']" @click="selDate">
                    {{dateList[curDateIndex]}}
                    <div class="dataList" v-if="showDateList">
                        <p :class="['dataItem',curDateIndex==index?'active':'']" @click="selCurDate($event,index)" v-for="(item,index) in dateList" :key="index">{{item}}</p>
                    </div>
                </div>
                <div :class="['type',typeActive?'active':'']" @click="selType">
                    {{typeList[curTypeIndex]}}
                    <div class="typeList" v-if="showTypeList">
                        <p :class="['typeItem',curTypeIndex==index?'active':'']" @click="selCurType($event,index)" v-for="(item,index) in typeList" :key="index">{{item}}</p>
                    </div>
                </div>
                <div :class="['area',areaActive?'active':'']" @click="selArea">
                    {{areaList[curAreaIndex]}}
                    <div class="typeList" v-if="showAreaList">
                        <p :class="['typeItem',curAreaIndex==index?'active':'']" @click="selCurArea($event,index)" v-for="(item,index) in areaList" :key="index">{{item}}</p>
                    </div>
                </div>
                <div class="total">合计数：1200</div>
            </div>
            <ul
                class="content"
                style="max-height: 100vh; overflow-y: auto;"
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10"
            >
                <div class="contentItem">
                    <div class="infoTop">
                        <img class="icon" src="../images/dianpu_m.png" alt="">
                        <p class="fName">河北保定星星烟花制造厂</p>
                    </div>
                    <div class="infoBottom">
                        <div class="info">
                            店铺编码：0001009
                        </div>
                        <div class="info">
                            订单数量：80
                        </div>
                        <div class="info">
                            采购总额：￥6600
                        </div>
                        <div class="info">
                            采购品种：650
                        </div>
                    </div>
                </div>
            </ul>
        </div>
        <ManageTabBarBotttom></ManageTabBarBotttom>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
import {mapGetters} from 'vuex'
import ManageTabBarBotttom from '@/components/ManageTabBarBottom'
import ManageTopNav from '@/components/ManageTopNav'
export default {
    data(){
        return{
            dateActive:true,
            typeActive:false,
            areaActive:false,
            showDateList:false,
            showTypeList:false,
            showAreaList:false,
            dateList:['近七天','近三十天','近三个月','近六个月'],
            typeList:['订单量'],
            areaList:['全国','北京','重庆'],
            curDateIndex:0,
            curTypeIndex:0,
            curAreaIndex:0,
            list:[],
            loading:false,
            moreLoading:false,
            hasMore:true,
            pageSize:10,
            pageNum:1,
            noData:false//是否有数据
        }
    },
    computed:{
        ...mapGetters('login',['token','userId','corpCode','companyId','userRole'])
    },
    components:{
        ManageTabBarBotttom,
        ManageTopNav
    },
    methods: {
        selDate(){
            this.dateActive = true;
            this.showDateList = true;
            this.showTypeList = false;
            this.typeActive = false;
            this.showAreaList = false;
            this.areaActive = false;
        },
        selType(){
            this.typeActive = true;
            this.dateActive = false;
            this.showTypeList = true;
            this.showDateList = false;
            this.showAreaList = false;
            this.areaActive = false;
        },
        selArea(){
            this.typeActive = false;
            this.dateActive = false;
            this.showTypeList = false;
            this.showDateList = false;
            this.showAreaList = true;
            this.areaActive = true;
        },
        selCurDate(e,index){
            e.stopPropagation();
            this.curDateIndex = index;
            this.showDateList = false;
            this.list = [];
            this.pageNum = 1;
        },
        selCurType(e,index){
            e.stopPropagation();
            this.curTypeIndex = index;
            this.showTypeList = false;
            this.list = [];
            this.pageNum = 1;
        },
        selCurArea(e,index){
            e.stopPropagation();
            this.curAreaIndex = index;
            this.showAreaList = false;
            this.list = [];
            this.pageNum = 1;
        },
        getData(){
            let defaulParams = {
                token:this.token,
                userId:this.userId,
                corpCode:this.corpCode,
                companyId:this.companyId,
                userRole:this.userRole,
                pageSize:this.pageSize,
                pageNum:this.pageNum
            };
        },
        loadMore(){
            if(this.moreLoading||!this.hasMore){
                return;
            }
            this.pageNum = this.pageNum+1;
            this.getData();
        }
    },
}
</script>
<style lang="scss" scoped>
    .mangeContainer{
        width: 100%;
        padding-top: 100px;
        background-color: #e5e5e5;
        .main{
            background-color: #fff;
            padding-bottom: 100px;
            .contentItem{
                display: flex;
                flex-direction: column;
                margin-left: 46px;
                padding: 0 36px 34px 0;
                border-bottom: 2px solid #ebebeb;
                .infoBottom{
                    display: flex;
                    flex-wrap: wrap;
                    width: 94%;
                    padding-top:27px;
                    .info{
                        width: 50%;
                        font-size:20px;
                        color:rgba(153,153,153,1);
                        line-height:26px;
                        letter-spacing:2px;
                        text-indent: 60px;
                        // padding-left: 60px;
                    }
                }
                .infoTop{
                    display: flex;
                    padding: 37px  36px 0 0;
                    .icon{
                        width: 40px;
                        height: 36px;
                        margin-right: 20px;
                    }
                    .fName{
                        font-size:26px;
                        color:rgba(51,51,51,1);
                        line-height:35px;
                        letter-spacing:2px;
                        width: 400px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
            .top{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-left: 39px;
                padding: 31px 37px 31px 0 ;
                height: 30px;
                border-bottom: 2px solid #ebebeb;
                .total{
                    font-size:22px;
                    color:rgba(102,102,102,1);
                    line-height:29px;
                    letter-spacing:2px;
                    // margin-left: 65px;
                }
                .date,.type,.area{
                    position: relative;
                    width: 115px;
                    font-size:22px;
                    color:rgba(153,153,153,1);
                    letter-spacing:2px;
                    padding-left: 26px;
                    &.long{
                        width: 150px;
                    }
                    &.active{
                        color: #007AFF;
                        &::after{
                             border-color:#007AFF transparent transparent transparent;
                        }
                    }
                    .dataList,.typeList{
                        position: absolute;
                        left: 0;
                        top: 0.6rem;
                        border: 2px solid #ebebeb;
                        background-color: #fff;
                    }
                    &::after{
                        content: '';
                        display: inline-block;
                        width: 0; 
                        height: 0;
                        border-width: 13px;
                        border-style: solid;
                        border-color:#999999 transparent transparent transparent;
                        position: absolute;
                        top: 0;
                        right: 0;
                        top: 5px;
                        right: 0;
                    }
                }
                .dataList{
                    .dataItem{
                        padding-left: 26px;
                        width: 189px;
                        height: 75px;
                        font-size:22px;
                        font-family:MicrosoftYaHei;
                        color:#666;
                        letter-spacing:2px;
                        line-height: 75px;
                        border-bottom: 2px solid #ebebeb;
                        &.active{
                            background-color: #007AFF;
                            color:#fff;   
                        }
                        &:last-child{
                            border: none;
                        }
                    }
                }
                .typeList{
                    .typeItem{
                        padding-left: 26px;
                        width: 189px;
                        height: 75px;
                        line-height: 75px;
                        font-size:22px;
                        color:rgba(102,102,102,1);
                        letter-spacing:2px;
                        border-bottom: 2px solid #ebebeb;
                        &:last-child{
                            border: none;
                        }
                        &.active{
                            background-color: #007AFF;
                            color:#fff;   
                        }
                    }
                }
            }
        }
    }
</style>
