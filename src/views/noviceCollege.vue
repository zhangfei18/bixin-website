<template>
  <div class="novice-box">
    <!-- 头部 -->
    <div class="head">
      <div class="head-inside">
        <div class="left">
          <!-- logo -->
          <div class="logo">
            <img src="@/assets/novice/logo.png" alt="" />
          </div>
        </div>
        <a href="" target="_blank">
          <div class="right">
            前往官网
            <span>
              <img src="@/assets/novice/arrow@3x.png" alt="" />
            </span>
          </div>
        </a>
      </div>

      <!-- 头部 右边按钮区域 -->
    </div>
    <!-- 轮播盒子 -->
    <div class="slide-box">
      <a target="_blank" href="">
        <div class="wechat">
          <div class="btn">
            <span>
              <img src="@/assets/novice/saoma.png" alt="" />
            </span>
            <span>加入微信社群</span>
          </div>
          <div class="slideQrCode">
            <img src="@/assets/novice/join-com.png" alt="" />
          </div>
        </div>
      </a>
      <Slide ref="slider" :slideData="slideData1" v-model="curIndex">
        <template v-slot:default>
          <div class="slide-item" :style="itemStyle">
            <img :src="slideItem1" alt="" />
            <div></div>
          </div>
          <!-- <div class="slide-item" :style="itemStyle">
            <img :src="slideItem2" alt="" />
          </div> -->
        </template>
      </Slide>
    </div>
    <div class="dots" v-if="slideData1.length > 2">
      <span
        v-for="(item, index) in slideData1"
        :key="index"
        class="dot"
        :class="curIndex === index ? 'active' : ''"
        @click="dotClick(index)"
      ></span>
    </div>
    <!-- 问题四大模块盒子 -->
    <div class="question-box">
      <div class="box-wrap">
        <!-- <a target="_blank" href=""> -->
        <div class="WIBlockchain" @click="b1('b1')">
          <span class="brief-title">入门必读</span>
          <br />
          <span class="text">什么是区块链</span>
        </div>
        <!-- </a> -->
        <!-- <a target="_blank" href=""> -->
        <div class="WIBitcoin" @click="b2('b2')">
          <span class="brief-title">重中之重</span>
          <br />
          <span class="text">什么是比特币</span>
        </div>
        <!-- </a> -->

        <!-- <a target="_blank" href=""> -->
        <div class="TBitcoin" @click="b3('b3')">
          <span class="brief-title">入场须知</span>
          <br />
          <span class="text">买卖比特币合法吗?</span>
        </div>
        <!-- </a> -->
        <!-- <a target="_blank" href=""> -->
        <div class="WTBitcoin" @click="b4('b4')">
          <span class="brief-title">快速了解</span>
          <br />
          <span class="text">如何购买比特币</span>
        </div>
        <!-- </a> -->
      </div>
    </div>
    <!-- 主内容区域 -->
    <div class="content">
      <div class="big-title">
        <!-- <><> -->
        秒懂课堂
      </div>
      <div class="fLine">
        <!-- <a target="_blank" href=""> -->
        <div @click="t1('t1')">
          <span>入门比特币必须知道的</span>
          <br />
          <span>10个数字</span>
        </div>
        <!-- </a> -->
        <!-- <a target="_blank" href=""> -->
        <div @click="t2('t2')">
          <span>什么是挖矿/矿工?</span>
          <br />
          <span>怎样去挖矿?</span>
        </div>
        <!-- </a> -->
        <!-- <a target="_blank" href=""> -->
        <div @click="t3('t3')">
          <span>比特币安全吗?</span>
        </div>
        <!-- </a> -->
      </div>
      <div class="sLine">
        <!-- <a target="_blank" href=""> -->
        <div @click="t4('t4')">
          <span>比特币和Q币有什么不同</span>
        </div>
        <!-- </a> -->
        <!-- <a target="_blank" href=""> -->
        <div @click="t5('t5')">
          <span>稳定币是什么?</span>
          <br />
          <span>和法定数字货币什么关系?</span>
        </div>
        <!-- </a> -->
        <!-- <a target="_blank" href=""> -->
        <div @click="t6('t6')">
          <span>以太坊是什么?</span>
        </div>
        <!-- </a> -->
      </div>
      <div class="tLine">
        <!-- <a target="_blank" href=""> -->
        <div @click="t7('t7')">
          <span>DeFi(去中心化金融)</span>
          <br />
          <span>是什么?</span>
        </div>
        <!-- </a> -->
        <!-- <a target="_blank" href=""> -->
        <div @click="t8('t8')"><span>如何使用和花费比特币?</span></div>
        <!-- </a> -->
        <!-- <a target="_blank" href=""> -->
        <div @click="t9('t9')">
          <span>哪些行业最容易受到</span>
          <br />
          <span>区块链影响?</span>
        </div>
        <!-- </a> -->
      </div>
      <div class="right-bottom" ref="right-bottom-qr">
        <img src="@/assets/novice/right-bottom.png" alt="" />
      </div>
    </div>
    <!-- footer -->
    <div class="footer">&copy; 2014-2020 BIXIN. ALL Rights Reserved.</div>
  </div>
</template>

<script>
import Slide from "../components/slider/index";
export default {
  data() {
    return {
      slideItem1: require("../assets/novice/banner.png"),
      slideItem2: require("../assets/financial2.png"),
      itemStyle: {
        width: "100%",
      },
      slideData1: [1],
      curIndex: 0,
      isPc: true,
    };
  },
  components: {
    Slide,
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // let isPc = !('ontouchstart' in window);
      // let isPc = false;
      let w = document.documentElement.clientWidth || document.body.clientWidth;
      console.log(w, "w");
      if (w <= 1425) {
        w = 1425;
      }
      this.itemStyle.width = w + "px";
      // 监听document滚动
      document.addEventListener("scroll", (e) => {
        // console.log(e, document.documentElement.scrollTop);
        if (document.documentElement.scrollTop > 800) {
          this.$refs["right-bottom-qr"].style.display = "block";
        }
        if (document.documentElement.scrollTop < 800) {
          this.$refs["right-bottom-qr"].style.display = "none";
        }
      });
    },
    dotClick(index) {
      this.$refs.slider.setLeft(index);
    },
    b1(val) {
      this.$router.push({ path: "/study", query: { module: val } });
    },
    b2(val) {
      this.$router.push({ path: "/study", query: { module: val } });
    },
    b3(val) {
      this.$router.push({ path: "/study", query: { module: val } });
    },
    b4(val) {
      this.$router.push({ path: "/study", query: { module: val } });
    },
    t1(val) {
      this.$router.push({ path: "/study", query: { module: val } });
    },
    t2(val) {
      this.$router.push({ path: "/study", query: { module: val } });
    },
    t3(val) {
      this.$router.push({ path: "/study", query: { module: val } });
    },
    t4(val) {
      this.$router.push({ path: "/study", query: { module: val } });
    },
    t5(val) {
      this.$router.push({ path: "/study", query: { module: val } });
    },
    t6(val) {
      this.$router.push({ path: "/study", query: { module: val } });
    },
    t7(val) {
      this.$router.push({ path: "/study", query: { module: val } });
    },
    t8(val) {
      this.$router.push({ path: "/study", query: { module: val } });
    },
    t9(val) {
      this.$router.push({ path: "/study", query: { module: val } });
    },
  },
};
</script>

<style lang="less" scoped>
.novice-box {
  width: 100%;
  min-width: 1425px;
  height: 100%;

  .head {
    box-sizing: border-box;
    // position: fixed;
    // top: 0;
    // left: 0;
    // z-index: 111;
    width: 100%;
    min-width: 1425px;
    height: 66px;
    background-color: #1f1e24;
    border-bottom: 1px solid #494949;

    .head-inside {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1300px;
      height: 100%;
      margin: 0 auto;

      // 头部 左边文字区域
      .left {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 235px;
        height: 100%;

        .logo {
          width: 195px;
          height: 37px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      // 右边 按钮区域
      .right {
        box-sizing: border-box;
        width: 124px;
        height: 38px;
        text-align: center;
        line-height: 38px;
        background-color: #1f1e24;
        border: 1px solid #494949;
        border-radius: 30px;
        color: #ffffff;
        font-weight: 600;

        span {
          width: 10px;
          height: 15px;

          img {
            width: 10px;
            height: 10px;
          }
        }
      }
    }
  }

  .slide-box {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 636px;
    padding-top: 66px;
    background-color: #1f1e24;
    background-image: url("../assets/novice/banner-bg.png");
    background-size: 80% 80%;
    background-position: center;
    overflow: hidden;

    .wechat {
      position: absolute;
      z-index: 10;
      width: 158px;
      height: 51px;
      border: 1px solid #4d4b59;
      top: 80%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 10px;
      transition: all 0.2s;

      &:hover {
        border: 1px solid #656567;
        border-radius: 10px;

        .slideQrCode {
          visibility: visible;
          //   transform: translate(-50%, -150%);
        }
      }

      .btn {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 100%;

        span {
          color: #f5f5f6;
          font-size: 14px;
        }

        span:first-child {
          width: 20px;
          height: 20px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      // 悬浮二维码区域
      .slideQrCode {
        box-sizing: border-box;
        visibility: hidden;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -140%);
        width: 150px;
        height: 150px;
        padding: 20px;
        transition: all 0.4s;
        background-color: #ffffff;
        border-radius: 15px;

        img {
          width: 100%;
          height: 100%;
        }

        &::before {
          position: absolute;
          left: 50%;
          top: 100%;
          margin: -1px 0px 0 -5px;
          border: 8px solid transparent;
          border-top-color: #ffffff;
          content: "";
        }

        // &::after {
        //     position: absolute;
        //     left: 50%;
        //     top: 100%;
        //     // margin-top: -4px;
        //     border: 8px solid transparent;
        //     border-top-color: #ffffff;
        //     content: "";
        // }
      }
    }

    .slide-item {
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 150px;
      height: 100%;

      img {
        width: 700px;
        height: 200px;
      }
    }
  }

  .dots {
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: #1f1e24;
    padding: 0 150px;

    .dot {
      width: 44px;
      height: 7px;
      background-color: #4a494e;
      border-radius: 5px;
      margin-right: 5px;

      &.active {
        background-color: #f5f5f6;
      }
    }
  }

  .question-box {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    background-color: #1f1e24;

    .box-wrap {
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      width: 1300px;
      margin: 0 auto;

      & > div {
        width: 288px;
        height: 125px;
        border-radius: 10px;
        padding: 20px 0 0 20px;
        margin-bottom: 25px;

        .brief-title {
          font-size: 12px;
          color: #eee;
        }

        .text {
          font-size: 18px;
          color: #ffffff;
          font-weight: 600;
        }
      }

      .WIBlockchain {
        // background: linear-gradient(to right, );
        // background-color: #151d36;
        background: url("../assets/novice/b1.png") no-repeat;
        background-size: cover;
         cursor: pointer;
      }

      .WIBitcoin {
        // background-color: #151d36;
        background: url("../assets/novice/b2.png") no-repeat;
        background-size: cover;
         cursor: pointer;
      }

      .TBitcoin {
        // background-color: #151d36;
        background: url("../assets/novice/b3.png") no-repeat;
        background-size: cover;
         cursor: pointer;
      }

      .WTBitcoin {
        // background-color: #151d36;
        background: url("../assets/novice/b4.png") no-repeat;
        background-size: cover;
         cursor: pointer;
      }
    }
  }

  .content {
    box-sizing: border-box;
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-evenly;
    // align-self: flex-start;
    width: 100%;
    min-height: 700px;
    margin: 0 auto;
    background-color: #ffffff;
    padding: 80px 0;

    .big-title {
      width: 1300px;
      margin: 0 auto;
      // padding-left: 50px;
      padding-bottom: 15px;
      font-size: 28px;
      font-weight: 600;
    }

    .fLine {
      width: 1300px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > div {
        box-sizing: border-box;
        width: 410px;
        height: 205px;
        background-color: #151d36;
        border-radius: 10px;
        margin-bottom: 32px;
        padding-top: 40px;
        padding-left: 30px;
 cursor: pointer;
        span {
          display: inline-block;
          font-size: 20px;
          color: #ffffff;
          font-weight: 600;
        }
        &:first-child {
          background: url("../assets/novice/t1.png") no-repeat;
          background-size: cover;
        }
         &:nth-child(2) {
          background: url("../assets/novice/t2.png") no-repeat;
          background-size: cover;
        }
         &:last-child {
          background: url("../assets/novice/t3.png") no-repeat;
          background-size: cover;
        }
      }
    }

    .sLine {
      width: 1300px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > div {
        box-sizing: border-box;
        width: 410px;
        height: 205px;
        background-color: #151d36;
        border-radius: 10px;
        margin-bottom: 32px;
        padding-top: 40px;
        padding-left: 30px;
             cursor: pointer;
        span {
          display: inline-block;
          font-size: 20px;
          color: #ffffff;
          font-weight: 600;
        }
         &:first-child {
          background: url("../assets/novice/t4.png") no-repeat;
          background-size: cover;
        }
         &:nth-child(2) {
          background: url("../assets/novice/t5.png") no-repeat;
          background-size: cover;
        }
         &:last-child {
          background: url("../assets/novice/t6.png") no-repeat;
          background-size: cover;
        }
      }
    }

    .tLine {
      width: 1300px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > div {
        box-sizing: border-box;
        width: 410px;
        height: 205px;
        background-color: #151d36;
        border-radius: 10px;
        margin-bottom: 32px;
        padding-top: 40px;
        padding-left: 30px;
            cursor: pointer;
        span {
          display: inline-block;
          font-size: 20px;
          color: #ffffff;
          font-weight: 600;
        }
         &:first-child {
          background: url("../assets/novice/t7.png") no-repeat;
          background-size: cover;
        }
         &:nth-child(2) {
          background: url("../assets/novice/t8.png") no-repeat;
          background-size: cover;
        }
         &:last-child {
          background: url("../assets/novice/t9.png") no-repeat;
          background-size: cover;
        }
      }
    }

    .right-bottom {
      display: none;
      position: fixed;
      right: 5px;
      bottom: 112px;
      width: 195px;
      height: 230px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .footer {
    box-sizing: border-box;
    width: 100%;
    height: 112px;
    background-color: #1f1e24;
    width: 100%;
    text-align: center;
    color: rgba(255, 255, 255, 0.2);
    font-size: 12px;
    padding-top: 80px;
  }
}
</style>
