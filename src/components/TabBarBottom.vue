<template>
    <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="home" route="/">
            <img slot="icon" :src="selected==='home'?tabs[0][1]:tabs[0][0]">
            首页
        </mt-tab-item>
        <mt-tab-item id="choose" routw="/about">
            <img slot="icon" :src="selected==='choose'?tabs[1][1]:tabs[1][0]">
            选品
        </mt-tab-item>
        <mt-tab-item id="shopcar" route="/login">
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
            tabs:[
                [require('../images/home_grey.png'),require('../images/home_act.png')],
                [require('../images/top_grey.png'),require('../images/top_act.png')],
                [require('../images/earn_grey.png'),require('../images/earn_act.png')],
                [require('../images/my_grey.png'),require('../images/my_act.png')]
            ],
            selected:'home'
        }
    },
    created(){
        
    },
    methods:{
       
    },
    watch:{
        selected(newValue,oldValue){
            switch(newValue){
                case 'home':
                    this.$router.push('/home');
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

            }
            console.log(newValue,oldValue)
        }
    }
}
</script>
<style scoped lang="scss">
   .mint-tabbar>.mint-tab-item.is-selected {
        background-color: #eaeaea;
        color: green;
    }
</style>