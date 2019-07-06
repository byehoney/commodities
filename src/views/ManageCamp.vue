<template>
  <div class="managecamp">
    <div class="manageHeader">
      <img @click="goBack" src="../images/arrow_left_white.png" class="leftIcon" alt>
      <div class="inputArea">
        <form @submit.prevent class="form">
          <input
            v-model="searchStr"
            @keypress="searchShop"
            type="text"
            placeholder="请输入搜索内容"
            class="input"
          >
        </form>
      </div>
      <span @click="doSearch">搜索</span>
    </div>
    <!-- 搜索框结束 -->
    <div>
      <div class="subNav">
        <ul>
          <li class="active">销量</li>
          <li>
            <span>价格</span>
            <span>
              <img src="../images/mchoose.png">
            </span>
          </li>
          <li>主推</li>
        </ul>
      </div>
    </div>
    <!-- 导航结束 -->
    <div class="camp_list" v-for="(item,index) in list" :key="index">
      <div class="camp_list_content">
        <div class="camp_list_left">
          <img src>
        </div>
        <div class="camp_list_right">
          <div class="camp_list_right_top">
            <h3>{{item.title}}</h3>
            <p>{{item.address}}</p>
            <p>{{item.sum}}</p>
          </div>
          <div class="camp_list_right_bottom">
            <div class="camp_list_right_bottom_left">
              <ul>
                <li>{{item.num}}</li>
                <li>{{item.price}}</li>
              </ul>
            </div>
            <div class="camp_list_right_bottom_right">
              <p>{{item.sale}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchStr: "",
      listCheck: true,
      list: [
        {
          title: "烟花商品名称",
          address: "河北保定星星烟花制造厂",
          sum: "规格：35g*1支",
          num: "仅剩999件",
          price: "¥6.50",
          sale: "已销：700件"
        },
        {
          title: "烟花商品名称",
          address: "河北保定星星烟花制造厂",
          sum: "规格：35g*1支",
          num: "仅剩999件",
          price: "¥6.50",
          sale: "已销：700件"
        },
        {
          title: "烟花商品名称",
          address: "河北保定星星烟花制造厂",
          sum: "规格：35g*1支",
          num: "仅剩999件",
          price: "¥6.50",
          sale: "已销：700件"
        }
      ]
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    searchShop(event) {
      if (event.keyCode == 13) {
        event.preventDefault(); //禁止默认事件（默认是换行）
        this.pageNum = 1;
        this.list = [];
        this.getData();
      }
    },
    doSearch() {
      this.pageNum = 1;
      this.list = [];
      this.getData();
    },
    checkList() {}
  }
};
</script>

<style scoped lang="scss">
.managecamp {
  background: #fff;
}
.manageHeader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 93px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(0, 122, 255, 1) 0%,
    rgba(24, 152, 247, 1) 100%
  );
  .leftIcon {
    width: 17px;
    height: 30px;
  }
  .inputArea {
    width: 506px;
    height: 58px;
    background-color: #fff;
    border-radius: 30px;
    position: relative;
  }
  .input {
    width: 506px;
    height: 58px;
    background-color: #fff;
    font-size: 22px;
    color: #999;
    line-height: 30px;
    letter-spacing: 2px;
    border: none;
    outline: none;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 30px;
    padding-left: 21px;
  }
  span {
    font-size: 28px;
    color: rgba(255, 255, 255, 1);
    line-height: 37px;
    letter-spacing: 2px;
  }
}
.subNav {
  // display: flex;
  font-size: 28px;
  margin-top: 93px;
  height: 91px;
  line-height: 91px;
  padding: 0 46px;
  border-bottom: 1px solid #dcdcdc;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    li {
      span {
        display: inline-block;
      }
      span:nth-of-type(2) {
        width: 18px;
        height: 22px;
        margin-left: 7px;
        img {
          width: 100%;
        }
      }
    }
    .active {
      color: #f5a623;
    }
  }
}
.camp_list {
  min-height: 200px;
  padding: 27px 0px 27px 42px;
  .camp_list_content {
    display: flex;
    border-bottom: 1px solid #dcdcdc;
    padding-bottom: 30px;
  }
  .camp_list_left {
    width: 200px;
    height: 210px;
    background: #dcdcdc;
    img {
      width: 100%;
    }
  }
  .camp_list_right {
    width: 460px;
    margin-left: 26px;
    min-height: 220px;
    line-height: 30px;
    .camp_list_right_top {
      margin-bottom: 30px;
      h3 {
        font-size: 26px;
        margin-bottom: 10px;
        color: #333;
      }
      p {
        font-size: 18px;
        color: #666;
      }
    }
    .camp_list_right_bottom {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      .camp_list_right_bottom_left {
        ul li {
          font-size: 18px;
          line-height: 40px;
          width: 117px;
          height: 24px;
          color: #ff220a;
          border: 1px solid #ff220a;
          line-height: 24px;
          border-radius: 5px;
          text-align: justify;
        }
        ul li:nth-of-type(1) {
          text-align: center;
        }
        ul li:nth-of-type(2) {
          font-size: 32px;
          border: none;
          margin-top: 20px;
          color: #333;
        }
      }
      .camp_list_right_bottom_right {
        p {
          color: #333;
          font-size: 18px;
          margin-top: 45px;
        }
      }
    }
  }
}
</style>
