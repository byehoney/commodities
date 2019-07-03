<template>
    <transition name="left-slide">
      <div class="drawer" v-show="showDrawLeft">
        <div class="atv_box">
            <input @change="fileChange($event)" type="file" id="upload_file" class="upload_file"  accept="image/*"/>
            <img :src="imgStr?imgStr:require('../images/manage_atv.png')" class="atv" alt="">
        </div>
        <div class="name">{{user.userName}}</div>
        <div class="roleName">（商业公司）</div>
        <div class="tel">{{user.mobile}}</div>
        <div class="relation">烟花店铺客户</div>
        <div class="orderArea">
          <img src="../images/sh_m_icon.png" class="icon" alt="">
          <span>审核</span>
        </div>
        <div class="orderArea">
          <img src="../images/order_m_icon.png" class="icon" alt="">
          <span>订单</span>
        </div>
        <div class="kpiArea">
          <img src="../images/kpi_m_icon.png" class="icon" alt="">
          <span>业绩查询</span>
        </div>
      </div>
    </transition>
</template>
<script>
import {uploadImage,getUploadToken,updateUserInfo} from '@/api/index'
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
          showDrawLeft:state=>state.mange.showDrawLeft
        }),
        ...mapGetters('login',['token','userId','corpCode','companyId','userRole'])
    },
    porps:['isShowLeft'],
    components:{
        // TabBarBottom
    },
    async mounted() {
      this.imgStr = this.user.userHp;
      this.getToken();
    },
    methods:{
        ...mapMutations('mange',['changeDrawLeft']),
        ...mapActions('login',['setAtv']),
        async getToken(){
            let res = await getUploadToken({suffix:'1'});
            this.tokenUp = res.data.token;
            this.key = res.data.imgUrl;
        },
        chooseType() {
            document.getElementById('upload_file').click();
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
        handleMaskClick(){
          // this.$refs.drawer.toggle(false);
          this.changeDrawLeft(false);
        },
        showDrawerLeft(){
          this.changeDrawLeft(true);
          // this.$refs.drawer.toggle(true)
        }
    }

}
</script>
<style scoped lang="scss">
    .left-slide-enter,
    .left-slide-leave-active {
      transform: translateX(-100vw);
      opacity: 1;
    }

    .left-slide-leave-active,
    .left-slide-enter-active {
      transition: all 0.5s 0s cubic-bezier(0.33, 0.25, 0.33, 1);
      opacity: 1;
    }
    .slide-left-enter,
    .slide-left-leave-active {
      transform: translateX(0);
      opacity: 0;
    }

    .slide-left-leave-active,
    .slide-left-enter-active {
      transition: all 0.5s 0s cubic-bezier(0.33, 0.25, 0.33, 1);
      opacity: 0;
    }
    .mask{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,.6);
      z-index:99999;
    }
    .drawer{
      width: 593px;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100000;
      background:linear-gradient(180deg,rgba(0,122,255,1) 0%,rgba(24,152,247,1) 100%)!important;
      .name{
        font-size:30px;
        color:rgba(255,255,255,1);
        line-height:40px;
        letter-spacing:2px;
        text-align: center;
      }
      .roleName{
        font-size:30px;
        color:rgba(255,255,255,1);
        line-height:40px;
        letter-spacing:2px;
        margin-top: 7px;
        text-align: center;
      }
      .tel{
        font-size:30px;
        color:rgba(255,255,255,1);
        line-height:40px;
        letter-spacing:2px;
        margin-top: 53px;
        text-align: center;
      }
      .relation{
        font-size:30px;
        color:rgba(255,255,255,1);
        line-height:40px;
        letter-spacing:2px;
        margin-top: 10px;
        text-align: center;
      }
      .orderArea,.kpiArea{
        width: 384px;
        border-bottom: 2px solid #fff;
        display: flex;
        align-items: center;
        padding-bottom: 5px;
        .icon{
          width: 31px;
          height: 30px;
        }
        span{
          font-size:30px;
          color:rgba(255,255,255,0.6);
          line-height:40px;
          letter-spacing:2px;
          margin-left: 11px;
        }
      }
      .orderArea{
        margin:150px auto 66px;
      }
      .kpiArea{
        margin: 0 auto;
      }
    }
    .drawer-layout{
      // z-index: 100000;
    }
    .drawer{
      height: 100vh;
      background-color: #fff;
      &::before{
        content:'';
        display: inline-block;
      }
    }
    .atv_box{
      width:126px;
      height:126px;
      background:linear-gradient(85deg,rgba(255,98,56,1) 0%,rgba(255,18,64,1) 100%);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      margin: 144px auto 20px;
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
          object-fit: scale-down;
      }
    }
</style>
