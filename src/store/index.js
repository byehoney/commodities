import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login/index'
import index from './modules/index/index'
import shopCar from "./modules/shopCar/index"
Vue.use(Vuex)
export default new Vuex.Store({
    modules: { login, index ,shopCar}
})
