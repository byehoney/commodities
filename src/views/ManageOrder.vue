<template>
  <!-- 今日订单 -->
  <div class="order_wrap">
    <ManageHeader :title="title"></ManageHeader>
    <div class="manageChoose">
      <ul>
        <li @click="show">
          <span>开始时间:</span>
          <span>
            {{selectedValue}}
            <awesome-picker
              ref="picker"
              :data="picker.data"
              :anchor="picker.anchor"
              :textTitle="picker.textTitle"
              :textConfirm="picker.textConfirm"
              :textCancel="picker.textCancel"
              :colorTitle="picker.colorTitle"
              :colorConfirm="picker.colorConfirm"
              :colorCancel="picker.colorCancel"
              :swipeTime="picker.swipeTime"
              @cancel="handlePickerCancel"
              @confirm="handlePickerConfirm"
            ></awesome-picker>
          </span>
        </li>
        <li>
          <span>结束时间:</span>
          <span>2019-04-28</span>
        </li>
        <li class="left">
          <span>订单号:</span>
          <span>
            <input type="text" placeholder="请输入订单号">
          </span>
        </li>
        <li class="left">
          <span>门店:</span>
          <span>
            <input type="text" placeholder="请输入门店">
          </span>
        </li>
        <li class="left">
          <span>选择地区:</span>
          <span>
            <input type="text" placeholder="请选择地区">
          </span>
        </li>
        <li>
          <span>只显示今日首单:</span>
          <span class="check"></span>
        </li>
      </ul>
      <div class="choosebtn">查询</div>
    </div>
    <!-- 订单 -->
    <div class="manage_order">
      <div class="order_num fix">
        <ul>
          <li>今日首单数：8单</li>
          <li>合集订单数：8单</li>
        </ul>
      </div>
      <div class="order_list">
        <div class="order_list_top">
          <div class="order_list_top_left">
            <span>
              <img src="../images/manage_menu.png">
            </span>
            <span>订单YFGHKIJOJOIJGJHVHCJ</span>
          </div>
          <div class="order_list_top_right">
            <img src="../images/manage_status.png">
          </div>
        </div>
        <div class="order_list_middle">
          <div class="order_list_middle_left">店铺名称：</div>
          <div class="order_list_middle_center">
            <p>河北省保定市西昌路文明村25号6栋</p>
            <p>河北省保定市西昌路文明村25号6栋</p>
          </div>
          <div class="order_list_middle_right">
            <img src="../images/manage_soudan.png">
          </div>
        </div>
        <div class="order_list_bottom">
          <ul>
            <li>
              联系人：
              <span>张建</span>
            </li>
            <li>
              <p>
                联系电话：
                <span>13811166660</span>
              </p>
              <p>￥6600.00</p>
            </li>
          </ul>
        </div>
        <div class="order_list_bottoms">
          <ul>
            <li>
              总件数：
              <span>999</span>
            </li>
            <li>
              下单时间:
              <span>2019-04-28 13：25：30></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <ManageBottom></ManageBottom>
  </div>
</template>

<script>
import ManageHeader from "../components/ManageHeader";
import ManageBottom from "../components/ManageTabBarBottom";
export default {
  data() {
    return {
      title: "今日订单",
      value: "2019-04-28",
      selectedValue: ""
    };
  },
  components: { ManageHeader, ManageBottom },
  methods: {
    picker(){

    }
  }
};
</script>

<style scoped lang="scss">
.order_wrap {
  padding-bottom: 138px;
}
.manageChoose {
  width: 711px;
  min-height: 762px;
  font-size: 28px;
  padding-left: 39px;
  background: #fff;
  margin-top: 10px;
  ul li {
    display: flex;
    width: 100%;
    height: 91px;
    line-height: 91px;
    justify-content: space-between;
    border-bottom: 1px solid #dcdcdc;
    span {
      margin-right: 39px;
      input {
        width: 100%;
        border: none;
        line-height: 90px;
      }
    }
    span.check {
      width: 39px;
      height: 39px;
      border: 1px solid #dcdcdc;
      margin-top: 20px;
    }
  }
  ul li.left {
    justify-content: left;
  }
  .choosebtn {
    width: 384px;
    height: 90px;
    background: -webkit-linear-gradient(top, #fad961, #f76b1c);
    border-radius: 50px;
    color: #fff;
    text-align: center;
    line-height: 90px;
    margin-top: 39px;
    margin-left: 149px;
    margin-bottom: 48px;
  }
}
.manage_order {
  font-size: 26px;
  padding: 0px 39px;
  color: #666;
  .order_num {
    margin-bottom: 26px;
    ul li {
      float: left;
    }
    ul li:nth-of-type(2) {
      float: right;
    }
  }
  .order_list {
    width: 674px;
    min-height: 276px;
    background: #fff;
    padding-top: 21px;
    font-size: 22px;
    .order_list_top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 21px;
      padding: 0px 27px;
      .order_list_top_left {
        display: flex;
        line-height: 40px;
        span {
          display: inline-flex;
        }
        span:nth-of-type(1) {
          width: 38px;
          height: 38px;
          margin-right: 10px;
          img {
            width: 100%;
          }
        }
        span:nth-of-type(2) {
          font-size: 26px;
        }
      }
      .order_list_top_right {
        width: 100px;
        height: 44px;
        img {
          width: 100%;
        }
      }
    }
    .order_list_middle {
      display: flex;
      margin-bottom: 10px;
      color: #999999;
      padding: 0px 27px;
      .order_list_middle_left {
        width: 150px;
        color: #666;
      }
      .order_list_middle_center {
        width: 500px;
        font-size: 22px;
      }
      .order_list_middle_right {
        width: 68px;
        height: 34px;
        margin-left: 90px;
        img {
          width: 100%;
        }
      }
    }
    .order_list_bottom {
      display: flex;
      border-bottom: 1px solid #dcdcdc;
      padding: 0 0 10px 26px;
      ul li {
        display: flex;
        line-height: 40px;
        span {
          color: #999;
        }
        p {
          span {
            color: #999;
          }
        }
      }
      p:nth-of-type(2) {
        margin-left: 210px;
        color: #ff0304;
      }
    }
    .order_list_bottoms {
      // display: flex;
      padding: 0px 27px;
      ul li {
        float: left;
        line-height: 65px;
        span {
          color: #999;
        }
      }
      ul li:nth-of-type(2) {
        margin-left: 51px;
      }
    }
  }
}
</style>
