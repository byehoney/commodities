<template>
    <div>
        <CityPicker />
        <TabBarBottom curTab="my"/>
    </div>
</template>
<script>
import TabBarBottom from '@/components/TabBarBottom'
import CityPicker from '@/components/CityPicker'
export default {
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