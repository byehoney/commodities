<template>
    <div class="scopeContainer">
        <TopNav></TopNav>
        <div class="title">《XX商品经营许可证》</div>
        <div class="scopeBox">
            <div class="scopeList">
                <div class="scopeItem" v-for="(item,index) in dataList" :key="index" @click="selItem(index)">
                    <span>{{item.title}}</span>
                    <img class="sel" v-if="item.isActive" src="../images/selected.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="nextBtn">完成</div>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
import TopNav from '@/components/TopNav'
export default {
    data(){
        return{
            dataList:[],
            selList:[],
        }
    },
    components:{
        TopNav,
    },
    mounted(){
        let dataSource = [{title:'烟花制剂'},{title:'XXXXXXXXX制剂'}];
        dataSource.map((item,index)=>{
            item.isActive = false;
        })
        this.dataList = dataSource;
    },
    methods:{
        selItem(index){
            this.dataList[index].isActive = !this.dataList[index].isActive;
            this.selList = this.dataList;
        }
    }
}
</script>
<style lang="scss" scoped>
.scopeContainer{
    width: 100vw;
    min-height: 100vh;
    background:rgba(235,235,235,1);
    .title{
        width:280px;
        height:91px;
        font-size:26px;
        font-family:MicrosoftYaHei;
        color:rgba(102,102,102,1);
        line-height:91px;
        letter-spacing:1px;
        padding-top: 92px;
        padding-left: 39px;
    }
    .scopeBox{
        width: 100%;
        background-color: #fff;
        .scopeList{
            margin-left: 39px;
            .scopeItem{
                height: 85px;
                line-height: 85px;
                border-bottom: 2px solid #ebebeb;
                font-size:26px;
                color:rgba(102,102,102,1);
                letter-spacing:1px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                &:last-child{
                    border: none;
                }
                .sel{
                    width: 32px;
                    height: 23px;
                    margin-right: 41px;
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
