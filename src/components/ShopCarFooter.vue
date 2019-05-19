<template>
  <div>
    <mt-tabbar fixed class="shop_footer">
      <div class="shop_footer_left">
        <span></span>
        <span>全选</span>
      </div>
      <div class="shop_footer_right">
        <div class="shop_footer_price">
          <span>合计：</span>
          <span>¥</span>
          <span>0.00</span>
        </div>
        <div class="shop_footer_result">
          <img src="../images/result.png">
        </div>
      </div>
    </mt-tabbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.shop_footer {
  background: #fff !important;
  min-height: 98px;
  font-size: 26px;
  color: #666;
  .shop_footer_left {
    // float: left;
  }
  .shop_footer_right {
    // float: right;
  }
}
.shop_footer_result{
  width: 244px;
  height: 98px;
}
.shop_footer_result img {
  width: 100%;
}
</style>
