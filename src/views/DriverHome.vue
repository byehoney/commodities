<template>
    <div class="driverContainer">
        <div class="header">
            <div class="left">
                <img src="" alt="">
                <span>积分</span>
            </div>
            <div class="mid">
                <div class="atv">
                    <img src="" alt="">
                </div>
                <p class="userNmae">马里奥</p>
                <p class="tel">13900866666</p>
                <p class="carNum">京A88888</p>
            </div>
            <div class="right">
                <img src="" alt="">
            </div>
        </div>
        <div class="tabs">
            <div class="tabItem">
                <img src="" alt="">
                <span>待接单</span>
            </div>
            <div class="tabItem">
                <img src="" alt="">
                <span>待发货</span>
            </div>
            <div class="tabItem">
                <img src="" alt="">
                <span>未送达</span>
            </div>
            <div class="tabItem">
                <img src="" alt="">
                <span>已完成</span>
            </div>
            <div class="tabItem">
                <img src="" alt="">
                <span>已撤销</span>
            </div>
        </div>
        <div class="title">汇总运输数据</div>
        <div class="infoItem">
            总结单体积（立方米）/重量（公斤）：100/300
        </div>
        <div class="infoItem">
            总接单次数：300
        </div>
        <div class="infoItem details">
            总运费已收（元）/未收（元）：5000/10000
        </div>
        <div class="infoItem">
            <img class="keys" src="" alt="">
            密码修改
        </div>
        <div class="btn">退出登录</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>
<style lang="scss" scoped>
.driverContainer{
    background-color: #DFDFDF;
    padding-bottom: 80px;
    .btn{
        width:340px;
        height:80px;
        background:rgba(211,63,63,1);
        border-radius:40px;
        font-size:28px;
        font-family:PingFangSC-Light;
        font-weight:300;
        color:rgba(255,255,255,1);
        line-height:80px;
        text-align: center;
        margin: 60px auto 0;
    }
    .infoItem{
        margin-top: 2px;
        background-color: #fff;
        font-size:28px;
        font-family:PingFangSC-Light;
        font-weight:300;
        color:rgba(51,51,51,1);
        height:110px;
        line-height: 110px;
        padding-left: 38px;
        padding-right: 52px;
        &.details{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        &.details::after{
            content: '';
            display: inline-block;
            width: 0;
            height: 0;
            border-top: 14px solid transparent;
            border-left: 28px solid #666666;
            border-bottom: 14px solid transparent;
        }
        .keys{
            width: 33px;
            height: 32px;
            margin-right: 14px;
        }
    }
    .title{
        height:110px;
        line-height: 110px;
        padding-left: 38px;
        margin-top: 2px;
        background-color: #fff;
        font-size:28px;
        font-family:PingFangSC-Light;
        font-weight:300;
        color:#D33F3F;
    }
    .tabs{
        display: flex;
        padding: 31px 38px 25px;
        background-color: #fff;
        justify-content: space-between;
        margin-top:6px; 
        .tabItem{
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                width:87px;
                height:87px;
            }
            span{
                font-size:28px;
                font-family:PingFangSC-Light;
                font-weight:300;
                color:rgba(51,51,51,1);
                line-height:40px;
            }
        }
    }
    .header{
        background-color: #D33F3F;
        display: flex;
        padding: 85px 65px 54px 55px;
        display: flex;
        justify-content: space-between;
        .left{
            display: flex;
            img{
                width:35px;
                height:35px;
                flex-shrink: 0;
            }
            span{
                font-size:30px;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(255,255,255,1);
                line-height:42px;
            }
        }
        .mid{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 10px;
            .atv{
                width:160px;
                height:160px;
                background:#fff;
                border-radius: 50%;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: scale-down;
                }
            }
            .userNmae{
                font-size:36px;
                font-family:PingFangSC-Semibold;
                font-weight:600;
                color:rgba(255,255,255,1);
                line-height:50px;
                margin: 12px auto;
            }
            .tel{
                font-size:30px;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(255,255,255,1);
                line-height:42px;
            }
            .carNum{
                font-size:30px;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(255,255,255,1);
                line-height:42px;
                margin: 12px auto 0;
            }
        }
        .right{
            width:40px;
            height:40px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
