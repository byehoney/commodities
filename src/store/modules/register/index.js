export default {
    namespaced: true,
    state: {
        userRole:"",//用户注册角色编码
        psw:'',//用户注册用户密码
        rangeList:[],//用户注册选择经营范围
    },
    mutations: {
        saveRole(state,userRole){
            state.userRole = userRole
        },
        savePsw(state,psw){
            state.psw = psw
        },
        saveRange(state,range){
            state.rangeList = range;
        }
    },
    actions: {
    },
    getters: {
    }

}