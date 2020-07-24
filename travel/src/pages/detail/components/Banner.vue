<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="https://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg"/>
      <div class="banner-info">
        <div class="banner-title">故宫(AAAAA景区)</div>
        <div class="banner-number banner-icon"><span class="iconfont">&#xe635;</span>17</div>
      </div>
    </div>
    <common-gallery :imgs="imgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallery: false,
      imgs: ['http://img2.sycdn.imooc.com/5de0f6bd00015b5906400359.jpg', 'http://img4.sycdn.imooc.com/5dd7425400012f5706400359.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  },
  components: {
    CommonGallery
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position :relative
    overflow: hidden
    height: 0
    padding-bottom :55%
    .banner-img
      width: 100%
    .banner-info
      display :flex
      position :absolute
      left :0
      right :0
      bottom :0
      line-height :.6rem
      color:#fff
      background-image :linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
        text-align :left
        flex:1
        font-size :.32rem
        padding : 0 .2rem
      .banner-number
        height : .32rem
        line-height : .32rem
        margin-top :.14rem
        padding : 0 .4rem
        background :rgba(0,0,0,.8)
        font-size: .24rem
        .banner-icon
          font-size :.24rem
</style>
