<template>
    <div class="forgetContainer">
        <TopNav></TopNav>
        <div class="pasArea">
            <div class="pasItem">
                <div class="left">
                    手机号
                </div>
                <div class="right">
                    <input type="text" placeholder="请输入您的手机号" class="input" autocomplete="false" v-model="tel">
                </div>
            </div>
            <div class="pasItem">
                <div class="left">
                    验证码
                </div>
                <div class="right">
                    <input type="text" placeholder="请输入验证码" class="yzm" autocomplete="false" v-model="yzm">
                    <div class="sendBtn">获取验证码</div>
                </div>
            </div>
            <div class="pasItem">
                <div class="left">
                    设置密码
                </div>
                <div class="right">
                    <input type="text" maxlength="20" minlength="6" placeholder="6-20位字母或数字组合" class="input" autocomplete="false" v-model="yzm">
                </div>
            </div>
            <div class="pasItem">
                <div class="left">
                    再次输入
                </div>
                <div class="right">
                    <input type="text" maxlength="20" minlength="6" placeholder="请再次确认密码" class="input" autocomplete="false" v-model="yzm">
                </div>
            </div>
        </div>
        <div class="nextBtn">完成</div>
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
    .forgetContainer{
        width: 100vw;
        height: 100vh;
        background:rgba(235,235,235,1);
        .nav{
            border-bottom: 2px solid #ebebeb;
        }
        .pasArea{
            padding-top: 92px;
            background-color: #fff;
            padding-bottom: 38px;
            .pasItem{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 98px;
                line-height: 98px;
                margin-bottom: 39px;
                &:first-child{
                    margin-top: 59px;
                }
                .left{
                    width: 150px;
                    font-size:30px;
                    color:rgba(102,102,102,1);
                    line-height:40px;
                    letter-spacing:3px;
                }
                .right{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border:1px solid rgba(155,155,155,1);
                    height: 96px;
                    padding-left: 15px;
                    width:425px;
                    height:96px;
                    .yzm{
                        width:199px;
                        height:94px;
                        line-height: 94px;
                        font-size:30px;
                        font-family:MicrosoftYaHei;
                        color:rgba(235,235,235,1);
                        letter-spacing:3px;
                        border: none;
                        outline: none;
                    }
                    .input{
                        width: 98%;
                        height:94px;
                        line-height: 94px;
                        background:rgba(255,255,255,1);
                        border-radius:4px;
                        font-size:30px;
                        color:#333;
                        letter-spacing:3px;
                        border: none;
                        outline: none;
                    }
                    .sendBtn{
                        width:172px;
                        height:68px;
                        background:linear-gradient(85deg,rgba(255,98,56,1) 0%,rgba(255,18,64,1) 100%);
                        border-radius:10px;
                        font-size:24px;
                        font-family:MicrosoftYaHei;
                        color:rgba(255,255,255,1);
                        line-height:68px;
                        letter-spacing:2px;
                        margin-right: 20px;
                        text-align: center;
                    }
                }
            }
        }
        .nextBtn{
            width: 576px;
            height: 98px;
            line-height: 98px;
            text-align: center;
            font-size:36px;
            color:rgba(255,255,255,1);
            letter-spacing:3px;
            background-color: #666;
            margin: 58px auto 0;
        }
    }
</style>
