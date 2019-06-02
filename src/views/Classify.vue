<template>
  <div>
    <LocalHeader/>
    <div class="class">
      <div class="class_header">
        <div class="class_header_left">
          <span></span>
          <span>更多分类</span>
        </div>
        <!-- <div class="class_header_right">
            <span></span>
            <span>扫码文案</span>
        </div> -->
      </div>
      <div class="class_content">
        <ul>
          <li v-for="(item,index) in list" :key="index" @click="changeClass(index)">
            <div class="class_content_left">
              <div class="class_content_pic">
                <img :src="item.img"/>
                <span>{{item.title}}</span>
              </div>
            </div>

            <div class="class_content_right " :class="isActive==index?active_bg:''">
              <div :class='isActive==index?is_active:""'></div>
              <span v-for="(data,index) in item.data" :key="index">{{data.name}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import LocalHeader from "../components/Header";
export default {
  components: {
    LocalHeader
  },
  data() {
    return {
      isActive:0,
      is_active:"is_active",
      active_bg:"active_bg",
      list: [
        {
          title: "组合烟花",
          img:"../images/home/home_menu.png",
          data: [
            {
              name: "造型烟花"
            },
            {
              name: "造型烟花"
            },
            {
              name: "造型烟花"
            },
            {
              name: "造型烟花"
            }
          ]
        },
        {
          title: "喜琴鞭炮",
          img:"../images/home/home_menu1.png",
          data: [
            {
              name: "造型烟花"
            },
            {
              name: "造型烟花"
            },
            {
              name: "造型烟花"
            },
            {
              name: "造型烟花"
            }
          ]
        },
        {
          title: "日景烟花",
          img:"../images/home/home_menu2.png",
          data: [
            {
              name: "造型烟花"
            },
            {
              name: "造型烟花"
            },
            {
              name: "造型烟花"
            },
            {
              name: "造型烟花"
            }
          ]
        },
        {
          title: "冷烟花",
          img:"../images/home/home_menu3.png",
          data: [
            {
              name: "造型烟花"
            },
            {
              name: "造型烟花"
            },
            {
              name: "造型烟花"
            },
            {
              name: "造型烟花"
            }
          ]
        }
      ]
    };
  },
  methods:{
      changeClass(index){
          this.isActive=index
      }
  }
};
</script>

<style scoped>
.class {
  background: #e5e5e5;
  padding-top: 13px;
}
.class_header {
  width: 710px;
  min-height: 114px;
  background: #f8f8f8;
  margin-top: 93px;
  color: #333333;
  font-size: 28px;
  line-height: 114px;
  padding-left: 40px;
}
.class_header span:nth-of-type(1) {
  background: url("../images/home/block.png") center 5px no-repeat;
  display: inline-block;
  width: 10px;
  height: 25px;
  margin-right: 8px;
}
.class_content ul li {
  min-height: 241px;
  border-bottom: 1px solid #d8d8d8;
}
.class_content_left {
  background: #fff;
  float: left;
  width: 225px;
  padding-top: 30px;
  min-height: 211px;
}
.is_active {
  width: 0;
  height: 0;
  border-width: 20px 20px 20px 0;
  border-style: solid;
  border-color: transparent #eb4546 transparent transparent; /*透明 灰 透明 透明 */
  position: absolute;
  left: -22px;
  top: 93px;
}
.active_bg {
  background: #f8f8f8 !important;
}
.class_content_right {
  float: left;
  width: 464px;
  min-height: 187px;
  font-size: 24px;
  color: #666;
  padding-left: 61px;
  padding-top: 54px;
  position: relative;
  background: #e5e5e5;
}
.class_content_right span {
  display: inline-block;
  min-width: 120px;
  line-height: 45px;
}
.class_content_right span:nth-of-type(1) {
  color: #b43726;
}
.class_content_pic {
  width: 115px;
  height: 115px;
  border-radius: 50%;
  font-size: 26px;
  text-align: center;
  margin-left: 40px;
}
.class_content_pic img {
  margin-bottom: 16px;
  width: 100%;
  height: 100%;
}
</style>
