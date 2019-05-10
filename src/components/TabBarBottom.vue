<template>
    <mt-tabbar v-model="selected" fixed class="bar">
        <mt-tab-item id="home">
            <img slot="icon" :src="selected==='home'?tabs[0][1]:tabs[0][0]">
            首页
        </mt-tab-item>
        <mt-tab-item id="choose">
            <img slot="icon" :src="selected==='choose'?tabs[1][1]:tabs[1][0]">
            选品
        </mt-tab-item>
        <mt-tab-item id="shopcar">
            <img slot="icon" :src="selected==='shopcar'?tabs[2][1]:tabs[2][0]">
            购物车
        </mt-tab-item>
        <mt-tab-item id="my">
            <img slot="icon" :src="selected==='my'?tabs[3][1]:tabs[3][0]">
            我的
        </mt-tab-item>
    </mt-tabbar>
</template>
<script>
export default {
    data(){
        return{
            selected:this.curTab,
            tabs:[
                [require('../images/home/shouye.png'),require('../images/home/shouye.png')],
                [require('../images/home/liebiao.png'),require('../images/home/liebiao.png')],
                [require('../images/home/shop.png'),require('../images/home/shop.png')],
                [require('../images/home/my.png'),require('../images/home/my.png')]
            ],
        }
    },
    props:{
        curTab: String,
    },
    activated(){
        this.selected = this.curTab;
    },
    created(){
        
    },
    methods:{
       
    },
    watch:{
        selected(newValue,oldValue){
            switch(newValue){
                case 'home':   
                    this.$router.push('/');
                break;
                case 'choose':
                    this.$router.push('/choose');
                break;
                case 'shopcar':
                    this.$router.push('/shopcar');
                break;
                case 'my':
                    this.$router.push('/my');
                break;
                default:
                    this.$router.push('/');
            }
        }
    }
}
</script>
<style scoped lang="scss">
   .mint-tabbar>.mint-tab-item.is-selected {
        background-color: #eaeaea;
        color: green;
    }
    .bar{
        height: 98px;
        background: #cc5145;
        color:#fff
    }
</style>