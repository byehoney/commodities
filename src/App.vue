<template>
    <div id="app">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>
<script>
export default {
    data () {
        return {
            theme: 'red'
        }
    },
     computed: {
        themeClass() {
            return `theme-${this.theme}`;
        }
    },
}
</script>
<style lang="scss">
@import "./node_modules/normalize.css/normalize";
@import "style/common.scss";
body{
    -webkit-overflow-scrolling: touch;
}
html{
    background:rgba(235,235,235,1);
}
#app{
    background: #ebebeb;
}
.mint-toast.is-placemiddle{
  z-index: 10000!important;
}
// .drawer-layout .drawer-wrap .drawer{
//     background:linear-gradient(180deg,rgba(0,122,255,1) 0%,rgba(24,152,247,1) 100%)!important;
// }
.highcharts-credits{
    display: none;
}
</style>
