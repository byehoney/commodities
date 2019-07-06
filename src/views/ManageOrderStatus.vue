<template>
  <div class="managestatus">
    <div class="manageHeader">
      <ul>
        <li class="active">订单</li>
        <li>退款</li>
      </ul>
    </div>
    <div class="manageList">
      <div class="manageListContent">
        <div class="manageList_left">
          <span>
            <img src="../images/pending.png">
          </span>
          <span>
            <p>待处理</p>
            <p>总额：9900.50元</p>
          </span>
        </div>
        <div class="manageList_center">
          <p>采购店数：21</p>
        </div>
        <div class="manageList_right">
          <span>22</span>
          <span>
            <img src="../images/arrow_right.png">
          </span>
        </div>
      </div>
      <div class="manageListContent">
        <div class="manageList_left">
          <span>
            <img src="../images/verify.png">
          </span>
          <span>
            <p>待处理</p>
            <p>总额：9900.50元</p>
          </span>
        </div>
        <div class="manageList_center">
          <p>采购店数：21</p>
        </div>
        <div class="manageList_right">
          <span>22</span>
          <span>
            <img src="../images/arrow_right.png">
          </span>
        </div>
      </div>
      <div class="manageListContent">
        <div class="manageList_left">
          <span>
            <img src="../images/sorting.png">
          </span>
          <span>
            <p>待处理</p>
            <p>总额：9900.50元</p>
          </span>
        </div>
        <div class="manageList_center">
          <p>采购店数：21</p>
        </div>
        <div class="manageList_right">
          <span>22</span>
          <span>
            <img src="../images/arrow_right.png">
          </span>
        </div>
      </div>
      <div class="manageListContent">
        <div class="manageList_left">
          <span>
            <img src="../images/distribe.png">
          </span>
          <span>
            <p>待处理</p>
            <p>总额：9900.50元</p>
          </span>
        </div>
        <div class="manageList_center">
          <p>采购店数：21</p>
        </div>
        <div class="manageList_right">
          <span>22</span>
          <span>
            <img src="../images/arrow_right.png">
          </span>
        </div>
      </div>
      <div class="manageListContent">
        <div class="manageList_left">
          <span>
            <img src="../images/distribing.png">
          </span>
          <span>
            <p>待处理</p>
            <p>总额：9900.50元</p>
          </span>
        </div>
        <div class="manageList_center">
          <p>采购店数：21</p>
        </div>
        <div class="manageList_right">
          <span>22</span>
          <span>
            <img src="../images/arrow_right.png">
          </span>
        </div>
      </div>
      <div class="manageListContent">
        <div class="manageList_left">
          <span>
            <img src="../images/distribed.png">
          </span>
          <span>
            <p>待处理</p>
            <p>总额：9900.50元</p>
          </span>
        </div>
        <div class="manageList_center">
          <p>采购店数：21</p>
        </div>
        <div class="manageList_right">
          <span>22</span>
          <span>
            <img src="../images/arrow_right.png">
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getManageOrderStatus } from "@/api/index";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("login", [
      "token",
      "userId",
      "corpCode",
      "companyId",
      "userRole"
    ])
  },
  methods: {
    async getListStatus() {
      let defaulParams = {
        token: this.token,
        userId: this.userId,
        corpCode: this.corpCode,
        companyId: this.companyId,
        userRole: this.userRole
      };
      let res = await getManageOrderStatus(defaulParams);
      console.log(res)
    }
  },
  mounted() {
      this.getListStatus()
  }
};
</script>

<style scoped lang="scss">
.managestatus {
  background: #fff;
}
.manageHeader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 93px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(0, 122, 255, 1) 0%,
    rgba(24, 152, 247, 1) 100%
  );
  ul {
    display: flex;
    li {
      font-size: 30px;
      color: #fff;
      border: 1px solid #fff;
      height: 64px;
      line-height: 64px;
      width: 125px;
      text-align: center;
      border-radius: 20px;
    }
    li:nth-of-type(1) {
      border-radius: 20px 0 0 20px;
      border-right: none;
    }
    li:nth-of-type(2) {
      border-radius: 0 20px 20px 0px;
    }
    .active {
      background: #fff;
      color: #007aff;
    }
  }
}
.manageList {
  margin-top: 93px;
  font-size: 24px;
  .manageListContent {
    display: flex;
    justify-content: space-between;
    padding-left: 39px;
    height: 95px;
    padding-top: 36px;
    border-bottom: 1px solid #dcdcdc;
    .manageList_left {
      display: inline-flex;
      span {
        p {
          line-height: 30px;
        }
        p:nth-of-type(2) {
          font-size: 20px;
          color: #666;
        }
      }
      span:nth-of-type(1) {
        width: 56px;
        height: 56px;
        margin-right: 16px;
        img {
          width: 100%;
        }
      }
    }
    .manageList_center {
      // justify-content: flex-start;
      text-align: left;
      p {
        margin-top: 30px;
        margin-right: 150px;
        font-size: 20px;
        color: #666;
      }
    }
    .manageList_right {
      display: inline-flex;
      margin-right: 37px;
      span {
        margin-top: 10px;
        vertical-align: middle;
        color: #e42e1a;
      }
      span:nth-of-type(2) {
        width: 17px;
        height: 37px;
        margin-left: 20px;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
