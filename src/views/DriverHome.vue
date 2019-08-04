<template>
    <div class="driverContainer">
        <div class="header">
            <div class="left">
                <img src="../images/driver/score_icon.png" alt="">
                <span>积分</span>
            </div>
            <div class="mid">
                <div class="atv">
                    <input @change="fileChange($event)" type="file" id="upload_file" class="upload_file"  accept="image/*"/>
                    <img :src="imgStr?imgStr:''" class="atv" alt="">   
                </div>
                <p class="userNmae">{{user.userName}}</p>
                <p class="tel">{{user.mobile}}</p>
                <p class="carNum">京A88888</p>
            </div>
            <div class="right">
                <img src="../images/driver/tel_icon.png" alt="">
            </div>
        </div>
        <div class="tabs">
            <router-link :to="{name:'driverWaiteAcept',query:{actIndex:0}}" tag="div" class="tabItem">
                <img src="../images/driver/driver_icon_01.png" alt="">
                <span>待接单</span>
            </router-link>
            <router-link :to="{name:'driverWaiteAcept',query:{actIndex:1}}" tag="div" class="tabItem">
                <img src="../images/driver/driver_icon_02.png" alt="">
                <span>待发货</span>
            </router-link>
            <router-link :to="{name:'driverWaiteAcept',query:{actIndex:2}}" tag="div" class="tabItem">
                <img src="../images/driver/driver_icon_03.png" alt="">
                <span>未送达</span>
            </router-link>
            <router-link :to="{name:'driverWaiteAcept',query:{actIndex:3}}" tag="div" class="tabItem">
                <img src="../images/driver/driver_icon_04.png" alt="">
                <span>已完成</span>
            </router-link>
            <router-link :to="{name:'driverWaiteAcept',query:{actIndex:4}}" tag="div" class="tabItem">
                <img src="../images/driver/driver_icon_05.png" alt="">
                <span>已撤销</span>
            </router-link>
        </div>
        <div class="title">汇总运输数据</div>
        <div class="infoItem">
            总结单体积（立方米）/重量（公斤）：100/300
        </div>
        <div class="infoItem">
            总接单次数：300
        </div>
        <router-link :to="{name:'driverMoneyCheck'}" tag="div" class="infoItem details">
            总运费已收（元）/未收（元）：5000/10000
        </router-link>
        <div class="infoItem" @click="modifyPas">
            <img class="keys" src="../images/driver/driver_key_icon.png" alt="">
            密码修改
        </div>
        <div class="btn" @click="loginOut">退出登录</div>
    </div>
</template>
<script>
import {uploadImage,getUploadToken,updateUserInfo,getDriverHomeData} from '@/api/index'
import { mapState ,mapActions,mapGetters, mapMutations} from 'vuex';
export default {
    data(){
        return{
          imgStr: '',
          file:'',
          tokenUp:'',
          file_key:'',
          key:'',
          domain:'http://yanhuawang.rydltech.com/',
        }
    },
    computed:{
        // ...mapState('login',['user','token']),
        ...mapState({
          user:state=>state.login.user,
          token:state=>state.login.token,
        }),
        ...mapGetters('login',['token','userId','corpCode','companyId','userRole'])
    },
    async mounted() {
      this.imgStr = this.user.userHp;
      this.getToken();
      let defaulParams = {
        token:this.token,
        userId:this.userId,
        corpCode:this.corpCode,
        companyId:this.companyId,
        userRole:this.userRole,
        sqlpwd:this.user.sqlpwd,
        url:this.user.url,
        user:this.user.user,
        mobile:this.user.mobile
      };
      let res = await getDriverHomeData(defaulParams);
    },
    methods: {
        ...mapMutations('login',['LOGOUT']),
        ...mapActions('login',['setAtv']),
        modifyPas(){
            this.$router.push({name:'forgetPas'})
        },
        loginOut(){
            this['LOGOUT']({
                $router:this.$router,
            })
        },
        async getToken(){
            let res = await getUploadToken({suffix:'1'});
            this.tokenUp = res.data.token;
            this.key = res.data.imgUrl;
        },
        async uploadAtv(imgStr){
            let defaulParams = {
                token:this.token,
                userId:this.userId,
                corpCode:this.corpCode,
                companyId:this.companyId,
                userRole:this.userRole,
            };
            let res = await updateUserInfo({...defaulParams,data:imgStr,type:1});
            if(res.code == 0){
                this.imgStr = imgStr;
                this.setAtv(this.imgStr);
            }
        },
        upload(e){
            var data = new FormData();//重点在这里 如果使用 var data = {}; data.inputfile=... 这样的方式不能正常上传
            data.append('token', this.tokenUp);
            data.append('file',this.file)
            data.append('key',this.key+this.file_key)
            uploadImage(data,(res)=>{
                this.uploadAtv(this.domain+res.key)
            })
        },
        fileChange(e) {
            e.stopPropagation();
            if (!e.target.files[0].size) return;
            this.file= e.target.files[0]
            this.file_key = e.target.files[0].name
            e.target.value = ''
            this.upload();
        },
    },
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
                margin-bottom: 10px;
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
                margin-right: 10px;
                margin-top: 3px;
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
                position: relative;
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
            display: flex;
            align-items: center;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
