<template>
  <div >
    <!-- 烟花头开始 -->
    <div class="header">
      <div class="header_logo">
        <img src="../images/home/logo.png">
      </div>
      <div class="header_input">
        <input type="text" placeholder="请输入烟花名称" value>
      </div>
      <div class="header_search">
        <img src="../images/home/sousuo.png">
      </div>
    </div>
    <!-- 烟花头结束 -->
    <!-- 轮播图 -->
    <div class="loop_pic">
      <mt-swipe :auto="4000">
        <mt-swipe-item class="item"></mt-swipe-item>
        <mt-swipe-item class="item"></mt-swipe-item>
        <mt-swipe-item class="item"></mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 轮播图 -->
    <div class="classify">
      <div class="classify_header">
        <span></span>
        <span>热门分类</span>
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
    <!-- 热门分类 -->
    <div class="recommond">
      <div class="recommond_header">
        <span></span>
        <span>精品推荐</span>
      </div>
      <div class="recommond_content">
        <div class="recommond_left"></div>
        <div class="recommond_right">
          <div class="recommond_right_top"></div>
          <div class="recommond_right_bottom"></div>
        </div>
      </div>
    </div>
    <!-- 精品推荐 -->
    <div class="special">
      <div class="special_header">
        <span></span>
        <span>今日特价</span>
      </div>
      <div class="special_content"></div>
    </div>
    <DrawerLeft/>
    <TabBarBottom/>
  </div>
</template>
<script>
// @ is an alias to /src
import DrawerLeft from "@/components/DrawerLeft";
import TabBarBottom from "@/components/TabBarBottom"
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    DrawerLeft,
    TabBarBottom
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
  background: #c32918;
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
  height: 300px;
  margin-bottom: 15px;
  /* background: #ccc; */
}
.item {
  width: 100%;
  height: 300px;
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
.loop_pic img {
  width: 100%;
}
.classify {
  width: 660px;
  min-height: 300px;
  background: #f8f8f8;
  padding: 22px 45px;
  margin-bottom: 15px;
}
.classify_header,
.recommond_header,
.special_header {
  font-size: 28px;
  color: #333;
  margin-bottom: 45px;
}
.classify_header span:nth-of-type(1),
.recommond_header span:nth-of-type(1),
.special_header span:nth-of-type(1) {
  background: url("../images/home/block.png") no-repeat center;
  display: inline-block;
  width: 10px;
  height: 25px;
  margin-right: 8px;
}
.classify_content ul li {
  width: 115px;
  height: 115px;
  border-radius: 50%;
  font-size: 26px;
  float: left;
  text-align: center;
  margin-right: 59px;
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
  min-height: 425px;
  background: #f8f8f8;
}
.recommond_header {
  padding-left: 45px;
  padding-top: 12px;
  margin-bottom: 22px;
}
.recommond_content {
  padding: 0 28px;
}
.recommond_left {
  width: 322px;
  min-height: 322px;
  background: #fff;
  margin-right: 20px;
  float: left;
}
.recommond_right {
  width: 348px;
  min-height: 322px;
  float: right;
}
.recommond_right_top {
  width: 100%;
  min-height: 160px;
  background: #fff;
  margin-bottom: 16px;
}
.recommond_right_bottom {
  width: 100%;
  min-height: 145px;
  background: #fff;
}
.special{
  background: #f8f8f8
}
.special_header {
  padding-left: 45px;
  padding-top: 12px;
  margin-bottom: 22px;
}
.special_content{
  min-height: 241px;
  background: #fff
}
</style>
