<template>
  <div>
    <ManageHeader :title="title"></ManageHeader>
    <div class="manageStock">
      <div class="manageStock_search">
        <span>
          <img src="../images/smallsousuo.png">
        </span>
        <span>
          <input type="text" placeholder="商品名称">
        </span>
        <span>搜索</span>
      </div>
      <div class="manageStock_tips fix">
        <ul>
          <li>天数:30</li>
          <li>
            门店
            <span></span>
          </li>
          <li>
            地区
            <span></span>
          </li>
          <li>合计数：1335</li>
        </ul>
      </div>
      <!-- 门店列表 -->
      <div class="manageChooseList">
        <ul>
          <li v-for="item in chooseList">
            <div class="manageChoose_pic">
              <img src="../images/dianpu_m.png">
            </div>
            <div class="manageChoose_name">
              <p>门店名称：{{item.name}}</p>
              <p>注册地址：{{item.address}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ManageHeader from "../components/ManageHeader";
export default {
  data() {
    return {
      title: "未动销查询",
      chooseList: [
        {
          name: "星星烟花-旗舰店",
          address: "河北省保定市西口村甲2组35号"
        },
        {
          name: "星星烟花-旗舰店",
          address: "河北省保定市西口村甲2组35号"
        },
        {
          name: "星星烟花-旗舰店",
          address: "注册地址：河北省保定市西口村甲2组35号"
        },
        {
          name: "星星烟花-旗舰店",
          address: "河北省保定市西口村甲2组35号"
        }
      ]
    };
  },
  components: { ManageHeader }
};
</script>

<style scoped lang="scss">
.manageStock {
  background: #fff;
  margin-top: 10px;
  padding-left: 39px;
  padding-top: 20px;
  .manageStock_search {
    width: 674px;
    height: 43px;
    background: #ebebeb;
    border-radius: 40px;
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
    margin-bottom: 24px;
    span {
      color: #007aff;
      margin-left: 23px;
      font-size: 22px;
      input {
        width: 500px;
        height: 35px;
        background: none;
        border: none;
      }
    }
    span:nth-of-type(1) {
      width: 26px;
      height: 26px;
      img {
        width: 100%;
        margin-top: 5px;
      }
    }
    span:nth-of-type(3) {
      font-size: 26px;
      margin-right: 23px;
    }
  }
  .manageStock_tips {
    font-size: 20px;
    color: #f5a623;
    margin-bottom: 29px;
    ul li {
      float: left;
      margin-right: 29px;
      span {
        display: inline-block;
        width: 0;
        height: 0;
        border-width: 10px 10px 0;
        border-style: solid;
        border-color: #f5a623 transparent transparent; /*灰 透明 透明 */
      }
    }
    ul li:last-child {
      float: right;
      margin-right: 39px;
    }
  }
}
.manageChooseList {
  font-size: 22px;
  color: #333333;
  background: #fff;

  ul li {
    display: flex;
    height: 100px;
    margin-bottom: 20px;
    border-bottom: 1px solid #dcdcdc;
    .manageChoose_pic {
      width: 40px;
      height: 36px;
      margin-right: 20px;
      margin-top: 20px;
      img {
        width: 100%;
      }
    }
    .manageChoose_name {
      p {
        line-height: 40px;
      }
    }
  }
}
</style>
