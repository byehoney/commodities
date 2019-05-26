import { get, post,upload } from '@/axios/http.js';
function getIndex (params) {
    return get('/mock/5cb48c7ed491cd741c54456f/base/index', params);
}
function login(params) {
    return post('/mock/5cb48c7ed491cd741c54456f/base/login', params);
}
function uploadImage(params,handle) {
    return upload('https://testservice.chetuobang.com/api/opencar/map/uploadTraffic', params,handle)
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

export {
    getIndex,
    login,
    uploadImage,
    getActorList,
    getPropertyList,
    getIntelList,
    getRangeList
}
