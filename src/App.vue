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
    background: #e5e5e5
}
</style>
