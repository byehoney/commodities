<template>
  <div class="avatar">
    <template v-if="imgUrls.length>0">
      <div class="hasPic"  v-for="(item,index) in imgUrls" :key="index">
        <img class="seledPic" ref="picture" :src="item?item:require('../images/upload_icon.png')" name="avatar" @click="bigImg(index)">
        <img class="delect" src="../images/close.png" @click="delect(index)">
      </div>
    </template>
    <div class="selPic"  v-if="imgUrls.length<6">
      <img src="../images/upload_icon.png" name="avatar">
      <!-- <span>{{pictureNums}}</span> -->
      <input type="file" maxlength="" class="input-file" multiple="multiple" name="avatar" ref="avatarInput" @change="changeImage($event)" accept="image/*">
    </div>
  </div>
</template>
<script>
// import {MessageBox, Toast} from 'mint-ui'
// import {Swipe, SwipeItem} from 'mint-ui'
// import 'mint-ui/lib/style.css'
export default {
  name: 'upload',
  data () {
    return {
      showBigImg: false,
      maxImages: 6,
      leftImages: 0,
      pictureNums: '上传图片',
      imgUrls: [],
      num: 0,
      avatar: '',
      file: '',
      showBg: false
    }
  },
  props: ['uploadType', 'imgUrl','setList'],
  created () {
    console.log(this)
    this.avatar = this.imgUrl
  },
  methods: {
    changeImage: function (e) {
      if (e.target.files.length <= (this.maxImages - this.imgUrls.length)) {
        for (var i = 0; i < e.target.files.length; i++) {
          let file = e.target.files[i]
          this.file = file
          console.log(this.file)
          let reader = new FileReader()
          let that = this
          reader.readAsDataURL(file)
          reader.onload = function (e) {
            console.log(this.result)
            that.imgUrls.push(this.result)
            that.setList(that.imgUrls)
          }
        }
        // 剩余张数
        this.leftImages = this.maxImages - (this.imgUrls.length + e.target.files.length)
        this.pictureNums = String(this.maxImages - (this.imgUrls.length + e.target.files.length)) + '/' + String(this.maxImages)
      } else {
        Toast('只能选择' + (this.maxImages - this.imgUrls.length) + '张了')
      }
    },
    delect (index) {
      this.imgUrls.splice(index, 1)
      this.leftImages++
      if (this.leftImages === this.maxImages) {
        this.pictureNums = '上传图片'
      } else {
        this.pictureNums = String(this.leftImages) + '/' + String(this.maxImages)
      }
    },
    handleChange (index) {
      this.num = index
    },
    bigImg (index) {
      this.showBigImg = true
      this.num = index
    }
  }
}
</script>
<style lang="scss"  scoped>
  .avatar {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .hasPic{
    position: relative;
    width: 168px;
    height:124px;
    margin-right: 30px;
    margin-bottom: 30px;
  }
  .input-file {
    width: 168px;
    height: 124px;
    background: red;
    opacity: 0;
  }
  .seledPic {
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
  .delect{
    position: absolute;
    top: -10px;
    right: -10px;
    width: 30px;
    height: 30px;
  }
  .selPic{
    margin-left: 10px;
    margin-bottom: 10px;
    position: relative;
    width:168px;
    height:124px;
    border-radius:12px;
    border:2px solid rgba(235,235,235,1);
    display: flex;
    justify-content: center;
    align-items: center; 
  }
  .selPic img{
    // position: absolute;
    width: 87px;
    height: 63px;
    // top: 0px;
    // left: 0px;
  }
  .selPic span{
    position: absolute;
    bottom: .9rem;
    width:168px;
    color: #c4c3c3;
    font-size: .75rem;
    left:0px;
    text-align: center;
  }
  .selPic input{
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    font-size: 0;
    top: 0px;
    left: 0px;
    z-index: 100;
  }
  .imgMask{
    position: absolute;
    height: 100%;
    width:100%;
    top:0px;
    left:0;
    z-index: 100;
    background:rgba(0,0,0,1);
  }
  .num{
    padding-top: 10px;
    color: white;
    font-size: .875rem;
    font-weight: bold;
  }
  .showImg{
    height: 100%;
    width: 100%;
    position: absolute;
    align-items: center;
    left: 0px;
    top:0;
  }
  .img{
    object-fit: scale-down;
    height: auto;
    width: 100%;
  }
</style>
