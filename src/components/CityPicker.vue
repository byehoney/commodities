<template>
  <div class="index">
    <div class="page-content">
      <!-- <mt-cell class="sel_text" title="所在地区" :value="areaString" is-link @click.native="handlerArea"></mt-cell> -->
      <!-- <div class="sel_item">
        <div class="sel_shop" @click="handlerArea">
          <div class="left">所在地区</div>
          <div class="right">
            <span>{{areaString}}</span>
            <img src="../images/arrow_right.png" alt>
          </div>
        </div>
      </div> -->
      <mt-popup v-model="areaVisible" class="area-class" position="bottom">
        <mt-picker
          :slots="slots"
          :showToolbar="true"
          ref="picker"
          value-key="name"
          @change="onValuesChange"
        >
          <div class="barContent">
            <div @click="handleCancel" class="cancel">取消</div>
            <div class="tip">选择省市区</div>
            <div @click="handleConfirm" class="sure">确认</div>
          </div>
        </mt-picker>
      </mt-popup>
    </div>
  </div>
</template>

<script>
// 导入数据
import data from "@/utils/pca_code.json";
let index = 0;
let index2 = 0;
// 初始化省
let province = data.map(res => {
  return res.name;
});
// 初始化市
let city = data[index].children.map(res => {
  return res.name;
});
// 初始化区
let area = data[index].children[index2].children.map(res => {
  return res.name;
});
export default {
  name: "index",
  data() {
    return {
      // areaVisible: false,
      areaString: "请选择",
      slots: [
        {
          flex: 1,
          values: province,
          className: "slot1",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: city,
          className: "slot3",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot4"
        },
        {
          flex: 1,
          values: area,
          className: "slot5",
          textAlign: "center"
        }
      ],
      Slot: "选择省市区"
    }
  },
  props:['areaVisible','setArea','cancel'],
  methods: {
    handleConfirm() {
      this.areaString =
        this.$refs.picker.getValues()[0] +
        "," +
        this.$refs.picker.getValues()[1] +
        "," +
        this.$refs.picker.getValues()[2];
      this.setArea(this.areaString)
    },
    handleCancel() {
      this.cancel();
    },
    onValuesChange(picker, values) {
      let one = values[0];
      let two = values[1];
      let three = values[2];
      index = province.indexOf(one);
      if (index >= 0 && province.length > 0) {
        city = data[index].children.map(res => {
          return res.name;
        });
        picker.setSlotValues(1, city);
        two = values[1];
      }
      index2 = city.indexOf(two);
      if (index2 >= 0 && city.length > 0) {
        area = data[index].children[index2].children.map(res => {
          return res.name;
        });
        picker.setSlotValues(2, area);
        three = values[2];
      }
      //   this.areaString = values.join(',')
    }
  }
};
</script>
<style scoped lang="scss">
.page-content {
  .sel_item {
    padding-left: 39px;
    background-color: #fff;
  }
  .sel_shop {
    height: 122px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 26px;
    color: rgba(102, 102, 102, 1);
    line-height: 35px;
    letter-spacing: 1px;
    border-bottom: 2px solid #ebebeb;
    .right {
      display: flex;
      align-items: center;
      span {
        margin-right: 30px;
      }
      img {
        width: 17px;
        height: 30px;
        position: relative;
        top: 2px;
        margin-right: 47px;
      }
    }
  }
  .sel_text {
    font-size: 26px;
    color: rgba(102, 102, 102, 1);
    letter-spacing: 1px;
  }
  .mint-cell {
    height: 122px;
    display: flex;
    align-items: center;
    padding: 0 47px 0 39px;
    .mint-cell-wrapper {
      height: 100%;
      border-bottom: 2px solid #ebebeb;
      padding: 0;
    }
  }
}
.area-class {
  width: 100%;
  height: 35%;
}
.picker .picker-toolbar {
  height: 96px !important;
  border-bottom: 2px solid #ebebeb;
}
.barContent {
  width: 100%;
  height: 96px;
  border-bottom: 2px solid #ebebeb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 38px;
  color: #666;
  background-color: #fff;
  .cancel,
  .sure {
    height: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    font-size: 26px;
    color: rgba(102, 102, 102, 1);
    letter-spacing: 2px;
  }
  .sure {
    color: #ff0000;
  }
  .tip {
    font-size: 30px;
    color: rgba(51, 51, 51, 1);
    letter-spacing: 3px;
  }
}
</style>
