<template>
  <div>
    <div class="header">
      <div class="header_logo">logo</div>
      <div class="header_input">
        <input type="text" placeholder="请输入烟花名称" value="3434">
      </div>
      <div class="header_search">搜</div>
    </div>
    <div class="loop_pic">
       
    </div>
    <!-- <DrawerLeft/> -->
  </div>
</template>
<script>
// @ is an alias to /src
import DrawerLeft from "@/components/DrawerLeft";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    DrawerLeft
  },
  async created() {
    // try {
    //     await getIndex({ pageSiza: 100, num: 10 });
    // } catch (err) {
    // }
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.header {
  width: 723px;
  height: 84px;
  background: #c32918;
  font-size: 25px;
  padding-top: 16px;
  padding-left: 27px;
}
.header_logo {
  width: 105px;
  height: 58px;
  /* margin-left:27px; */
  margin-top: 16px;
  float: left;
}
.header_input {
  width: 506px;
  height: 58px;
  border: 1px solid #fff;
  border-radius: 29px;
  float: left;
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
  margin-left: 42px;
  margin-top: 16px;
  float: left;
}
.loop_pic{
  width:750px;
  height: 300px;
  background: #ccc;
}
</style>
