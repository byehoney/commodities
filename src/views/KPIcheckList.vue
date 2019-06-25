<template>
    <div class="mangeContainer">
        <div class="manageHeader">
            <img @click="goBack" src="../images/leftArrow.png" class="leftIcon" alt="">
            <input type="text" placeholder="请输入搜索内容" class="input">
            <span>搜索</span>
        </div>
    </div>
</template>
<script>
import ManageTabBarBotttom from '@/components/ManageTabBarBottom';
import CityPicker from "@/components/CityPicker";
export default {
    data(){
        return{
           
        }
    },
    components:{
       
    },
    methods: {
        
    },
}
</script>
<style lang="scss" scoped>
    .mangeContainer{
        background-color: #ebebeb;
        padding-bottom: 100px;
        .manageHeader{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 93px;
            display: flex;
            align-items: center;
            background:linear-gradient(180deg,rgba(0,122,255,1) 0%,rgba(24,152,247,1) 100%);
            border-radius: 30px;
            .leftIcon{
                width: 17px;
                height: 30px;
            }
            .input{
                width: 506px;
                height: 58px;
                background-color: #fff;
                font-size:22px;
                color:#999;
                line-height:30px;
                letter-spacing:2px;
            }
            span{
                font-size:28px;
                color:rgba(255,255,255,1);
                line-height:37px;
                letter-spacing:2px;
            }
        }
    }
</style>
