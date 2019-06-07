<template>
  <!-- 选择赠品 -->
  <div>
    <div>
      <mt-header title="选择赠品" class="shopgift_header">
        <router-link to="/shopcar" slot="left">
          <mt-button icon="back" class="text"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="shopgift_subheader">
        <h3>组合满10件可选择以下商品</h3>
    </div>
    <div class="shopgift_list" v-for="(item,index) in list.product" :key="index">
          <div
              class="list_shopcar_circle"
              :class="item.checked?'checked':''"
            ></div>
        <div class="shopgift_list_pic">44</div>
        <div class="shopgift_list_text">
            <div class="shopgift_text_top">
                <h3>{{item.name}}</h3>
                <p>{{item.address}}</p>
                <p>{{item.sum}}</p>
            </div>
            <div class="shopgift_text_bottom">
                <ul>
                    <li>{{item.price}}</li>
                    <li>{{item.num}}</li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            list:{
                "checked":true,
                "product":[
                    {
                        "name":"赠品冷焰火",
                        "address":"河北保定星星烟花制造厂",
                        'sum':"规格：35g*1支",
                        "price":"￥0.00",
                        "num":"2"
                    },{
                        "name":"赠品冷焰火",
                        "address":"河北保定星星烟花制造厂",
                        'sum':"规格：35g*1支",
                        "price":"￥0.00",
                        "num":"3"
                    }
                ]
            }
        }
    }
};
</script>

<style scoped lang="scss">
.shopgift_header{
    background: #fff;
    color:#333333;
    font-size:30px;
    .text{
        font-size: 30px;
    }
}
.list_shopcar_circle {
  width: 40px;
  height: 40px;
  background: url("../images/car_circle.png") no-repeat center;
  background-size: 100%;
  margin-right: 8px;
  float: left;
}
.checked {
  background: url("../images/car_checkcircle.png") no-repeat center;
  background-size: 100%;
}
</style>
