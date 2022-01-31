<template>
  <transition-group tag="div" class="maskBox" name="maskAnimation" appear>
    <div class="mask" @click="closeMask" key="mask"></div>
    <div class="info" key="info">
      <div ref="info">
        <slot></slot>
      </div>
      <a href="javascript:" class="return iconfont" @click="closeMask">&#xe6aa;</a>
    </div>
  </transition-group>
</template>

<script>
import {debounce} from "@/assets/js";
export default {
  name: "UserMask",
  props: ['closeMask'],
  data() {
    return {
      minHeight: 0,
      minWidth: 0,
      maxHeightPercentage: 85,
      maxWidth: 3000,
      WidthPercentage: 75,
      originHeight: 0,
      originWidth: 0,
      resizeToFitWindowDebounce: debounce(this.resizeToFitWindow, 100)
    }
  },
  methods: {
    resizeToFitWindow() {
      let maxHeight = window.innerHeight * this.maxHeightPercentage / 100
      let targetWidth = window.innerWidth * this.WidthPercentage / 100
      targetWidth = Math.min(Math.max(targetWidth, this.minWidth), this.maxWidth)

      this.$refs.info.style.width = targetWidth + 'px'
      this.$refs.info.style.height = 'auto'
      if (this.$refs.info.offsetHeight > maxHeight) {
        this.$refs.info.style.height = maxHeight + 'px'
      }
    }
  },
  mounted() {
    this.originHeight = this.$refs.info.offsetHeight
    this.originWidth = this.$refs.info.offsetWidth
    this.resizeToFitWindow()
    window.addEventListener('resize', this.resizeToFitWindowDebounce)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeToFitWindowDebounce)
  }
}
</script>

<style scoped lang="less">
.maskBox {
  position: relative;
  z-index: 999;
}

.info {
  position: fixed;
  padding: 15px;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: #fff;
  border-radius: 6px;

  & > div {
    overflow-y: auto;
  }
}

.return {
  position: fixed;
  display: block;
  width: 36px;
  height: 36px;
  line-height: $height;
  text-align: center;
  border-radius: $height./2;
  right: -40px;
  top: -40px;
  background-color: rgba(0, 0, 0, .3);
  color: #fff;
}

.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .3);
}

.maskAnimation-enter-active {
  transition: all .4s;
}

.maskAnimation-enter {
  opacity: 0;
  margin-top: -4%;
}

.maskAnimation-enter-to {
  opacity: 1;
  margin-top: 0;
}
</style>
