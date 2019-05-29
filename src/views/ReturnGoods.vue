<template>
    <div class="refuseContainer">
        <TopNav></TopNav>
        <ul
            class="content"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
        >
            <li v-for="(item,index) in list" :key="index" class="listItem" @click="selGoods(index)">
                <!-- <img class="sel" v-if="item.isActive" src="../images/car_checkcircle.png" alt="">
                <img class="sel" v-else src="../images/car_circle.png" alt=""> -->
                <div class="left">
                    <img src="../images/shopcar.png" alt="">
                </div>
                <div class="right">
                    <div class="top">
                        <div class="bName">
                            <span class="name">烟花商品名称</span>
                            <span class="num">20件</span>
                        </div>
                        <div class="fName">河北保定星星烟花制造厂</div>
                        <div class="size">规格：35g*1支</div>
                        <div class="saled">已销：700件</div>
                    </div>
                    <div class="bottom">
                        <div class="nPrice">￥6.50</div>
                        <!-- <div class="logBtn">提醒发货</div> -->
                        <!-- <div class="oPrice">8.80</div> -->
                    </div>
                </div>
            </li>
        </ul>
        <!-- <div class="nextBtn">
            到货
        </div> -->
    </div>
</template>
<script>
import TopNav from '@/components/TopNav'
export default {
    data(){
        return{
            loading:false,
            list:[]
        }
    },
    mounted(){
        let dataList = [{title:'1'},{title:'2'}];
        dataList.map((item,index)=>{
            item.isActive = false;
        })
       this.list = dataList;
    },
    methods:{
        selGoods(index){
           this.$set(this.list[index], 'isActive', !this.list[index].isActive);
        },
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
            padding-bottom: 120px;
            background-color: #fff;
            .listItem{
                display: flex;
                align-items: center;
                padding: 25px 41px 25px 47px;
                border-bottom: 2px solid #ebebeb;
                .sel{
                    width: 40px;
                    height: 40px;
                    align-self: flex-start;
                    margin-top: 33px;
                    margin-right: 14px;
                    display: none;
                }
                .left{
                    width: 200px;
                    height: 210px;
                    background:rgba(255,255,255,1);
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: scale-down;
                    }
                }
                .right{
                    width: 400px;
                    flex: 1;
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
                            display: flex;
                            justify-content: space-between;
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
                        justify-content: space-between;
                        .nPrice{
                            font-size:32px;
                            font-weight:bold;
                            color:#666666;
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
                        .logBtn{
                            width:145px;
                            height:50px;
                            line-height: 50px;
                            text-align: center;
                            background:rgba(255,255,255,1);
                            border-radius:35px;
                            border:2px solid #F5A623;
                            font-size:22px;
                            color:#F5A623;
                            letter-spacing:2px;
                        }
                    }
                }
            }
        }
        .nextBtn{
            position: fixed;
            width: 100%;
            bottom: 0;
            left: 0;
            height: 98px;
            line-height: 98px;
            text-align: center;
            font-size:30px;
            color:rgba(255,255,255,1);
            letter-spacing:3px;
            background-color: #666;
        }
    }
</style>
