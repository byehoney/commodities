import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from 'store/index'
Vue.use(Router)
const router = new Router({
    // mode:"hash",
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return { x: 0, y: savedPosition }
        }
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: '首页',
                auth: false, // 是否需要登录
                keepAlive: false // 是否缓存组件
            }
        }, {

            path: "/list",
            name: "list",
            component: () =>
                import(/* webpackChunkName: "list" */ './views/List.vue')
        }, {
            path: "/detail",
            name: "detail",
            component: () =>
                import(/* webpackChunkName: "detail" */ './views/Detail.vue')
        }, {
            path: "/flashdetail",
            name: "flashdetail",
            component: () =>
                import(/* webpackChunkName: "flashdetail" */ './views/FlashDetail.vue')
        }, {
            path: "/watch",
            name: "watch",
            component: () =>
                import(/* webpackChunkName: "watch" */ './views/watch.vue')
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
                keepAlive: true,
                canKeep: false
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
                keepAlive: false
            }
        },
        {
            path: "/choosegift",
            name: "choosegift",
            component: () =>
                import("./views/ChooseGift.vue")
        },
        {
            path: "/public",
            name: "public",
            component: () =>
                import("./views/public.vue")
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
                keepAlive: false
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
                keepAlive: false
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
                keepAlive: false
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
                auth: false,
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
                auth: false,
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
                title: '更换手机号'
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
                title: '修改姓名'
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
                title: '用户注册'
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
                title: '用户注册'
            }
        },
        {
            path: '/joinShop',
            name: 'joinShop',
            component: () =>
                import(/* webpackChunkName: "joinShop" */ './views/JoinShop.vue'),
            meta: {
                auth: false,
                keepAlive: false,
                title: '加入门店'
            }
        },
        {
            path: '/creatNewShop',
            name: 'creatNewShop',
            component: () =>
                import(/* webpackChunkName: "creatNewShop" */ './views/CreatNewShop.vue'),
            meta: {
                auth: false,
                keepAlive: false,
                title: '创建新门店'
            }
        },
        {
            path: '/salerInfo',
            name: 'salerInfo',
            component: () =>
                import(/* webpackChunkName: "salerInfo" */ './views/SalerInfo.vue'),
            meta: {
                auth: false,
                keepAlive: false,
                title: '人员信息'
            }
        },
        {
            path: '/intelInfo',
            name: 'intelInfo',
            component: () =>
                import(/* webpackChunkName: "intelInfo" */ './views/IntelInfo.vue'),
            meta: {
                auth: false,
                keepAlive: false,
                title: '资质信息'
            }
        },
        {
            path: '/businessScope',
            name: 'businessScope',
            component: () =>
                import(/* webpackChunkName: "businessScope" */ './views/BusinessScope.vue'),
            meta: {
                auth: false,
                keepAlive: false,
                title: '经营范围'
            }
        },
        {
            path: '/pcLogin',
            name: 'pcLogin',
            component: () =>
                import(/* webpackChunkName: "pcLogin" */ './views/PcLogin.vue'),
            meta: {
                auth: false,
                keepAlive: false,
                title: 'PC登录'
            }
        },
        {
            path: '/forgetPas',
            name: 'forgetPas',
            component: () =>
                import(/* webpackChunkName: "forgetPas" */ './views/ForgetPas.vue'),
            meta: {
                auth: false,
                keepAlive: false,
                title: '忘记密码'
            }
        },
        {
            path: '/addNewAdr',
            name: 'addNewAdr',
            component: () =>
                import(/* webpackChunkName: "addNewAdr" */ './views/AddNewAdr.vue'),
            meta: {
                auth: false,
                keepAlive: false,
                title: '新增收货地址'
            }
        },
        {
            path: '/refuseList',
            name: 'refuseList',
            component: () =>
                import(/* webpackChunkName: "refuseList" */ './views/RefuseList.vue'),
            meta: {
                auth: true,
                keepAlive: false,
                title: '厂家拒开列表'
            }
        },
        {
            path: '/myOrders',
            name: 'myOrders',
            component: () =>
                import(/* webpackChunkName: "myOrders" */ './views/MyOrders.vue'),
            meta: {
                auth: false,
                keepAlive: true,
                title: '我的订单',
                canKeep: false
            }
        },
        {
            path: '/confirmOrders',
            name: 'confirmOrders',
            component: () =>
                import(/* webpackChunkName: "confirmOrders" */ './views/ConfirmOrders.vue'),
            meta: {
                auth: false,
                keepAlive: true,
                title: '确认订单',
                canKeep: false
            }
        },
        {
            path: '/hasEva',
            name: 'hasEva',
            component: () =>
                import(/* webpackChunkName: "hasEva" */ './views/HasEva.vue'),
            meta: {
                auth: true,
                keepAlive: false,
                title: '已评价'
            }
        },
        {
            path: '/evaForOrder',
            name: 'evaForOrder',
            component: () =>
                import(/* webpackChunkName: "evaForOrder" */ './views/EvaForOrder.vue'),
            meta: {
                auth: true,
                keepAlive: false,
                title: '评价晒单'
            }
        },
        {
            path: '/viewLogist',
            name: 'viewLogist',
            component: () =>
                import(/* webpackChunkName: "viewLogist" */ './views/ViewLogist.vue'),
            meta: {
                auth: true,
                keepAlive: false,
                title: '订单物流'
            }
        },
        {
            path: '/waiteGet',
            name: 'waiteGet',
            component: () =>
                import(/* webpackChunkName: "waiteGet" */ './views/WaiteGet.vue'),
            meta: {
                auth: false,
                keepAlive: false,
                title: '待收货'
            }
        },
        {
            path: '/waiteSend',
            name: 'waiteSend',
            component: () =>
                import(/* webpackChunkName: "waiteSend" */ './views/WaiteSend.vue'),
            meta: {
                auth: false,
                keepAlive: false,
                title: '待发货'
            }
        },
        {
            path: '/returnGoods',
            name: 'returnGoods',
            component: () =>
                import(/* webpackChunkName: "returnGoods" */ './views/ReturnGoods.vue'),
            meta: {
                auth: false,
                keepAlive: false,
                title: '退货'
            }
        },
        {
            path: '/applyReturn',
            name: 'applyReturn',
            component: () =>
                import(/* webpackChunkName: "applyReturn" */ './views/ApplyReturn.vue'),
            meta: {
                auth: false,
                keepAlive: true,
                title: '申请退货'
            }
        },
        {
            path: '/orderDetail',
            name: 'orderDetail',
            component: () =>
                import(/* webpackChunkName: "orderDetail" */ './views/OrderDetail.vue'),
            meta: {
                auth: true,
                keepAlive: false,
                title: '订单详情'
            }
        },
        {//空白页 做路由跳转
            path: '/blank',
            name: 'blank',
            component: () =>
                import(/* webpackChunkName: "blank" */ './views/Blank.vue'),
            meta: {
                auth: false,
                keepAlive: false,
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import(/* webpackChunkName: "login" */ './views/login.vue'),
            meta: {
                auth: false,
                keepAlive: false,
                title: '登录'
            }
        },
        {
            path: '/hotSuit',
            name: 'hotSuit',
            component: () =>
                import(/* webpackChunkName: "hotSuit" */ './views/HotSuit.vue'),
            meta: {
                auth: false,
                keepAlive: true,
                title: '人气套餐'
            }
        },
        {
            path: '/suitDetail',
            name: 'suitDetail',
            component: () =>
                import(/* webpackChunkName: "suitDetail" */ './views/SuitDetail.vue'),
            meta: {
                auth: false,
                keepAlive: true,
                title: '套餐详情'
            }
        },
        {
            path: '/bestGoods',
            name: 'bestGoods',
            component: () =>
                import(/* webpackChunkName: "bestGoods" */ './views/BestGoods.vue'),
            meta: {
                auth: true,
                keepAlive: true,
                title: '精品买赠'
            }
        },
        {
            path: '/manageHome',
            name: 'manageHome',
            component: () =>
                import(/* webpackChunkName: "manageHome" */ './views/ManageHome.vue'),
            meta: {
                auth: true,
                keepAlive: false,
                title: 'xx店铺'
            }
        },
        {
            path: '/salesTrend',//销售走向图
            name: 'salesTrend',
            component: () =>
                import(/* webpackChunkName: "salesTrend" */ './views/SalesTrend.vue'),
            meta: {
                auth: true,
                keepAlive: false,
                title: 'xx店铺'
            }
        },
        {
            path: '/manageSaleRank',//销售走向图
            name: 'manageSaleRank',
            component: () =>
                import(/* webpackChunkName: "manageSaleRank" */ './views/ManageSaleRank.vue'),
            meta: {
                auth: true,
                keepAlive: false,
                title: 'xx店铺'
            }
        },
        {
            path: '/agreement',
            name: 'agreement',
            component: () =>
                import(/* webpackChunkName: "agreement" */ './views/Agreement.vue'),
            meta: {
                auth: false,
                keepAlive: true,
                title: '人云科技软件服务及隐私协议'
            }
        },
        {
            path: "/classify",
            name: "classify",
            component: () =>
                import(/* webpackChunkName: "classify" */"./views/Classify.vue"),
            meta: {
                auth: true,
                keepAlive: true,
                title: '人云科技软件服务及隐私协议'
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
