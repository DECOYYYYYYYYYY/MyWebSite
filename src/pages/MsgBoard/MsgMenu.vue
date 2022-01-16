<template>
  <main>
    <nav>
      <!--todo 添加分类-->
      <ul class="nav-text">
        <li><a href="javascript:" class="active-text">全部</a></li>
      </ul>
      <!--todo 完善发布功能-->
      <button id="publish" @click="publish">发布</button>
    </nav>
    <UserMask :closeMask="closeMask" v-if="isMaskShowing">
      <div class="slot-box">

      </div>
    </UserMask>
  </main>
</template>

<script>
import UserMask from "@/components/UserMask/UserMask";
import mixin_UserMask from "@/assets/mixin/UserMask"
export default {
  name: "MsgMenu",
  components:{UserMask},
  mixins: [mixin_UserMask],
  methods: {
    publish() {
      this.openMask();
    }
  },
}
</script>

<style scoped lang="less">
@nav-height:50px;

nav {
  display: flex;
  padding: 0 15px;
  justify-content: space-between;
  align-items: center;
  height: @nav-height;
  border-bottom: 1px solid @tint-border-color;
  ul li a {
    display: inline-block;
    line-height: @nav-height;
    padding: 0 10px;
  }

  button {
    background-color: @submit-button-blue;
    height: 0.7*@nav-height;
    width: 1.1*@nav-height;
    color: #fff;
    font-size: 14px;
    border-radius: 5px;
    transition: background-color .4s;
    &:hover {
      background-color: @submit-button-blue-hover;
    }
  }
}
</style>
