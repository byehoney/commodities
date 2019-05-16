<template>
  <div class="header">
    <div class="header_logo" v-if="showlogo">
      <img src="../images/home/logo.png">
    </div>
    <div class="header_input">
      <input type="text" v-model="searchStr" placeholder="请输入烟花名称">
    </div>
    <div class="header_search" v-if="showlogo">
      <img src="../images/home/home_list.png">
    </div>
    <div class="header_search_copy" v-else>
      <ul>
        <li @click="SearchVal">搜索</li>
        <li @click="cancelSearch">取消</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      showlogo: true,
      searchStr: ""
    };
  },
  methods: {
    SearchVal(){
      if(this.searchStr.trim()){
        this.$emit("receve",this.searchStr.trim())
      }
    },
    cancelSearch(){
      this.$router.history.push('/');
    }
  },
  mounted() {
    if (this.data == "search") {
      this.showlogo = false;
    } else {
      this.showlogo = true;
    }
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
.header {
  width: 708px;
  height: 60px;
  background: linear-gradient(to right, #FF6238ed , #FF1240);
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
  width: 17px;
  height: 58px;
  float: right;
  margin-top: 5px;
}
.header_search img {
  width: 100%;
}
.header_search_copy ul li {
  float: left;
  color: #fff;
  font-size: 28px;
  margin-top: 15px;
  margin-left: 22px;
}
</style>
