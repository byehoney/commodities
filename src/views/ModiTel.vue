<template>
    <div class="telContainer">
        <TopNav></TopNav>
        <div class="telContent">
            <div class="tip">您正在更换手机号：{{user.mobile|formatTel}}</div>
            <div class="text">请验证</div>
            <div class="sendArea">
                <input v-model="yzm" type="text" autocomplete="false" placeholder="请输入验证码" class="left">
                <div class="right" @click="sendMsg">{{msgStr}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
import TopNav from '@/components/TopNav'
import {updateUserInfo,getYzCode,checkYzCode} from '@/api/index'
import {mapState,mapMutations} from 'vuex'
export default {
    data(){
        return{
            yzm:'',
            sending:false,
            msgStr:"获取验证码",
        }
    },
    filters:{
        formatTel(data){
            return data.substr(0,3)+'****' + data.substr(7,11);
        }
    },
    computed:{
        ...mapState('login',['user'])
    },
    components:{
        TopNav,
    },
    methods:{
        async reqYzcode(){
            let res = await getYzCode({mobile:this.user.mobile});
        },
        sendMsg(){
            if(!this.sending){
                let timer = null;
                let step = 60;
                this.sending = true;
                timer = setInterval(()=>{
                    step--;
                    if(step==0){
                        this.msgStr = '重新发送' ;
                        clearInterval(timer);
                        this.sending = false;
                    }else{
                        this.msgStr = step+'s后重新发送' ;
                    }
                },1000) 
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.telContainer{
    width: 100vw;
    height: 100vh;
    background:rgba(235,235,235,1);
    .telContent{
        padding-top: 120px;
        display: flex;
        flex-direction: column;
        padding-left: 39px;
        padding-right: 41px;
        .tip{
            font-size:28px;
            color:rgba(51,51,51,1);
            line-height:37px;
            letter-spacing:2px;
            margin-bottom: 18px;
        }
        .text{
            font-size:26px;
            color:rgba(102,102,102,1);
            line-height:35px;
            letter-spacing:1px;
            margin-bottom: 38px;
        }
        .sendArea{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left{
                width: 331px;
                height: 96px;
                line-height: 96px;
                border: 2px solid #ebebeb;
                background-color: #fff;
                font-size:28px;
                color:rgba(235,235,235,1);
                letter-spacing:1px;
                padding-left: 17px;
                margin-right: 16px;
                border-radius: 10px;
            }
            .right{
                width: 315px;
                height: 94px;
                border: 2px solid #FF001F;
                font-size:28px;
                color:rgba(255,0,0,1);
                line-height:94px;
                letter-spacing:2px;
                border-radius: 10px;
                text-align: center;
            }
        }
    }
}
</style>
