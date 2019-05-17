<template>
    <div class="nav">
        <img src="../images/leftArrow.png" class="leftIcon" alt="">
        <span class="title">{{title}}</span>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:''
        }
    },
    mounted() {
      this.title = this.$router.currentRoute.meta.title
    }
}
</script>
<style lang="scss">
    .nav{
        width: 100%;
        height: 132px;
        text-align: center;
        position: relative;
        .leftIcon{
            width: 17px;
            height: 30px;
            position: absolute;
            top: 51px;
            left: 30px;
        }
        .title{
            font-size: 30px;
        }
    }
</style>
