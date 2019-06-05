<template>
    <div class="myContainer" style="opacity:1">
        <div class="info_area">
            <div class="topArea">
                <img src="../images/score.png" class="scroe" alt="">
                <img src="../images/my_kf.png" class="kf_icon" alt="">
            </div>
            <div class="user_info">
                <div class="atv_box">
                    <img :src="user.userHp" class="atv" alt="" v-if="user.userHp">
                    <div class="default" v-else>
                        <img src="../images/defaultAtv.png" class="atv" alt="">
                    </div>
                </div>
                <div class="user_msg" v-if="user.userId">
                    <div class="user_name">{{user.userName}}</div>
                    <div class="user_tel">{{user.userId|formatTel}}</div>
                    <div class="user_add">{{addr}}</div>
                </div>
                <div v-else class="loginBtn"><router-link :to="{name:'login',query:{redirect:'/my'}}">点击登录</router-link></div>
            </div>
        </div>
        <div class="op_area">
            <div class="op_item" @click="goOrders(1)">
                <img src="../images/waite_send.png" class="op_icon" alt="">
                <p class="op_text">待发货</p>
                <span class="op_num">3</span>
            </div>
            <div class="op_item" @click="goOrders(2)">
                <img src="../images/waite_get.png" class="op_icon" alt="">
                <p class="op_text">待收货</p>
                <span class="op_num">3</span>
            </div>
            <div class="op_item" @click="goOrders(3)">
                <img src="../images/waite_eva.png" class="op_icon" alt="">
                <p class="op_text">待评价</p>
                <span class="op_num">3</span>
            </div>
            <div class="op_item" @click="goOrders(4)">
                <img src="../images/waite_send.png" class="op_icon" alt="">
                <p class="op_text">退货</p>
                <!-- <span class="op_num">3</span> -->
            </div>
            <div class="op_item" @click="goOrders(0)">
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
            <router-link class="list_nav" tag="div" to="/forgetPas">
                <div class="list_item">
                    <div class="left">
                        <div class="line"></div>
                        <div class="list_text">密码修改</div>
                    </div>
                    <img src="../images/arrow_right.png" class="list_icon" alt="">
                </div>
            </router-link>
        </div>
        <div class="login_btn" v-if="user.userId" @click="logOut">退出登陆</div>
        <div class="login_btn" v-else @click="goLogin">登陆</div>
        <!-- <ve-line :data="chartData"></ve-line>
        <CityPicker /> -->
        <TabBarBottom curTab="my"/>
    </div>
</template>
<script>
import { mapState ,mapMutations} from 'vuex';
import TabBarBottom from '@/components/TabBarBottom';
import {getMyInfo} from '@/api/index';
// import CityPicker from '@/components/CityPicker'
export default {
    name:'my',
    data(){
        return{
            addr:''
        }
    },
    filters:{
        formatTel(data){
            return data.substr(0,3)+'****' + data.substr(7,11);
        }
    },
    computed:{
        ...mapState('login', ['user', 'token'])
    },
    async mounted(){
        let res = await getMyInfo()
        this.addr = res.data.clientMap.cvName;
        console.log(this.user)
    },
    methods:{
        ...mapMutations('login',['LOGOUT']),
        logOut(){
            this.LOGOUT({
               $router:this.$router,
           })
        },
        goLogin(){
            this.$router.push({name:'login',query:{redirect:'/my'}});
        },
        goOrders(index){
            this.$router.push({name:'myOrders',query:{showTab:index}})
        }
    },
    components:{
        TabBarBottom,
        // CityPicker
    }
}
</script>
<style lang="scss">
    html{
        background-color: #ebebeb;
    }
    .info_area{
        display: flex;
        flex-direction: column;
        padding-top: 50px;
        background-color: #ff2c3e;
        font-family:'MicrosoftYaHei';
        height: 340px;
        .topArea{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .scroe{
                width: 98px;
                height: 45px;
                margin-right: 31px;
            }
        }
        .kf_icon{
            width: 32px;
            height: 35px;
            align-self: flex-end;
            margin-right: 47px;

        }
        .loginBtn{
            width:178px;
            height:46px;
            background:linear-gradient(85deg,rgba(255,98,56,1) 0%,rgba(255,18,64,1) 100%);
            border-radius:23px;
            border:2px solid rgba(255,255,255,1);
            line-height: 46px;
            text-align: center;
            font-size:26px;
            line-height:35px;
            letter-spacing:3px;
            align-self: center;
            a{
                color:rgba(255,255,255,1);
                display: inline-block;
                width: 100%;
                height: 100%;
                line-height: 46px;
            }
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
                overflow: hidden;
                .default{
                    width:118px;
                    height:118px;
                    border-radius: 50%;
                    background:linear-gradient(135deg,rgba(147,147,147,1) 0%,rgba(201,201,201,1) 100%);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .atv{
                        width: 76px;
                        height: 76px;
                        object-fit: scale-down;
                    }
                }
                .atv{
                    width:118px;
                    // height:118px;
                    border-radius: 50%;
                    object-fit: scale-down;
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
        margin: 43px auto 200px;
        border-radius: 8px;
        font-size:30px;
        color:rgba(255,255,255,1);
        letter-spacing:3px;
    }
</style>
