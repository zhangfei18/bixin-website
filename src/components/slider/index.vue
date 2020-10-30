<template>
  <div class="slider">
    <div
      class="slide-item-box"
      :style="boxStyle"
      @touchstart="start"
      @touchmove="move"
      @touchend="end"
    >
      <!-- 内容区域 -->
      <slot> </slot>
    </div>
  </div>
</template>

<script>
import { getClient, START_EVENT, MOVE_EVENT, END_EVENT } from "./utils";
export default {
  data() {
    return {
      boxStyle: {
        width: 100 * this.slideData.length + "%",
        transform: `translate3d(0px, 0px, 0px)`,
        transitionDuration: `0ms`,
        transitionProperty: `none`
      },
      itemStyle: {
        width: "100%"
      },
      startL: 0,
      startX: 0,
      moveX: 0,
      endX: 0,
      disX: 0,
      transX: 0,
      bW: 0,
      iW: 0,
      index: 0,
      minIndex: 0,
      maxIndex: 0
    };
  },
  props: {
    slideData: {
      type: Array,
      default: () => []
    },
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {},
  mounted() {
    this.init();
    // this.bindEvent();
  },
  methods: {
    bindEvent() {
      const el = document.querySelector(".slide-item-box");
      el.addEventListener(START_EVENT, this.start);
      el.addEventListener(MOVE_EVENT, this.move);
      el.addEventListener(END_EVENT, this.end);
    },
    init() {
      let isPc = !("ontouchstart" in window);
      let w = document.documentElement.clientWidth || document.body.clientWidth;
      if (isPc && w <= 1425) {
        w = 1425;
      }
      this.bW = this.slideData.length * w;
      this.boxStyle.width = this.slideData.length * w + "px";
      this.iW = w;
      // this.itemStyle.width = w + "px";
      this.minX = -(this.slideData.length - 1) * w;
      this.maxX = 0;
      this.minIndex = 0;
      this.maxIndex = this.slideData.length - 1;
    },
    start(e) {
      // console.log("down");
      this.startX = getClient(e).x;
      this.startL = this.startX;
      this.boxStyle.transitionDuration = "0ms";
      this.boxStyle.transitionProperty = "none";
    },
    move(e) {
      // console.log("move", e);
      // e.stopPropagation();
      // e.preventDefault();
      this.disX = getClient(e).x - this.startX;
      this.startX = getClient(e).x;
      if (this.transX <= this.minX - 30) {
        this.transX = this.minX - 30;
      } else if (this.transX >= this.maxX + 30) {
        this.transX = this.maxX + 30;
      } else {
        this.transX += this.disX;
      }
      this.boxStyle.transform = `translate3d(${this.transX}px, 0px, 0px)`;
    },
    end(e) {
      this.endX = getClient(e).x;
      this.reverse = this.getReverse(this.endX, this.startL);
      if (this.transX === this.maxX + 30) {
        this.setLeft(0);
      } else if (this.transX === this.minX - 30) {
        this.setLeft(this.slideData.length - 1);
      }
      if (!this.reverse) {
        this.index++;
        this.setLeft(this.index);
      } else {
        this.index--;
        this.setLeft(this.index);
      }
    },
    // 判断是往哪个方向滑动
    getReverse(end, start) {
      if (end > start) {
        return true;
      }
      return false;
    },
    // 根据index移动slide
    setLeft(index) {
      this.index = index;
      if (index > this.slideData.length - 1) {
        this.index = this.slideData.length - 1;
        index = this.slideData.length - 1;
        return;
      }
      if (index < 0) {
        this.index = 0;
        index = 0;
        return;
      }
      this.$emit("input", index);
      this.transX = -1 * index * this.iW;
      this.boxStyle.transitionDuration = "400ms";
      this.boxStyle.transitionProperty = "all";
      this.boxStyle.transform = `translate3d(${this.transX}px, 0px, 0px)`;
    }
  }
};
</script>

<style lang="less" scoped>
.slider {
  width: 100%;
  height: 100%;
  overflow-x: hidden;

  .slide-item-box {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition-timing-function: cubic-bezier(0.23, 1, 0.68, 1);
  }
}
</style>