<template>
    <div class="mangeContainer">
        <div class="manageHeader">
            <img @click="goBack" src="../images/arrow_left_white.png" class="leftIcon" alt="">
            <div class="inputArea">
                <input type="text" placeholder="请输入搜索内容" class="input">
            </div>
            <span>搜索</span>
        </div>
        <div class="manageList" 
            style="max-height: 100vh; overflow-y: auto;"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
        >
            <div class="listItem">
                <img class="shopIcon" src="../images/car_dianpu.png" alt="">
                <div class="listInfo">
                    <div class="sName">门店名称：星星烟花-旗舰店</div>
                    <div class="lName">联系人：张建</div>
                    <div class="rAdd">注册地址：河北省保定市西口村甲2组35号</div>
                    <div class="order">总订单数：<span class="num">20</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ManageTabBarBotttom from '@/components/ManageTabBarBottom';
import CityPicker from "@/components/CityPicker";
export default {
    data(){
        return{
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
       
    },
    methods: {
        
    },
}
</script>
<style lang="scss" scoped>
    .mangeContainer{
        background-color: #fff;
        // padding-bottom: 100px;
        .manageList{
            margin-top: 93px;
            .listItem{
                display: flex;
                margin-left: 55px;
                border-bottom: 2px solid #ebebeb;
                padding: 27px 38px 27px 0;
                .shopIcon{
                    width: 40px;
                    height: 36px;
                    margin-right: 20px;
                    flex-shrink: 0;
                }
                .sName,.lName,.rAdd,.order{
                    font-size:22px;
                    color:rgba(51,51,51,1);
                    line-height:29px;
                    letter-spacing:2px;
                    margin-bottom: 10px;
                }
                .num{
                    color: #F5A623;
                }
            }
        }
        .manageHeader{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 93px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            background:linear-gradient(180deg,rgba(0,122,255,1) 0%,rgba(24,152,247,1) 100%);
            .leftIcon{
                width: 17px;
                height: 30px;
            }
            .inputArea{
                width: 506px;
                height: 58px;
                background-color: #fff;
                border-radius: 30px;
                position: relative;
            }
            .input{
                width: 506px;
                height: 58px;
                background-color: #fff;
                font-size:22px;
                color:#999;
                line-height:30px;
                letter-spacing:2px;
                border: none;
                outline: none;
                position: absolute;
                top: 0;
                left: 0;
                border-radius: 30px;
                padding-left: 21px;
            }
            span{
                font-size:28px;
                color:rgba(255,255,255,1);
                line-height:37px;
                letter-spacing:2px;
            }
        }
    }
</style>
