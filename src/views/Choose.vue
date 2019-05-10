<template>
    <div class="contaienr">
       <!-- choose 图片上传
        <SimpleCropper></SimpleCropper> -->
        <div class="header">
            <div class="header_logo"></div>
            <input class="header_input" type="text" placeholder="请输入烟花名称" value="3434">
            <div class="header_search"></div>
        </div>
        <div class="selBar">
            <div class="selBar_item">
                销量
            </div>
            <div class="selBar_item">
                价格
            </div>
            <div class="selBar_item">
                主推
            </div>
            <div class="selBar_item">
                筛选
            </div>
        </div>
        <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
            <div v-for="(item,index) in list" :key="index">{{ item }}</div>
        </div>
        <TabBarBottom curTab="choose"/>
    </div>
</template>

<script>
import SimpleCropper from "../components/SimpleCropper"
import TabBarBottom from '@/components/TabBarBottom'
export default {
    data(){
        return{
            list:[1,2,3],
            loading:false
        }
    },
    components:{
        SimpleCropper,
        TabBarBottom
    },
    methods:{
        loadMore() {
            this.loading = true;
            setTimeout(() => {
                let last = this.list[this.list.length - 1];
                for (let i = 1; i <= 10; i++) {
                    this.list.push(last + i);
                }
                this.loading = false;
            }, 100);
        }
    }
}
</script>

<style scoped lang="scss">
    body{
        background-color: #fcfcfc;
        height: 100vh;
    }
    .container{
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .header{
        width: 100vw;
        height: 88px;
        background:linear-gradient(182deg,rgba(245,81,81,0.89) 0%,rgba(195,41,24,1) 100%);
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex: 1;
        .header_logo{
            width: 105px;
            height: 58px;
            background: url('../images/logo.png') no-repeat 0 4px;
            background-size: contain;
            margin-left: 27px;
            margin-right: 21px;
            flex: 1;
        }
        .header_input{
            width: 506px;
            height: 58px;
            background-color: #fff;
            border-radius:29px;
            border:none;
            font-size:22px;
            font-family:MicrosoftYaHeiLight;
            color:rgba(153,153,153,1);
            line-height:30px;
            letter-spacing:2px;
            padding-left: 27px;
        }
        .header_search{
            width: 34px;
            height: 34px;
            background: url('../images/sousuo.png') no-repeat 0 0;
            background-size: contain;
            flex: 1;
            margin-left: 21px;
        }
    }
    .selBar{
        width:100vw;
        height:93px;
        background:rgba(255,255,255,1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 6px;
        flex: 1;
        .selBar_item{
            width: 25%;
            height: 93px;
            line-height: 93px;
            font-size:28px;
            font-family:MicrosoftYaHeiLight;
            color:rgba(51,51,51,1);
            letter-spacing:2px;
            text-align: center;
        }
    }
</style>
