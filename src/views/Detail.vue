<template>
  <div>
    <div class="detail_header">
      <div class="detail_back">返回</div>
      <div class="detail_title">商品详情</div>
    </div>
    <div class="detail_loop">
      <mt-swipe :auto="4000" class="detail_swipe">
        <mt-swipe-item class="item">1</mt-swipe-item>
        <mt-swipe-item class="item">2</mt-swipe-item>
        <mt-swipe-item class="item">3</mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.detail_header {
  width: 750px;
  min-height: 100px;
  background: #c32918;
  font-size: 30px;
  line-height: 100px;
  position: relative;
  color: #fff;
}
.detail_back {
  position: absolute;
  margin-left: 46px;
}
.detail_title {
  text-align: center;
}
.detail_loop{
    min-height: 540px;
}
.detail_swipe{
    min-height: 540px
}
.item{
    background: #f00;
    min-height: 540px;
}
</style>
