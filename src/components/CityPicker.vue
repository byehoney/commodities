<template>
  <div class="index">
    <div class="page-content">
      <mt-cell title="省市区:" :value="areaString" is-link @click.native="handlerArea"></mt-cell>
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
import data from '@/utils/pca_code.json'
let index = 0
let index2 = 0
// 初始化省
let province = data.map(res => {
  return res.name
})
// 初始化市
let city = data[index].children.map(res => {
  return res.name
})
// 初始化区
let area = data[index].children[index2].children.map(res => {
  return res.name
})
export default {
  name: 'index',
  data() {
    return {
      areaVisible: false,
      areaString: '请选择',
      slots: [{
        flex: 1,
        values: province,
        className: 'slot1',
        textAlign: 'center'
      }, {
        divider: true,
        content: '-',
        className: 'slot2'
      }, {
        flex: 1,
        values: city,
        className: 'slot3',
        textAlign: 'center'
      }, {
        divider: true,
        content: '-',
        className: 'slot4'
      }, {
        flex: 1,
        values: area,
        className: 'slot5',
        textAlign: 'center'
      }],
      Slot:'选择省市区'
    }
  },
  methods: {
    handleConfirm(){
        this.areaString = this.$refs.picker.getValues()[0]+','+this.$refs.picker.getValues()[1]+','+this.$refs.picker.getValues()[2]
        this.areaVisible = false
    },
    handleCancel(){
        this.areaVisible = false
    },
    handlerArea() {
        this.areaVisible = true
    },
    onValuesChange(picker, values) {
        let one = values[0]
        let two = values[1]
        let three = values[2]
        index = province.indexOf(one)
        if (index >= 0 && province.length > 0) {
            city = data[index].children.map(res => {
                return res.name
            })
            picker.setSlotValues(1, city)
            two = values[1]
        }
        index2 = city.indexOf(two)
        if (index2 >= 0 && city.length > 0) {
            area = data[index].children[index2].children.map(res => {
                return res.name
            })
            picker.setSlotValues(2, area)
            three = values[2]
        } 
        //   this.areaString = values.join(',')
    }
  }
}
</script>
<style scoped lang="scss">
    .area-class {
        width: 100%;
        height: 35%;
    }
    .barContent{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 38px;
        color:#666;
        .cancel,.sure{
            height: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding:0 30px;
        }
        .sure{
            color:#3089dc;
        }
    }
</style>
