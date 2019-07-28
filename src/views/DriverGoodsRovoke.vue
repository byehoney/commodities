<template>
    <div class="driverContainer">
        <TopNav/>
        <div class="goodsArea">
            <div class="top">商品名称：二十五发大地红二十五发大地红二十五</div>
            <div class="bottom">
                <div class="left">
                    <img src="" alt="">
                </div>
                <div class="right">
                    <p>规格：10/1</p>
                    <p>单位：箱</p>
                    <p>厂家：测试厂家</p>
                    <p>数量：10</p>
                    <p>辅量：10件2个</p>
                    <div class="funArea">
                        <div class="funBtn" @click="reduce">-</div>
                        <input type="Number" v-model="num">
                        <div class="funBtn" @click="add">+</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="inputArea">
            <div class="left">拒收原因：</div>
            <textarea class="area" placeholder="请输入拒收原因" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="btnArea">
            <div class="btn">确定</div>
        </div>
    </div>
</template>
<script>
import TopNav from '../components/DriverTopNav';
export default {
    data(){
        return{
            num:0,
            note:''
        }
    },
    components:{
        TopNav
    },
    methods:{
        reduce(){
            if(this.num==1){
                return;
            }
            this.num = this.num -1;
        },
        add(){
            this.num = this.num+1;
        }
    }
}
</script>
<style lang="scss" scoped>
    .driverContainer{
        padding-top: 94px;
        background-color: #DFDFDF;
        .btnArea{
            display: flex;
            justify-content: flex-end;
            padding: 31px 37px;
            background-color: #fff;
            .btn{
                width:200px;
                height:80px;
                background:rgba(211,63,63,1);
                border-radius:10px;
                font-size:28px;
                font-family:PingFangSC-Light;
                font-weight:300;
                color:rgba(255,255,255,1);
                line-height:80px;
                text-align: center;
            }
        }
        .inputArea{
            padding: 37px;
            background-color: #fff;
            display: flex;
            border-bottom: 1px solid #BEBEBE;
            .left{
                font-size:28px;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(102,102,102,1);
                line-height:40px;
                flex-shrink: 0;
            }
            .area{
                width:500px;
                height:200px;
                border:1px solid rgba(190,190,190,1);
                font-size:28px;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(102,102,102,1);
                line-height:40px;
                flex-shrink: 0;
                padding: 14px 18px;
                resize: none;
            }
        }
        
        .goodsArea{
            background-color: #fff;
            padding: 38px;
            border-bottom: 1px solid #BEBEBE;
            .top{
                font-size:28px;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(102,102,102,1);
                line-height:40px;
            }
            .bottom{
                display: flex;
                align-items: center;
                .left{
                    width:298px;
                    height:285px;
                    flex-shrink: 0;
                    margin-right: 44px;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: scale-down;
                        
                    }
                }
                .right{
                    font-size:26px;
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(102,102,102,1);
                    line-height:37px;
                    .funArea{
                        display: flex;
                        align-items: center;
                        margin-top: 40px;
                        .funBtn{
                            width:50px;
                            height:50px;
                            background:rgba(216,216,216,1);
                            border-radius:4px 0px 0px 4px;
                            line-height: 50px;
                            text-align: center;
                        }
                        input{
                            outline: none;
                            border-top: 1px solid #BEBEBE;
                            border-bottom: 1px solid #BEBEBE;
                            width: 100px;
                            height: 48px;
                            text-align: center;
                        }
                    }
                }
            }
        }
  }
</style>
