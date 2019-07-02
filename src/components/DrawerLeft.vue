<template>
  <vue-drawer-layout
    ref="drawer"
    :z-index="10000000"
    @mask-click="handleMaskClick"
    :content-drawable="true">
    <div class="drawer" slot="drawer">
      <div class="atv_box">
          <input @change="fileChange($event)" type="file" id="upload_file" class="upload_file"  accept="image/*"/>
          <img :src="imgStr?imgStr:require('../images/manage_atv.png')" class="atv" alt="">
      </div>
    </div>
    <div class="content" slot="content">
      
    </div>
  </vue-drawer-layout>
</template>
<script>
// import TabBarBottom from '@/components/TabBarBottom'
import {uploadImage,getUploadToken,updateUserInfo} from '@/api/index'
import { mapState ,mapActions,mapGetters} from 'vuex';
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
        ...mapState('login',['user','token']),
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
            if (!e.target.files[0].size) return;
            this.file= e.target.files[0]
            this.file_key = e.target.files[0].name
            e.target.value = ''
            this.upload();
        },
        handleMaskClick(){
          this.$refs.drawer.toggle(false)
        },
        showDrawerLeft(){
          this.$refs.drawer.toggle(true)
        }
    }

}
</script>
<style scoped lang="scss">
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
