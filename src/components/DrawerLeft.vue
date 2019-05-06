<template>
  <vue-drawer-layout
    ref="drawer"
    @mask-click="handleMaskClick"
    :content-drawable="true">
    <div class="drawer" slot="drawer">
      <div class="text">This is drawer</div>
    </div>
    <div class="content" slot="content">
      <div class="text">This is content.</div>
    </div>
  </vue-drawer-layout>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        handleMaskClick(){
            console.log(this)
            this.$refs.drawer.toggle(false)
        }
    }

}
</script>
<style scoped lang="scss">
    .drawer {
        font-size: 50px;
    }
</style>
