import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import filters from './filters/index'
import wechat from '@/common/wechat/index'
import VeLine from 'v-charts/lib/line.common'
import DrawerLayout from 'vue-drawer-layout'
import AwesomePicker from 'vue-awesome-picker';
import md5 from 'js-md5';
import "normalize.css"
import "@/style/reset.scss"
Vue.use(AwesomePicker);
Vue.use(DrawerLayout)
import {Header, Tabbar,Toast,Field, TabItem ,Picker,Cell,Popup,Button,InfiniteScroll,Swipe, SwipeItem} from 'mint-ui';
Vue.use(InfiniteScroll);
Vue.component(Field.name, Field);
Vue.component(VeLine.name, VeLine)
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Picker.name, Picker);
Vue.component(Cell.name, Cell);
Vue.component(Popup.name, Popup);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Popup.name, Popup);
Vue.component(Header.name, Header);
Vue.use(wechat);

Vue.prototype.$md5 = md5;
// 注入全局过滤器
Object.keys(filters).forEach(item => {
    Vue.filter(item, filters[item])
})
// const wx = Vue.wechat;
// wx.config({
//     appId: '',
//     nonceStr: '',
//     signature: '',
//     timestamp: '',
//     jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
// })
Vue.config.productionTip = false
Vue.config.devtools = true
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
