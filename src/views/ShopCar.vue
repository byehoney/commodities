<template>
    <div>
        <ShopCarHeader/>
        <ShopCarList/>
        <ShopCarFooter/>
        <!-- <TabBarBottom curTab="shopcar"/> -->
    </div>
</template>
<script>
import TabBarBottom from '@/components/TabBarBottom'
import ShopCarList from '@/components/ShopCarList'
import ShopCarHeader from '@/components/ShopCarHeader'
import ShopCarFooter from '@/components/ShopCarFooter'
export default {
    data(){
        return{

        }
    },
    components:{
        ShopCarList,
        ShopCarHeader,
        ShopCarFooter
    }
}
</script>