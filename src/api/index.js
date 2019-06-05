import { get, post, upload } from '@/axios/http.js';
import store from 'store/index';
let defaulParams = {};
if(store.getters['login/token']){
    defaulParams = {
        token:store.getters['login/token'],
        userId:store.getters['login/userId'],
        corpCode:store.getters['login/corpCode'],
        companyId:store.getters['login/companyId'],
        userRole:store.getters['login/userRole'],
    }
}
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
    let data = {...defaulParams,...params}
    return post('/user/update/info.do', data)
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
    return post('/user/address/list.do', params)
}
function addNewAddr(params){//用户信息  新增收货地址
    return post('/user/add/address.do', params)
}
function getMyInfo(params){//我的页面  获取用户信息
    let data = {...defaulParams,...params}
    return post('/user/get/info.do', data)
}
function getCompanyInfo(params){//我的页面  获取门店详细信息
    let data = {...defaulParams,...params}
    return post('/client/get/info.do', data)
}
function addRelativeCompany(params){//我的页面  添加关联门店
    let data = {...defaulParams,...params}
    return post('/user/add/client.do', data)
}
function getChooseList(params){//选品列表
    let data = {...defaulParams,...params}
    return post('/product/get/list.do', data)
}
function switchCompanyList(params){//首页切换门店 门店数据
    let data = {...defaulParams,...params}
    return post('/client/list/usercode.do', data)
}
function getHeatList(params) {//获取首页热门分类
    let data = {...defaulParams,...params}
    return post('/index/heat/list.do', data)
}
function getSpecialList(params) {//获取首页精品推荐
    let data = {...defaulParams,...params}
    return post('/index/boutique/list.do',data)
}
function secKill(params) {//获取首页限时秒杀
    let data = {...defaulParams,...params}
    return post('/index/spike/list.do',data)
}

export {
    checkExist,
    getYzCode,
    checkYzCode,
    login,
    addRelativeCompany,
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
    getAddrList,
    addNewAddr,
    getMyInfo,
    getCompanyInfo,
    getChooseList,
    switchCompanyList,
    getHeatList,
    getSpecialList,
    secKill

}
