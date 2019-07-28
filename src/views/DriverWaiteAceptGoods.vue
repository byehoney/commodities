<template>
    <div class="driverContainer">
        <TopNav/>
        <div class="infos">
            <div class="infoArea">
                <div class="infoItem title">
                    <div class="left">调度单号：</div>
                    <div class="right">JJHKLIGGHK987666</div>
                </div>
                <div class="infoItem">
                    <div class="left">客户名称：</div>
                    <div class="right">旅顺某某经销商</div>
                </div>
                <div class="infoItem">
                    <div class="left">库位名称：</div>
                    <div class="right">库位一</div>
                </div>
            </div>
            <div class="goodsArea">
                <div class="goodsItem">
                    <div class="top">商品名称：二十五发大地红二十五发大地红二十五</div>
                    <div class="bottom">
                        <div class="left">
                            <img src="" alt="">
                        </div>
                        <div class="right">
                            <p>规格：10/1</p>
                            <p>单位：箱</p>
                            <p>厂家：测试厂家</p>
                            <p>数量：10</p>
                            <p>辅量：10件2个</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TopNav from '../components/DriverTopNav';
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
        TopNav
    },
    methods:{
        async getData(){
            
        },
        loadMore(){
            if(this.moreLoading||!this.hasMore){
                return;
            }
            this.pageNum = this.pageNum+1;
            this.getData();
        }
    }
}
</script>
<style lang="scss" scoped>
    .driverContainer{
        padding-top: 94px;
        background-color: #DFDFDF;
        .infos{
            background-color: #fff;
            .goodsArea{
                padding: 24px 38px 47px;
                .goodsItem{
                    border: 1px solid #BEBEBE;
                    display: flex;
                    flex-direction: column;
                    padding: 28px 20px;
                    border-radius:6px;
                    .top{
                        font-size:26px;
                        font-family:PingFang-SC-Medium;
                        font-weight:500;
                        color:rgba(102,102,102,1);
                        line-height:37px;
                    }
                    .bottom{
                        display: flex;
                        align-items: center;
                        .left{
                            width:298px;
                            height:285px;
                            flex-shrink: 0;
                            img{
                                width: 100%;
                                height: 100%;
                                object-fit: scale-down;
                                
                            }
                        }
                        .right{
                            font-size:26px;
                            font-family:PingFangSC-Light;
                            font-weight:300;
                            color:rgba(102,102,102,1);
                            line-height:37px;
                        }
                    }
                }
            }
            .infoArea{
                font-size:28px;
                font-family:PingFangSC-Light;
                font-weight:300;
                color:rgba(51,51,51,1);
                line-height:40px;
                .infoItem{
                    padding:17px 38px;
                    border-bottom: 1px solid #BEBEBE;
                    display: flex;
                    align-items: center;
                    &.title{
                        padding: 35px 38px;
                        color: #D33F3F;
                    }
                    .left{
                        width: 140px;
                        margin-right: 100px;
                    }
                }
            }
        }
  }
</style>
