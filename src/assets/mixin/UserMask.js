export default  {
  methods: {
    closeMask() {
      this.isMaskShowing = false
    },
    openMask(handler,...arg){
      this.isMaskShowing = true
      if (handler instanceof Function) {
        handler(...arg)
      }
    }
  },
  data() {
    return {
      isMaskShowing: false
    }
  }
}
