<template>
  <div class="header">
    <div class="header_logo" v-if="showlogo">
      <img src="../images/home/logo.png">
    </div>
    <div class="header_input">
      <input type="text" v-model="searchStr" placeholder="请输入烟花名称">
    </div>
    <div class="header_search" v-if="showlogo" @click="showcode">
      <img src="../images/home/home_list.png">
    </div>
    <div class="header_search_copy" v-else>
      <ul>
        <li @click="SearchVal">搜索</li>
        <li @click="cancelSearch">取消</li>
      </ul>
    </div>
    <div class="tips_wrap" v-show="hide">
      <div class="tips_deg"></div>
      <div class="tips">
        <ul>
          <li @click="change">
            <span>
              <img src="../images/change.png">
            </span>
            <span>门店切换</span>
          </li>
          <li>
            <span>
              <img src="../images/saoma.png">
            </span>
            <span class="remove">扫码文案</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 侧滑 -->
    <DrawRight v-show="rightWinShow" :rightHide="hide" @getRight="remove"/>
  </div>
</template>

<script>
import DrawRight from "./DrawerRight";
export default {
  props: ["data"],
  data() {
    return {
      showlogo: true,
      searchStr: "",
      hide: "",
      rightWinShow: false
    };
  },
  methods: {
    SearchVal() {
      if (this.searchStr.trim()) {
        this.$emit("receve", this.searchStr.trim());
      }
    },
    cancelSearch() {
      this.$router.history.push("/");
    },
    showcode() {
      if (this.rightWinShow) {
      } else {
        this.hide = !this.hide;
      }
    },
    remove(val) {
      this.rightWinShow = val;
    },
    change() {
      this.rightWinShow = !this.rightWinShow;
      this.hide = false;
    }
  },
  mounted() {
    if (this.data == "search") {
      this.showlogo = false;
    } else {
      this.showlogo = true;
    }
    this.remove();
  },
  components: {
    DrawRight
  }
};
</script>

<style scoped>
.header {
  width: 708px;
  height: 58px;
  background: linear-gradient(to right, #ff6238ed, #ff1240);
  font-size: 25px;
  padding: 15px 21px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
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
  width: 17px;
  height: 58px;
  float: right;
  margin-top: 5px;
}
.header_search img {
  width: 100%;
}
.header_search_copy ul li {
  float: left;
  color: #fff;
  font-size: 28px;
  margin-top: 15px;
  margin-left: 22px;
}
.tips_wrap {
  width: 300px;
  height: 264px;
  background: #4a4a4a;
  position: absolute;
  right: 0;
  top: 108px;
  color: #fff;
  border-radius: 10px;
}
/* .tips {
  
 
} */
.tips_deg {
  width: 0;
  height: 0;
  border-width: 0 20px 20px;
  border-style: solid;
  border-color: transparent transparent #333; /*透明 透明  灰*/
  position: absolute;
  top: -20px;
  right: 9px;
}
.tips ul li {
  height: 135px;
  line-height: 135px;
  font-size: 30px;
}
.tips ul li span {
  display: inline-block;
}
.tips ul li span:nth-of-type(1) {
  width: 60px;
  height: 60px;
  margin-right: 7px;
  margin-left: 34px;
}
.tips ul li span img {
  width: 100%;
  vertical-align: middle;
}
.tips ul li span:nth-of-type(2) {
  width: 197px;
  border-bottom: 1px solid #666666;
  text-indent: 30px;
}
.tips ul li span.remove {
  border-bottom: none;
}
</style>
