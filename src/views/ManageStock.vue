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
      <div class="manageStock_tips">库存不足7天销量</div>
      <div class="manageStock_list">
        <div class="manageStock_list_pic">
          <img src>
        </div>
        <div class="manageStock_list_content">
          <div>
            <h3>烟花商品名称</h3>
            <p>河北保定星星烟花制造厂</p>
            <p>规格：35g*1支</p>
          </div>
          <div class="manageStock_list_price">
            <p>库存：700件</p>
            <p>￥6.50</p>
          </div>
        </div>
      </div>
        <div class="manageStock_list">
        <div class="manageStock_list_pic">
          <img src>
        </div>
        <div class="manageStock_list_content">
          <div>
            <h3>烟花商品名称</h3>
            <p>河北保定星星烟花制造厂</p>
            <p>规格：35g*1支</p>
          </div>
          <div class="manageStock_list_price">
            <p>库存：700件</p>
            <p>￥6.50</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ManageHeader from "../components/ManageHeader";
export default {
  data() {
    return {
      title: "库存不足7日商品"
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
    margin-bottom:29px;
  }
  .manageStock_list {
    display: flex;
    padding-bottom:34px;
    border-bottom:1px solid #dcdcdc;
    margin-bottom:34px;
    .manageStock_list_pic {
      width: 200px;
      height: 210px;
      background:#ccc;
      margin-right:26px;
    }
    .manageStock_list_content {
      h3 {
        color: #333;
        font-size: 26px;
        line-height: 40px;
      }
      p {
        font-size: 18px;
        color: #666;
        line-height: 40px;
      }
    }
    .manageStock_list_price {
      margin-top:20px;
      p {
        font-size: 18px;
        color: #666;
      }
      p:nth-of-type(2){
        font-size: 32px;
      }
    }
  }
}
</style>
