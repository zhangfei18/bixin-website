<template>
  <div class="home">
    <!-- top区域 -->
    <div class="top">
      <div class="header-box">
        <div class="logo">
          <img src="@/assets/logo.png" alt="" />
        </div>
        <div class="language">
          <div class="selLanguage" ref="selLan" :class="selLan ? 'active' : ''">
            <div class="cn" @click="cnLangClick">
              <span class="chinabox">
                <img src="@/assets/guoqi.png" alt="" />
              </span>
              <span>简体中文</span>
            </div>
            <div class="en" @click="enLangClick">
              <span class="yingbox">
                <img src="@/assets/yingguo-2.png" alt="" />
              </span>
              <span>English</span>
            </div>
          </div>
          <img @click="lanClick" :src="isEn ? flagEn : flagCn" alt="" />
        </div>
      </div>
      <!-- 背景图是光晕的区域 -->
      <div class="title-box">
        <div class="title" :style="isEn ? 'width:350px;' : ''">
          <!-- <span>安全好用的区块链钱包</span> -->
          <span :style="isEn ? 'font-size: 28px;' : ''">
            {{ $t("pJmUUNHNJaggTgfGdINl") }}</span
          >
        </div>
        <div class="sub-title" :style="isEn ? 'margin-top:25px;' : ''">
          <span :style="isEn ? 'font-size: 12px;' : ''">{{
            $t("uHPBvPCzaHyghVdsmVQ")
          }}</span>
          <span :style="isEn ? 'font-size: 12px;' : ''">{{
            $t("uHPBvPCzaHyghVdsmZF")
          }}</span>
        </div>
      </div>
      <!-- IOS -->
      <div v-if="isIOS" class="load-btn-box">
        <!-- 蓝色按钮 -->
        <a href="https://testflight.apple.com/join/bmtk0gG6">
          <div class="blue-btn">
            <div class="left-logo">
              <img src="@/assets/ios.png" alt="" />
            </div>
            <div class="text" :style="isEn ? 'width: 150px;' : ''">
              <span>
                {{ $t("RzOVPoRrTjSYWFtT") }}
              </span>
              <span>
                {{ $t("RzOVPoRrTjSYWFtB") }}
              </span>
              <!-- <span>下载公测版</span> -->
            </div>
            <div class="rec-btn" v-show="!isEn">
              <span>推荐</span>
            </div>
          </div>
        </a>
        <!-- 黑色按钮 -->
        <a href="https://app.lzswl.cc/download/7D5HM">
          <div class="black-btn">
            <div class="left-logo">
              <img src="@/assets/ios.png" alt="" />
            </div>
            <div class="text">
              <span>{{ $t("pKOdFitMVJGVzzIfGiz") }}</span>
            </div>
            <div class="rec-btn"></div>
          </div>
        </a>
        <div class="load-text" @click="loadTextClick">
          {{ $t("YRCWxjkxFZunwDgbM") }} >
        </div>
      </div>
      <!-- anzhuo -->
      <div v-else class="load-btn-box-az">
        <!-- 黑色按钮 -->
        <a href="https://bixin.im/download/android/">
          <div class="black-btn">
            <div class="left-logo">
              <img src="@/assets/anzhuo.png" alt="" />
            </div>
            <div class="text" :style="isEn ? 'width: 150px;' : ''">
              <span>
                {{ $t("ltfbVWEKkuCnuTYxnLBK") }}
              </span>
            </div>
          </div>
        </a>
        <!-- 绿色按钮 -->
        <a
          href="https://play.google.com/store/apps/details?id=com.bixin.bixin_android"
        >
          <div class="green-btn">
            <div class="left-logo">
              <img src="@/assets/google-play.png" alt="" />
            </div>
            <div class="text">
              <span>GET IT ON</span>
              <span> Google Play </span>
            </div>
          </div>
        </a>
        <div class="load-text" @click="loadTextClick">
          {{ $t("YRCWxjkxFZunwDgAZ") }} >
        </div>
      </div>
      <div class="phone-img-box">
        <img src="@/assets/phone.png" alt="" />
      </div>
    </div>
    <!-- 下半部分 -->
    <div class="sub-wrapper">
      <!-- 稳定运行区域 -->
      <div class="stable-run">
        <div class="run-logo">
          <img :src="runLogoArr[firIndex]" alt="" />
        </div>
        <div class="slider-wrap" :style="isEn ? 'height:250px' : ''">
          <Slide ref="slide1" :slideData="slideData1" v-model="firIndex">
            <template v-slot:default>
              <div
                class="slide-item"
                :style="itemStyle"
                v-for="(item, index) in slideData1"
                :key="item.id"
              >
                <div class="title" :style="isEn ? 'font-size: 18px;' : ''">
                  {{ item.text.title }}
                </div>
                <div class="subTitle">
                  {{ item.text.subT }}
                </div>
              </div>
            </template>
          </Slide>
        </div>
        <div class="dots">
          <span
            class="dot"
            v-for="(item, index) in slideData1"
            :key="index"
            :class="index === firIndex ? 'active' : ''"
            @click="dotClick(index)"
          ></span>
        </div>
      </div>
      <!-- 资产交易区域 -->
      <div class="asset-trading">
        <div class="title">
          <span>{{ $t("xLebnuBLMqyGbRoagI") }}</span>
        </div>
        <div class="subTitle">
          <span>{{ $t("niyuTsehhJBTJyzVfGqt") }}</span>
        </div>
        <div class="slider-wrap">
          <Slide ref="slide2" :slideData="slideData2" v-model="secIndex">
            <template v-slot:default>
              <div
                class="slide-item"
                :style="itemStyle"
                v-for="(item, index) in slideData2"
                :key="index"
              >
                <img :src="item.url" alt="" />
              </div>
            </template>
          </Slide>
        </div>
        <div class="dots">
          <span
            class="dot"
            v-for="(item, index) in slideData2"
            :key="index"
            :class="index === secIndex ? 'active' : ''"
            @click="dotClick2(index)"
          ></span>
        </div>
      </div>
      <!-- 金融服务区域 -->
      <div class="financial-service">
        <div class="title">
          <span>{{ $t("wjQcmOOaHVUqCjzO") }}</span>
        </div>
        <div class="subTitle">
          <span>{{ $t("IBWjYAUbMLdxNhSRMyEI") }}</span>
        </div>
        <div class="slider-wrap">
          <Slide ref="slide3" :slideData="slideData3" v-model="thirIndex">
            <template v-slot:default>
              <div
                class="slide-item"
                :style="itemStyle"
                v-for="(item, index) in slideData3"
                :key="index"
              >
                <img :src="item.url" alt="" />
              </div>
            </template>
          </Slide>
        </div>
        <div class="dots">
          <span
            class="dot"
            v-for="(item, index) in slideData3"
            :key="index"
            :class="index === thirIndex ? 'active' : ''"
            @click="dotClick3(index)"
          ></span>
        </div>
      </div>
      <!-- 了解更多 -->
      <div class="learn-more">
        <div class="img-box">
          <div class="text-box">
            <div class="title">
              <span>{{ $t("iJjvStYOJpQOeHnRw") }}</span>
            </div>
            <div class="subTitle">
              <span>{{ $t("PcIuDXpndNOamvsZ") }}</span>
            </div>
          </div>
          <img src="@/assets/learn-more.png" alt="" />
        </div>
        <div class="more-text">
          <div class="title">
            <span>BTC Standard Stable Coin</span>
          </div>
          <div class="text">
            {{ $t("QmBQkjUROdvCneLfhPX") }}
          </div>
          <!-- <div class="btn">了解更多</div> -->
        </div>
      </div>
    </div>
    <div class="footer">
      <!-- <div class="listBox">
        <div class="left">
          <ul>
            <li>{{ $t("zTIAIJXamoidiVccNqV") }}</li>
            <li>{{ $t("FPqXabaKwGxcWWgeHnO") }}</li>
            <li>
              <a href="https://key.bixin.com/">{{
                $t("WmxAKGTsYJQuHHMSJjw")
              }}</a>
            </li>
            <li>{{ $t("yDwrgFUlTFRlitOj") }}</li>
            <li>{{ $t("bfWgMkeabBbpAsWKoYEl") }}</li>
            <li>{{ $t("qKAVVOLzMgIEOfaHgMb") }}</li>
          </ul>
          <ul>
            <li>{{ $t("rpRwgiQZUOdGxbpX") }}</li>
            <li>
              <a href="http://bixincapital.com/">{{
                $t("CfMNekbnqDofEnZYQd")
              }}</a>
            </li>
            <li>
              <a
                href="https://web.bixin.im/webapp/login?return_url=%2Fwebapp%2Fchat"
                >{{ $t("OkoZdnKBqAzpiOtWHLhj") }}</a
              >
            </li>
          </ul>
        </div>
        <div class="right">
          <ul>
            <li>{{ $t("eqcXjzdQttUWlJohHCMs") }}</li>
            <li>{{ $t("ebpAuaOqGOQJOmwSrwT") }}</li>

            <li>
              <a href="https://help.bixin.com/contacts/">{{
                $t("OLEdchKfQQPDHgwcEDp")
              }}</a>
            </li>
            <li>{{ $t("WAvwLxLWobYoYdOqCb") }}</li>
            <li>
              <a href="https://help.bixin.com/">
                {{ $t("tfPyHNokAJtCYKgcozL") }}
              </a>
            </li>
          </ul>
        </div>
      </div> -->
      <div class="icon">
        <span>
          <a href="https://weibo.com/BixinIM">
            <img src="@/assets/weibo.png" alt="" />
          </a>
        </span>
        <span>
          <a href="https://twitter.com/BixinWallet">
            <img src="@/assets/twiter.png" alt="" />
          </a>
        </span>
      </div>
      <div class="copyright">&copy; 2014-2020 BIXIN. ALL Rights Reserved.</div>
    </div>
  </div>
</template>

<script>
const LANG_MAP = {
  en: "en-US",
  zh: "zh-CN",
  tw: "zh-TW",
  ja: "ja-JP",
  ru: "ru-RU",
};
import Slide from "../components/slider/index";
import { setBrowserLang } from "../utils/i18n/index";
export default {
  name: "Home",
  data() {
    return {
      slideData1: [],
      slideData2: [],
      slideData3: [],
      firIndex: 0,
      secIndex: 0,
      thirIndex: 0,
      selLan: false,
      itemStyle: {
        width: "100%",
      },
      isEn: false,
      flagCn: require("@/assets/guoqi.png"),
      flagEn: require("@/assets/yingguo-2.png"),
      runLogoArr: [
        require("@/assets/run-logo1.png"),
        require("@/assets/run-logo2.png"),
        require("@/assets/run-logo3.png"),
      ],
      isIOS: true,
    };
  },
  components: {
    Slide,
  },
  watch: {
    // 第一个slide的当前选中下标
    firIndex(newVal) {},
  },
  computed: {
    text() {
      return [
        this.$t("laRTDRZBRWrrmChYjrcy"),
        this.$t("xKXcKxdGCjYklfiWlel"),
        this.$t("XLPpPRugMKUnIHzauw"),
      ];
    },
    subText() {
      return [
        this.$t("HUjrxgBjBsmFyRKRmN"),
        this.$t("krEvNZZclDzgtdDZc"),
        this.$t("vSdQowmVeftaRUpNtgU"),
      ];
    },
    urlArr1() {
      return [
        !this.isEn
          ? require("@/assets/trading1.png")
          : require("@/assets/trading1-en.png"),
        !this.isEn
          ? require("@/assets/trading2.png")
          : require("@/assets/trading2-en.png"),
        !this.isEn
          ? require("@/assets/trading3.png")
          : require("@/assets/trading3-en.png"),
      ];
    },
    urlArr2() {
      return [
        !this.isEn
          ? require("@/assets/financial1.png")
          : require("@/assets/financial1-en.png"),
        !this.isEn
          ? require("@/assets/financial2.png")
          : require("@/assets/financial2-en.png"),
      ];
    },
  },
  created() {
    this.initDate();
    this.init();
    this.judgeDevice();
  },
  mounted() {},
  methods: {
    judgeDevice() {
      this.isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      // console.log(this.isIOS,'isIOS')
    },
    // 初始化数据
    initDate() {
      // 初始化第一块滑动区域的数据
      for (let i = 1; i <= 3; i++) {
        this.slideData1.push({
          id: i,
          text: { title: this.text[i - 1], subT: this.subText[i - 1] },
        });
      }
      // 初始化第二块滑动区域的数据
      for (let i = 1; i <= 3; i++) {
        this.slideData2.push({
          id: i,
          url: this.urlArr1[i - 1],
        });
      }
      // 初始化第三块滑动区域的数据
      for (let i = 1; i <= 2; i++) {
        this.slideData3.push({
          id: i,
          url: this.urlArr2[i - 1],
        });
      }
    },
    clearDate() {
      this.slideData1 = [];
      this.slideData2 = [];
      this.slideData3 = [];
    },
    init() {
      let w = document.documentElement.clientWidth || document.body.clientWidth;
      this.itemStyle.width = w + "px";
      let lang = this.getLangFromBrowser();
      if (lang === "zh") {
        this.cnLangClick();
      } else if (lang === "cn") {
        this.enLangClick();
      }
    },
    getLangFromBrowser() {
      const defaultLang = "en";
      let lang = navigator.language || navigator.userLanguage || defaultLang;
      lang = lang.toLowerCase(); //zh-cn
      for (let [k, v] of Object.entries(LANG_MAP)) {
        k = k.toLowerCase();
        v = v.toLowerCase();
        if (lang === k || lang === v) {
          return k;
        }
      }
      return defaultLang;
    },
    dotClick(index) {
      this.$refs.slide1.setLeft(index);
    },
    dotClick2(index) {
      this.$refs.slide2.setLeft(index);
    },
    dotClick3(index) {
      this.$refs.slide3.setLeft(index);
    },
    lanClick(e) {
      e.stopPropagation();
      this.selLan = !this.selLan;
      // this.$refs.selLan.style =
      // "display: block; transition: all .4s; transform: translate3d(0,100%,0); transform: scale(1);";
    },
    cnLangClick() {
      this.selLan = false;
      this.isEn = false;
      setBrowserLang("zh");
      this.clearDate();
      this.initDate();
    },
    enLangClick() {
      this.selLan = false;
      this.isEn = true;
      setBrowserLang("en");
      console.log(this.text);
      this.clearDate();
      this.initDate();
    },
    // 切换ios/anzhuo
    loadTextClick() {
      this.isIOS = !this.isIOS;
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #1f1f25;

  .top {
    .header-box {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 24px 24px 0 24px;

      .logo {
        box-sizing: border-box;
        width: 30px;
        height: 30px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      // 语言切换区域
      .language {
        box-sizing: border-box;
        position: relative;
        width: 25px;
        height: 16px;

        .selLanguage {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          box-sizing: border-box;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 1;
          width: 80px;
          height: 56px;
          border: 1px solid #494949;
          border-radius: 5px;
          transition: all 0.4s;
          transform: translate(0, -14px) scale(0);
          padding-left: 5px;

          .cn {
            width: 100%;
            height: 50%;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .chinabox {
              width: 15px;
              height: 10px;
              margin-right: 2px;

              img {
                width: 15px;
                height: 10px;
              }
            }

            span {
              display: inline-block;
              color: #ffffff;
              font-size: 8px;
            }
          }

          .en {
            display: block;
            width: 100%;
            height: 50%;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .yingbox {
              width: 15px;
              height: 10px;
              margin-right: 2px;

              img {
                width: 15px;
                height: 10px;
              }
            }

            span {
              display: inline-block;
              color: #ffffff;
              font-size: 8px;
            }
          }

          &::before {
            position: absolute;
            left: 100%;
            top: 50%;
            margin: -5px 0 0 0px;
            border: 5px solid transparent;
            border-left-color: #494949;
            content: "";
          }

          &::after {
            position: absolute;
            left: 100%;
            top: 50%;
            margin-top: -4px;
            border: 4px solid transparent;
            border-left-color: #1f1f25;
            content: "";
          }

          &.active {
            transform: translate(-110%, -14px) scale(1);
          }
        }

        img {
          position: absolute;
          z-index: 2;
          width: 100%;
          height: 100%;
          border-radius: 3px;
        }
      }
    }

    // 顶部标题文案区域
    .title-box {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 190px;
      // margin-top: 50px;
      padding-top: 90px;
      background-image: url("../assets/halo.png");
      background-repeat: no-repeat;
      background-position: 10% 60%;
      background-size: 250px 250px;

      .title {
        box-sizing: border-box;
        max-width: 320px;
        text-align: center;

        span {
          color: #ffffff;
          font-size: 32px;
          word-break: break-all;
          font-weight: 600;
        }
      }

      .sub-title {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 60%;
        height: 80px;

        span {
          display: inline-block;
          text-align: center;
          color: #b8c3e0;
          font-size: 14px;
          word-break: break-all;
          font-weight: lighter;
        }
      }
    }

    // 下载按钮ios区域
    .load-btn-box {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      margin-top: 70px;

      a {
        text-decoration: none;
        color: #ffffff;
      }

      .blue-btn {
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 230px;
        height: 68px;
        border-radius: 10px;
        background-color: #1c2fca;
        padding-left: 40px;

        .left-logo {
          width: 23px;
          height: 23px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          width: 100px;
          margin-left: 8px;

          span:first-child {
            font-size: 11px;
          }

          span {
            display: inline-block;
            font-size: 16px;
            color: #ffffff;
          }
        }

        .rec-btn {
          width: 38px;
          height: 20px;
          border-radius: 5px;
          background-color: #1124ae;
          color: #ffffff;
          text-align: center;
          line-height: 20px;
          font-size: 11px;
          margin-top: 15px;
          margin-left: -12px;
        }
      }

      .black-btn {
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 16px;
        width: 230px;
        height: 68px;
        border-radius: 10px;
        background-color: #222127;
        border: 0.5px solid #494949;
        padding-left: 40px;

        .left-logo {
          width: 23px;
          height: 23px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          width: 105px;
          text-align: center;
          margin-top: 7px;
          margin-left: 8px;

          span {
            display: inline-block;
            font-size: 16px;
            color: #ffffff;
          }
        }

        .rec-btn {
          width: 35px;
          height: 27px;
          border-radius: 6px;
          color: #ffffff;
          text-align: center;
          line-height: 27px;
          font-size: 14px;
          margin-top: 15px;
        }
      }

      .load-text {
        width: 100%;
        height: 50px;
        margin-top: 10px;
        text-align: center;
        line-height: 50px;
        font-size: 14px;
        text-decoration: none;
        color: #606063;
      }
    }

    // 下载按钮anzhuo区域
    .load-btn-box-az {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      margin-top: 70px;

      a {
        text-decoration: none;
        color: #ffffff;
      }

      .black-btn {
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 230px;
        height: 68px;
        border-radius: 10px;
        background-color: #1c2fca;

        padding-left: 40px;

        .left-logo {
          width: 23px;
          height: 23px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          width: 100px;
          margin-left: 5px;

          span:first-child {
            font-size: 16px;
          }
        }

        .rec-btn {
          width: 38px;
          height: 20px;
          border-radius: 5px;
          // background-color: #1124ae;
          color: #ffffff;
          text-align: center;
          line-height: 20px;
          font-size: 11px;
          margin-top: 15px;
        }
      }

      .green-btn {
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 16px;
        width: 230px;
        height: 68px;
        border-radius: 10px;
        background: #222127;
        border: 0.5px solid #494949;
        // box-shadow: 0 3px 10px 0 rgba(48, 194, 139, 0.3);
        padding-left: 40px;

        .left-logo {
          width: 23px;
          height: 23px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          width: 120px;
          margin-left: 5px;
          span:first-child {
            display: inline-block;
            font-size: 11px;
            color: #ffffff;
          }
          span {
            display: inline-block;
            font-size: 16px;
            color: #ffffff;
          }
        }

        .rec-btn {
          width: 35px;
          height: 27px;
          border-radius: 6px;
          color: #ffffff;
          text-align: center;
          line-height: 27px;
          font-size: 14px;
          margin-top: 15px;
        }
      }

      .load-text {
        width: 100%;
        height: 50px;
        margin-top: 10px;
        text-align: center;
        line-height: 50px;
        font-size: 14px;
        text-decoration: none;
        color: #606063;
      }
    }

    // 手机图片区域
    .phone-img-box {
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 350px;
      background: linear-gradient(to top, #1c2fc8 0, #1f1f25 50%, #1f1f25 100%);

      img {
        height: 100%;
        margin-left: -25px;
      }
    }
  }

  // 下半部分区域
  .sub-wrapper {
    box-sizing: border-box;
    width: 100%;
    background-color: #ffffff;

    // '稳定运行区域'
    .stable-run {
      background-color: #ffffff;
      box-sizing: border-box;
      width: 100%;
      padding-top: 70px;

      .run-logo {
        padding-left: 24px;

        img {
          width: 28px;
          height: 30px;
        }
      }

      .slider-wrap {
        box-sizing: border-box;
        width: 100%;
        height: 160px;

        .slide-item {
          box-sizing: border-box;
          // width: 300px;
          height: 100%;
          padding: 20px 24px;
        
          .title {
            font-size: 24px;
            font-weight: 900;
          }

          .subTitle {
            word-break: break-all;
            font-size: 14px;
            color: #676767;
            margin-top: 10px;
          }
        }
      }

      .dots {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        padding-left: 24px;

        .dot {
          width: 44px;
          height: 6px;
          background-color: #eee;
          border-radius: 5px;
          margin-right: 10px;

          &.active {
            background-color: #2034c2;
          }
        }
      }
    }

    // 资产交易区域
    .asset-trading {
      box-sizing: border-box;
      padding-top: 110px;
      width: 100%;
      background: #ffffff url("../assets/pg.png") no-repeat bottom;

      .title {
        font-size: 14px;
        color: #1f1e24;
        padding-left: 24px;
      }

      .subTitle {
        font-size: 21px;
        color: #000000;
        padding-left: 24px;
        font-weight: 900;
      }

      .slider-wrap {
        box-sizing: border-box;
        width: 100%;
        margin-top: 10px;

        .slide-item {
          position: relative;
          box-sizing: border-box;

          // padding: 0 24px;
          img {
            width: 100%;
          }
        }
      }

      .dots {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        padding-left: 24px;

        .dot {
          width: 44px;
          height: 6px;
          background-color: #eee;
          border-radius: 5px;
          margin-right: 10px;

          &.active {
            background-color: #2034c2;
          }
        }
      }
    }

    // 金融服务区域
    .financial-service {
      box-sizing: border-box;
      width: 100%;
      background-color: #1f1f25;
      padding: 70px 0;

      .title {
        font-size: 14px;
        color: #d9be96;
        padding-left: 24px;
      }

      .subTitle {
        font-size: 21px;
        color: #ffffff;
        padding-left: 24px;
      }

      .slider-wrap {
        width: 100%;
        margin-top: 80px;

        .slide-item {
          position: relative;
          box-sizing: border-box;

          // padding: 0 24px;
          img {
            width: 100%;
          }
        }
      }

      .dots {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        padding-left: 24px;

        .dot {
          width: 44px;
          height: 6px;
          background-color: #eee;
          border-radius: 5px;
          margin-right: 10px;

          &.active {
            background-color: #d9be96;
          }
        }
      }
    }

    // 了解更多区域
    .learn-more {
      box-sizing: border-box;
      width: 100%;
      background-color: #ffffff;
      padding-top: 70px;

      .img-box {
        position: relative;
        box-sizing: border-box;
        width: 100%;

        .text-box {
          width: 210px;
          position: absolute;
          top: -70px;
          left: 20px;
          margin-top: 60px;

          .title {
            word-break: break-all;
            font-weight: 900;
            font-size: 21px;
            color: #000000;
          }

          .subTitle {
            font-size: 14px;
            color: #1f1e24;
          }
        }

        img {
          width: 100%;
        }
      }

      .more-text {
        box-sizing: border-box;
        width: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
        padding-left: 20px;
        padding-right: 20px;

        background-color: #e4e7ea;

        .title {
          box-sizing: border-box;
          width: 100%;
          color: #000000;
          font-size: 24px;
          font-weight: 900;
        }

        .text {
          box-sizing: border-box;
          width: 100%;
          margin-top: 24px;
          color: #676767;
          font-size: 14px;
          word-break: break-all;
        }

        .btn {
          width: 150px;
          height: 40px;
          background-color: #2328ed;
          color: #ffffff;
          border-radius: 25px;
          margin-top: 20px;
          text-align: center;
          line-height: 40px;
        }
      }
    }
  }

  .footer {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 150px;
    background-color: #1f1f25;
    padding-top: 50px;

    .listBox {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      height: 350px;
      background-color: #1f1f25;

      .left {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 24px;

        ul:last-child {
          margin-top: 10px;
        }

        ul {
          width: 80px;
          list-style: none;
          margin: 0;
          padding: 0;

          li:first-child {
            font-size: 14px;
            color: #ffffff;
            font-weight: 900;
          }

          li {
            color: #918d92;
            font-size: 14px;
            margin-bottom: 10px;

            a {
              color: #918d92;
              text-decoration: none;
            }
          }
        }
      }

      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-right: 24px;

        ul {
          width: 80px;
          list-style: none;
          margin: 0;
          padding: 0;

          li:first-child {
            font-size: 14px;
            color: #ffffff;
            font-weight: 900;
          }

          li {
            color: #918d92;
            font-size: 14px;
            margin-bottom: 10px;

            a {
              color: #918d92;
              text-decoration: none;
            }
          }
        }
      }
    }

    .icon {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        margin-right: 30px;
        width: 23px;
        height: 20px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .copyright {
      margin-top: 25px;
      width: 100%;
      text-align: center;
      color: rgba(255, 255, 255, 0.2);
      font-size: 12px;
    }
  }
}
</style>
