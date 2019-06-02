<template>
  <div>
    <LocalHeader :data="search" @receve="getval"/>
    <div class="history_wrap">
        <!-- 历史搜索 -->
      <div class="history_list" v-if="HistoryList.length">
        <h3>
          <span>历史搜索</span>
          <span @click="delSearch(index)">
            <img src="../images/remove.png">
          </span>
        </h3>
        <ul>
          <li v-for="(item,index) in HistoryList" :key="index">
            {{item}}
            <!-- <span @click="delSearch(index)">X</span> -->
          </li>
        </ul>
        <div style="clear:both"></div>
      </div>
      <!-- 热门搜索 -->
      <div class="history_new" v-if="hotList.length">
        <h3>
          <span style="color:#c32918">热门搜索</span>
        </h3>
        <ul>
          <li v-for="(item,index) in HistoryList" :key="index">
            {{item}}
            <!-- <span @click="delSearch(index)">X</span> -->
          </li>
        </ul>
      </div>
    </div>
    <!-- 下拉菜单 -->
    <div class="search_list">
      <ul>
        <li>泡泡冷烟花</li>
      </ul>
    </div>
  </div>
</template>
<script>
import LocalHeader from "../components/Header";
export default {
  data() {
    return {
      HistoryList: [],
      hotList:[],
      timer: null,
      D: 0,
      H: 0,
      M: 0,
      S: 0,
      search: "search"
    };
  },
  components: {
    LocalHeader
  },
  created() {
    let history = localStorage.getItem("HistoryList")
      ? JSON.parse(localStorage.getItem("HistoryList").split(","))
      : [];
    this.HistoryList = history;
    // this.countTime();
  },
  mounted() {
     
  },
  methods: {
    getval(newval) {
      let val = newval; // 清除空格
      if (this.HistoryList.length > 0) {
        // 有数据的话 判断
        if (this.HistoryList.indexOf(val) !== -1) {
          // 有相同的，先删除 再添加
          this.HistoryList.splice(this.HistoryList.indexOf(val), 1);
          this.HistoryList.unshift(val);
        } else {
          // 没有相同的 添加
          this.HistoryList.unshift(val);
        }
      } else {
        // 没有数据 添加
        this.HistoryList.unshift(val);
      }
      if (this.HistoryList.length > 6) {
        // 保留六个值
        this.HistoryList.pop();
      }
      localStorage.setItem("HistoryList", JSON.stringify(this.HistoryList));
      // this.findMost(this.HistoryList)
    },
    delSearch() {
      //   this.HistoryList.splice(index, 1);
      //   localStorage.setItem("HistoryList", JSON.stringify(this.HistoryList));
      localStorage.removeItem('HistoryList');
      this.HistoryList = [];
    },
    countTime() {
      this.timer = setInterval(() => {
        let endtime = new Date("2019/05/08,14:52:12").getTime();
        let nowtime = new Date().getTime();
        let leftsecond = parseInt((endtime - nowtime) / 1000);
        if (leftsecond >= 0) {
          this.D =
            parseInt(leftsecond / 3600 / 24) < 10
              ? "0" + parseInt(leftsecond / 3600 / 24)
              : parseInt(leftsecond / 3600 / 24);
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
          this.D = 0;
          this.H = "00";
          this.M = "00";
          this.S = "00";
          // clearInterval(this.timer);
        }
      }, 1000);
    },
    findMost(arr) {
      var obj = {};
      var maxEle;
      var maxNum = 1;
      arr.join("").replace(/(\w)/g, function(word, p) {
        obj[p[0]] ? (obj[p[0]] += 1) : (obj[p[0]] = 1);
        if (obj[p[0]] > maxNum) {
          maxEle = p[0];
          maxNum++;
        }
      });
      console.log("次数最多的元素为:" + maxEle + ", 次数为:" + obj[maxEle]);
      return "次数最多的元素为:" + maxEle + ", 次数为:" + obj[maxEle];
    }
  }
};
</script>
<style lang="scss" scoped>
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
.history_wrap {
  width: 671px;
  min-height: 700px;
  padding: 37px 34px 0px 45px;
  background: #fff;
  margin-top: 13px;
  font-size: 28px;
}
.history_wrap h3 {
  font-size: 28px;
  color: #333;
}
.history_list {
  margin-bottom: 114px;
}
.history_list span {
  display: inline-block;
}
.history_list span:nth-of-type(2) {
  width: 39px;
  height: 39px;
}
.history_list span:nth-of-type(2) {
  float: right;
}
.history_list span:nth-of-type(2) img {
  width: 100%;
}

.history_list ul li,
.history_new ul li {
  min-height: 55px;
  background: #ededed;
  border-radius: 80px;
  border: 2px solid #979797;
  min-width: 113px;
  color: #666;
  float: left;
  line-height: 55px;
  text-align: center;
  margin-right: 28px;
  margin-top: 28px;
}
.search_list{
  width: 750px;
  background: #fff
}
.search_list ul li{
  min-height: 85px;
  line-height: 85px;
  border-bottom: 1px solid #eee;
  font-size: 26px;
  color:#666;
  margin-left:39px;
}
</style>