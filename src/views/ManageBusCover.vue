<template>
    <div class="mangeContainer" style="opacity:1">
        <TopNav></TopNav>
        <div class="divide"></div>
        <div class="content">
            <div class="tabs">
                <div :class="['tab',actIndex==0?'active':'']" @click="changeType(0)">未覆盖（86）</div>
                <div :class="['tab',actIndex==1?'active':'']" @click="changeType(1)">已覆盖（86）</div>
            </div>
            <div class="businessList"
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10"
            >
                <div class="businessItem">
                    <img src="../images/dianpu_m.png" class="atv" alt="">
                    <div class="infos">
                        <div class="top">星星烟花-旗舰店</div>
                        <div class="bottom">河北省保定市西口村甲2组35号</div>
                    </div>
                </div>
                <div class="businessItem">
                    <img src="../images/dianpu_m.png" class="atv" alt="">
                    <div class="infos">
                        <div class="top">星星烟花-旗舰店</div>
                        <div class="bottom">河北省保定市西口村甲2组35号</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
import { mapGetters } from 'vuex'
import TopNav from '@/components/TopNav'
// import ManageTabBarBotttom from '@/components/ManageTabBarBottom';
import { reqManageShopDetail } from '@/api/index'
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
    computed: {
         ...mapGetters('login',['token','userId','corpCode','companyId','userRole'])
    },
    components:{
        TopNav
    //    ManageTabBarBotttom,
    },
    mounted() {
        this.getData();
    },
    methods: {
        changeType(index){
            this.actIndex = index;
        },
        async getData(){
            let defaulParams = {
                token:this.token,
                userId:this.userId,
                corpCode:this.corpCode,
                companyId:this.companyId,
                userRole:this.userRole,
                pageSize:this.pageSize,
                pageNum:this.pageNum
            };      
            let res = await reqManageShopDetail({
                ...defaulParams,
                ywCompanyId:this.$route.query.id,
                ywUserId:this.$route.query.memberId,
                fullText:this.searchStr,
                type:this.actIndex
            })
            if(this.actIndex == 0){//基本信息

            }else{//品规信息
                this.moreLoading = false;
                if(res.code == 0){
                    if(!res.data.list.length){
                        this.hasMore = false;
                        this.moreLoading = false;
                        if(this.pageNum!=1){
                            Toast({
                                message: "已经到底了~",
                                position: "middle",
                                duration: 2000
                            });
                        }else{
                            Toast({
                                message: "暂无数据",
                                position: "middle",
                                duration: 2000
                            });
                        }
                        return;
                    }else{
                        this.hasMore = true;
                        this.moreLoading = false;
                    }
                    this.list = [...this.list,...res.data.list];
                }
            }
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
        background-color: #fff;
        .content{
            padding-top: 37px;
            .businessList{
                .businessItem{
                    margin-left: 51px;
                    border-bottom: 2px solid #ebebeb;
                    display: flex;
                    align-items: center;
                    padding: 26px 53px 26px 0;
                    .atv{
                        width:40px;
                        height:36px;
                        flex-shrink: 0;
                        margin-right: 20px;
                    }
                    .infos{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        font-size:22px;
                        color:rgba(51,51,51,1);
                        line-height:29px;
                        flex-shrink: 0;
                        .top{
                            margin-bottom: 16px;
                        }
                    }
                }
            }
            .tabs{
                display: flex;
                justify-content: center;
                align-items: center;
                font-size:24px;
                color:rgba(153,153,153,1);
                line-height:31px;
                margin-bottom: 20px;
                .tab{
                    margin-right: 10px;
                    padding-bottom:14px; 
                    text-align: center;
                    &.active{
                        color: #0091FF;
                        border-bottom: 4px solid #0091FF;
                    }
                }
            }
        }
        .divide{
            width: 100%;
            height: 8px;
            background-color: #ebebeb;
            padding-top: 93px;
        }
        
    }
</style>
