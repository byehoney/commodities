<template>
    <div class="mangeContainer" style="opacity:1">
        <TopNav></TopNav>
        <div class="divide"></div>
        <div class="state">
            <div class="title">审核状态</div>
            <div class="status">待审核</div>
        </div>
        <div class="divide"></div>
        <div class="infos">
            <div class="title">人员信息</div>
            <div class="infoItem">
                姓名：老王
            </div>
            <div class="infoItem">
                手机：15900000000
            </div>
            <div class="infoItem">
                店名：锦绣大地烟花店
            </div>
            <div class="infoItem">
                类型：注册待审核
            </div>
            <div class="card">
                <img src="" alt="">
            </div>
            <div class="card">
                <img src="" alt="">
            </div>
            <div class="btn">通过</div>
        </div>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
import { mapGetters } from 'vuex'
import TopNav from '@/components/TopNav'
// import ManageTabBarBotttom from '@/components/ManageTabBarBottom';

export default {
    data(){
        return{
           
        }
    },
    computed: {
         ...mapGetters('login',['token','userId','corpCode','companyId','userRole'])
    },
    components:{
        TopNav,
    //    ManageTabBarBotttom,
    },
    mounted() {
        
    },
    methods: {
        
    
    },
}
</script>
<style lang="scss" scoped>
    .mangeContainer{
        background-color: #fff;
        padding-top: 100px;
        .mint-header.manageHeader{
            background-color: #fff;
            .mintui{
                color: #333;
            }
            .mint-header-title{
                font-size:30px;
                color:rgba(51,51,51,1);
                line-height:40px;
            }
        }
        .infos{
            padding-bottom: 152px;
            .btn{
                width:384px;
                height:90px;
                background:linear-gradient(180deg,rgba(250,217,97,1) 0%,rgba(247,107,28,1) 100%);
                border-radius:50px;
                font-size:28px;
                color:rgba(255,255,255,1);
                text-align: center;
                line-height: 90px;
                margin: 57px auto 0;
            }
            .card{
                width:566px;
                height:347px;
                border-radius:8px;
                border:2px solid rgba(109,114,120,1);
                margin: 29px auto 0;
                img{
                    width: 546px;
                    height: 326px;
                    object-fit: scale-down;
                    position: relative;
                    top: 10px;
                    left: 10px;
                }
            }
            .infoItem{
                margin-left: 39px;
                border-bottom: 2px solid #ebebeb;
                font-size:28px;
                color:rgba(102,102,102,1);
                line-height:37px;
                padding:36px 53px 36px 0;
            }
            .title{
                padding-top: 35px;
                padding-bottom: 24px;
                font-size:34px;
                color:rgba(0,122,255,1);
                line-height:45px;
                text-align: center;
            }
        }
        .state{
            width:100%;
            background:#4B95E6;
            padding: 58px 0;
            .title{
                font-size:30px;
                color:rgba(255,255,255,1);
                line-height:40px;
                margin-left:69px; 
            }
            .status{
                font-size:46px;
                font-weight:bold;
                color:rgba(255,255,255,1);
                line-height:61px;
                margin-left:69px; 
                margin-top: 30px;
            }
        }
        .divide{
            width: 100%;
            height: 8px;
            background-color: #ebebeb;
        }
        
    }
</style>
