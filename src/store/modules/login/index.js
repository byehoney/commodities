import * as type from './mutations_types'
import { login } from 'api/index'
import { Toast } from 'mint-ui';
export default {
    namespaced: true,
    state: {
        token: localStorage.getItem('token') || '',
        user: JSON.parse(localStorage.getItem('userData')) || {userId:"13998120381",companyId:"000019",corpCode:"100",password:"02f7bc6992a52c06fce2c75ed5e711a9",userRole:"06",userName:"曹辉",user_hp:''}
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
            state.user.user_hp=payload;
            let userDate = state.user;
            localStorage.setItem('userData', JSON.stringify(userDate))
        }
    },
    actions: {
        async login(state, data) {
            try {
                let res = await login({
                    username: data.username,
                    password: data.password
                })
                state.commit(type.LOGIN, res);
                Toast({
                    message: '登录成功',
                    position: 'middle',
                    duration: 2000
                });
                setTimeout(() => {
                    const redirect = data.$route.query.redirect || '/';
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
        user(state) {
            console.log('state', state);
            return state.user
        }
    }
}
