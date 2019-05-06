<template>
    <div>
        <CityPicker />
        <TabBarBottom curTab="choose" />
    </div>
</template>
<script>
import TabBarBottom from '@/components/TabBarBottom'
import CityPicker from '@/components/CityPicker'
export default {
    name:'choose',
    data(){
        return{
            
        }
    },
    components:{
        TabBarBottom,
        CityPicker
    }
}
</script>