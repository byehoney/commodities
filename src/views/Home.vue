<template>
  <div class="homeContainer">
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
            <router-link to="/classify">
              <img src="../images/home_header_class.png">
            </router-link>
          </div>
        </div>
        <div class="classify_content">
          <ul>
            <li v-for="(item,index) in heatList" :key="index">
              <a href="javascript:void(0)">
                <img :src="item.kindImage">
                <span>{{item.kindName}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 热门分类 -->
    <div class="recommond" v-if="boutique.length>0">
      <div class="recommond_header">
        <span></span>
        <span>精品推荐</span>
      </div>
      <div class="recommond_content fix">
        <div class="recommond_left">
          <div class="recommond_left_com">
            <img :src="boutique[0].url?boutique[0].url:''">
          </div>
          <div class="recommond_left_tip">
            <p>星选好物</p>
          </div>
        </div>
        <div class="recommond_center">
          <div class="recommond_center_top">
            <img :src="boutique[1].url?boutique[1].url:''" alt>
          </div>
          <div class="recommond_center_bottom">
            <img :src="boutique[2].url?boutique[2].url:''" alt>
          </div>
        </div>
        <div class="recommond_right">
          <div class="recommond_left_com">
            <img :src="boutique[3].url?boutique[3].url:''">
          </div>
          <div class="recommond_left_tip">
            <p>星选好物</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 限时秒杀 -->
    <div class="special" v-if="secKillList.length>0">
      <div class="special_wrap">
        <div class="special_header">
          <span></span>
          <span>限时秒杀</span>
          <span>
            <div>{{H}}</div>:
            <div>{{M}}</div>:
            <div>{{S}}</div>
          </span>
        </div>
        <div class="special_content">
          <div
            :class="cx==index?'actives':''"
            class="special_content_left fix"
            v-for="(item,index) in secKillList"
            :key="index"
          >
            <div class="cx_title">{{item.cxj}}</div>
            <img :src="item.url">
          </div>
        </div>
      </div>
    </div>
    <!-- special 结束 -->
    <div class="home_video">
      <div class="home_video_list">
        <div class="home_video_list_header">
          <h3>标题</h3>
        </div>
        <div class="home_video_list_content">
          <video-player
            class="video-player-box video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
            @play="onPlayerPlay($event)"
            @pause="onPlayerPause($event)"
          ></video-player>
        </div>
      </div>
    </div>
    <!-- <DrawerLeft/> -->
    <TabBarBottom curTab="home"/>
  </div>
</template>
<script>
// @ is an alias to /src
import DrawerLeft from "@/components/DrawerLeft";
import TabBarBottom from "@/components/TabBarBottom";
import LocalHeader from "@/components/Header";
import { videoPlayer } from "vue-video-player";

//引入video样式
// import "video.js/dist/video-js.css";
// import "vue-video-player/src/custom-theme.css";
// //引入hls.js
// import "videojs-contrib-hls.js/src/videojs.hlsjs";

import { getHeatList, getSpecialList, secKill } from "@/api/index";
import { mapState } from "vuex";
import { setInterval } from "timers";
export default {
  name: "home",
  data() {
    return {
      timer: null,
      H: 0, //倒计时
      M: 0, //倒计分
      S: 0, //倒计秒
      msList: [[8, 12], [12, 16], [16, 20]], //秒杀时间段
      heatList: [],
      boutique: [],
      secKillList: [],
      cx: 0, //限时特价促销的判断条件
      playerOptions: {
        //        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "",
            src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" //你的视频地址（必填）
          }
        ],
        // poster: "poster.jpg", //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  },

  components: {
    DrawerLeft,
    TabBarBottom,
    LocalHeader,
    videoPlayer
  },
  async mounted() {
    //热门分类
    let { data } = await getHeatList();
    this.heatList = data.list;
    //精品推荐
    let specialData = await getSpecialList({
      corpCode: this.user.corpCode,
      companyId: this.user.companyId,
      pageSize: 4
    });
    this.boutique = specialData.data.list;
    console.log(this.boutique);
    //限时秒杀
    let killdata = await secKill({
      corpCode: this.user.corpCode,
      companyId: this.user.companyId,
      pageSize: 3
    });
    this.secKillList = killdata.data.list;
    this.count();
  },
  methods: {
    count() {
      this.timer = setInterval(() => {
        let nowH = new Date().getHours();
        let nowM = new Date().getMinutes();
        let nowS = new Date().getSeconds();
        let nowTime = new Date().getHours();
        let leftsecond = "";
        if (nowH >= this.msList[0][0] && nowH <= this.msList[0][1]) {
          leftsecond =
            this.msList[0][1] * 60 * 60 - (nowH * 60 * 60 + nowM * 60 + nowS);
        } else if (nowH >= this.msList[1][0] && nowH <= this.msList[1][1]) {
          leftsecond =
            this.msList[1][1] * 60 * 60 - (nowH * 60 * 60 + nowM * 60 + nowS);
        } else if (nowH >= this.msList[2][0] && nowH <= this.msList[2][1]) {
          leftsecond =
            this.msList[2][1] * 60 * 60 - (nowH * 60 * 60 + nowM * 60 + nowS);
        }
        // leftsecond--;
        if (leftsecond >= 0) {
          this.H =
            parseInt((leftsecond / 3600) % 24) < 10
              ? "0" + parseInt((leftsecond / 3600) % 24)
              : parseInt((leftsecond / 3600) % 24);
          this.M =
            parseInt((leftsecond / 60) % 60) < 10
              ? "0" + parseInt((leftsecond / 60) % 60)
              : parseInt((leftsecond / 60) % 60);
          this.S =
            parseInt(leftsecond % 60) < 10
              ? "0" + parseInt(leftsecond % 60)
              : parseInt(leftsecond % 60);
        } else {
          this.H = "00";
          this.M = "00";
          this.S = "00";
          clearInterval(this.timer);
        }
      }, 1000);
    },
    onPlayerPlay(player) {},
    onPlayerPause(player) {}
  },

  computed: {
    ...mapState("login", ["user"]),
    player() {
      return this.$refs.videoPlayer.player;
    }
  }
};
</script>
<style scoped>
.homeContainer {
  padding-bottom: 120px;
  opacity: 1;
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
.loop_pic {
  margin-top: 80px;
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
  margin-bottom: 32px;
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
.classify_header_left {
  width: 134px;
  float: left;
}
.classify_header_right {
  float: right;
  width: 41px;
  height: 9px;
  margin-right: 29px;
}
.classify_header_right img {
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
.classify_content ul li span {
  display: inline-block;
  width: 117px;
  height: 35px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.recommond {
  width: 750px;
  min-height: 382px;
  background: #fff;
  margin-bottom: 15px;
}
.recommond_header {
  padding-left: 85px;
  margin-bottom: 33px;
}
.recommond_content {
  padding: 0px 82px 42px 82px;
}
.recommond_left {
  width: 194px;
  height: 194px;
  border: 8px solid #ebebeb;
  border-radius: 10px;
  background: #fff;
  margin-right: 13px;
  float: left;
  text-align: center;
  position: relative;
}
.recommond_left_com {
  width: 194px;
  height: 194px;
  margin: 0 auto;
}
.recommond_left_tip {
  width: 100%;
  height: 49px;
  line-height: 49px;
  color: #fff;
  opacity: 0.8;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #ccc;
  font-size: 12px;
}
.recommond_left_com img {
  width: 100%;
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
  width: 131px;
  height: 98px;
  background: #ebebeb;
  border-radius: 10px;
}
.recommond_right {
  width: 194px;
  height: 194px;
  float: left;
  border: 8px solid #ebebeb;
  /* background: #ebebeb; */
  border-radius: 10px;
  text-align: center;
  position: relative;
}
/* 限时特价 */
.special {
  width: 750px;
  min-height: 357px;
  background: #fff;
  padding-bottom: 33px;
}
.special_header {
  padding-left: 85px;
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
  line-height: 34px;
  font-size: 18px;
  margin-right: 8px;
  position: relative;
  top: -5px;
}
.special_content {
  background: #fff;
  padding: 0px 82px 42px 86px;
}
.special_content_left {
  width: 163px;
  min-height: 163px;
  float: left;
  background: #eee;
  margin-right: 12px;
  border: 11px solid #eee;
  border-radius: 10px;
  font-size: 18px;
}
.cx_title {
  min-height: 46px;
  line-height: 46px;
}
.special_content_left.actives {
  background: #fadfc5;
  border: 11px solid #fadfc5;
}
.special_content_left img {
  width: 100%;
}
.special_content_left:nth-of-type(3) {
  margin-right: 0;
}
.home_video {
  padding-bottom: 100px;
}
.home_video_list {
  width: 750px;
  height: 420px;
  font-size: 24px;
}
.home_video_list_header h3 {
  color: #666;
  margin-left: 35px;
  font-size: 24px;
}
.home_video_list_header {
  height: 92px;
  line-height: 92px;
}
.home_video_list_content video {
  width: 100%;
  height: 200px;
  margin-bottom: 100px;
}
.video-js .vjs-big-play-button{
     /*
      播放按钮换成圆形
     */
    height: 100px;
    width: 100px;
    line-height: 100px;
    border-radius: 50%;
}

.recommond_center_top img,
.recommond_center_bottom img {
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}
</style>
