/**
 * 网站首页
 */
<template lang="pug">
.container
  //- banner
  .banner
    a.photo.animated.zoomIn(href="/aboutme" title="About me")

    .links.animated.fadeInDown(style="animation-delay: .4s;")
      a(href="http://github.com/lingxyz")
        i.iconfont.icon-github
      a(href="javascript:;")
        i.iconfont.icon-wechat
        img(src="~/assets/qr_wechat.png" alt="")
      a(href="http://weibo.com/5565541266")
        i.iconfont.icon-weibo
      a(href="http://twitter.com/lingzZ")
        i.iconfont.icon-twitter
      a(href="mailto:zhangling.me@foxmail.com")
        i.iconfont.icon-mail

    p.about.animated.fadeInDown(style="animation-delay: .8s;") {{indexDB.info.description}}

    .menu
      a.animated(
        v-for="(item, index) in indexDB.menus"
        :href="item.link"
        :class="menusAnimateClass"
        :style="'animation-delay: ' + (1 + 0.2 * index) + 's;'") {{item.title}}

    //- recommend
    .recommend.animated.fadeInLeft(style="animation-delay: 2s;")
      a(
        v-for="(item, index) in indexDB.recommends"
        :href="item.link"
        :style="'background: ' + item.background") {{item.title}}

    //- 背景颜色
    div.bcg-green

  //- sidebar
  ul.sidebar
    li
      a(href="#books") 专栏
    li
      a(href="#projects") 项目

  h1 专栏
  ul#books
    li(v-for="(item, index) in indexDB.books")
      a(:href="item.link")
        i.iconfont(:class="item.icon")
        span {{item.title}}

  h1 项目
  ul#projects
    li(v-for="(item, index) in indexDB.projects")
      a(:href="item.link")
        i.iconfont(:class="item.icon")
        span {{item.title}}
</template>

<script>
import jsyaml from 'js-yaml'
import indexDB from '~/database/index.yaml'

export default {
  data: () => ({
    // 菜单动画
    menusAnimateClass: "fadeInDown"
  }),

  computed: {
    indexDB () {
      return jsyaml.load(indexDB.body)
    },
  },

  mounted () {
    this.bounce()
  },

  methods: {
    // menu 跳动动画
    bounce () {
      setInterval(() => {
        this.menusAnimateClass = this.menusAnimateClass ? '' : 'bounce'
      }, 3000)
    }
  }

}
</script>

<style lang="stylus" scoped>
// container
.container
  font-size 1rem
  font-family "Source Sans Pro",Futura,"Helvetica Neue",Helvetica,"Lantinghei SC","Kaiti SC","Hiragino Sans GB","Microsoft YaHei",sans-serif
  background #f7f7f7
//  top banner
.banner
  padding 200px 0 300px
  position relative
  line-height 1.5
  text-align center
  color hsla(0,0%,100%,.9)
  z-index 1
  overflow hidden
  // position absolute
  // width 100%
  // top 40%
  // transform translateY(-40%)

// photo
a
  &.photo
    display inline-block
    width 100px
    height 100px
    background url('~assets/photo.jpg') no-repeat center center
    background-size cover
    border-radius 100%
    box-shadow 0px 0px 10px 3px #ccc
    &:hover
      background url('~assets/photo-hover.jpg') no-repeat center center
      background-size cover

// about
.about
  margin-top 20px
  font-size 1.2em
  font-weight normal
  line-height 1.5
  text-align center
  // text-shadow 0 1px rgba(255,255,255,.4)

// links
.links
  a
    display inline-block
    margin 12px 6px 0
    color rgba(247,245,245,0.9)
    // text-shadow 0 2px rgba(255,255,255,.4)
    border-bottom none
    text-decoration none
    position relative
    .iconfont
      font-size 1.2em
    img
      position absolute
      width 0
      top 0
      left 50%
      transform translate(-50%,-100%)
      opacity 0
      transition all .5s
    &:hover
      color #333
      img
        width 120px
        opacity 1

// menu
.menu
  a
    display inline-block
    text-decoration none
    margin 40px 4px 0
    padding 8px 22px
    background rgba(247,245,245,0.6)
    color #333
    &:hover
      color #fff
      background #333

// recommend
.recommend
  max-width 600px
  margin 2rem auto -8rem
  display flex
  align-items center
  // background rgba(247,245,245,0.6)
  width 80%
  // padding .6rem
  position relative
  &:before
    content '推荐'
    width 1em
    position absolute
    left -.2rem
    transform translateX(-100%)
    background #3a3a3a
    padding .2rem .4rem
  a
    display inline-block
    text-decoration none
    color #000
    width 10rem
    height 4rem
    line-height 4rem
    background #fff
    margin 0 .2rem
    background #f5f5f5

// 背景颜色
.bcg-green
  background #2aae67
  width 150%
  position absolute
  top 0
  height 100%
  z-index -1
  border-radius 0 0 50% 50%
  left 50%
  transform translateX(-50%)
  overflow hidden

// sidebar
.sidebar
  position fixed
  top 40%
  right 0
  transform translateY(-40%)
  list-style none
  margin 0
  z-index 1
  li
    padding 0 10px
    background-color hsla(0,0%,100%,.07)
    a
      color hsla(0,0%,100%,.9)
      text-decoration none
      display inline-block
      padding 10px 0
      border-bottom 1px solid #fff
    &:last-child a
      border-bottom none

#books, #projects, h1
  font 14px/1.6 -apple-system-font,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei UI,Microsoft YaHei,Arial,sans-serif
  animation a 1s both
  padding 30px 0
  margin 0 auto
  display flex
  overflow hidden
  list-style none
  flex-wrap wrap
  width 984px
  li
    width: 214px;
    height: 180px;
    padding-right: 32px;
    padding-bottom: 32px;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
  a
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: #fff;
    border-radius: 8px;
    transition: transform .3s;
    line-height: 24px;
    color rgba(0,0,0,.9)
    text-decoration none
    font-size 17px
    font-weight 400
    i
      margin-bottom: 16px;
      display: inline-block;
      vertical-align: middle;
      font-size: 36px;
      background-size: cover;
h1
  font-size 30px
  padding 72px 0 0
</style>
