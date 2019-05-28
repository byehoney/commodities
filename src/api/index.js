import { get, post,upload } from '@/axios/http.js';
function login(params) {
    return post('/mock/5cb48c7ed491cd741c54456f/base/login', params);
}
function uploadImage(params,handle) {
    return upload('https://up-z0.qiniup.com', params,handle)
}

function getUploadToken(params) {//获取图片上传token
    return post('/qiniu/get/token.do', params)
}
function getActorList(params){//获取注册角色列表
    return get('/userrole/get/list.do',params)
}
function getPropertyList(params){//获取注册经营性质
    return get('/properties/get/list.do',params)
}
function getIntelList(params){//获取注册资质信息
    return post('/qualification/get/list.do',params)
}
function getRangeList(params){//获取注册经营范围
    return get('/scope/get/list.do',params)
}
function getCityList(params) {
    return post('/city/all/list.do', params)
}
export {
    login,
    getUploadToken,
    uploadImage,
    getActorList,
    getPropertyList,
    getIntelList,
    getRangeList,
    getCityList
}
