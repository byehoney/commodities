<template>
    <div>
        <!-- <Car></Car> -->
        <TabBarBottom curTab="shopcar"/>
    </div>
</template>
<script>
import TabBarBottom from '@/components/TabBarBottom'
import Car from "@/components/car"
export default {
    data(){
        return{

        }
    },
    components:{
        TabBarBottom,
        Car
    }
}
</script>