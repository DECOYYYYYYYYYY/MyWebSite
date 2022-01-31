<template>
  <transition name="side">
    <div class="box" v-if="isShow">
      <a @click="toTop" href="javascript:" class="sideBarButton iconfont">&#xe6ac;</a>
    </div>
  </transition>
</template>

<script>
//todo 若按钮覆盖了内容，使按钮半透明
export default {
  name: "SideBar",
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    checkWhetherShow() {
      this.isShow = window.pageYOffset > 400
    },
    toTop(){
      let y = document.documentElement.scrollTop
      let id = setInterval(() => {
        document.documentElement.scrollTop = y = Math.floor(y/2)
        if (y === 0) {
          clearInterval(id)
        }
      },16)
    }
  },
  mounted() {
    this.checkWhetherShow()
    window.addEventListener('scroll', this.checkWhetherShow)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkWhetherShow)
  }
}
</script>

<style scoped lang="less">
@left-to-container:40px;
@button-width:40px;
.box {
  width: @button-width;
  position: fixed;
  right: 10px;
  bottom: 30px;
}
.sideBarButton {
  display: block;
  width: @button-width;
  height: @button-width;
  font-size: 25px;
  text-align: center;
  line-height: $height;
  box-shadow: 2px 1px 7px 1px rgba(0,0,0,.2);
  border-radius: 8px;
  background-color: #fff;
  &:hover {
    background-color: #eee;
    transition: background-color .3s;
  }
}
.side-enter-active,.side-leave-active{
  transition: all .3s;
}
.side-enter{
  transform: translateY(-20%);
  opacity: 0;
}
.side-enter-to{
  transform: translateY(0%);
  opacity: 1;
}
.side-leave{
   transform: translateY(0%);
   opacity: 1;
 }
.side-leave-to{
  transform: translateY(-20%);
  opacity: 0;
}
</style>
