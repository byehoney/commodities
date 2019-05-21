<template>
    <div class="addContainer">
        <TopNav></TopNav>
        <div class="addArea">
            <div class="addItem">
                <div class="left">
                    收货人：
                </div>
                <div class="right">
                    <input type="text" class="input" autocomplete="false" placeholder="请输入" v-model="name">
                </div>
            </div>
             <div class="addItem">
                <div class="left">
                    手机号：
                </div>
                <div class="right">
                    <input type="text" class="input" autocomplete="false" placeholder="请输入" v-model="tel">
                </div>
            </div>
             <div class="addItem" @click="handlerArea"> 
                <div class="left">
                    所在地区：
                </div>
                <div class="right">
                    <input type="text" disabled class="input" v-model="sel_value" autocomplete="false" placeholder="省市区县">
                </div>
            </div>
             <div class="addItem">
                <div class="left">
                    详细地址：
                </div>
                <div class="right">
                    <input type="text" class="input" autocomplete="false" placeholder="街道、楼牌号等" v-model="details">
                </div>
            </div>
        </div>
        <div class="nextBtn" @click="saveAddr">保存</div>
        <CityPicker :areaVisible="areaVisible" :setArea="handleSetArea" :cancel="handleCancel"></CityPicker>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
import TopNav from '@/components/TopNav'
import CityPicker from "@/components/CityPicker";
export default {
    data(){
        return{
            areaVisible:false,
            set_value: "", //滑动变化值
            sel_value: "", //选择的值
            name:'',
            tel:'',
            details:''
        }
    },
    components:{
        TopNav,
        CityPicker
    },
    methods:{
        handlerArea(){
            this.areaVisible = !this.areaVisible;
        },
        handleSetArea(value){
            this.sel_value = value;
            this.areaVisible = false;
        },
        handleCancel(){
            this.areaVisible = false;
        },
        saveAddr(){
            let reg = /^1[345678]\d{9}$/;
            if(!this.name.trim()){
                Toast({
                    message: "请输入姓名",
                    position: "middle",
                    duration: 2000
                });
            }else if(!this.tel.trim()||!reg.test(this.tel.trim())){
                Toast({
                    message: "请输入正确的手机号",
                    position: "middle",
                    duration: 2000
                });
            }else if(!this.sel_value.trim()){
                Toast({
                    message: "请选择所在地区",
                    position: "middle",
                    duration: 2000
                });
            }else if(!this.details.trim()){
                Toast({
                    message: "请输入详细地址信息",
                    position: "middle",
                    duration: 2000
                });
            }else{
                
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.addContainer{
    width: 100vw;
    height: 100vh;
    background:rgba(235,235,235,1);
    .nav{
        border-bottom: 2px solid #ebebeb;
    }
    .addArea{
        padding-top: 92px;
        background-color: #fff;
        width: 100%;
        .addItem{
            margin-left: 39px;
            border-bottom: 2px solid #ebebeb;
            display: flex;
            align-items: center;
            height: 112px;
            line-height: 112px;
            .left{
                width:136px;
                font-size:26px;
                color:rgba(102,102,102,1);
                letter-spacing:1px;
            }
            .right{
                display: flex;
                align-items: center;
                flex: 1;
                padding-right: 41px;
                .input{
                    border: none;
                    outline: none;
                    height: 112px;
                    line-height: 112px;
                    font-size:26px;
                    color:#333;
                    letter-spacing:3px;
                    text-align: right;
                    width: 100%;
                }
            }
        }
    }
    .nextBtn{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 98px;
        line-height: 98px;
        text-align: center;
        font-size:36px;
        color:rgba(255,255,255,1);
        letter-spacing:3px;
        background-color: #666;
        margin: 0 auto;
    }
}
</style>
