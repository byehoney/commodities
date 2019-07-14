import * as type from './mutations_types'
import { login } from 'api/index'
import { Toast } from 'mint-ui';
export default {
    namespaced: true,
    state: {
        token: localStorage.getItem('token') || '',
        user: JSON.parse(localStorage.getItem('userData')) || {},
        orderInfo:{list:[],mzList:[]},//购物车信息
        mzInfo:[],//确认订单的满赠赠品
    },
    mutations: {
        [type.LOGIN](state, data) {
            let userDate = data.data;
            state.token = userDate.token;
            state.user = userDate;
            localStorage.setItem('token', userDate.token)
            localStorage.setItem('userData', JSON.stringify(userDate))
        },
        [type.LOGOUT](state,payload){
            state.token='';
            state.user={};
            localStorage.removeItem('token');
            localStorage.removeItem('userData');
            payload.$router.replace({path:'/'})
        },
        [type.SETATV](state,payload){
            state.user.userHp=payload;
            let userDate = state.user;
            localStorage.setItem('userData', JSON.stringify(userDate))
        },
        saveCompany(state,id){
            state.user.companyId = id;
            let userDate = state.user;
            localStorage.setItem('userData', JSON.stringify(userDate))
        },
        saveUserName(state,name){
            state.user.userName = name;
            let userDate = state.user;
            localStorage.setItem('userData', JSON.stringify(userDate))
        },
        saveMobile(state,mobile){
            state.user.mobile = mobile;
            let userDate = state.user;
            localStorage.setItem('userData', JSON.stringify(userDate))
        },
        saveOrderInfo(state,data){
            state.orderInfo = data
        },
        saveMzInfo(state,data){
            state.mzInfo = data;
        },
        restOrderInfo(state){
            state.orderInfo={list:[],mzList:[]};
            state.mzInfo=[];
        }
    },
    actions: {
        async login(state, data) {
            try {
                let res = await login({
                    mobile: data.mobile,
                    passWord: data.password
                })
                state.commit(type.LOGIN, res);
                Toast({
                    message: '登录成功',
                    position: 'middle',
                    duration: 2000
                });
                setTimeout(() => {
                    let redirect = '/';
                    if(res.data.userRole =='06'||res.data.userRole =='07'){
                        redirect = '/';
                    }else{
                        redirect = '/manageHome'
                    }
                    data.$router.replace({
                        path: redirect
                    })
                }, 3000);
            } catch (error) {

            }
        },
        async setAtv(state, atv) {
            try {
                state.commit(type.SETATV,atv)
            } catch (error) {

            }
        }
    },
    getters: {
        token(state) {
            return state.token
        },
        userId(state){
            return state.user.userId
        },
        corpCode(state){
            return state.user.corpCode
        },
        companyId(state){
            return state.user.companyId
        },
        userRole(state){
            return state.user.userRole
        },
        user(state) {
            console.log('state', state);
            return state.user
        }
    }
}
