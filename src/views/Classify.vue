<template>
  <div style="opacity:1">
    <LocalHeader/>
    <div class="class">
      <div class="class_header">
        <div class="class_header_left">
          <span></span>
          <span>更多分类</span>
        </div>
        <!-- <div class="class_header_right">
            <span></span>
            <span>扫码文案</span>
        </div> -->
      </div>
      <div class="class_content">
        <ul class="left">
          <li v-for="(item,index) in list" :key="index" @click="changeClass(index)" :class="[isActive==index?'active':'']">
            <div class="class_content_left">
              <div class="class_content_pic">
                <img :src="item.img"/>
                <span>{{item.title}}</span>
              </div>
            </div>
            <!-- <div class="class_content_right " :class="isActive==index?active_bg:''">
              <div :class='isActive==index?is_active:""'></div>
              <span v-for="(data,index) in item.data" :key="index">{{data.name}}</span>
            </div> -->
          </li>
        </ul>
        <div class="right">
          <div class="factoryList" v-if="isActive==0">
            <div class="listItem">
              造型烟花
            </div>
            <div class="listItem">
              造型烟花
            </div>
            <div class="listItem">
              造型烟花
            </div>
          </div>
          <div class="typeList" v-else>
            <div class="typeItem">
              造型烟花
            </div>
            <div class="typeItem">
              造型烟花
            </div>
            <div class="typeItem">
              造型烟花
            </div>
            <div class="typeItem">
              造型烟花
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LocalHeader from "../components/Header";
export default {
  components: {
    LocalHeader
  },
  data() {
    return {
      isActive:0,
      is_active:"is_active",
      active_bg:"active_bg",
      list: [
        {
          title: "厂家",
          img:require("../images/home/home_menu.png")
        },
        {
          title: "组合烟花",
          img:require("../images/home/home_menu.png")
        },
        {
          title: "喜琴鞭炮",
          img:require("../images/home/home_menu1.png")
        },
        {
          title: "日景烟花",
          img:require("../images/home/home_menu2.png")
        },
        {
          title: "冷烟花",
          img:require("../images/home/home_menu3.png")
        }
      ]
    };
  },
  methods:{
      changeClass(index){
        this.isActive=index
      }
  }
};
</script>

<style lang="scss" scoped>
.class {
  background: #e5e5e5;
  /* padding-top: 13px; */
}
.class_header {
  width: 100%;
  min-height: 114px;
  background: #fff;
  margin-top: 88px;
  color: #333333;
  font-size: 28px;
  line-height: 114px;
  /* padding-left: 40px; */
}
.class_header_left{
  margin-left: 40px;
  margin-bottom: 10px;
}
.class_header span:nth-of-type(1) {
  background: url("../images/home/block.png") center 5px no-repeat;
  display: inline-block;
  width: 10px;
  height: 25px;
  margin-right: 8px;
}
.left .active{
  background-color: #fff;
}
.class_content{
  display: flex;
  .right{
    flex: 1;
    background-color: #fff;
    .factoryList{
      width: 100%;
      .listItem{
        margin-left: 20px;
        border-bottom: 2px solid #e5e5e5;
        font-size: 24px;
        color: #666;
        height: 80px;
        line-height: 80px;
        padding-left: 20px;
        text-align: center;
      }
    }
    .typeList{
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .typeItem{
        width: 200px;
        font-size: 24px;
        color: #666;
        text-align: center;
        padding-top: 60px;
      }
    }
  }
}
.class_content ul li {
  min-height: 241px;
  border-bottom: 1px solid #d8d8d8;
}
.class_content_left {
  // background: #d8d8d8;
  float: left;
  width: 225px;
  padding-top: 30px;
  min-height: 211px;
}
.is_active {
  width: 0;
  height: 0;
  border-width: 20px 20px 20px 0;
  border-style: solid;
  border-color: transparent #eb4546 transparent transparent; /*透明 灰 透明 透明 */
  position: absolute;
  left: -22px;
  top: 93px;
}
.active_bg {
  background: #fff !important;
}
.class_content_right {
  float: left;
  width: 464px;
  min-height: 187px;
  font-size: 24px;
  color: #666;
  padding-left: 61px;
  padding-top: 54px;
  position: relative;
  background: #e5e5e5;
}
.class_content_right span {
  display: inline-block;
  min-width: 120px;
  line-height: 45px;
}
.class_content_right span:nth-of-type(1) {
  color: #b43726;
}
.class_content_pic {
  width: 115px;
  height: 115px;
  border-radius: 50%;
  font-size: 26px;
  text-align: center;
  margin-left: 40px;
}
.class_content_pic img {
  margin-bottom: 16px;
  width: 100%;
  height: 100%;
}
</style>
