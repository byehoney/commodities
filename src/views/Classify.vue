<template>
  <div>
    <LocalHeader/>
    <div class="class">
      <div class="class_header">
        <div class="class_header_left">
          <span></span>
          <span>更多分类</span>
        </div>
        <div class="class_header_right"></div>
      </div>
      <div class="class_content">
        <ul>
          <li>
            <div class="class_content_left">
              <div class="class_content_pic">
                <img src="../images/home/home_menu.png">
                <span>组合烟花</span>
              </div>
            </div>
            <div class="class_content_right">
                <span>扇型烟花 </span>
                <span>地面喷花</span>
                <span>地面喷花 </span>
                <span>高升大地红 </span>
                <span>财神炮</span>
                <span>红炮 </span>
            </div>
          </li>
          <li>
            <div class="class_content_left">
              <div class="class_content_pic">
                <img src="../images/home/home_menu1.png">
                <span>喜庆鞭炮</span>
              </div>
            </div>
            <div class="class_content_right">
                <span>扇型烟花 </span>
                <span>地面喷花</span>
                <span>地面喷花 </span>
                <span>高升大地红 </span>
                <span>财神炮</span>
                <span>红炮 </span>
            </div>
          </li>
          <li>
            <div class="class_content_left">
              <div class="class_content_pic">
                <img src="../images/home/home_menu2.png">
                <span>日景烟花</span>
              </div>
            </div>
            <div class="class_content_right">
                <span>扇型烟花 </span>
                <span>地面喷花</span>
                <span>地面喷花 </span>
                <span>高升大地红 </span>
                <span>财神炮</span>
                <span>红炮 </span>
            </div>
          </li>
          <li>
            <div class="class_content_left">
              <div class="class_content_pic">
                <img src="../images/home/home_menu3.png">
                <span>冷烟花</span>
              </div>
            </div>
            <div class="class_content_right">
                <span>扇型烟花 </span>
                <span>地面喷花</span>
                <span>地面喷花 </span>
                <span>高升大地红 </span>
                <span>财神炮</span>
                <span>红炮 </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import LocalHeader from "../components/Header";
export default {
  components: {
    LocalHeader
  }
};
</script>

<style scoped>
.class {
  background: #e5e5e5;
  padding-top: 13px;
}
.class_header {
  width: 710px;
  min-height: 114px;
  background: #f8f8f8;
  margin-top: 93px;
  color: #333;
  font-size: 28px;
  line-height: 114px;
  padding-left: 40px;
}
.class_header span:nth-of-type(1) {
  background: url("../images/home/block.png") center 5px no-repeat;
  display: inline-block;
  width: 10px;
  height: 25px;
  margin-right: 8px;
}
.class_header_left {
  float: left;
  
}
.class_header_right {
  float: right;
}
.class_content ul li{
    min-height: 241px;
    border-bottom:1px solid #e5e5e5
}
.class_content_left{
    background: #fff;
    float: left;
    width:225px;
    padding-top: 30px;
    min-height:211px;
}
.class_content_right{
    float: left;
    width:464px;
    min-height: 187px;
    font-size: 24px;
    color:#666;
    padding-left:61px;
    padding-top:54px;
}
.class_content_right span{
    display: inline-block;
    min-width: 120px;
    line-height: 45px;

}
.class_content_pic {
  width: 115px;
  height: 115px;
  border-radius: 50%;
  font-size: 26px;
  text-align: center;
  margin-left: 40px;
}
.class_content_pic img{
    margin-bottom:16px;
    width:100%;
    height: 100%;
}
</style>
