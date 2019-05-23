<template>
    <div class="refuseContainer">
        <TopNav></TopNav>
        <ul
            class="content"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
        >
            <li v-for="(item,index) in list" :key="index" class="listItem">
                <div class="left">
                    <img src="../images/shopcar.png" alt="">
                </div>
                <div class="right">
                    <div class="top">
                        <div class="bName">烟花商品名称</div>
                        <div class="fName">河北保定星星烟花制造厂</div>
                        <div class="size">规格：35g*1支</div>
                        <div class="saled">已销：700件</div>
                    </div>
                    <div class="bottom">
                        <div class="nPrice">￥6.50</div>
                        <div class="oPrice">8.80</div>
                    </div>
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
    methods:{
        loadMore(){
            let data = ['load','load','load'];
            this.list = [...this.list,...data];
        }
    },
    components:{
        TopNav,
    },
}
</script>
<style lang="scss" scoped>
    .refuseContainer{
        width: 100vw;
        min-height: 100vh;
        background:rgba(235,235,235,1);
        .nav{
            border-bottom: 2px solid #ebebeb;
        }
        .content{
            padding-top: 92px;
            background-color: #fff;
            .listItem{
                display: flex;
                align-items: center;
                padding: 25px 41px 25px 47px;
                border-bottom: 2px solid #ebebeb;
                .left{
                    width: 200px;
                    height: 210px;
                    background:rgba(255,255,255,1);
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .right{
                    display: flex;
                    flex-direction: column;
                    margin-left: 26px;
                    justify-content: space-between;
                    .top{
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        .bName{
                            font-size:26px;
                            color:rgba(51,51,51,1);
                            line-height:35px;
                            letter-spacing:2px;
                            margin-bottom: 10px;
                        }
                        .fName{
                            font-size:18px;
                            color:rgba(102,102,102,1);
                            line-height:24px;
                            letter-spacing:1px;
                            margin-bottom: 7px;
                        }
                        .size{
                            font-size:18px;
                            color:rgba(102,102,102,1);
                            line-height:24px;
                            letter-spacing:1px;
                            margin-bottom: 10px;
                        }
                        .saled{
                            font-size:18px;
                            color:rgba(51,51,51,1);
                            line-height:24px;
                            letter-spacing:1px;
                            margin-bottom: 43px;
                        }
                    }
                    .bottom{
                        display: flex;
                        align-items: flex-end;
                        .nPrice{
                            font-size:32px;
                            font-weight:bold;
                            color:rgba(255,25,0,1);
                            line-height:42px;
                        }
                        .oPrice{
                            font-size:18px;
                            color:rgba(153,153,153,1);
                            line-height:35px;
                            letter-spacing:1px;
                            margin-left: 30px;
                            text-decoration: line-through;
                        }
                    }
                }
            }
        }
    }
</style>
