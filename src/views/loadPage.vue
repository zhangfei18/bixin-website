<template>
  <div class="load-root">
    <!-- 头部区域 -->
    <navHead class="navHead" v-model="languages"></navHead>
    <!-- 内容区域 -->
    <div class="content">
      <div class="leftImg-box">
        <img src="@/assets/load-img/dots.png" alt="" />
      </div>
      <div class="main">
        <!-- 左边区域 -->
        <div class="left">
          <div class="top-logo-wrap">
            <div class="top-logo">
              <img src="@/assets/load-img/ios.png" alt="" />
            </div>
          </div>

          <!-- 左1按钮 -->
          <a target="_blank" href="https://testflight.apple.com/join/bmtk0gG6">
            <div class="first-btn">
              <div class="icon">
                <img src="@/assets/load-img/ios.png" alt="" />
              </div>
              <div class="text" :style="isEn ? 'width: 130px' : ''">
                <span>{{ $t("RzOVPoRrTjSYWFLT") }}</span>
                <span v-show="!isEn">{{ $t("RzOVPoRrTjSYWFLB") }}</span>
              </div>
              <div class="recommend" v-show="!isEn">推荐</div>
            </div>
          </a>

          <!-- 左2按钮 -->
          <a target="_blank" href="https://app.lzswl.cc/download/7D5HM">
            <div class="second-btn">
              <div class="icon">
                <img src="@/assets/load-img/ios.png" alt="" />
              </div>
              <div class="text">
                <span>{{ $t("pKOdFitMVJGVzzIfGLz") }}</span>
              </div>
              <div class="recommend"></div>
            </div>
          </a>
        </div>
        <!-- 中心的区域 -->
        <div class="center">
          <div class="top-logo-wrap">
            <div class="top-logo">
              <img src="@/assets/load-img/anzhuo.png" alt="" />
            </div>
          </div>

          <!-- 中1按钮 -->
          <a target="_blank" href="https://bixin.im/download/android/">
            <div class="first-btn">
              <div class="icon">
                <img src="@/assets/load-img/anzhuo.png" alt="" />
              </div>
              <div class="text">
                <span>{{$t('YScehndIcMSfzbHQBP')}}</span>
                <span>{{$t('ltfbVWEKkuCnuTYxnLBK')}}</span>
              </div>
              <div class="recommend"></div>
            </div>
          </a>

          <!-- 中2按钮 -->
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.bixin.bixin_android"
          >
            <div class="second-btn">
              <div class="icon">
                <img src="@/assets/load-img/google-play.png" alt="" />
              </div>
              <div class="text">
                <span>Download By</span>
                <span>GooglePlay</span>
              </div>
              <div class="recommend"></div>
            </div>
          </a>
        </div>
        <!-- 右边的区域 -->

        <div class="right">
          <!-- 右1 按钮 -->
          <a
            target="desktop-download"
            href="https://prod.243096.com/bixin-desktop-build/Bixin-1.0.7.180723.dmg"
          >
            <div class="first-btn">
              <div class="icon">
                <img src="@/assets/load-img/ios.png" alt="" />
              </div>
              <div class="text">
                <span>MAC</span>
              </div>
              <div class="recommend"></div>
            </div>
          </a>
          <!-- 右2 按钮 -->
          <a
            target="desktop-download"
            href="https://prod.243096.com/bixin-desktop-build/Bixin%20Setup%201.0.7.180723.exe"
          >
            <div class="second-btn">
              <div class="icon">
                <img src="@/assets/load-img/windows.png" alt="" />
              </div>
              <div class="text">
                <span>WINDOWS</span>
              </div>
              <div class="recommend"></div>
            </div>
          </a>

          <!-- 右3 按钮 -->
          <a
            target="desktop-download"
            href="https://prod.243096.com/bixin-desktop-build/Bixin-1.0.7.180723-x86_64.AppImage"
          >
            <div class="third-btn">
              <div class="icon">
                <img src="@/assets/load-img/linux.png" alt="" />
              </div>
              <div class="text">
                <span>LINUX</span>
              </div>
              <div class="recommend"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navHead from "../components/head/nav_text";
import { setBrowserLang } from "../utils/i18n/index";
export default {
  data() {
    return {
      languages: "cn", //语种
      isEn: false
    };
  },
  components: {
    navHead
  },
  watch: {
    languages(newVal) {
      this.languages = newVal;
      // console.log(newVal,'已选语种')
      setBrowserLang(newVal);
      if (newVal === "cn") {
        this.isEn = false;
      } else if (newVal === "en") {
        this.isEn = true;
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/global.css";
.load-root {
  box-sizing: border-box;
  width: 100%;
  // height: 100%;
  min-width: 1425px;
  background-color: #1f1e24;
  // 头部
  .navHead {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 111;
    width: 100%;
    min-width: 1425px;
    background-color: #1f1e24;
  }
  .content {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 1000px;
    padding-top: 80px;

    .leftImg-box {
      width: 530px;
      height: 80%;
      background: url("../assets/load-img/ellipse.png") no-repeat;
      background-position: 50% 100%;
      background-size: 400px 400px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    // 中心的主要区域
    .main {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1200px;
      height: 502px;
      border: 1px solid rgba(73, 73, 73, 0.4);
      border-radius: 15px;
      background-color: rgba(36, 34, 41, 0.7);
      box-shadow: 14px 19px 46px 0px rgba(0, 0, 0, 0.2);
      & > div {
        height: 100%;
        &:not(:first-child) {
          border-left: 1px solid rgba(73, 73, 73, 0.4);
        }
        a {
          cursor: pointer;
        }
      }
      // 左边区域
      .left {
        box-sizing: border-box;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding: 50px 0;

        .top-logo-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 250px;
          height: 87px;
          background-color: rgba(31, 30, 36, 0);
          .top-logo {
            width: 90px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.03);
            border-radius: 23px;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 21px;
              height: 21px;
            }
          }
        }

        // 左1按钮
        .first-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 250px;
          height: 87px;
          background-color: rgba(31, 30, 36, 0);
          border: 1px solid rgba(73, 73, 73, 0.7);
          border-radius: 10px;
          // margin-top: -40px;
          .icon {
            width: 30px;
            height: 30px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100px;
            height: 50%;
            margin-left: 10px;
            span {
              display: inline-block;
              color: #ffffff;
              font-size: 18px;
              &:first-child {
                font-size: 12px;
              }
            }
          }
          .recommend {
            width: 44px;
            height: 23px;
            text-align: center;
            line-height: 23px;
            margin-top: 15px;
            background-color: rgba(220, 217, 236, 0.5);
            border-radius: 5px;
            font-size: 10px;
            color: #ffffff;
          }
        }
        // 左2按钮
        .second-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 250px;
          height: 87px;
          background-color: rgba(31, 30, 36, 0);
          border: 1px solid rgba(73, 73, 73, 0.7);
          border-radius: 10px;
          .icon {
            width: 30px;
            height: 30px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100px;
            height: 50%;
            margin-left: 10px;
            span {
              display: inline-block;
              color: #ffffff;
              font-size: 18px;
            }
          }
          .recommend {
            opacity: 0;
            width: 44px;
            height: 23px;
            text-align: center;
            line-height: 23px;
            margin-top: 15px;
            background-color: rgba(220, 217, 236, 0.5);
            border-radius: 5px;
            font-size: 10px;
            color: #ffffff;
          }
        }
      }
      // 中间区域
      .center {
        box-sizing:  border-box;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding: 50px 0;
        .top-logo-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 250px;
          height: 87px;
          background-color: rgba(31, 30, 36, 0);
          .top-logo {
            width: 90px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.03);
            border-radius: 23px;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 23px;
              height: 23px;
            }
          }
        }

        .first-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 250px;
          height: 87px;
          background-color: rgba(31, 30, 36, 0);
          border: 1px solid rgba(73, 73, 73, 0.7);
          border-radius: 10px;
          // margin-top: -40px;
          .icon {
            width: 30px;
            height: 30px;
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
            height: 50%;
            margin-left: 10px;
            span {
              display: inline-block;
              color: #ffffff;
              font-size: 18px;
              &:first-child {
                font-size: 12px;
              }
            }
          }
          .recommend {
            opacity: 0;
            width: 44px;
            height: 23px;
            text-align: center;
            line-height: 23px;
            margin-top: 15px;
            background-color: rgba(220, 217, 236, 0.5);
            border-radius: 5px;
            font-size: 10px;
            color: #ffffff;
          }
        }
        .second-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 250px;
          height: 87px;
          background-color: rgba(31, 30, 36, 0);
          border: 1px solid rgba(73, 73, 73, 0.7);
          border-radius: 10px;
          .icon {
            width: 30px;
            height: 30px;
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
            height: 50%;
            margin-left: 10px;
            span {
              display: inline-block;
              color: #ffffff;
              font-size: 18px;
              &:first-child {
                font-size: 12px;
              }
            }
          }
          .recommend {
            opacity: 0;
            width: 44px;
            height: 23px;
            text-align: center;
            line-height: 23px;
            margin-top: 15px;
            background-color: rgba(220, 217, 236, 0.5);
            border-radius: 5px;
            font-size: 10px;
            color: #ffffff;
          }
        }
      }
      // 右边区域
      .right {
        box-sizing: border-box;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding: 50px 0;

        .first-btn,
        .second-btn,
        .third-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 250px;
          height: 87px;
          background-color: rgba(31, 30, 36, 0);
          border: 1px solid rgba(73, 73, 73, 0.7);
          border-radius: 10px;
          .icon {
            width: 30px;
            height: 30px;
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
            height: 50%;
            margin-left: 10px;
            span {
              display: inline-block;
              color: #ffffff;
              font-size: 18px;
            }
          }
          .recommend {
            opacity: 0;
            width: 44px;
            height: 23px;
            text-align: center;
            line-height: 23px;
            margin-top: 15px;
            background-color: rgba(220, 217, 236, 0.5);
            border-radius: 5px;
            font-size: 10px;
            color: #ffffff;
          }
        }
      }
    }
  }
}
</style>