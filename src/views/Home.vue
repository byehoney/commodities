<template>
  <div>
    <!-- 烟花头开始 -->
    <LocalHeader/>
    <!-- 烟花头结束 -->
    <!-- 轮播图 -->
    <div class="loop_pic">
      <!-- <div> -->
      <mt-swipe :auto="4000" :show-indicators="false">
        <mt-swipe-item class="item">1</mt-swipe-item>
        <mt-swipe-item class="item">2</mt-swipe-item>
        <mt-swipe-item class="item">3</mt-swipe-item>
      </mt-swipe>
      <!-- </div> -->
      <!-- 轮播图 -->

      <div class="classify">
        <div class="classify_header">
          <div class="classify_header_left">
            <span></span>
            <span>热门分类</span>
          </div>
          <div class="classify_header_right">
            <img src="../images/home_header_class.png"/>
          </div>
        </div>
        <div class="classify_content">
          <ul>
            <li>
              <a href="javascript:void(0)">
                <img src="../images/home/home_menu.png">
                <span>组合烟花</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <img src="../images/home/home_menu1.png">
                <span>喜庆鞭炮</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <img src="../images/home/home_menu2.png">
                <span>日景烟花</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <img src="../images/home/home_menu3.png">
                <span>冷烟花</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 热门分类 -->
    <div class="recommond">
      <div class="recommond_header">
        <span></span>
        <span>精品推荐</span>
      </div>
      <div class="recommond_content">
        <div class="recommond_left"></div>
        <div class="recommond_center">
          <div class="recommond_center_top"></div>
          <div class="recommond_center_bottom"></div>
        </div>
        <div class="recommond_right"></div>
      </div>
    </div>
    <!-- 限时秒杀 -->
    <div class="special">
      <div class="special_wrap">
        <div class="special_header">
          <span></span>
          <span>限时秒杀</span>
          <span>
            <div>10</div>:
            <div>10</div>:
            <div>10</div>
          </span>
        </div>
        <div class="special_content">
           <div class="special_content_left"></div>
           <div class="special_content_center"></div>
           <div class="special_content_right"></div>
        </div>
      </div>
    </div>
    <!-- <DrawerLeft/> -->
    <TabBarBottom/>
  </div>
</template>
<script>
// @ is an alias to /src
import DrawerLeft from "@/components/DrawerLeft";
import TabBarBottom from "@/components/TabBarBottom";
import LocalHeader from "@/components/Header";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    DrawerLeft,
    TabBarBottom,
    LocalHeader
  },
  async created() {
    // try {
    //     await getIndex({ pageSiza: 100, num: 10 });
    // } catch (err) {
    // }
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #333;
}
.header {
  width: 708px;
  height: 60px;
  /* background: #c32918; */
  font-size: 25px;
  padding: 20px 21px;
}
.header_logo {
  width: 105px;
  height: 58px;
  float: left;
}
.header_logo img {
  width: 100%;
}
.header_input {
  width: 506px;
  height: 58px;
  border: 1px solid #fff;
  border-radius: 29px;
  float: left;
  margin: 0 21px;
}
.header_input input {
  width: 100%;
  height: 58px;
  outline: none;
  border: none;
  padding-left: 27px;
  border-radius: 29px;
  background: #fff;
}
.header_search {
  width: 34px;
  height: 34px;
  float: right;
  margin-top: 15px;
}
.header_search img {
  width: 100%;
}
.loop_pic {
  width: 750px;
  height: 613px;
  margin-bottom: 15px;
  /* background: #ccc; */
  position: relative;
}
.item {
  width: 100%;
  height: 613px;
}
.item:nth-of-type(1) {
  background: #f00;
}
.item:nth-of-type(2) {
  background: #ccc;
}
.item:nth-of-type(3) {
  background: #f00;
}
.loop_pic{
  margin-top:80px;
}
.loop_pic img {
  width: 100%;
}
.classify {
  width: 658px;
  min-height: 344px;
  background: #f8f8f8;
  margin-bottom: 15px;
  position: absolute;
  left: 45px;
  bottom: 14px;
}
.classify_header,
.recommond_header,
.special_header {
  height: 98px;
  line-height: 98px;
  font-size: 28px;
  color: #333;
  margin-bottom: 45px;
  padding-left: 40px;
  border-bottom: 1px solid #ebebeb;
}
.classify_header span:nth-of-type(1),
.recommond_header span:nth-of-type(1),
.special_header span:nth-of-type(1) {
  background: url("../images/home/block.png") center 5px no-repeat;
  display: inline-block;
  width: 10px;
  height: 25px;
  margin-right: 8px;
}
.classify_header_left{
  width: 134px;
  float: left;
}
.classify_header_right{
  float:right;
  width:41px;
  height: 9px;
  margin-right:29px;
}
.classify_header_right img{
   width: 100%;
}
.classify_content ul li {
  width: 115px;
  height: 115px;
  border-radius: 50%;
  font-size: 26px;
  float: left;
  text-align: center;
  margin-left: 40px;
}
.classify_content ul li:last-child {
  margin-right: 0;

}
.classify_content ul li img {
  width: 100%;
  margin-bottom: 33px;
}
.recommond {
  width: 750px;
  min-height: 382px;
  background: #fff;
  margin-bottom: 15px;
}
.recommond_header {
  padding-left:85px;
  margin-bottom: 22px;
}
.recommond_content{
  padding:36px 82px 42px 86px;
}
.recommond_left {
  width: 194px;
  min-height: 194px;
  border: 8px solid #ebebeb;
  border-radius: 10px;
  background: #fff;
  margin-right: 13px;
  float: left;
}
.recommond_center {
  float: left;
  margin-right: 14px;
}
.recommond_center_top {
  margin-bottom: 12px;
}
.recommond_center_top,
.recommond_center_bottom {
  width: 137px;
  height: 98px;
  background: #ebebeb;
  border-radius: 10px;
}
.recommond_right {
  width: 208px;
  min-height: 208px;
  float: left;
  background: #ebebeb;
  border-radius: 10px;
}

.special {
  width: 750px;
  min-height: 357px;
  background: #fff;
  margin-bottom:98px;
}

.special_header {
  padding-left:85px;
  margin-bottom: 22px;
}
.special_header span:nth-of-type(3) {
  color: #ed5f45;
  margin-left: 8px;
}
.special_header span:nth-of-type(3) div {
  display: inline-block;
  width: 33px;
  height: 33px;
  color: #fff;
  background: #ed5f45;
  text-align: center;
  line-height: 33px;
  font-size: 18px;
  margin-right: 8px;
}

.special_content {
  background: #fff;
  padding:36px 82px 42px 86px;
}
.special_content div{
  width:186px;
  height: 186px;
  float: left;
  background:#eee;
  margin-right:12px;
  border-radius: 10px;
}
.special_content div:nth-of-type(3){
  margin-right: 0
}
</style>
