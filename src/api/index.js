import { get, post, upload } from '@/axios/http.js';
function login(params) {
    return post('/mock/5cb48c7ed491cd741c54456f/base/login', params);
}
function uploadImage(params, handle) {
    return upload('https://up-z0.qiniup.com', params, handle)
}

function getUploadToken(params) {//获取图片上传token
    return post('/qiniu/get/token.do', params)
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
function getHeatList(params) {//获取首页热门分类
    return post('/index/heat/list.do', params)
}
function getSpecialList(params) {//获取首页精品推荐
    return post('/index/boutique/list.do',params)
}
function secKill(params) {//获取首页限时秒杀
    return post('/index/spike/list.do',params)
}

export {
    login,
    getUploadToken,
    uploadImage,
    getActorList,
    getCompanyList,
    getFactoryList,
    getPartList,
    getRegShopList,
    getPropertyList,
    getIntelList,
    getRangeList,
    getCityList,
    getHeatList,
    getSpecialList,
    secKill

}
