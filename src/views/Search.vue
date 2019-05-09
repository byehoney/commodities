<template>
    <div>
        <div class="searchBox">
            <input v-model="searchStr" class="searchInput"  placeholder="请输入搜索内容"/>
            <div class="searchBtn" @click="SearchVal">搜索</div>
        </div>
        <ul>
            <li v-for="(item,index) in HistoryList" :key="index">
                {{item}}  <span @click="delSearch(index)">X</span>
            </li>
        </ul>
        <div>
            <span>{{D}}天</span>
            <span>{{H}}:</span>
            <span>{{M}}:</span>
            <span>{{S}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            searchStr:'',
            HistoryList:[],
            timer:null,
            D:0,
            H:0,
            M:0,
            S:0
        }
    },
    created(){
        let history = localStorage.getItem('HistoryList')?JSON.parse(localStorage.getItem('HistoryList').split(',')):[];
        this.HistoryList = history;
        // this.countTime();
    },
    mounted(){
        this.countTime();
    },
    components:{
        
    },
    methods:{
        SearchVal () {
            let val = this.searchStr.trim() // 清除空格
            if (this.HistoryList.length > 0) { // 有数据的话 判断
                if (this.HistoryList.indexOf(val) !== -1) { // 有相同的，先删除 再添加 
                    this.HistoryList.splice(this.HistoryList.indexOf(val), 1)
                    this.HistoryList.unshift(val)
                } else { // 没有相同的 添加
                    this.HistoryList.unshift(val)
                }
            } else { // 没有数据 添加
                this.HistoryList.unshift(val)
            }
            if (this.HistoryList.length > 6) { // 保留六个值
                this.HistoryList.pop()
            }
            localStorage.setItem('HistoryList', JSON.stringify(this.HistoryList))
        },
        delSearch(index){
            this.HistoryList.splice(index,1);
            localStorage.setItem('HistoryList', JSON.stringify(this.HistoryList))
        },
        countTime(){
            this.timer=setInterval(()=>{
                let endtime=new Date("2019/05/08,14:52:12").getTime();
                let nowtime = new Date().getTime();
                let leftsecond=parseInt((endtime-nowtime)/1000);
                if(leftsecond>=0){
                    this.D = parseInt(leftsecond/3600/24)<10?'0'+parseInt(leftsecond/3600/24):parseInt(leftsecond/3600/24);
                    this.H = parseInt((leftsecond/3600)%24)<10?'0'+parseInt((leftsecond/3600)%24):parseInt((leftsecond/3600)%24);
                    this.M = parseInt((leftsecond/60)%60)<10?'0'+parseInt((leftsecond/60)%60):parseInt((leftsecond/60)%60);
                    this.S = parseInt(leftsecond%60)<10?'0'+parseInt(leftsecond%60):parseInt(leftsecond%60);
                }else{
                    this.D = 0;
                    this.H = '00';
                    this.M = '00';
                    this.S = '00';
                    // clearInterval(this.timer);
                }
            },1000)
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