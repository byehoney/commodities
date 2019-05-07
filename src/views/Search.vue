<template>
    <div>
        <div class="searchBox">
            <input v-model="searchStr" class="searchInput"  placeholder="请输入搜索内容"/>
            <div class="searchBtn" @click="goSearch">搜索</div>
        </div>
        <ul>
            <li v-for="(item,index) in searchArr" :key="index">
                {{item}}  <span @click="delSearch(index)">X</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            searchStr:'',
            searchArr:[],
        }
    },
    created(){
        let history = localStorage.getItem('searchHistory')?localStorage.getItem('searchHistory').split(','):[];
        history = this.uniq(history);
        this.searchArr = history;
    },
    components:{
        
    },
    methods:{
        goSearch(){
            let history = localStorage.getItem('searchHistory')?localStorage.getItem('searchHistory'):'';
            if(this.searchStr!=''){
                console.log(history)
                if(history){
                    history+=','+this.searchStr;
                }else{
                    history=this.searchStr;
                }
                                
                history = history.split(',');
                let rec = history;
                this.searchArr = rec.reverse();
                localStorage.setItem('searchHistory',history.join(','))
            }
        },
        delSearch(index){
            let history = localStorage.getItem('searchHistory').split(',');
            history.splice(index,1);
            console.log(history)
            localStorage.setItem('searchHistory',history.join(','))
            this.searchArr = history;
        },
        uniq(array){
            var temp = []; //一个新的临时数组
            for(var i = 0; i < array.length; i++){
                if(temp.indexOf(array[i]) == -1){
                    temp.push(array[i]);
                }
            }
            return temp;
        }
    }
}
</script>
<style lang="scss" scoped>
    .searchBox{
        display: flex;
        justify-content: space-between;
        font-size: 50px;
        align-items: center;
    }
    .searchInput{
        font-size: 40px;
        width: 80%;
        margin: 20px auto;
        height: 80px;
        border: 2px solid #e9e9e9;
        display: block;

    }
</style>