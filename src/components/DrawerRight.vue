<template>
  <transition name="right-slide">
    <div class="draw_wrap" :style="win" v-show="rightWin">
      <div class="draw_content">
        <div class="draw_close" @click="close">
          <img src="../images/guanbi.png">
        </div>
        <div class="draw_title">厂家</div>
        <div class="draw_list">
          <ul>
            <li>沈阳合庆烟花有限公司</li>
            <li>大连市甘井子区北路鸿运烟花有限公司</li>
            <li>沈阳合庆烟花有限公司</li>
            <li>大连市甘井子区北路鸿运烟花有限公司</li>
          </ul>
        </div>
        <div class="draw_title">分类</div>
        <div class="draw_classify">
          <ul>
            <li>造型烟花</li>
            <li>大地红财神炮</li>
            <li>造型烟花</li>
            <li>大地红财神炮</li>
          </ul>
        </div>
      </div>
      <div class="draw_footer">
        <ul>
          <li>重置</li>
          <li>确定</li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["rightHide"],
  data() {
    return {
      win: {
        height: document.documentElement.clientHeight + "px"
      },
      rightWin: true
    };
  },
  methods: {
    close() {
      this.rightWin = this.rightHide;
      this.$emit("getRight", this.rightWin);
    }
  }
};
</script>

<style scoped>
.right-slide-enter,
.right-slide-leave-active {
  transform: translateX(597px);
}

.right-slide-leave-active,
.right-slide-enter-active {
  transition: all 1s;
}
.slide-right-enter,
.slide-right-leave-active {
  transform: translateX(-597px);
}

.slide-right-leave-active,
.slide-right-enter-active {
  transition: all 1s 1s cubic-bezier(0.33, 0.25, 0.33, 1);
}
.draw_wrap {
  width: 597px;
  background: #fff;
  position: absolute;
  right: 0;
  top: 88px;
  z-index: 10000;
  padding-top: 41px;
}
.draw_close {
  width: 32px;
  height: 32px;
  float: right;
  margin-right: 32px;
}
.draw_close img {
  width: 100%;
}
.draw_title {
  font-size: 32px;
  color: #333;
  /* margin-top:30px; */
  margin-left: 39px;
  margin-bottom: 36px;
}
.draw_list ul li {
  height: 78px;
  line-height: 78px;
  border-bottom: 1px solid #f6f6f6;
  color: #999999;
  font-size: 28px;
  margin-left: 39px;
}
.draw_list {
  margin-bottom: 50px;
}
.draw_classify {
  min-height: 300px;
}
.draw_classify ul li {
  min-width: 177px;
  height: 53px;
  border-radius: 28px;
  background: #ededed;
  border: 1px solid #979797;
  float: left;
  line-height: 53px;
  text-align: center;
  margin-bottom: 32px;
  color: #666;
  margin-left: 39px;
}
.draw_classify {
  clear: both;
}
.draw_footer {
  position: fixed;
  bottom: 0;
  right: 0;
}
.draw_footer ul li {
  width: 299px;
  background: #9b9b9b;
  height: 98px;
  line-height: 98px;
  float: left;
  font-size: 30px;
  color: #fff;
  text-align: center;
}
.draw_footer ul li:nth-of-type(1) {
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
.draw_footer ul li:nth-of-type(2) {
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  background: linear-gradient(to right, #ff6238ed, #ff1240);
}
</style>
