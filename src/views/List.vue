<template>
  <div class="list_wrap">
    <LocalHeader/>
    <div class="shop_nav">
        <ul>
            <li>销量</li>
            <li>价格</li>
            <li>主推</li>
            <li>筛选</li>
        </ul>
    </div>
    <div class="shop_list">
      <ul>
        <li v-for="(item,index) in shopList" :key="index">
          <div class="shop_pic">
            <img src="">
          </div>
          <div class="shop_info">
            <div class="shop_title">{{item.title}}</div>
            <div class="shop_desc">{{item.desc}}</div>
            <div class="shop_content">
              <div class="shop_tag">
                <div class="shop_tag_list">
                  <span>{{item.tags}}</span>
                  <span>{{item.rebate}}</span>
                  <span>{{item.price}}</span>
                  <span>{{item.oldprice}}</span>
                </div>
              </div>
              <div class="shop_car">
                <img src=""/>
                <p>
                  <span></span>
                  <span></span>
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import LocalHeader from "@/components/Header";
export default {
  data(){
      return{
         shopList:[
             {
                 title:"烟花商品名称500g",
                 desc:"路尼克（广州）烟花制造厂",
                 tags:"星选",
                 rebate:"8.8折",
                 price:"$6.5",
                 oldprice:"8.8",
                 sale:"70"
             }
         ]
      }
  },
  components: {
    LocalHeader
  }
};
</script>

<style scoped>
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
.list_wrap{
    background: #e5e5e5
}
.shop_nav{
    width:704px;
    height:43px;
    background:#fff;
    padding:25px 46px;
    margin-bottom:6px;
}
.shop_nav ul li{
    float: left;
    font-size: 28px;
    line-height: 28px;
    margin-right: 138px;
    color:#333
}
.shop_nav ul li:last-child{
    margin-right:0
}
.shop_list{
    width:702px;
    background: #fff;
    padding:11px 24px
}
.shop_pic{
    width:207px;
    height: 207px;
    border: 1px solid #f00;
    float: left;
    margin-left:22px;
    margin-right:46px;
}
.shop_pic img{
    width:100%;
}
.shop_info{
    width:497px;
}
.shop_title{
    font-size: 28px;
    color:#333
}
.shop_desc{
    font-size:22px;
}
.shop_content{

}
.shop_tag_list{
    font-size:18px;
}
.shop_tag_list span{
    display: inline-block;
    border-radius: 4px;
}
.shop_tag_list span:nth-of-type(1),.shop_tag_list span:nth-of-type(2){
     width:60px;
     height:30px;
     background:#ffbe50;
     line-height: 30px;
     text-align: center;
     font-size: 18px;
     color:#fff;
     /* border-radius: 4px; */
     margin-right:10px;
}
.shop_tag_list span:nth-of-type(2){
    width:60px;
    height:30px;
    border:1px solid #f00;
    background: none;
    color:#f00
}
</style>
