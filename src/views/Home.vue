<template>
  <DrawerLeft />
</template>
<script>
// @ is an alias to /src
import DrawerLeft from '@/components/DrawerLeft'
export default {
  name: "home",
  data(){
    return{
      
    }
  },
  components: {
    DrawerLeft
  },
  async created() {
    // try {
    //     await getIndex({ pageSiza: 100, num: 10 });
    // } catch (err) {
    // }
  },
  mounted() {},
  methods: {}
};
</script>
