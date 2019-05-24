<template>
    <div class="hasEvaContainer">
        <TopNav></TopNav>
        <ul
            class="content"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
        >
            <li class="listItem" v-for="(item,index) in list" :key="index">
                <div class="top">
                    <img src="../images/shopcar.png" class="left" alt="">
                    <div class="mid">
                        <div class="name">烟花商品名称</div>
                        <div class="evaLeval">
                            <span class="text">评分</span>
                            <img class="star" v-for="n in 4" :key="n" src="../images/eva_star.png" alt="">
                        </div>
                    </div>
                    <div class="right">2019-05-12</div>
                </div>
                <div class="bottom">
                    一直都买，用的非常好
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import TopNav from '@/components/TopNav'
export default {
    data(){
        return{
            loading:false,
            list:[1,2,3]
        }
    },
    components:{
        TopNav,
    },
    methods:{
        loadMore(){
            let data = ['load','load','load'];
            this.list = [...this.list,...data];
        }
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
        .content {
            padding-top: 92px;
            padding-bottom: 98px;
            .listItem{
                display: flex;
                flex-direction: column;
                padding: 25px 42px 55px 42px;
                background-color:#fff;
                border-bottom: 2px solid #ebebeb;
                .top{
                    display: flex;
                    align-items: flex-start;
                    .left{
                        width: 172px;
                        height: 122px;
                    }
                    .mid{
                        display: flex;
                        flex-direction: column;
                        margin-left: 30px;
                        width: 300px;
                        .name{
                            font-size:26px;
                            color:rgba(51,51,51,1);
                            line-height:35px;
                            letter-spacing:2px;
                            margin-bottom: 24px;
                        }
                        .evaLeval{
                            display: flex;
                            align-items: center;
                            .text{
                                font-size:26px;
                                color:rgba(51,51,51,1);
                                line-height:35px;
                                letter-spacing:2px;
                                margin-right: 14px;
                            }
                            .star{
                                width: 34px;
                                height: 34px;
                                margin-right: 10px;
                            }
                        }
                    }
                    .right{
                        font-size:22px;
                        color:rgba(102,102,102,1);
                        line-height:29px;
                        letter-spacing:2px;
                    }
                } 
                .bottom{
                    font-size:26px;
                    color:rgba(51,51,51,1);
                    line-height:35px;
                    letter-spacing:2px;
                    margin-top: 38px;
                }
            }
        }
    }
</style>
