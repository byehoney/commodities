<template>
    <div class="baseContainer">
        <TopNav/>
        <div class="baseBox">
            <div class="baseItem atv">
                <div class="left">头像</div>
                <div class="right">
                    <div class="atv_box">
                        <input @change="fileChange($event)" type="file" id="upload_file" class="upload_file"  accept="image/*"/>
                        <!-- <div class="atv_outer"> -->
                            <img :src="imgStr" class="atv" alt="">
                        <!-- </div> -->
                    </div>
                   <img src="../images/arrow_right.png" class="right_icon" alt="">
                </div>
            </div>
            <router-link to="/modiName" tag="div">
                <div class="baseItem">
                    <div class="left">姓名</div>
                    <div class="right">
                        <div class="right_text">
                            张建
                        </div>
                    <img src="../images/arrow_right.png" class="right_icon" alt="">
                    </div>
                </div>
            </router-link>
            <router-link to="/modiTel" tag="div">
                <div class="baseItem">
                    <div class="left">手机</div>
                    <div class="right">
                        <div class="right_text">
                            13333333333
                        </div>
                    <img src="../images/arrow_right.png" class="right_icon" alt="">
                    </div>
                </div>
            </router-link>
            <div class="baseItem noBorder">
                <div class="left">所属门店</div>
                <div class="right">
                    <div class="right_text">
                        北极北纬39
                    </div>
                   <img src="../images/arrow_right.png" class="right_icon" alt="">
                </div>
            </div>
            <div class="line"></div>
            <div class="baseItem noBorder">
                <div class="left">添加关联门店</div>
                <div class="right">
                   <img src="../images/arrow_right.png" class="right_icon" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState ,mapActions } from 'vuex';
import TopNav from '@/components/TopNav.vue';
export default {
    data(){
        return{
            imgStr: '',
            size: 0,
            limit:6, //限制图片上传的数量
        }
    },
    components:{
        TopNav
    },
    computed:{
        ...mapState('login',['user','token'])
    },
    mounted(){
        this.imgStr = this.user.portrait;
        console.log(this.user)
    },
    methods:{
        ...mapActions('login',['setAtv']),
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
                        _this.imgStr = file.src;
                        _this.setAtv(file.src);
                    };
                    image.src= file.src;
                }
            }
        },
    }
}
</script>
<style lang="scss">
    html{
        background-color: #ebebeb;
    }
    .baseContainer {
        background-color: #fff;
        .baseBox{
            display: flex;
            flex-direction: column;
            .baseItem{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-left: 5%;
                padding:36px 47px 41px 0;  
                border-bottom: 2px solid #D8d8d8;
                &.noBorder{
                    border:none;
                }
                &.atv{
                    padding:30px 47px 30px 0;
                }
                .left{
                    font-size:26px;
                    color:rgba(102,102,102,1);
                    line-height:35px;
                    letter-spacing:3px;
                }
                .right{
                    display: flex;
                    align-items: center;
                    .right_text{
                        font-size:26px;
                        color:rgba(153,153,153,1);
                        line-height:35px;
                        letter-spacing:3px;
                        margin-right: 30px;
                    }
                    .right_icon{
                        width: 17px;
                        height: 30px;
                    }
                    .atv_box{
                        width:126px;
                        height:126px;
                        background:#fff;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-left: 80px;
                        margin-right: 43px;
                        position: relative;
                        overflow: hidden;
                        .upload_file{
                            position: absolute;
                            width:126px;
                            height:126px;
                            top: 0;
                            left:0;
                            opacity: 0;
                            z-index: 100;
                            background-color: #fff;
                            font-size:12px;
                        }
                        .atv_outer{
                            width:118px;
                            height:118px;
                            border-radius: 50%;
                            overflow: hidden;
                        }
                        .atv{
                            width:126px;
                        }
                    }
                }
            }
            .line{
                width: 100%;
                height: 10px;
                background-color: #ebebeb;
            }
        }
    }
</style>

