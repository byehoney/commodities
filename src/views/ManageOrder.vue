<template>
  <!-- 今日订单 -->
  <div>
    <ManageHeader :title="title"></ManageHeader>
    <div class="manageChoose">
      <ul>
        <li>
          <span>开始时间:</span>
          <span @click="show">
            {{value}}
            <awesome-picker
              ref="picker"
              :textTitle="picker.textTitle"
              :type="picker.type"
              :anchor="picker.anchor"
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
      <div class="order_num">
        <ul>
          <li>今日首单数：8单</li>
          <li>今日首单数：8单</li>
        </ul>
      </div>
      <div class="order_list">
        <div class="order_list_top"></div>
        <div class="order_list_middle"></div>
        <div class="order_list_bottom"></div>
        <div class="order_list_bottoms"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ManageHeader from "../components/ManageHeader";
export default {
  data() {
    return {
      title: "今日订单",
      value: "2019-04-28",
      Y: "",
      M: "",
      D: "",
      picker: {
        anchor: [],
        textTitle: "日期选择器(内置)",
        type: "date"
      }
    };
  },
  components: { ManageHeader },
  methods: {
    show() {
      this.$refs.picker.show();
    },
    showPicker() {
      this.$refs.picker.show();
    },
    handlePickerConfirm(v) {
      console.log(v);
      this.Y = v[0].value;
      this.M = v[1].value;
      this.D = v[2].value;
      this.picker.anchor = v;
      this.$refs.picker.display = false;
      console.log(this.$refs.picker);
      this.value = this.Y + this.M + this.D;
    }
  }
};
</script>

<style scoped lang="scss">
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
  width: 100%;
  padding: 48px 39px;
  color: #666;
  .order_num {
    display: flex;
    ul li {
      // display: flex;
      // flex-wrap: nowrap;
      // flex-direction: row
      justify-content: space-between;
    }
  }
}
</style>
