<!--注册选择角色-->
<template>
    <div class="reg_container">
        <TopNav></TopNav>  
        <div class="info_area">
            <div class="sel" @click="selActor">
                <span>我是</span>
                <div class="actor">
                    <span>{{this.sel_value}}</span>
                    <img class="right_icon" src="../images/arrow_right.png" alt="">
                </div>
            </div>
            <input v-model="pasOne" class="input" type="password" placeholder="请输入密码" maxlength="16">
            <input v-model="pasTwo" class="input" type="password" placeholder="请再次输入密码" maxlength="16">
            <p class="tip">设置您的密码（密码长度需为6-16位）</p>
        </div>
        <div class="nextBtn" @click="goNext">下一步</div>
        <mt-popup
            v-model="popupVisible"
            position="bottom"
        >
            <mt-picker value-key="userName" :slots="slots" @change="onValuesChange" showToolbar>
                <div class="barContent">
                    <div @click="handleCancel" class="cancel">取消</div>
                    <div class="tip">请选择</div>
                    <div @click="handleConfirm" class="sure">确认</div>
                </div>
            </mt-picker>
        </mt-popup>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
import TopNav from '@/components/TopNav'
import {getActorList} from '@/api/index'
import {mapMutations} from 'vuex'
export default {
    data(){
        return{
            pasOne:'',
            pasTwo:'',
            popupVisible:false,
            set_value:'',//滑动变化值
            sel_value:'请选择',//选择的值
            userRole:'',
            setRole:'',
            slots: [
                {
                    flex: 1,
                    values: [],
                    className: 'slot1',
                    textAlign: 'center'
                }   
            ]
        }
    },
    components:{
        TopNav
    },
    async mounted(){
        let res = await getActorList();
        this.$set(this.slots[0],'values',res.data.list)
    },
    methods:{
        ...mapMutations('register',['saveRole','savePsw']),
        onValuesChange(picker, values){
            if(!values.length||!values[0]){
                return
            }
            this.set_value = values[0].userName;
            this.setRole = values[0].userRole;
        },
        selActor(){
            this.popupVisible = !this.popupVisible;
        },
        handleCancel(){
            this.popupVisible = false
        },
        handleConfirm() {
            this.popupVisible = false;
            this.sel_value = this.set_value;
            this.userRole = this.setRole;
        },
        goNext(){
            let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
            if(this.sel_value == '请选择'){
                Toast({
                    message: "请选择用户角色",
                    position: "middle",
                    duration: 2000
                });
            }else if(!this.pasOne.trim()){
                Toast({
                    message: "请输入密码",
                    position: "middle",
                    duration: 2000
                });
            }else if(!this.pasTwo.trim()){
                Toast({
                    message: "请再次输入密码",
                    position: "middle",
                    duration: 2000
                });
            }else if(this.pasOne.trim().length<6){
                Toast({
                    message: "密码长度须为6-16位",
                    position: "middle",
                    duration: 2000
                });
            }else if(!reg.test(this.pasOne.trim())||!reg.test(this.pasTwo.trim())){
                Toast({
                    message: "密码须为6-16位字母数字的组合",
                    position: "middle",
                    duration: 2000
                });
            }else if(this.pasOne.trim()!=this.pasTwo.trim()){
                Toast({
                    message: "两次输入密码不同",
                    position: "middle",
                    duration: 2000
                });
            }else{
                this.saveRole(this.userRole);
                this.savePsw(this.pasOne);
                console.log(this.$store)
            }
        }
    }
}
</script>
<style lang="scss">
    .reg_container{
        width: 100vw;
        height: 100vh;
        background:rgba(235,235,235,1);
        .info_area{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 153px;
            .sel{
                width:559px;
                height:98px;
                padding-left: 17px;
                background:rgba(255,255,255,1);
                border-radius:4px;
                border:1px solid rgba(155,155,155,1);
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size:30px;
                color:#333;
                letter-spacing:3px;
                margin-bottom: 39px;
                .right_icon{
                    width: 17px;
                    height: 30px;
                    position: relative;
                    top: 5px;
                    margin-left: 17px;
                    margin-right: 20px;
                }
            }
            .input{
                width:559px;
                height:98px;
                line-height: 98px;
                padding-left: 17px;
                background:rgba(255,255,255,1);
                border-radius:4px;
                border:1px solid rgba(155,155,155,1);
                color:#333;
                font-size:30px;
                color:rgba(235,235,235,1);
                letter-spacing:3px;
                margin-bottom: 39px;
            }
            .tip{
                font-size:20px;
                color:rgba(245,166,35,1);
                line-height:26px;
                letter-spacing:2px;
                margin-top: -12px;
                margin-bottom: 152px;
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
            margin: 0 auto;
        }
        .picker-toolbar{
            height: 96px;
            border-bottom: 2px solid #ebebeb;
        }
        .barContent{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 38px;
            color:#666;
            .cancel,.sure{
                height: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding:0 30px;
                font-size:26px;
                color:rgba(102,102,102,1);
                letter-spacing:2px;
            }
            .sure{
                color:#FF0000;
            }
            .tip{
                font-size:30px;
                color:rgba(51,51,51,1);
                letter-spacing:3px;
            }
        }
        .slot1{
            width: 100vw;
            .picker-item{
                font-size:30px;
                color:rgba(51,51,51,1);
                height: 78px;
                line-height:78px;
                letter-spacing:3px;
            }
        }
    }
</style>
