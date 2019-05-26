import * as type from './mutations_types'
export default {
    namespaced: true,
    state: {
        shopResult:true,
        fetchData: {
            list: [
                {
                    shop_id: 1,
                    shop_name: '万家灯火烟花有限公司',
                    pro_brand: '每日采集额：999',
                    products: [
                        {
                            pro_id: 101,
                            pro_text: '全家福 冷焰火烟花',
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
                            pro_text: '全家福 冷焰火烟花',
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
                            pro_text: '全家福 冷焰火烟花',
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
                    shop_name: '卷卷旗舰店',
                    pro_brand: '每日采集额：999',
                    products: [
                        {
                            pro_id: 201,
                            pro_text: '全家福 冷焰火烟花',
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
                            pro_text: '全家福 冷焰火烟花',
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
                    shop_name: '瓜皮的神秘商店',
                    pro_brand: '每日采集额：999',
                    products: [
                        {
                            pro_id: 301,
                            pro_text: '全家福 冷焰火烟花',
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
                            pro_text: '全家福 冷焰火烟花',
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
            is_success:true   //控制管理和完成的显示
        },
        
    },
    mutations: {
        // 单个选中商品的函数
        choosetrue(state) {
            state.products.checked = true; //将商品选中状态改为true
            ++state.fetchData.list.choose === state.fetchData.list.products.length ? (state.products.check = true) : ""; //这里执行了两部，选中商品数量先+1，再与该店铺商品数量比较，如果相等就更改店铺选中状态为true
            state.fetchData.list.check
                ? ++ state.fetchData.list.allchoose ===  state.fetchData.list.length
                    ? ( state.fetchData.list.status = true)
                    : ( state.fetchData.list.status = false)
                : ""; //如果店铺选中状态改为true，选中店铺数量先+1，再与店铺数量比较，如果相等就更改全选选中状态为true
        },
        choosefalse(state) {
            state.fetchData.checked = false; //将商品选中状态改为false
            --state.fetchData.list.choose; //选中商品数量-1
            if (state.fetchData.list.check) {
                //如果店铺是被选中的，更改店铺选中状态
                state.fetchData.list.check = false;
                --state.fetchData.allchoose; //并且选中店铺数量-1
            }
            state.fetchData.status = false; //无论之前全选的状态，将其改为false就行
        },
        [type.CHOOSYALL](state) {
            !state.fetchData.list.products.checked
                ? this.choosetrue(state)
                : this.choosefalse(state);
        } //这里是绑定到html上的方法，取反是由于你在触发方法的时候取的是之前的状态
    },
    actions:{
        chooseOnly({commit}){
           commit("type.CHOOSYALL")
        }
    }
}