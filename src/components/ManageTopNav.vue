<template>
    <div class="nav">
        <router-link class="leftIcon" :to="{name:'login',query:{redirect:$route.path}}">登录</router-link>
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
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="scss">
    .nav{
        width: 100%;
        height: 88px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        .leftIcon{
            width: 60px;
            position: absolute;
            top: 25px;
            left: 30px;
            font-size:28px;
            color:rgba(0,122,255,1);
            line-height:37px;
            letter-spacing:2px;
        }
        .title{
            font-size: 30px;
        }
    }
</style>
