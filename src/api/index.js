import { get, post, upload } from '@/axios/http.js';
import store from 'store/index';
// let defaulParams = {};
// if(store.getters['login/token']){
//     defaulParams = {
//         token:store.getters['login/token'],
//         userId:store.getters['login/userId'],
//         corpCode:store.getters['login/corpCode'],
//         companyId:store.getters['login/companyId'],
//         userRole:store.getters['login/userRole'],
//     }
// }
// alert(JSON.stringify(defaulParams))
// function login(params) {
//     return post('/mock/5cb48c7ed491cd741c54456f/base/login', params);
// }
function uploadImage(params, handle) {
    return upload('https://up-z0.qiniup.com', params, handle)
}

function getUploadToken(params) {//获取图片上传token
    return post('/qiniu/get/token.do', params)
}
function getYzCode(params) {//获取验证码
    return post('/mobile/sendcode.do', params)
}
function checkYzCode(params) {//验证验证码
    return post('/mobile/check/code.do', params)
}
function checkExist(params) {//验证验证码
    return post('/login/check/mobile.do', params)
}
function login(params) {//用户登陆
    return post('/user/login.do', params)
}
function updateUserInfo(params){//更新用户信息  type: 1 修改头像  2 修改手机  3 修改用户名
    // let data = {...defaulParams,...params}
    return post('/user/update/info.do', params)
}
function forgetPass(params){//忘记密码  修改
    // let data = {...defaulParams,...params}
    return post('/user/update/password.do', params)
}
function getActorList(params) {//获取注册角色列表
    return get('/userrole/get/list.do', params)
}
function getCompanyList(params) {//获取注册角色列表
    return get('/register/sycompany/list.do', params)
}
function getFactoryList(params) {//获取注册角色列表
    return get('/register/cjcompany/list.do', params)
}
function getPartList(params) {//获取注册角色列表
    return get('/register/cjcompany/bument.do', params)
}
function getRegShopList(params) {//获取注册门店列表
    return post('/client/list/regioncode.do', params)
}
function checkTcode(params) {//校验推荐码是否正确
    return post('/code/check/status.do', params)
}
function getPropertyList(params) {//获取注册经营性质
    return get('/properties/get/list.do', params)
}
function getIntelList(params) {//获取注册资质信息
    return post('/qualification/get/list.do', params)
}
function getRangeList(params) {//获取注册经营范围
    return get('/scope/get/list.do', params)
}
function getCityList(params) {//地区选择获取数据
    return post('/city/all/list.do', params)
}
function joinRegister(params){//注册  加入门店类型
    return post('/register/add/client.do', params)
}
function creatRegister(params){//注册  创建门店类型
    return post('/register/create/client.do', params)
}
function getAddrList(params){//用户信息  获取收货地址列表
    // let data = {...defaulParams,...params}
    return post('/user/address/list.do', params)
}
function addNewAddr(params){//用户信息  新增收货地址
    // let data = {...defaulParams,...params}
    return post('/user/add/address.do', params)
}
function upDateAddr(params){//收货地址  更新收货地址  type:0 修改   1 删除
    // let data = {...defaulParams,...params}
    return post('/user/update/address.do', params)
}
function setDefaultAddr(params){//收货地址  设置默认
    // let data = {...defaulParams,...params}
    return post('/user/moren/address.do', params)
}
function getMyInfo(params){//我的页面  获取用户信息
    // let data = {...defaulParams,...params}
    return post('/user/get/info.do', params)
}
function getCompanyInfo(params){//我的页面  获取门店详细信息
    // let data = {...defaulParams,...params}
    return post('/client/get/info.do', params)
}
function addRelativeCompany(params){//我的页面  添加关联门店  
    // let data = {...defaulParams,...params}
    return post('/user/add/client.do', params)
}
function addRelativeCreate(params){//我的页面  添加关联门店  创建新门店
    // let data = {...defaulParams,...params}
    return post('/user/create/client.do', params)
}
function getChooseList(params){//选品列表
    // let data = {...defaulParams,...params}
    return post('/product/get/list.do', params)
}
function getChooseDetail(params){  //选品商品详情
    return post('/product/get/info.do',params)
}

function getMoreKindsMain(params){//获取更多分类里 大类
    return post('/search/product/select.do', params)
}
function getMoreKindsBranch(params){//获取更多分类里 小类
    return post('/search/select/detail.do', params)
}

function getOrdersList(params){//获取订单列表   type  0 全部 1 待发货 2 待收货 3 待评价 4 退货
    return post('/order/get/type.do', params)
}

function getOrderDetail(params){//获取订单详情  
    return post('/order/get/info.do', params)
}

function evaForOrder(params){//订单评价
    return post('/order/add/comment.do', params)
}
function getEvaList(params){//获取订单评价列表
    return post('/order/get/comment.do', params)
}
function getOrderStatuList(params){//根据订单状态获取对应列表
    return post('/order/pruduct/orderstatus.do', params)
}

function getViewLogist(params){//获取物流信息
    return post('/order/get/express.do', params)
}

function backGOods(params){//退货
    return post('order/status/tuihuo.do', params)
}

function getActivityInfo(params){//首页 是否显示套餐 买赠活动
    return post('/index/mztc/status.do', params)
}

function getMyUserOrderNum(params){//获取我的页面 各种订单状态数
    return post('/user/order/num.do', params)
}


function switchCompanyList(params){//首页切换门店 门店数据
    return post('/client/list/usercode.do', params)
}

function getSuitList(params){//获取套餐列表
    return post('/index/get/taocan.do', params)
}

function getSuitDetail(params){//获取套餐详情
    return post('/product/setmeal/detail.do', params)
}

function getBestGoodsList(params){//获取精品买赠列表
    return post('/index/get/maiz.do', params)
}

function getPub(params){//获取门店公告
    return post('/client/get/gongg.do', params)
}

function addToCar(params){//添加到购物车
    return post('/product/add/cart.do', params)
}

function delFromCar(params){//从购物车删除
    return post('/product/update/cart.do', params)
}
function getCarList(params){//获取购物车列表参数
    return post('/product/get/cartlist.do', params)
}

function getHeatList(params) {//获取首页热门分类
    // let data = {...defaulParams,...params}
    return post('/index/heat/list.do', params)
}
function getSpecialList(params) {//获取首页精品推荐
    // let data = {...defaulParams,...params}
    return post('/index/boutique/list.do',params)
}
function secKill(params) {//获取首页限时秒杀
    // let data = {...defaulParams,...params}
    return post('/index/spike/list.do',params)
}

export {
    checkExist,
    getYzCode,
    checkYzCode,
    login,
    addRelativeCompany,
    addRelativeCreate,
    updateUserInfo,
    getUploadToken,
    uploadImage,
    getActorList,
    getCompanyList,
    getFactoryList,
    getPartList,
    getRegShopList,
    checkTcode,
    getPropertyList,
    getIntelList,
    getRangeList,
    getCityList,
    joinRegister,
    creatRegister,
    forgetPass,
    getAddrList,
    addNewAddr,
    upDateAddr,
    setDefaultAddr,
    getMyInfo,
    getMyUserOrderNum,
    getCompanyInfo,
    getChooseList,
    getChooseDetail,
    getOrdersList,
    getOrderDetail,
    evaForOrder,
    getEvaList,
    getViewLogist,
    getOrderStatuList,
    switchCompanyList,
    getMoreKindsMain,
    getMoreKindsBranch,
    getActivityInfo,
    getBestGoodsList,
    backGOods,
    getPub,
    addToCar,
    delFromCar,
    getCarList,
    getSuitList,
    getSuitDetail,
    getHeatList,
    getSpecialList,
    secKill

}
