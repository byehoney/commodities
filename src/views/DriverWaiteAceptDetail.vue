<template>
    <div class="driverContainer">
        <TopNav/>
        <div class="title">
            <div class="left">调度单号：</div>
            <div class="right">JJHKLIGGHK987666</div>
        </div>
        <div class="detailInfos">
            <div class="detailCommon">
                <div class="commonItem">
                    <div class="left">仓库：</div>
                    <div class="right">库位一</div>
                </div>
                <div class="commonItem">
                    <div class="left">保管员名称：</div>
                    <div class="right">张三</div>
                </div>
                <div class="commonItem">
                    <div class="left">联系电话：</div>
                    <div class="right">1390008888</div>
                </div>
            </div>
            <div class="detailCompany" @click="goGoodsDetail">
                <div class="top">
                    <img src="../images/driver/shop_icon.png" alt="">
                    <span>旅顺某某经销商</span>
                </div>
                <div class="bottom">
                    <div class="botLeft">
                        <div class="botItem">
                            <div class="left">送货时间：</div>
                            <div class="right">2019-7-12</div>
                        </div>
                        <div class="botItem">
                            <div class="left">体积（立方米）：</div>
                            <div class="right">100</div>
                        </div>
                        <div class="botItem">
                            <div class="left">品种数：</div>
                            <div class="right">100</div>
                        </div>
                        <div class="botItem">
                            <div class="left">货值（元）：</div>
                            <div class="right">100</div>
                        </div>
                    </div>
                    <img src="../images/arrow_right.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
import TopNav from '../components/DriverTopNav';
import { getDriverWaitAceptDetailData } from '@/api/index'
import { mapState ,mapActions,mapGetters, mapMutations} from 'vuex';
export default {
    data(){
        return{
            
        }
    },
    computed:{
        // ...mapState('login',['user','token']),
        ...mapState({
          user:state=>state.login.user,
          token:state=>state.login.token,
        }),
        ...mapGetters('login',['token','userId','corpCode','companyId','userRole'])
    },
    components:{
        TopNav
    },
    mounted() {
        this.getData();
    },
    methods:{
        goGoodsDetail(){
            this.$router.push({name:'driverWaiteAceptGoods',query:{id:''}})
        },
        async getData(){
            let defaulParams = {
                token:this.token,
                userId:this.userId,
                corpCode:this.corpCode,
                companyId:this.companyId,
                userRole:this.userRole,
                sqlpwd:this.user.sqlpwd,
                url:this.user.url,
                user:this.user.user,
                mobile:this.user.mobile,
            };
            let res = await getDriverWaitAceptDetailData({...defaulParams,dddh:this.$route.query.id,type:1})
        },
    }
}
</script>
<style lang="scss" scoped>
.driverContainer{
    padding-top: 94px;
    background-color: #DFDFDF;
    .detailInfos{
        border-top: 1px solid  #BEBEBE;
        background-color: #fff;
        padding: 0 38px 45px;
        .detailCompany{
            border: 1px solid #BEBEBE;
            padding: 26px 56px 30px 26px;
            margin-top: 20px;
            .top{
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                img{
                    width:32px;
                    height:30px;
                }
                span{
                    font-size:28px;
                    font-family:PingFangSC-Medium;
                    font-weight:500;
                    color:rgba(51,51,51,1);
                    line-height:40px;
                }
            }
            .bottom{
                display: flex;
                justify-content: space-between;
                img{
                    width:15px;
                    height:26px;
                }
                .botLeft{
                    .botItem{
                        display: flex;
                        align-items: center;
                        font-size:28px;
                        font-family:PingFangSC-Light;
                        font-weight:300;
                        color:rgba(102,102,102,1);
                        line-height:40px;
                        margin-top: 10px;
                        .left{
                            width: 224px;
                            margin-right: 10px;
                        }
                    }
                }
            }
        }
        .detailCommon{
            .commonItem{
                height: 72px;
                display: flex;
                align-items: center;
                font-size:28px;
                font-family:PingFangSC-Light;
                font-weight:300;
                color:rgba(51,51,51,1);
                line-height:40px;
                border-bottom: 1px solid #BEBEBE;
                .left{
                    width: 168px;
                    margin-right: 72px;
                }
            }
        }
    }
    .title{
        height: 110px;
        display: flex;
        align-items: center;
        font-size:28px;
        font-family:PingFangSC-Light;
        font-weight:300;
        color:#D33F3F;
        line-height:40px;
        padding-left: 38px;
        background-color: #fff;
        .left{
            width:168px;
            height:40px;
            margin-right: 72px;
        }
    }
}
</style>
