<template>
    <div class="addrContainer">
        <div class="nav">
            <img @click="goBack" src="../images/leftArrow.png" class="leftIcon" alt="">
            <span class="title">我的收货地址</span>
            <span class="btn" @click="addNew">添加新地址</span>
        </div>
        <div class="addList">
            <div class="addItem" v-for="(item,index) in list" :key="index">
                <div class="check_icon">
                    <img src="../images/add_check.png"  alt="">
                </div>
                <div class="addContent">
                    <div class="top">{{item.person}} {{item.tel}}</div>
                    <div class="bottom">{{item.city}} {{item.cvPosition}} {{item.warehouseAddr}}</div>
                </div>
                <div class="edit" @click="edit(item.warehouseCode,item.person,item.tel,item.city,item.cvPosition,item.warehouseAddr)">编辑</div>
            </div>
        </div>
    </div>
</template>
<script>
import {getAddrList} from '@/api/index'
export default {
    data(){
        return{
            list:[]
        }
    },
    mounted(){
        this.getList();
    },
    methods:{
        async getList(){
            let res = await getAddrList({corpCode:'100',companyId:'000033'});
            this.list = res.data.list;
            console.log(res)
        },
        goBack(){
            this.$router.go(-1);
        },
        edit(id,person,tel,city,cvPosition,warehouseAddr){
            let data = {
                edit:true,
                warehouseCode:id,
                person:person,
                tel:tel,
                city:city,
                cvPosition:cvPosition,
                warehouseAddr:warehouseAddr
            }
            this.$router.push({name:'addNewAdr',query:data});
        },
        addNew(){
            this.$router.push({name:'addNewAdr'});
        }
    }
}
</script>
<style lang="scss" scoped>
    .addrContainer{
        width: 100vw;
        min-height: 100vh;
        background:rgba(235,235,235,1);
        .nav{
            width: 100%;
            height: 88px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #fff;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1000;
            border-bottom: 2px solid #ebebeb;
            .leftIcon{
                width: 17px;
                height: 30px;
                position: absolute;
                top: 29px;
                left: 30px;
            }
            .title{
                font-size: 30px;
            }
            .btn{
                width:133px;
                height:35px;
                font-size:24px;
                color:rgba(153,153,153,1);
                line-height:35px;
                letter-spacing:2px;
                position: absolute;
                top: 26px;
                right: 41px;
                text-align: right;
            }
        }
        .addList{
            background-color: #ebebeb;
            padding-top: 92px;
            .addItem{
                display: flex;
                align-items: center;
                background-color: #fff;
                padding:38px 40px 54px 0;
                border-bottom: 2px solid #ebebeb;
                .check_icon{
                    width: 40px;
                    height: 40px;
                    margin-left: 39px;
                    margin-right: 29px;
                    position: relative;
                    img{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        object-fit: scale-down;
                    }
                }
                .addContent{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 541px;
                    flex: 1;
                    .top{
                        font-size:26px;
                        color:rgba(102,102,102,1);
                        line-height:35px;
                        letter-spacing:3px;
                    }
                    .bottom{
                        font-size:24px;
                        color:rgba(102,102,102,1);
                        line-height:31px;
                        letter-spacing:3px;
                    }
                }
                .edit{
                    font-size:24px;
                    color:rgba(153,153,153,1);
                    line-height:31px;
                    letter-spacing:1px;
                }
            }
        }
    }
</style>
