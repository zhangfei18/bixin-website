<template>
  <div class="about">
    <div class="box" @click="boxClick">
      <div class="item" :class="boxActive ? 'active' : ''"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boxActive: false
    };
  },
  methods: {
    boxClick() {
      this.boxActive = !this.boxActive;
    }
  }
};
</script>

<style lang="less" scoped>
.about {
  width: 100%;
  height: 100%;
  .box {
    margin-left: 100px;
    position: relative;
    width: 50px;
    height: 50px;
    background-color: brown;
    .item {
      width: 100px;
      height: 100px;
      border: 1px solid #ff9900;
      position: absolute;
      transition: all 0.4s;
      transform: scale(0) translateX(0);
      &.active {
        transform: scale(1) translateX(-100%);
      }
    }
  }
}
</style>