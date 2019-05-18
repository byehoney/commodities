import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from 'store/index'
Vue.use(Router)
const router = new Router({
    // mode:"history",
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: '首页',
                auth: false, // 是否需要登录
                keepAlive: true // 是否缓存组件
            }
        }, {

            path: "/list",
            name: "list",
            component: () =>
                import(/* webpackChunkName: "choose" */ './views/List.vue')
        }, {
            path: "/detail",
            name: "detail",
            component: () =>
                import(/* webpackChunkName: "choose" */ './views/Detail.vue')
        },{
            path: "/flashdetail",
            name: "flashdetail",
            component: () =>
                import(/* webpackChunkName: "choose" */ './views/FlashDetail.vue') 
        },{
            path: "/watch",
            name: "watch",
            component: () =>
                import(/* webpackChunkName: "choose" */ './views/watch.vue') 
        },
        {
            path: '/choose',
            name: 'choose',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "choose" */ './views/Choose.vue'),
            meta: {
                auth: false,
                keepAlive: true
            }
        },
        {
            path: '/shopcar',
            name: 'shopcar',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "shopcar" */ './views/ShopCar.vue'),
            meta: {
                auth: false,
                keepAlive: true
            }
        },
        {
            path: '/my',
            name: 'my',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "my" */ './views/My.vue'),
            meta: {
                auth: true,
                keepAlive: true
            }
        },
        {
            path: '/search',
            name: 'search',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "search" */ './views/Search.vue'),
            meta: {
                auth: false,
                keepAlive: true
            }
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "about" */ './views/About.vue'),
            meta: {
                auth: true,
                keepAlive: true
            }
        },
        {
            path: '/baseInfo',
            name: 'baseInfo',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "baseInfo" */ './views/BaseInfo.vue'),
            meta: {
                auth: true,
                keepAlive: false,
                title: '个人中心',
            }
        },
        {
            path: '/address',
            name: 'address',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "address" */ './views/Address.vue'),
            meta: {
                auth: true,
                keepAlive: false
            }
        },
        {
            path: '/modiPass',
            name: 'modiPass',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "modiPass" */ './views/ModiPass.vue'),
            meta: {
                auth: false,
                keepAlive: false
            }
        },
        {
            path: '/modiTel',
            name: 'modiTel',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "modiTel" */ './views/ModiTel.vue'),
            meta: {
                auth: true,
                keepAlive: false,
                title:'更换手机号'
            }
        },
        {
            path: '/modiName',
            name: 'modiName',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "modiName" */ './views/ModiName.vue'),
            meta: {
                auth: true,
                keepAlive: false,
                title:'修改姓名'
            }
        },
        {
            path: '/register',
            name: 'register',
            component: () =>
                import(/* webpackChunkName: "register" */ './views/Register.vue'),
            meta: {
                auth: false,
                keepAlive: false,
                title:'用户注册'
            }
        },
        {
            path: '/registerActor',
            name: 'registerActor',
            component: () =>
                import(/* webpackChunkName: "registerActor" */ './views/RegisterActor.vue'),
            meta: {
                auth: false,
                keepAlive: false,
                title:'用户注册'
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import(/* webpackChunkName: "login" */ './views/login.vue'),
            meta: {
                auth: false,
                keepAlive: true
            }
        },
        {
             path:"/classify",
             name:"classify",
             component:()=>
             import("./views/Classify.vue")
        },
        {
            path: '*', // 未匹配到路由时重定向
            redirect: '/',
            meta: {
                // auth: true,
                // keepAlive: true
            }
        }
    ]
})

// 全局路由钩子函数 对全局有效
router.beforeEach((to, from, next) => {
    let auth = to.meta.auth
    let token = store.getters['login/token'];
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    if (auth) { // 需要登录
        if (token) {
            next()
        } else {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    } else {
        next()
    }
})
export default router
