<template>
    <div class="myContainer">
        <div class="info_area">
            <img src="../images/my_kf.png" class="kf_icon" alt="">
            <div class="user_info">
                <div class="atv_box">
                    <img src="../images/shopcar.png" class="atv" alt="">
                </div>
                <div class="user_msg">
                    <div class="user_name">张建</div>
                    <div class="user_tel">133****1568</div>
                    <div class="user_add">沈阳市 铁西区肇工北街4甲1号15门</div>
                </div>
            </div>
        </div>
        <div class="op_area">
            <div class="op_item">
                <img src="../images/waite_send.png" class="op_icon" alt="">
                <p class="op_text">待发货</p>
                <span class="op_num">3</span>
            </div>
            <div class="op_item">
                <img src="../images/waite_get.png" class="op_icon" alt="">
                <p class="op_text">待收货</p>
                <span class="op_num">3</span>
            </div>
            <div class="op_item">
                <img src="../images/waite_eva.png" class="op_icon" alt="">
                <p class="op_text">待评价</p>
                <span class="op_num">3</span>
            </div>
            <div class="op_item">
                <img src="../images/waite_send.png" class="op_icon" alt="">
                <p class="op_text">退货</p>
                <!-- <span class="op_num">3</span> -->
            </div>
            <div class="op_item">
                <img src="../images/all_order.png" class="op_icon" alt="">
                <p class="op_text">全部订单</p>
                <!-- <span class="op_num">3</span> -->
            </div>
        </div>
        <div class="my_list">
            <router-link class="list_nav" tag="div" to="/baseInfo">
                <div class="list_item">
                    <div class="left">
                        <div class="line"></div>
                        <div class="list_text">基础信息</div>
                    </div>
                    <img src="../images/arrow_right.png" class="list_icon" alt="">
                </div>
            </router-link>
            <router-link class="list_nav" tag="div" to="/address">
                <div class="list_item">
                    <div class="left">
                        <div class="line"></div>
                        <div class="list_text">收货地址</div>
                    </div>
                    <img src="../images/arrow_right.png" class="list_icon" alt="">
                </div>
            </router-link>
            <router-link class="list_nav" tag="div" to="/modiPass">
                <div class="list_item">
                    <div class="left">
                        <div class="line"></div>
                        <div class="list_text">密码修改</div>
                    </div>
                    <img src="../images/arrow_right.png" class="list_icon" alt="">
                </div>
            </router-link>
        </div>
        <div class="login_btn" v-if="user&&token" @click="logOut">退出登陆</div>
        <div class="login_btn" v-else>登陆</div>
        <!-- <ve-line :data="chartData"></ve-line>
        <CityPicker /> -->
        <TabBarBottom curTab="my"/>
    </div>
</template>
<script>
import { mapState ,mapMutations} from 'vuex';
import TabBarBottom from '@/components/TabBarBottom';
// import CityPicker from '@/components/CityPicker'
export default {
    name:'my',
    data(){
        return{
            // chartData: {
            //     columns: ['日期', '访问用户', '下单用户', '下单率'],
            //     rows: [
            //         { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            //         { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            //         { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            //         { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            //         { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            //         { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
            //     ]
            // }
        }
    },
    computed:{
        ...mapState('login', ['user', 'token'])
    },
    methods:{
        ...mapMutations('login',['LOGOUT']),
        logOut(){
            this.LOGOUT({
               $router:this.$router,
           })
        }

    },
    components:{
        TabBarBottom,
        // CityPicker
    }
}
</script>
<style lang="scss">
    .info_area{
        display: flex;
        flex-direction: column;
        padding-top: 50px;
        background-color: #ff2c3e;
        font-family:'MicrosoftYaHei';
        height: 340px;
        .kf_icon{
            width: 32px;
            height: 35px;
            align-self: flex-end;
            margin-right: 47px;

        }
        .user_info{
            display: flex;
            .atv_box{
                width:126px;
                height:126px;
                background:#fff;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-left: 80px;
                margin-right: 43px;
                .atv{
                    width:118px;
                    height:118px;
                    border-radius: 50%;
                }
            }
            .user_msg{
                display: flex;
                flex-direction: column;
                width: 460px;
                .user_name{
                    font-size:34px;
                    color:rgba(255,255,255,1);
                    line-height:45px;
                    letter-spacing:3px;
                    margin-bottom: 64px;
                }
                .user_tel{
                    font-size:22px;
                    color:rgba(255,255,255,1);
                    line-height:29px;
                    letter-spacing:2px;
                }
                .user_add{
                    font-size:22px;
                    color:rgba(255,255,255,1);
                    line-height:29px;
                    letter-spacing:2px;
                    margin-bottom: 114px;
                    word-break: break-all;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp:2;
                    -webkit-box-orient: vertical;
                }
            }
        }
    }
    .op_area{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 210px;
        background: #fff;
        margin-bottom: 5px;
        .op_item{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .op_icon{
                width: 70px;
                height: 69px;
                padding-top: 55px;
            }
            .op_text{
                font-size:24px;
                color:rgba(102,102,102,1);
                line-height:31px;
                letter-spacing:1px;
                text-align: center;
                margin-bottom: 37px;
            }
            .op_num{
                position: absolute;
                width:29px;
                height:29px;
                font-size:18px;
                color:rgba(255,255,255,1);
                letter-spacing:3px;
                border-radius: 50%;
                background-color: #f5a41a;
                text-align: center;
                line-height: 29px;
                top: 55px;
                right: 0;
            }
        }
    }
    .my_list{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff;
        .list_nav{
            width: 100%;
            height: 100%;
        }
        .list_item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 95%;
            margin-left: 5%;
            border-bottom: 2px solid #ebebeb;
            height: 115px;
            .left{
                display: flex;
                align-items: center;
                .line{
                    width: 10px;
                    height: 25px;
                    background-color: #ff4b3a;
                    margin-right: 17px;
                }
                .list_text{
                    font-size:24px;
                    color:rgba(102,102,102,1);
                    line-height:31px;
                    letter-spacing:1px;
                }
            }
            .list_icon{
                width: 17px;
                height: 30px;
                margin-right: 37px;
            }
        }
    }
    .login_btn{
        width: 90%;
        height: 98px;
        line-height: 98px;
        text-align: center;
        background-color: #9b9b9b;
        margin: 43px auto 243px;
        border-radius: 8px;
        font-size:30px;
        color:rgba(255,255,255,1);
        letter-spacing:3px;
    }
</style>
