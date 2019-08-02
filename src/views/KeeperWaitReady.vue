<template>
    <div class="driverContainer">
        <TopNav/>
        <div class="inputArea">
            <div class="inputItem">
                <div class="left">开始时间：</div>
                <div class="right" v-if="start" id="start"  @click="show('S')">
                    <span>{{start}}</span>
                    <img class="dateIcon" src="../images/driver/data_icon.png" alt="">  
                </div>    
            </div>
            <div class="inputItem">
                <div class="left">结束时间：</div>
                <div class="right"  v-if="end" id="end" @click="show('E')">
                    <span>{{end}}</span>
                    <img class="dateIcon" src="../images/driver/data_icon.png" alt="">
                </div>    
            </div>
            <div class="inputItem">
                <div class="left">客户信息：</div>
                <div class="right">
                    <input type="text" placeholder="请输入客户信息">    
                </div>    
            </div>
            <div class="inputItem">
                <div class="left">司机信息：</div>
                <div class="right">
                    <input type="text" placeholder="请输入司机信息">    
                </div>    
            </div>
            <div class="inputItem">
                <div class="left">支付状态：</div>
                <div class="right" @click="selState">
                    <span>{{sel_value}}</span>
                    <img class="selIcon" src="../images/driver/sel_icon.png" alt="">   
                </div>    
            </div>
            <div class="btn">查询</div>
        </div>
        <div class="infoArea">
            <div class="title">数据汇总</div>
            <div class="details">
                <div class="infoDetail">客户总数：200</div>
                <div class="infoDetail">货值合计（元）：10000.00</div>
                <div class="infoDetail">总体积（立方米）：100</div>
            </div>
        </div>
        <div class="checkList"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
        >
            <div class="list">
                <div class="noArive">
                    <div class="listOuter">
                        <div class="innerTile">
                            库位名称：库位一
                        </div>
                        <div class="detailBox" @click="goDetail(0)">
                            <div class="detailInfo">
                                <div class="mainTitle">
                                    <div class="infos">
                                        <div class="left">调度单号：</div>
                                        <div class="right">JJHKLIGGHK987666</div>
                                    </div>
                                    <div class="infos">
                                        <div class="left">状态：</div>
                                        <div class="right state">待备货</div>
                                    </div>
                                </div>
                                <div class="detailInfos">
                                    <div class="left">客户名称：</div>
                                    <div class="right">张三</div>
                                </div>
                                <div class="detailInfos">
                                    <div class="left">司机姓名：</div>
                                    <div class="right">司机1</div>
                                </div>
                                <div class="detailInfos">
                                    <div class="left">司机电话：</div>
                                    <div class="right">13333333333</div>
                                </div>
                                <div class="detailInfos">
                                    <div class="left">业务员名称：</div>
                                    <div class="right">张三</div>
                                </div>
                                <div class="detailInfos">
                                    <div class="left">业务员电话：</div>
                                    <div class="right">13333333333</div>
                                </div>
                                <div class="detailInfos">
                                    <div class="left">配送日期：</div>
                                    <div class="right">2019-02-01</div>
                                </div>
                                <div class="detailInfos">
                                    <div class="left">货值（元）：</div>
                                    <div class="right">200</div>
                                </div>
                                <div class="detailInfos">
                                    <div class="left">体积（立方米）：</div>
                                    <div class="right">200</div>
                                </div>
                                <div class="detailInfos">
                                    <div class="left">载重（公斤）：</div>
                                    <div class="right">200</div>
                                </div>
                                <div class="detailInfos">
                                    <div class="left">品种数：</div>
                                    <div class="right">200</div>
                                </div>
                                <div class="detailInfos">
                                    <div class="left">备注：</div>
                                    <div class="right">快点备货，客户着急</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <awesome-picker
        ref="picker"
        :textTitle="picker.textTitle"
        :type="picker.type"
        :anchor="picker.anchor"
        :colorConfirm="picker.colorConfirm"
        @cancel="handlePickerCancel"
        @confirm="handlePickerConfirm"
        ></awesome-picker>
        <mt-popup v-model="popupVisible" position="bottom">
            <mt-picker
                value-key="fptype"
                ref="statePicker"
                :slots="slots"
                @change="onValuesChange"
                showToolbar
            >
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
import TopNav from '../components/DriverTopNav';
export default {
    data(){
        return{
            start:this.getNowFormatDate() ,
            end:this.getNowFormatDate(),
            curDate:'',
            Y: "",
            M: "",
            D: "",
            picker: {
                anchor: [],
                textTitle: "选择日期",
                type: "date",
                colorConfirm:"#007AFF"
            },
            popupVisible: false,
            set_value: "",
            setCode: "",
            sel_value: "",
            selCode: "",
            slots: [
                {
                flex: 1,
                values: [],
                className: "slot1",
                textAlign: "center"
                }
            ],
            loading:false,
            list:[],
            moreLoading:false,
            pageSize:10,
            pageNum:1,
            noData:false,//是否有数据
            hasMore:true,
        }
    },
    components:{
        TopNav
    },
    methods:{
        goDetail(id){
            this.$router.push({name:'keeperWaitReadyGoods',query:{id:id}})
        },
        selState() {
            this.popupVisible = !this.popupVisible;
        },
        onValuesChange(picker, values) {
            if (!values.length || !values[0]) {
                return;
            }
            this.set_value = values[0].fptype;
            this.setCode = values[0].code;
        },
        handleCancel() {
            this.popupVisible = false;
        },
        handleConfirm() {
            this.popupVisible = false;
            this.sel_value = this.set_value;
            this.selCode = this.setCode;
        },
        show(type) {
            this.curDate = type;
            this.$refs.picker.show();
        },
        handlePickerCancel(){

        },
        handlePickerConfirm(v) {
            this.Y = parseInt(v[0].value)>10?parseInt(v[0].value):'0'+parseInt(v[0].value);
            this.M = parseInt(v[1].value)>10?parseInt(v[1].value):'0'+parseInt(v[1].value);
            this.D = parseInt(v[2].value)>10?parseInt(v[2].value):'0'+parseInt(v[2].value);
            this.picker.anchor = v;
            this.$refs.picker.display=false;
            if(this.curDate == 'S'){
                this.start = this.Y + '-' +this.M + '-'+ this.D;    
            }else{
                this.end = this.Y + '-' +this.M + '-'+ this.D; 
            }
        },
        getNowFormatDate() {
            var date = new Date();
            var seperator1 = "-";
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = year + seperator1 + month + seperator1 + strDate;
            return currentdate;
        },
        async getData(){
            
        },
        loadMore(){
            if(this.moreLoading||!this.hasMore){
                return;
            }
            this.pageNum = this.pageNum+1;
            this.getData();
        }
    }
}
</script>
<style lang="scss" scoped>
    .driverContainer{
        padding-top: 94px;
        background-color: #DFDFDF;
        .listOuter{
            .innerTile{
                height:110px;
                background:rgba(255,255,255,1);
                display: flex;
                align-items: center;
                font-size:28px;
                font-family:PingFangSC-Light;
                font-weight:300;
                color:rgba(211,63,63,1);
                line-height:40px;
                margin: 1px auto;
                padding-left: 87px;
                border-bottom: 1px solid #dfdfdf;
            }
        }
        .noArive{
            background-color: #fff;
            &.hasReturn{
                .left{
                    width: 280px!important;
                }
            }
            .detailBox{
                padding: 23px 38px 36px;
            }
            .detailInfo{
                border: 1px solid #EBEBEB;
                .mainTitle{
                    border-bottom: 1px solid #EBEBEB;
                    .infos{
                        display: flex;
                        align-items: center;
                        padding: 10px 38px;
                        font-size:28px;
                        font-family:PingFangSC-Light;
                        font-weight:300;
                        color:rgba(102,102,102,1);
                        line-height:40px;
                        display: flex;
                        align-items: center;
                        font-weight:600;
                        .state{
                            font-size:28px;
                            font-family:PingFangSC-Semibold;
                            font-weight:600;
                            color:rgba(255,132,62,1);
                            line-height:40px;
                        }
                        .left{
                            width: 230px;
                            flex-shrink: 0;
                        }
                    }
                }
                .btnArea{
                    display: flex;
                    justify-content: flex-end;
                    padding: 36px 16px;
                }
                .ariveBtn{
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
                .detailInfos{
                    padding: 10px 38px;
                    font-size:28px;
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(102,102,102,1);
                    line-height:40px;
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid #ebebeb;
                    &.title{
                        height: 85px;
                    }
                    &:last-child{
                        border: none;
                    }
                    .left{
                        width: 230px;
                        flex-shrink: 0;
                    }

                }
            }
            .mainInfo{
                height: 160px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 38px;
                border-top: 1px solid #dfdfdf;
                border-bottom: 1px solid #dfdfdf;
                .infos{
                    display: flex;
                    align-items: center;
                    .left{
                        width: 230px;
                        font-size:28px;
                        font-family:PingFangSC-Semibold;
                        font-weight:600;
                        color:rgba(102,102,102,1);
                        line-height:40px;
                    }
                    .right{
                        font-size:28px;
                        font-family:PingFangSC-Semibold;
                        font-weight:600;
                        color:rgba(102,102,102,1);
                        line-height:40px;
                    }
                }
            }
        }
        .infoArea{
            margin-top: 6px;
            .title{
                padding-left: 87px;
                height:110px;
                line-height: 110px;
                font-size:28px;
                font-family:PingFangSC-Light;
                font-weight:300;
                color:rgba(211,63,63,1);
                margin-bottom: 2px;
                background-color: #fff;
            }
            .details{
                background-color: #fff;
            }
            .infoDetail{
                background-color: #fff;
                font-size:28px;
                font-family:PingFangSC-Light;
                font-weight:300;
                color:rgba(51,51,51,1);
                line-height:40px;
                padding: 27px 0 0 87px;
                &:last-child{
                    padding-bottom: 27px;
                }
            }
        }
        .inputArea{
            background-color: #fff;
            padding: 21px 0 56px;
            .btn{
                width:340px;
                height:80px;
                background:rgba(211,63,63,1);
                border-radius:40px;
                line-height: 80px;
                text-align: center;
                font-size:28px;
                font-family:PingFangSC-Light;
                font-weight:300;
                color:rgba(255,255,255,1);
                margin: 72px auto 0;
            }
            .inputItem{
                display: flex;
                align-items: center;
                margin-bottom: 20px;
                justify-content: center;
                .left{
                    flex-shrink: 0;
                    font-size:28px;
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(51,51,51,1);
                    line-height:40px;
                    margin-right: 20px;
                }
                .right{
                    width:390px;
                    height:60px;
                    border:1px solid rgba(190,190,190,1);
                    font-size:28px;
                    font-family:PingFangSC-Light;
                    font-weight:300;
                    color:rgba(51,51,51,1);
                    line-height:60px;
                    padding-left: 10px;
                    padding-right: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .selIcon{
                        width:20px;
                        height:25px;
                    }
                    .dateIcon{
                        width: 30px;
                        height: 30px;
                    }
                    input{
                        width: 100%;
                        height: 40px;
                        line-height: 40px;
                        border: none;
                        outline: none;
                        font-size:28px;
                        font-family:PingFangSC-Light;
                        font-weight:300;
                        color:#333;
                        line-height:40px;
                    }
                }
            }
        }
    }
    .mint-popup-bottom {
    width: 100%;
  }
  .picker-toolbar {
    width: 100%;
    height: 96px;
    border-bottom: 2px solid #ebebeb;
  }
  .barContent {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 38px;
    color: #666;
    .cancel,
    .sure {
      height: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 30px;
      font-size: 26px;
      color: rgba(102, 102, 102, 1);
      letter-spacing: 2px;
    }
    .sure {
      color: #E32323;
    }
    .tip {
      font-size: 30px;
      color: rgba(51, 51, 51, 1);
      letter-spacing: 3px;
    }
  }
  .slot1 {
    width: 100vw;
    .picker-item {
      font-size: 30px;
      color: rgba(51, 51, 51, 1);
      height: 78px;
      line-height: 78px;
      letter-spacing: 3px;
    }
  }
</style>
