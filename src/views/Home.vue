<template>
    <div class="home">
        <DrawerLeft />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import DrawerLeft from '@/components/DrawerLeft.vue';
import { getIndex } from 'api/index';
export default {
    name: 'home',
    components: {
        HelloWorld,
        DrawerLeft
    },
    async created() {
        try {
            await getIndex({ pageSiza: 100, num: 10 });
        } catch (err) {
        }
    },
    mounted() {},

    methods: {}
};
</script>
