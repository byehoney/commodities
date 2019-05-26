<template>
    <div class="salerContainer">
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
                <img src="../images/intel_icon_grey.png" class="stateIcon" alt="">
                <p class="stateText grey">资质信息</p>
            </div>
        </div>
        <div class="info_area">
            <div class="info_list">
                <div class="info_item">
                    <div class="left">姓名</div>
                    <input type="text" v-model="name" class="input" placeholder="请输入真实姓名" autocomplete="false">
                </div>
                <div class="info_item noBorder">
                    <div class="left">身份认证</div>
                    <p class="right">上传身份证正反面进行身份验证</p>
                </div>
            </div>
        </div>
        <div class="card_box">
            <div class="card_item">
                <div class="top z">
                    <img :src="imgStrZ" alt="" class="cardImg">
                    <input @change="fileChange($event,'Z')" type="file" id="upload_file" class="upload_file"  accept="image/*"/>
                </div>
                <div class="bottom">身份证头像面</div>
            </div>
            <div class="card_item">
                <div class="top f">
                    <img :src="imgStrF" alt="" class="cardImg">
                    <input @change="fileChange($event,'F')" type="file" id="upload_file" class="upload_file"  accept="image/*"/>
                </div>
                <div class="bottom">身份证国徽面</div>
            </div>
        </div>
        <div class="nextBtn" @click="goNext">下一步</div>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
import TopNav from '@/components/TopNav'
export default {
    data(){
        return{
            name:'',
            imgStrZ: '',
            imgStrF:'',
            size: 0,
        }
    },
    components:{
        TopNav,
    },
    methods:{
        goNext(){
            if(!this.name.trim()){
                Toast({
                    message: "请输入真实姓名",
                    position: "middle",
                    duration: 2000
                });
            }else if(!this.imgStrZ){
                Toast({
                    message: "请上传身份证正面",
                    position: "middle",
                    duration: 2000
                });
            }else if(!this.imgStrF){
                Toast({
                    message: "请上传身份证反面",
                    position: "middle",
                    duration: 2000
                });
            }else{
                
            }
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
                        if(card == 'Z'){
                            _this.imgStrZ = file.src;
                        }else if(card == 'F'){
                            _this.imgStrF = file.src;
                        }
                    };
                    image.src= file.src;
                }
            }
        },
    }
}
</script>
<style lang="scss" scoped>
    .salerContainer{
        width: 100vw;
        height: 100vh;
        background:rgba(235,235,235,1);
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
                    &.grey{
                        color: #999;
                    }
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
                    .input{
                        width: 253px;
                        height: 100%;
                        border: none;
                        outline: none;
                        font-size:20px;
                        color:#333;
                        line-height: 120px;
                        letter-spacing:1px;
                    }
                    .right{
                        width:506px;
                        height: 100%;
                        line-height: 120px;
                        font-size:20px;
                        color:rgba(153,153,153,1);
                        letter-spacing:1px;
                    }
                }
            }
        }
        .card_box{
            display: flex;
            justify-content: center;
            background-color: #fff;
            width: 100%;
            .card_item{
                display: flex;
                flex-direction: column;
                margin-right: 52px;
                .top{
                    width:292px;
                    height:166px;
                    // background:linear-gradient(85deg,rgba(255,98,56,1) 0%,rgba(255,18,64,1) 100%);
                    border-radius:10px;
                    position: relative;
                    &.z{
                        background: url('../images/id_card_z.png') no-repeat 0 0;
                        background-size: 100% 100%;
                    }
                    &.f{
                        background: url('../images/id_card_f.png') no-repeat 0 0;
                        background-size: 100% 100%;
                    }
                    .cardImg{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }
                    .upload_file{
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        font-size: 0;
                        opacity: 0;
                    }
                }
                &:last-child{
                    margin-right: 0;
                }
                .bottom{
                    font-size:20px;
                    color:rgba(153,153,153,1);
                    line-height:26px;
                    letter-spacing:2px;
                    margin-top: 21px;
                    margin-bottom: 209px;
                    text-align: center;
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
