<template>
    <div class="mangeContainer">
        <ManageTopNav></ManageTopNav>
        <div class="main">
            <p class="top">
                <span class="active">近三天</span>
                <span>近七天</span>
            </p>
            <p class="title green">当日销售额</p>
            <div class="chartOne chart">

            </div>
            <p class="title purple">当日订单门店数</p>
            <div class="chartTwo chart">
                
            </div>
            <p class="title yellow">当日产品销量</p>
            <div class="chartThree chart">
                
            </div>
        </div>
        <ManageTabBarBotttom></ManageTabBarBotttom>
    </div>
</template>
<script>
import ManageTabBarBotttom from '@/components/ManageTabBarBottom'
import ManageTopNav from '@/components/ManageTopNav'
export default {
    data(){
        return{

        }
    },
    components:{
        ManageTabBarBotttom,
        ManageTopNav
    }
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
            .top{
                padding: 39px 0 36px 39px;
                line-height:31px;
                display: flex;
                span{
                    font-size:24px;
                    font-weight:bold;
                    color:rgba(153,153,153,1);
                    line-height:31px;
                    letter-spacing:1px;
                    margin-right: 49px;
                    &.active{
                        color:rgba(245,166,35,1);
                    }
                }
            }
            .title{
                font-size:24px;
                color:rgba(51,51,51,1);
                line-height:31px;
                letter-spacing:1px;
                margin-bottom: 19px;
                &::before{
                    content: ' ';
                    width: 13px;
                    height: 18px;
                    display: inline-block;
                    margin-right: 26px;
                }
                &.green{
                    &::before{
                        background-color: #7ED321
                    }
                }
                &.purple{
                    &::before{
                        background-color: #8589FF
                    }
                }
                &.yellow{
                    &::before{
                        background-color: #FFBE50
                    }
                }
            }
            .chart{
                width: 676px;
                height: 326px;
                margin:  0 auto 38px;
                &.chartOne{
                    background:linear-gradient(180deg,rgba(165,229,101,1) 0%,rgba(10,136,34,1) 100%);
                }
                &.chartTwo{
                    background:linear-gradient(360deg,rgba(87,72,235,1) 0%,rgba(200,109,215,1) 100%);
                }
                &.chartThree{
                    background:linear-gradient(180deg,rgba(250,217,97,1) 0%,rgba(247,107,28,1) 100%);
                }
            }
        }
    }
</style>
