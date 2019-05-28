export default {
    namespaced: true,
    state: {
        userRole:"",//用户注册角色编码
        psw:'',//用户注册用户密码
        rangeList:[],//用户注册选择经营范围
        intel:{
            intelName:'',//经营性质文案
            intelCode:'',//经营性质编码
            dIndex:0//默认选中的index
        }
    },
    mutations: {
        saveRole(state,userRole){//保存校色编码
            state.userRole = userRole
        },
        savePsw(state,psw){//保存密码
            state.psw = psw
        },
        saveIntel(state,data){//保存经营性质
            state.intel.intelName = data.name;
            state.intel.intelCode = data.code;
            state.intel.dIndex = data.dIndex
        },
        saveRange(state,range){//保存经营范围
            state.rangeList = range;
        }
    },
    actions: {
    },
    getters: {
    }

}