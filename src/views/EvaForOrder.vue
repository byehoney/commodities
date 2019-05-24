<template>
    <div class="hasEvaContainer">
        <TopNav></TopNav>
        <div class="evaArea">
            <div class="top">
                <div class="shopArea">
                    <div class="shopImg">
                        <img src="../images/shopcar.png" alt="">
                    </div>
                    <div class="tip">分享你的使用体验吧</div>
                </div>
                <div class="inputArea">
                    <mt-field label="" placeholder="请输入您对本产品的评价" type="textarea" rows="4" v-model="evaContent"></mt-field>
                </div>
                <div class="upArea">
                    <div class="upBox">
                        
                    </div>
                    <div class="up_tip">
                        上传晒图
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <mt-cell title="物流服务评价">
                <img class="star" slot="icon" src="../images/waite_get.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="快递包装">
                <template v-for="(item,index) in packStars">
                    <img class="star" src="../images/star_grey.png" v-if="!item" alt="" :key="index">
                    <img class="star" src="../images/eva_star.png" v-else alt="" :key="index">
                </template>
            </mt-cell>
            <mt-cell title="送货速度">
                <img class="star" src="../images/star_grey.png" alt="">
            </mt-cell>
            <mt-cell title="配送员服务">
                <img class="star" src="../images/star_grey.png" alt="">
                <img class="star" src="../images/star_grey.png" alt="">
            </mt-cell>
        </div>
    </div>
</template>
<script>
import TopNav from '@/components/TopNav'
export default {
    data(){
        return{
            evaContent:'',
            packStars:[false,false,false,false,true],
        }
    },
    components:{
        TopNav,
    },
    methods:{
       
    },
}
</script>
<style lang="scss" scoped>
    .hasEvaContainer{
        width: 100vw;
        min-height: 100vh;
        background:rgba(235,235,235,1);
        .nav{
            border-bottom: 2px solid #ebebeb;
        }
        .evaArea{
            padding: 118px 41px 10px 39px;
            background-color: #fff;
            .mint-field.is-textarea{
                height: 100%;
            }
            .top{
                .shopArea{
                    display: flex;
                    .shopImg{
                        width:168px;
                        height:140px;
                        overflow: hidden;
                        // background:rgba(235,235,235,1);
                        img{
                            width: 100%;
                        }
                    }
                    .tip{
                        font-size:24px;
                        color:rgba(51,51,51,1);
                        line-height:31px;
                        letter-spacing:2px;
                        margin-left: 28px;
                        align-self: flex-end;
                    }
                }
                .inputArea{
                    width: 658px;
                    height: 269px;
                    margin:25px auto 38px;
                    background:rgba(255,255,255,1);
                    border:1px solid rgba(151,151,151,1)
                }
                .upArea{
                    display: flex;
                    margin-bottom: 34px;
                    .upBox{
                        width:168px;
                        height:124px;
                        border-radius:12px;
                        border:2px solid rgba(235,235,235,1);
                        background: url('../images/upload_icon.png') no-repeat center center;
                        background-size: 87px 63px;
                    }
                    .up_tip{
                        align-items: flex-end;
                        font-size:24px;
                        color:rgba(51,51,51,1);
                        line-height:31px;
                        letter-spacing:2px;
                        display: flex;
                        margin-left: 28px;
                    }
                }
            }
        }
        .bottom{
            margin-top: 10px;
            .star{
                width: 36px;
                height: 34px;
                margin-right: 15px;
            }
        }
    }
</style>
<!-->
<template>
    <div id="upload">
        <input @change="fileChange($event)" type="file" id="upload_file" multiple accept="image/*"  style="display: none"/>
        <div class="add" @click="chooseType">
            <div class="add-image" align="center">
                <i class="icon-camera"></i>
                <p class="font13">添加图片</p>
            </div>
        </div>
        <div class="add-img" v-show="imgList.length">
            <p class="font14">图片(最多6张，还可上传<span v-text="6-imgList.length"></span>张)</p>
            <ul class="img-list">
                <li v-for="(item,index) in imgList" :key="index" style="list-style:none">
                    <img class="del" src="../assets/logo.png" @click.stop="delImg(index)"/>
                    <img  :src="item.file.src" style="width:80px;height:80px;" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Feedback",
        data() {
            return {
                showFace: false,
                imgList: [],
                size: 0,
                limit:6, //限制图片上传的数量
                tempImgs:[]
            }
        },
        mounted(){
            
        },
        methods: {
            chooseType() {
                document.getElementById('upload_file').click();
            },
            fileChange(el) {
                if (!el.target.files[0].size) return;
                this.fileList(el.target);
                el.target.value = ''
            },
            fileList(fileList) {
                let files = fileList.files;
                for (let i = 0; i < files.length; i++) {
                    //判断是否为文件夹
                    if (files[i].type != '') {
                        this.fileAdd(files[i]);
                    } else {
                        //文件夹处理
                        this.folders(fileList.items[i]);
                    }
                }
                console.log(this.imgList)
            },
            //文件夹处理
            folders(files) {
                let _this = this;
                //判断是否为原生file
                if (files.kind) {
                    files = files.webkitGetAsEntry();
                }
                files.createReader().readEntries(function (file) {
                    for (let i = 0; i < file.length; i++) {
                        if (file[i].isFile) {
                            _this.foldersAdd(file[i]);
                        } else {
                            _this.folders(file[i]);
                        }
                    }
                });

            },
            foldersAdd(entry) {
                let _this = this;
                entry.file(function (file) {
                    _this.fileAdd(file)
                })
            },
            fileAdd(file) {
                if (this.limit !== undefined) this.limit--;
                if (this.limit !== undefined && this.limit < 0) return;
                //总大小
                this.size = this.size + file.size;
                //判断是否为图片文件
                if (file.type.indexOf('image') == -1) {
                    this.$dialog.toast({mes: '请选择图片文件'});
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
                            _this.imgList.push({
                                file
                            });
                            console.log( _this.imgList);
                        };
                        image.src= file.src;
                    }
                }
            },
            delImg(index) {
                this.size = this.size - this.imgList[index].file.size;//总大小
                this.imgList.splice(index, 1);
                if (this.limit !== undefined) this.limit = 6-this.imgList.length;
            },
            displayImg() {

            }
        }
    }
</script>
<style>
    .font13{
        font-size: 13PX;
    }
    .app-bg >>>img{
        width: 100%;
        height: 100%;
        -webkit-transform: scale(1.03);
        -moz-transform: scale(1.03);
        -ms-transform: scale(1.03);
        -o-transform: scale(1.03);
        transform: scale(1.03);
    }
    textarea {
        padding: 10px;
    }

    .text-length {
        font-size: 14px;
        z-index: 999;
        width: 100%;
        text-align: right;
        margin-bottom: 10px;
        color: #e4e4e4;
    }

    .warning {
        color: #fe9900;
    }

    .add-img {
        width: 100%;
        padding: 10px;
    }

    .add-img p {
        color: #999;
    }

    .mui-content {
        padding-bottom: 60px;
    }

    .mui-content .idea {
        margin-top: 8px;
        background-color: #FFFFFF;
    }

    .good-item {
        text-align: center;
        width: 33%;
        max-width: 100%;
        overflow: hidden;
        padding-right: 10px;
        padding-bottom: 10px;
        float: left;
    }

    .good-item span {
        font-size: 15px;
        height: 30px;
        line-height: 30px;
        border-radius: 50px;
        display: block;
        width: 100%;
        color: #333;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        border: 1px solid #CCCCCC;
    }

    .mui-table {
        padding-top: 10px;
        color: #333;
        padding-left: calc(0.5% + 10px);
    }

    .h-line-behind {
        line-height: 40px;
        padding-left: 10px;
    }

    .question {
        border: 0;
        margin-bottom: 10px;
    }

    .add {
        display: inline-block;
        margin-bottom: 20px;
    }

    .add-image {
        padding-top: 15px;
        margin-left: 10px;
        width: 80px;
        top: 20px;
        height: 80px;
        border: 1px dashed rgba(0, 0, 0, .2);
    }

    .add-image .icon-camera {
        font-size: 24px;
    }

    .good-item .choose {
        color: #fff;
        background-color: #87582E;
        color: #FFF;
        border: 0;
    }

    .mui-btn-block {
        border: 0;
        border-radius: 0;
        background-color: #87582E;
        color: #fff;
        margin-bottom: 0;
        bottom: 0;
    }

    .mui-buttom {
        position: fixed;
        width: 100%;
        bottom: 0;
        z-index: 999;

    }

    /*九宫格*/
    .img-list {
        overflow: hidden;
    }

    .img-list > li {
        float: left;
        width: 32%;
        text-align: center;
        padding-top: 31%;
        margin-left: 1%;
        margin-top: 1%;
        position: relative;
    }

    .img-list > li > div {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .img-list > li > div .app-bg {
        width: 100%;
        height: 100%;
    }

    .mui-fullscreen {
        z-index: 9999;
    }

    .del {
        position: absolute;
        width: 18px;
        top: 0;
        right: 0;
        z-index: 999
    }
</style>
<-->