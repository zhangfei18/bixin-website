<template>
  <div class="nav_title">
    <nav class="nav_content">
      <div class="left_text">
        <div class="title_left_logo" @click="scroll_to_top">
          <img
            class="logo"
            src="../../assets/img/logo@2x.png"
            alt="币信官方网站"
          />
        </div>
        <div class="bixin_group" @mouseleave.stop="show_group_drow('hide')">
          <div class="click_title" @mouseover.stop="show_group_drow('show')">
            币信集团
          </div>
          <!-- 下拉框 -->
          <div class="is_show_drop" v-show="show_drop">
            <div
              class="bixin_group_drow"
              @mouseover.stop="show_group_drow('show')"
              @mouseleave.stop="show_group_drow('hide')"
            >
              <div class="top_bixin_group">
                <div class="top_not_check">个人用户</div>
                <ul class="bixin_group_drow_top">
                  <li
                    class="bixin_group_item"
                    v-for="(item, index) in personal_user"
                    :key="index"
                  >
                    <!-- {{item.name}} -->
                    <a class="bixin_group_item_target" :href="item.target">
                      {{ item.name }}
                    </a>
                  </li>
                </ul>
              </div>
              <div class="line_division"></div>
              <div class="bottom_bixin_group">
                <div class="top_not_check">企业用户</div>
                <ul class="bixin_group_drow_top">
                  <li
                    class="bixin_group_item"
                    v-for="(item, index) in enterprise_user"
                    :key="index"
                  >
                    <a class="bixin_group_item_target" :href="item.target">
                      {{ item.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 下拉三角 -->
            <div
              class="drop_triangle"
              @mouseover.stop="show_group_drow('show')"
            ></div>
          </div>
        </div>
        <div class="about_us" @mouseleave.stop="show_about_us('hide')">
          <div class="click_title" @mouseover.stop="show_about_us('show')">
            关于我们
          </div>
          <!-- 下拉框 -->
          <div class="about_us_content" v-show="show_about_us_drop">
            <div
              class="about_us_drow"
              @mouseover.stop="show_about_us('show')"
              @mouseleave.stop="show_about_us('hide')"
            >
              <ul class="about_us_itemList">
                <li
                  class="about_us_item"
                  v-for="(item, index) in about_us_info"
                  :key="index"
                >
                  <a class="bixin_group_item_target" :href="item.target">
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="drop_triangle"></div>
          </div>
        </div>
      </div>
      <div class="right_text">
        <div class="sub_title">
          <ul class="web_chat">
            <li class="item" v-for="(i, index) in num" :key="index">
              <a class="target_text" :href="i.target">{{ i.name }}</a>
              <div class="right_line"></div>
            </li>
            <li class="flag_item" @mouseleave.stop="show_flag('hide')">
              <div class="show_flag" @mouseover.stop="show_flag('show')">
                <img
                  class="flag"
                  :src="is_english ? flag_info[1].flag : flag_info[0].flag"
                  alt=""
                />
              </div>
              <!-- 下拉框 -->
              <div class="flag_content" v-show="show_flag_drop">
                <div
                  class="flag_drow"
                  @mouseover.stop="show_flag('show')"
                  @mouseleave.stop="show_flag('hide')"
                >
                  <ul class="flag_itemList">
                    <li
                      class="flags_item"
                      v-for="(item, index) in flag_info"
                      :key="index"
                      @click="check_flag(index)"
                    >
                      <img class="flag_img" :src="item.flag" alt="币信" />
                      {{ item.language }}
                    </li>
                  </ul>
                </div>
                <div class="drop_triangle"></div>
              </div>
            </li>
          </ul>
        </div>
        <a
          class="login"
          href="https://sandboxweb.bixin.im/webapp/login?return_url=%2Fwebapp%2Fbixin%2Fidentify"
          v-show="!is_login"
          >登录</a
        >
        <div class="yes_login" v-show="is_login">
          <img class="user_advantar" :src="user_advantar" alt="" />
          <span class="user_name">{{ name_splice(user_name) }}</span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      personal_user: [
        { name: "币信钱包", target: "javascript:;" },
        { name: "硬件钱包", target: "https://key.bixin.com/" },
        { name: "USDS", target: "jacascript:;" },
        { name: "币信矿业", target: "jacascript:;" },
        { name: "Ybay商城", target: "jacascript:;" }
      ],
      enterprise_user: [
        { name: "币信资本", target: "http://bixincapital.com" },
        {
          name: "企业云钱包",
          target:
            "https://web.bixin.im/webapp/login?return_url=%2Fwebapp%2Fchat"
        }
      ],
      show_drop: false,
      about_us_info: [
        { name: "关于币信", target: "javascript:;" },
        { name: "联系我们", target: "https://help.bixin.com/contacts/" },
        { name: "合作伙伴", target: "javascript:;" },
        { name: "帮助中心", target: "https://help.bixin.com" }
      ],
      flag_info: [
        { flag: require("@/assets/img/guoqi.png"), language: "简体中文" },
        { flag: require("@/assets/img/yingguo.png"), language: "English" }
      ],
      show_about_us_drop: false,
      //显示国旗
      show_flag_drop: false,
      //选择的语言
      is_english: false,
      //是否登录
      is_login: false,
      user_name: "",
      //默认头像
      user_advantar: require("@/assets/img/morentouxiang@3x.png"),
      global_url: "",
      num: [
        {
          name: "网页聊天",
          target: "https://web.bixin.im/webapp/chat"
        },
        {
          name: "法币交易",
          target: `javascript:;`
        },
        {
          name: "开放平台",
          target: "https://open.bixin.com"
        }
      ]
    };
  },
  props: {
    value: {
      type: String,
      default: "cn"
    }
  },
  created() {
    if (process.client) {
      // console.log("获取的window对象", window);
      this.global_url = window.location.origin;
    }
  },
  mounted() {
    /**
     * 解决字符串拼接域名出现undefined
     */
    let order_url = this.global_url + "/webapp/bixin/orders";
    this.num[1].target = order_url.replace("undefined", "");
    this.judgement_login();
  },
  methods: {
    //点击图标回到顶部
    scroll_to_top() {
      window.scrollTo(0, 0);
    },
    //对name的字符串进行限制
    name_splice(name) {
      let limit = 10;
      if (name.length > limit) {
        let star = name.substring(0, limit);
        return star + "...";
      }
      return name;
    },
    // 判断是否有个人信息以及token是否过期
    judgement_login() {
      //获取个人信息
      let user_info = JSON.parse(
        window.localStorage.getItem("bixin-web.my_profile")
      );
      //获取token信息
      let token_info = JSON.parse(
        window.localStorage.getItem("__storejs_expire_mixin_bixin-web.token")
      );
      // 若存在登录信息
      if (user_info) {
        this.is_login = true;
        // 对user进行解析
        const { user } = user_info;
        this.user_name = user.name;
        // 是否存在头像信息
        if (!!user.avatar_url) {
          this.user_advantar = user.avatar_url;
        }
        //时间戳过期
        if (!token_info) {
          this.is_login = false;
          // 删除个人信息
          window.localStorage.removeItem(
            "__storejs_expire_mixin_bixin-web.token"
          );
        }
      } else {
        this.is_login = false;
      }
    },

    //显示币信集团下拉
    show_group_drow(status) {
      if (status === "show") {
        this.show_drop = true;
      } else {
        this.show_drop = false;
      }
    },
    //显示关于我们下拉
    show_about_us(status) {
      if (status === "show") {
        this.show_about_us_drop = true;
      } else {
        this.show_about_us_drop = false;
      }
    },
    //显示国旗
    show_flag(status) {
      if (status === "show") {
        this.show_flag_drop = true;
      } else {
        this.show_flag_drop = false;
      }
    },
    // 选择国旗
    check_flag(index) {
      this.show_flag_drop = false;
      if (index === 1) {
        this.is_english = true;
        this.$emit("input", "en");
      } else {
        this.is_english = false;
        this.$emit("input", "cn");
      }
    }
  }
};
</script>

<style scoped lang="less">
.nav_title {
  width: 100%;
  background-color: #1f1e24;
  color: #fff;
  opacity: 0.8;
  .nav_content {
    width: 1280px;
    margin: 0 auto;
    height: 78px;
    line-height: 78px;
    background: #1f1e24;
    display: -webkit-flex;
    justify-content: space-between;
    .left_text {
      display: -webkit-flex;
      // width: 80px;
      color: #fff;
      font-size: 14px;
      font-family: PingFangSC-Regular;

      .bixin_group {
        position: relative;
        height: 78px;
        margin: 0 78px 30px;

        .bixin_group_drow {
          position: absolute;
          top: 68px;
          left: -160px;
          width: 570px;
          line-height: 1.5;
          padding: 50px 50px;
          height: 240px;
          color: #fff;
          font-size: 14px;
          font-family: PingFangSC-Regular;
          box-sizing: border-box;
          border: 0.1px solid #474852;
          opacity: 1;
          border-radius: 8px;
          // left:25% !important;
          background-color: #222127;
          box-shadow: 20px 20px 30px #19181d;
        }
        .top_bixin_group {
          display: -webkit-flex;
          .top_not_check {
            color: #fff;
            opacity: 0.2;
            margin-right: 86px;
            white-space: nowrap;
          }
          .bixin_group_drow_top {
            display: -webkit-flex;
            -webkit-flex-wrap: wrap;
            -moz-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
            -o-flex-wrap: wrap;
            flex-wrap: wrap;

            .bixin_group_item {
              color: #fff;
              opacity: 0.8;
            }
            .bixin_group_item_target {
              color: #fff;
              opacity: 0.8;
            }
            .bixin_group_item:nth-child(2) {
              margin: 0 88px;
            }
            .bixin_group_item:nth-child(-n + 3) {
              margin-bottom: 15px;
            }
            .bixin_group_item:nth-child(4) {
              margin-right: 88px;
            }
            .bixin_group_item_target:hover {
              opacity: 1;
              color: #fff;
              cursor: pointer;
            }
          }
        }
        .line_division {
          width: 100%;
          height: 0.3px;
          background-color: #474852;
          margin: 30px 0;
        }
        .bottom_bixin_group {
          display: -webkit-flex;
          display: -webkit-flex;
          .top_not_check {
            color: #fff;
            opacity: 0.2;
            margin-right: 86px;
            white-space: nowrap;
          }
          .bixin_group_drow_top {
            display: -webkit-flex;
            -webkit-flex-wrap: wrap;
            -moz-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
            -o-flex-wrap: wrap;
            flex-wrap: wrap;
            color: #fff;
            opacity: 0.8;
            .bixin_group_item {
              color: #fff;
              opacity: 0.8;
            }
            .bixin_group_item_target {
              color: #fff;
              opacity: 0.8;
            }
            .bixin_group_item_target:hover {
              color: #fff;
              opacity: 1;
              cursor: pointer;
            }
            .bixin_group_item:first-child {
              margin-right: 88px;
            }
          }
        }
        //下拉三角
        .drop_triangle {
          position: absolute;
          left: 50%;
          top: 52px;
          bottom: 0px;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border: 8px solid;
          border-color: transparent transparent #1b1b1f;
          border-bottom-color: #44464d;
          z-index: 111111;
        }
      }
      .about_us {
        position: relative;
        //关于我们样式的修改
        .about_us_drow {
          position: absolute;
          left: 50%;
          top: 68px;
          transform: translateX(-50%);
          width: 146px;
          height: 228px;
          color: #fff;
          font-size: 14px;
          font-family: PingFangSC-Regular;
          padding-top: 30px;
          box-sizing: border-box;
          border: 0.1px solid #474852;
          text-align: center;
          border-radius: 5px;
          background-color: #222127;
          box-shadow: 20px 20px 30px #19181d;
        }
        .about_us_item {
          color: #fff;
          opacity: 0.8;
          line-height: 3;
        }
        .bixin_group_item_target {
          color: #fff;
          opacity: 0.8;
        }
        .bixin_group_item_target:hover {
          opacity: 1;
          cursor: pointer;
        }
        .drop_triangle {
          position: absolute;
          left: 50%;
          bottom: 0px;
          top: 52px;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border: 8px solid;
          border-color: transparent transparent #1b1b1f;
          border-bottom-color: #44464d;
          z-index: 111111;
        }
      }
      .logo {
        margin-top: -9px;
        width: 80px;
        height: 25px;
        vertical-align: middle;
        cursor: pointer;
      }
      .click_title {
        color: #fff;
        font-size: 14px;
        font-family: PingFangSC-Regular;
        cursor: pointer;
      }
    }
    .right_text {
      display: -webkit-flex;
      .web_chat {
        display: -webkit-flex;
        color: #fff;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        color: #918d92;
        .right_line {
          display: inline-block;
          // margin-top: 4px;
          height: 12px;
          width: 0.5px;
          background-color: #918d92;
          vertical-align: middle;
          // margin-bottom: 2px;
          margin: 0 15px 2px;
        }
        .item:last-child .right_line {
          margin-right: 40px;
        }
        .target_text {
          color: #918d92;
        }
        .target_text:hover {
          color: #fff;
        }
        .flag_item {
          position: relative;
          //国旗样式的修改
          .flag_drow {
            position: absolute;
            left: 55%;
            top: 68px;
            transform: translateX(-70%);
            width: 146px;
            height: 128px;
            color: #fff;
            font-size: 14px;
            font-family: PingFangSC-Regular;
            padding: 20px 0 20px 30px;
            box-sizing: border-box;
            border: 0.1px solid #474852;
            // text-align: center;
            border-radius: 5px;
            background-color: #222127;
            box-shadow: 20px 20px 30px #19181d;
          }
          .flag_drow_item {
            left: 1;
          }
          .drop_triangle {
            position: absolute;
            left: 10%;
            bottom: 0px;
            top: 52px;
            // transform: translateX(-90%);
            width: 0;
            height: 0;
            border: 8px solid;
            border-color: transparent transparent #1b1b1f;
            border-bottom-color: #44464d;
            z-index: 111111;
          }
          .flags_item {
            font-family: PingFangSC-Regular;
            color: #fff;
            opacity: 0.8;
            line-height: 3;
            cursor: pointer;
          }
          .flags_item:hover {
            opacity: 1;
          }
          .flag_img {
            width: 25px;
            height: 16px;
            object-fit: contain;
            vertical-align: middle;
          }
        }
        .flag {
          width: 24px;
          height: 16px;
          object-fit: contain;
          border-radius: 3px;
          margin: 0 40px 0 6px;
        }
      }
      .login {
        display: block;
        font-family: PingFangSC-Thin;
        margin-top: 21px;
        width: 80px;
        height: 36px;
        color: #fff;
        line-height: 36px;
        text-align: center;
        border: 0.5px solid #5d5d5e;
        border-radius: 5px;
        cursor: pointer;
      }
      .login:hover {
        border: 0.5px solid #ffffff;
      }
      .yes_login {
        .user_advantar {
          width: 24px;
          height: 24px;
          vertical-align: middle;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>