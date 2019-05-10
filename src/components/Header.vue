<template>
    <div class="header">
      <div class="header_logo">
        <img src="../images/home/logo.png">
      </div>
      <div class="header_input">
        <input type="text" placeholder="请输入烟花名称" value>
      </div>
      <div class="header_search">
        <img src="../images/home/sousuo.png">
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  width: 708px;
  height: 60px;
  background: #c32918;
  font-size: 25px;
  padding: 20px 21px;
}
.header_logo {
  width: 105px;
  height: 58px;
  float: left;
}
.header_logo img {
  width: 100%;
}
.header_input {
  width: 506px;
  height: 58px;
  border: 1px solid #fff;
  border-radius: 29px;
  float: left;
  margin: 0 21px;
}
.header_input input {
  width: 100%;
  height: 58px;
  outline: none;
  border: none;
  padding-left: 27px;
  border-radius: 29px;
  background: #fff;
}
.header_search {
  width: 34px;
  height: 34px;
  float: right;
  margin-top: 15px;
}
.header_search img {
  width: 100%;
}
</style>
