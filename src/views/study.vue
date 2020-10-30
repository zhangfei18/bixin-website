<template>
  <div class="study-box">
    <div class="head">
      <div class="left">
        <!-- logo -->
        <div class="logo">
          <img src="@/assets/novice/logo.png" alt="" />
        </div>
      </div>
      <!-- 头部 右边按钮区域 -->
      <a href="" target="_blank">
        <div class="right">
          前往官网
          <span>
            <img src="@/assets/novice/arrow@3x.png" alt="" />
          </span>
        </div>
      </a>
    </div>
    <div class="top">
      <!-- <span> -->
      比特币安全吗
      <!-- </span> -->
    </div>
    <div class="main">
      <div class="left-text">
        <b1></b1>
      </div>
      <div class="right-load-bixin">
        <a href=""><div class="btn">下载币信App</div></a>

        <div class="qr-code">
          <span class="code">
            <img src="@/assets/study/code.png" alt="" />
          </span>
          <span class="text">加入币信社群 了解很多资讯</span>
          <div class="concat">
            <a href="https://twitter.com/BixinWallet"
              ><img class="twiter" src="@/assets/study/twitershixin.png" alt=""
            /></a>
            <a href="https://weibo.com/BixinIM"
              ><img class="weibo" src="@/assets/study/weiboshixin.png" alt=""
            /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">&copy; 2014-2020 BIXIN. ALL Rights Reserved.</div>
  </div>
</template>

<script>
import b1 from "../components/study/b1"
export default {
  components:{
    b1
  },
  mounted(){
    console.log(this.$route.query)
  }
};
</script>

<style lang="less" scoped>
.study-box {
  width: 100%;
  min-width: 1425px;
  //   height: 100%;
  .head {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 200px;
    // position: fixed;
    // top: 0;
    // left: 0;
    // z-index: 111;
    width: 100%;
    min-width: 1425px;
    height: 66px;
    background-color: #1f1e24;
    border-bottom: 1px solid #494949;
    // 头部 左边文字区域
    .left {
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
  .top {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 312px;
    // text-align: center;
    background-color: #1f1e24;

    font-size: 60px;
    color: #ffffff;
    font-weight: 600;
  }
  .main {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 1000px;
    margin: 0 auto;
    margin-top: 148px;
    margin-bottom: 50px;
    .left-text {
      box-sizing: border-box;
      width: 700px;
      word-break: break-all;
      color: rgba(31, 30, 36, 0.8);
      font-size: 12px;
      pre{
        width: 100%;
      }
    }
    .right-load-bixin {
      box-sizing: border-box;
      width: 250px;
      a {
        text-decoration: none;
        color: #ffffff;
      }
      .btn {
        width: 244px;
        height: 64px;
        background: linear-gradient(to right, #1c2fca 0%, #394fef 100%);
        box-shadow: 0px 13px 41px 0px rgba(25, 47, 255, 0.24);
        color: #ffffff;
        font-size: 16px;
        border-radius: 10px;
        text-align: center;
        line-height: 64px;
      }
      .qr-code {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 244px;
        height: 360px;
        margin-top: 34px;
        box-shadow: 14px 19px 46px 0px rgba(0, 0, 0, 0.13);
        .code {
          width: 164px;
          height: 164px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .text {
          font-size: 14px;
        }
        .concat {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80%;
          a {
          }
          .twiter {
            width: 50px;
            height: 50px;
          }
          .weibo {
            width: 50px;
            height: 50px;
            margin-left: 28px;
          }
        }
      }
    }
  }
  .footer {
    box-sizing: border-box;
    width: 100%;
    height: 112px;
    background-color: #1f1e24;
    text-align: center;
    color: rgba(255, 255, 255, 0.2);
    font-size: 12px;
    padding-top: 80px;
  }
}
</style>