export default {
    namespaced: true,
    state: {
        userRole:"",//用户注册角色编码
        psw:'',//用户注册用户密码
        rangeList:[],//用户注册选择经营范围
        intel:{
            intelName:'请选择',//经营性质文案
            intelCode:'',//经营性质编码
            dIndex:0,//默认选中的index
            aptitudeList:[]//上传的资质信息 包括code和图片路径
        },
        joinInfo:{
            pCode:'',//省编码
            cCode:'',//市编码
            aCode:'',//区域编码
            shopCode:'',//门店编码
            addr:'',//注册选择的加入门店地址（省市区）
            shopName:''//注册选择加入的门店名称
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
            state.intel.dIndex = data.dIndex;
            state.intel.aptitudeList = data.aptitudeList;
        },
        restIntel(state){
            state.intel.intelName = '请选择';
            state.intel.intelCode = '';
            state.intel.dIndex = 0;
            state.intel.aptitudeList = [];
        },
        saveRange(state,range){//保存经营范围
            state.rangeList = range;
        },
        saveJoinInfo(state,data){
            state.joinInfo.pCode = data.pCode;
            state.joinInfo.cCode = data.cCode;
            state.joinInfo.aCode = data.aCode;
            state.joinInfo.shopCode = data.shopCode;
            state.joinInfo.addr = data.addr;
            state.joinInfo.shopName = data.shopName;
        }
    },
    actions: {
    },
    getters: {
    }

}