<template>
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
        <li>
          <span>门店名称:</span>
          <span>
            <input type="text" placeholder="请输入门店名称">
          </span>
        </li>
      </ul>
      <div class="choosebtn">查询</div>
    </div>
    <!-- 门店列表 -->
    <div class="manageChooseList">
      <ul>
        <li v-for="(item,index) in chooseList" :key="index">
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
      },
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
      this.$refs.picker.display=false
    console.log(this.$refs.picker)
      this.value = this.Y +  this.M + this.D;

    
    }
  }
};
</script>

<style scoped lang="scss">
.manageChoose {
  width: 711px;
  min-height: 462px;
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
  }
  ul li:nth-of-type(3) {
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
  }
}
.manageChooseList {
  font-size: 22px;
  color: #333333;
  background: #fff;
  margin-top: 10px;
  padding-left: 42px;
  ul li {
    display: flex;
    height: 100px;
    padding-top: 38px;
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
