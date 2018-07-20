<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    //插件滚动时默认节流
    probeType: {
      type: Number,
      default: 1
    },
    //是否派发click事件
    click: {
      type: Boolean,
      default: true
    },
    //是否派发滚动事件
    listenScroll: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    },
    //上拉加载
    pullup: {
      type: Boolean,
      default: false
    },
    //数据更新后，刷新scroll的延时、
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  mounted() {
    //确保DOM渲染完毕后就进行初始化
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      })

      //如果存在滚动事件派发
      if (this.listenScroll) {
        let _this = this
        this.scroll.on('scroll', (pos) => {
          _this.$emit('scroll', pos)
        })
      }

      //如果存在上拉加载
      if (this.pullup) {
        this.scroll.on('scrollEnd', () => {
          //滚动快要到底部
          if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
            this.$emit('scrollToEnd')
          }
        })
      }
    },
    //代理better-scroll方法
    enable() {
      this.scroll && this.scroll.enable()
    },
    disable() {
      this.scroll && this.scroll.disable()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  },
  watch: {
    //监听数据变化
    data() {
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    }
  }
}
</script>

<style>

</style>


