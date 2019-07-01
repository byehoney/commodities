<template>
  <vue-drawer-layout
    ref="drawer"
    :z-index="10000000"
    @mask-click="handleMaskClick"
    :content-drawable="true">
    <div class="drawer" slot="drawer">
      <div class="text">This is drawer</div>
    </div>
    <div class="content" slot="content">
      <div class="main">
        <router-link to="/search"></router-link>
      </div>
      <!-- <TabBarBottom curTab="home" /> -->
    </div>
  </vue-drawer-layout>
</template>
<script>
// import TabBarBottom from '@/components/TabBarBottom'
export default {
    data(){
        return{
            
        }
    },
    porps:['isShowLeft'],
    components:{
        // TabBarBottom
    },
    mounted() {

    },
    methods:{
        handleMaskClick(){
          this.$refs.drawer.toggle(false)
        },
        showDrawerLeft(){
          this.$refs.drawer.toggle(true)
        }
    }

}
</script>
<style scoped lang="scss">
    .drawer-layout{
      // z-index: 100000;
    }
    .drawer{
      height: 100vh;
      background-color: #fff;
    }
</style>
