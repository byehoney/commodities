<template>
    <div class="addrContainer">
        <div class="nav">
            <img @click="goBack" src="../images/leftArrow.png" class="leftIcon" alt="">
            <span class="title">我的收货地址</span>
            <span class="btn" @click="addNew">添加新地址</span>
        </div>
        <div class="addList">
            <div class="addItem">
                <img src="../images/add_check.png" class="check_icon" alt="">
                <div class="addContent">
                    <div class="top">张建 139****0381</div>
                    <div class="bottom">辽宁 沈阳市 铁西区 肇工北街4甲1号15门</div>
                </div>
                <div class="edit">编辑</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        },
        addNew(){

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
                justify-content: space-between;
                align-items: center;
                .check_icon{
                    width: 40px;
                    height: 40px;
                }
                .addContent{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
            }
        }
    }
</style>
