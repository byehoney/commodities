<template>
  <div>
    <ManageHeader :title="title"></ManageHeader>
    <div class="manageChoose">
          <ul>
              <li></li>
          </ul>
    </div>
  </div>
</template>

<script>
import ManageHeader from "../components/ManageHeader"
export default {
    data(){
        return{
            title:"今日订单"
        }
    },
    components:{ManageHeader}
};
</script>

<style scoped lang="scss">
.manageChoose{
    width: 750px;
    min-height: 462px;
}
</style>
