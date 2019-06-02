import * as type from './mutations_types'
export default {
    namespaced: true,
    state: {
        shopResult:true,
        fetchData: {
            list: [
                {
                    shop_id: 1,
                    shop_name: '万家灯火烟花有限公司1',
                    pro_brand: '每日采集额：999',
                    products: [
                        {
                            pro_id: 101,
                            pro_text: '全家福 冷焰火烟花1',
                            pro_price: 480,
                            pro_num: 1,
                            pro_img: './images/1.png',
                            sum: 480,
                            pro_place: "河北保定星星烟花制造厂",
                            pro_depot: "规格：35g*1支",
                            pro_purity: "选择赠品>",
                            checked: false//商品选中状态
                        },
                        {
                            pro_id: 102,
                            pro_text: '全家福 冷焰火烟花2',
                            pro_price: 480,
                            pro_num: 1,
                            pro_img: './images/1.png',
                            sum: 480,
                            pro_place: "河北保定星星烟花制造厂",
                            pro_depot: "规格：35g*1支",
                            pro_purity: "选择赠品>",
                            checked: false//商品选中状态
                        },
                        {
                            pro_id: 103,
                            pro_text: '全家福 冷焰火烟花3',
                            pro_price: 480,
                            pro_num: 1,
                            pro_img: './images/1.png',
                            sum: 480,
                            pro_place: "河北保定星星烟花制造厂",
                            pro_depot: "规格：35g*1支",
                            pro_purity: "选择赠品>",
                            checked: false//商品选中状态
                        }
                    ],
                    check: false,//店铺选中状态
                    choose: 0,//商品选中个数
                },
                {
                    shop_id: 2,
                    shop_name: '卷卷旗舰店2',
                    pro_brand: '每日采集额：999',
                    products: [
                        {
                            pro_id: 201,
                            pro_text: '全家福 冷焰火烟花21',
                            pro_price: 480,
                            pro_num: 1,
                            pro_img: './images/1.png',
                            sum: 480,
                            pro_place: "河北保定星星烟花制造厂",
                            pro_depot: "规格：35g*1支",
                            pro_purity: "选择赠品>",
                            checked: false//商品选中状态
                        },
                        {
                            pro_id: 202,
                            pro_text: '全家福 冷焰火烟花22',
                            pro_price: 480,
                            pro_num: 1,
                            pro_img: './images/1.png',
                            sum: 480,
                            pro_place: "河北保定星星烟花制造厂",
                            pro_depot: "规格：35g*1支",
                            pro_purity: "选择赠品>",
                            checked: false//商品选中状态
                        }
                    ],
                    check: false,
                    choose: 0,
                },
                {
                    shop_id: 3,
                    shop_name: '瓜皮的神秘商店3',
                    pro_brand: '每日采集额：999',
                    products: [
                        {
                            pro_id: 301,
                            pro_text: '全家福 冷焰火烟花31',
                            pro_price: 480,
                            pro_num: 1,
                            pro_img: './images/1.png',
                            sum: 480,
                            pro_place: "河北保定星星烟花制造厂",
                            pro_depot: "规格：35g*1支",
                            pro_purity: "选择赠品>",
                            checked: false//商品选中状态
                        },
                        {
                            pro_id: 302,
                            pro_text: '全家福 冷焰火烟花32',
                            pro_price: 480,
                            pro_num: 1,
                            pro_img: './images/1.png',
                            sum: 480,
                            pro_place: "河北保定星星烟花制造厂",
                            pro_depot: "规格：35g*1支",
                            pro_purity: "选择赠品>",
                            checked: false//商品选中状态
                        }
                    ],
                    check: false,
                    choose: 0,
                }
            ],
            status: false,//全选选中状态
            allchoose: 0,//店铺选中个数
            allsum: 0,//总计价格
            allnum: 0,//总计数量
            is_success:false   //控制管理和完成的显示
        },
        
    },
    mutations: {
        manage(state,data){
            state.fetchData.is_success=data
            console.log(state.fetchData)

        }
    },
    actions:{
        chooseOnly({commit}){
           commit("type.CHOOSYALL")
        }
    }
}