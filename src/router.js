import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
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
                auth: false,
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
