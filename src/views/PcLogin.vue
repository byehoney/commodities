<template>
    <div class="pcContainer">
        <TopNav></TopNav>
        <div class="loginArea">
            <img src="../images/shopcar.png" alt="">
            <p class="tip">Pc 登录确认</p>
            <div class="loginBtn">登录</div>
            <div class="noLogin">取消登录</div>
        </div>
    </div>
</template>
<script>
import TopNav from '@/components/TopNav'
export default {
    data(){
        return{
            
        }
    },
    components:{
        TopNav,
    },
}
</script>
<style lang="scss" scoped>
.pcContainer{
    width: 100vw;
    height: 100vh;
    background:rgba(235,235,235,1);
    .loginArea{
        padding-top: 165px;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width:284px;
            height:223px;
        }
        .tip{
            font-size:30px;
            color:rgba(51,51,51,1);
            line-height:40px;
            letter-spacing:2px;
            margin:19px auto  104px;
        }
        .loginBtn{
            width: 576px;
            height: 98px;
            line-height: 98px;
            text-align: center;
            font-size:36px;
            color:rgba(255,255,255,1);
            letter-spacing:3px;
            background-color: #FF553A;
        }
        .noLogin{
            font-size:30px;
            color:rgba(74,144,226,1);
            line-height:40px;
            letter-spacing:2px;
            margin-top: 79px;
        }
    }
}
</style>
