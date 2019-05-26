<template>
    <div class="intelContainer">
        <TopNav></TopNav>
        <div class="progress">
            <div class="state">
                <img src="../images/md_icon_act.png" class="stateIcon" alt="">
                <p class="stateText">门店信息</p>
            </div>
            <div class="divide"></div>
            <div class="state">
                <img src="../images/user_icon_act.png" class="stateIcon" alt="">
                <p class="stateText">人员信息</p>
            </div>
            <div class="divide"></div>
            <div class="state">
                <img src="../images/intel_icon_act.png" class="stateIcon" alt="">
                <p class="stateText">资质信息</p>
            </div>
        </div>
        <div class="info_area">
            <div class="info_list">
                <div class="info_item" @click="selProperties">
                    <div class="left">经营性质</div>
                    <div class="properties">
                        <span>{{sel_value}}</span>
                        <img class="right_icon" src="../images/arrow_right.png" alt="">
                    </div>
                </div>
                <div class="info_item noBorder" @click="selRange">
                    <div class="left">经营范围</div>
                    <img src="../images/arrow_right.png" alt="">
                </div>
            </div>
        </div>
        <div class="itel_info">
            <p class="title">
                <span class="main_title">资质信息</span>
                <span class="tip">上传身份证正反面进行身份验证</span>
            </p>
            <div class="itel_list">
                <div class="itel_item" v-for="(item,index) in itelList" :key="index">
                    <p class="itel_title">《xx经营许可证》</p>
                    <div class="itel_upload">
                        <img :src="item.imgStr" alt="">
                        <input @change="fileChange($event,index)" type="file" id="upload_file" class="upload_file"  accept="image/*"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="nextBtn">完成</div>
        <div class="mask" v-if="showTip">
            <div class="tipContent">
                <div class="title">温馨提示</div>
                <div class="text">内容已提交，等待审核中</div>
                <div class="sure" @click="closeTip">确认</div>
            </div>
        </div>
        <mt-popup
            v-model="popupVisible"
            position="bottom"
        >
            <mt-picker value-key="businessName" :slots="slots" @change="onValuesChange" showToolbar>
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
import Vue from 'vue'
import { Toast } from "mint-ui";
import TopNav from '@/components/TopNav'
import {getPropertyList,getIntelList} from '@/api/index'
export default {
    data(){
        return{
            itel:'',
            itelList:[],//资质列表
            showTip:false,
            popupVisible:false,
            set_value:'',//滑动变化值
            sel_value:'请选择',//选择的值  经营性质
            businessCode:'',//经营性质编码
            setCode:'',
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
        TopNav,
    },
    async mounted(){
        let res = await getPropertyList();
        this.$set(this.slots[0],'values',res.data.list);
    },
    methods: {
        onValuesChange(picker, values){
            if(!values.length||!values[0]){
                return
            }
            this.set_value = values[0].businessName;
            this.setCode = values[0].businessCode;
        },
        selProperties(){
            this.popupVisible = !this.popupVisible;
        },
        handleCancel(){
            this.popupVisible = false
        },
        handleConfirm() {
            this.popupVisible = false;
            this.sel_value = this.set_value;
            this.businessCode = this.setCode;
            console.log(this.businessCode)
            this.reqList();
        },
        async reqList(){
            let intelList = await getIntelList({code:this.businessCode});
            this.itelList = intelList;
        },
        closeTip(){
            this.showTip = false;
        },
        selRange(){//选择经营范围
            this.$router.push({name:'businessScope'})
        },
        chooseType() {
            document.getElementById('upload_file').click();
        },
        fileChange(el,card) {
            if (!el.target.files[0].size) return;
            this.fileList(el.target,card);
            el.target.value = ''
        },
        fileList(fileList,card) {
            let files = fileList.files;
            for (let i = 0; i < files.length; i++) {
                //判断是否为文件夹
                if (files[i].type != '') {
                    this.fileAdd(files[i],card);
                } else {
                    //文件夹处理
                    this.folders(fileList.items[i],card);
                }
            }
        },
        //文件夹处理
        folders(files,card) {
            let _this = this;
            //判断是否为原生file
            if (files.kind) {
                files = files.webkitGetAsEntry();
            }
            files.createReader().readEntries(function (file) {
                for (let i = 0; i < file.length; i++) {
                    if (file[i].isFile) {
                        _this.foldersAdd(file[i],card);
                    } else {
                        _this.folders(file[i],card);
                    }
                }
            });

        },
        foldersAdd(entry,card) {
            let _this = this;
            entry.file(function (file) {
                _this.fileAdd(file,card)
            })
        },
        fileAdd(file,card) {
            if (this.limit !== undefined) this.limit--;
            if (this.limit !== undefined && this.limit < 0) return;
            //总大小
            this.size = this.size + file.size;
            //判断是否为图片文件
            if (file.type.indexOf('image') == -1) {
                
            } else {
                let reader = new FileReader();
                let image = new Image();
                let _this = this;
                reader.readAsDataURL(file);
                reader.onload = function () {
                    file.src = this.result;
                    image.onload = function(){
                        let width = image.width;
                        let height = image.height;
                        file.width = width;
                        file.height = height;
                        Vue.set(_this.itelList,card,{imgStr:file.src});
                        console.log(_this.itelList)
                    };
                    image.src= file.src;
                }
            }
        },
    },
}
</script>
<style lang="scss" scoped>
.intelContainer{
    width: 100vw;
    min-height: 100vh;
    background:rgba(235,235,235,1);
    padding-bottom: 98px;
    .nav{
        border-bottom: 2px solid #ebebeb;
    }
    .progress{
        padding-top: .92rem;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 184px;
        background-color: #fff;
        .state{
            display: flex;
            flex-direction: column;
            align-items: center;
            .stateIcon{
                width: 80px;
                height: 80px;
                margin-bottom: 5px;
            }
            .stateText{
                font-size:22px;
                color:rgba(255,0,0,1);
                line-height:29px;
            }
        }
        .divide{
            width:190px;
            height:3px;
            background:rgba(153,153,153,1);
            border-radius:2px;
            position: relative;
            top: -10px;
        }
    }
    .info_area{
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: #fff;
        margin-top: 10px;
        .info_list{
            margin-left: 39px;
            display: flex;
            flex-direction: column;
            .info_item{
                display: flex;
                align-items: center;
                height: 120px;
                border-bottom: 2px solid #ebebeb;
                justify-content: space-between;
                &.noBorder{
                    border:none;
                }
                .left{
                    width: 110px;
                    font-size:26px;
                    color:rgba(102,102,102,1);
                    letter-spacing:1px;
                    margin-right: 55px;
                }
                .properties{
                    width: 453px;
                    height: 100%;
                    border: none;
                    outline: none;
                    font-size:26px;
                    color:#666;
                    line-height: 120px;
                    letter-spacing:1px;
                    text-align: right;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    span{
                        flex: 1;
                        margin-right: 10px;
                    }
                }
                .input{
                    width: 253px;
                    height: 100%;
                    border: none;
                    outline: none;
                    font-size:20px;
                    color:#333;
                    line-height: 120px;
                    letter-spacing:1px;
                    margin-right: 43px;
                    text-align: right;
                }
                img{
                    width: 17px;
                    height: 30px;
                    margin-right: 43px;
                }
            }
        }
    }
    .itel_info{
        .title{
            display: flex;
            align-items: center;
            padding: 37px 43px 30px 39px;
            .main_title{
                font-size:26px;
                color:rgba(102,102,102,1);
                line-height:35px;
                letter-spacing:1px;
                margin-right: 55px;
            }
            .tip{
                font-size:20px;
                color:rgba(153,153,153,1);
                line-height:26px;
                letter-spacing:1px;
            }
        }
    }
    .itel_list{
        display: flex;
        flex-direction: column;
        .itel_item{
            display: flex;
            flex-direction: column; 
            padding-left: 39px;
            .itel_title{
                font-size:22px;
                color:rgba(102,102,102,1);
                line-height:29px;
                margin-bottom: 37px;
            }
            .itel_upload{
                width:164px;
                height:216px;
                background:rgba(216,216,216,1);
                border:2px solid rgba(151,151,151,1);
                margin-bottom: 37px;
                position: relative;
                img{
                    position: absolute;
                    top: 0;
                    left:0;
                    width: 100%;
                    height: 100%; 
                }
                .upload_file{
                    position: absolute;
                    top: 0;
                    left:0;
                    width: 100%;
                    height: 100%;
                    z-index: 100;
                    font-size: 0;
                    opacity: 0;
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
    .mask{
        position: fixed;
        top: 0;
        left:0;
        width: 100%;
        height: 100%;
        background:rgba(0,0,0,.5);
        .tipContent{
            width:552px;
            height:334px;
            background:rgba(28,28,28,1);
            border-radius:8px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -167px;
            margin-left: -276px;
            display: flex;
            flex-direction: column;
            .title{
                font-size:36px;
                color:rgba(255,255,255,1);
                line-height:47px;
                letter-spacing:1px;
                padding-top: 75px;
                padding-left: 57px;
            }
            .text{
                font-size:30px;
                color:rgba(255,255,255,1);
                line-height:40px;
                letter-spacing:1px;
                padding-left: 57px;
                margin-top: 32px;
            }
            .sure{
                font-size:30px;
                color:rgba(74,144,226,1);
                line-height:40px;
                letter-spacing:1px;
                align-self: flex-end;
                margin-top: 54px;
                margin-right: 49px;
            }
        }
    }
    .mint-popup-bottom{
        width: 100%;
    }
    .picker-toolbar{
        width: 100%;
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
