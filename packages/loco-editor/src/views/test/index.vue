<template>
  <div id="loco-test" ref="wrapper">
    <pull-down :wrapper="wrapper"></pull-down>
    <div>
      <p>dadawdawdawdawwdawdawdadaw</p>
      <p>dadawdawdawdawwdawdawdadaw</p>
      <p>dadawdawdawdawwdawdawdadaw</p>
      <p>dadawdawdawdawwdawdawdadaw</p>
      <p>dadawdawdawdawwdawdawdadaw</p>
      <p>dadawdawdawdawwdawdawdadaw</p>
      <p>dadawdawdawdawwdawdawdadaw</p>
      <p>dadawdawdawdawwdawdawdadaw</p>
      <p>dwdawdawdaw</p>
      <p>dwdawdawdaw</p>
      <p>dwdawdawdaw</p>
      <p>dwdawdawdaw</p>
      <p>poofaefaeff</p>
      <p>poofaefaeff</p>
      <p>poofaefaeff</p>
      <p>wwwwwww</p>
      <p>wwwwwww</p>
      <p>wwwwwww</p>
      <p>dafefafgsrga</p>
      <p>dafefafgsrga</p>
    </div>
    <!-- <div class="feihua">feihua</div> -->
    <!-- <spacing-setter></spacing-setter> -->
    <!-- <loco-tab :tabs="demoTabs"></loco-tab> -->
    <!-- <div class="haha" ref="haha">
        haha
      </div>
    <loco-swiper :items="swiperItems">
      <template v-slot:default="slotProps">
        <card-img :item="slotProps.item"></card-img>
        <div class="swiper-item">{{slotProps.item.id}}</div>
      </template>
    </loco-swiper>
    <loco-wrapper>
      <div class="hehe">
        hehe
      </div>
    </loco-wrapper>
    <div class="hehe" ref="hehe">
      hehe
    </div> -->

    <!-- <loco-toast></loco-toast> -->
    <!-- <loco-focus-mask :visible="guideVisible" :el="guideEl"></loco-focus-mask> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import locoTab from '../../modules/loco-component/pro/loco-tab/view.vue'
import locoSwiper from '../../modules/loco-component/pro/loco-swiper/view.vue'
import cardImg from '../../modules/loco-component/pro/loco-swiper/relevance-components/img-card.vue'
import locoWrapper from '../../components/loco-wrapper/index.vue'
import locoFocusMask from '../../modules/loco-component/pro/loco-focus-mask/index.vue'
import toast from '../../modules/loco-component/base/loco-toast/index'
import pullDown from '../../modules/loco-component/pull-down/index.vue'

// import spacingSetter from '../../components/style-setter/spacing-setter/index.vue'

@Options({
  name: 'editor-test',
  components: {
    locoTab,
    locoSwiper,
    cardImg,
    locoWrapper,
    locoFocusMask,
    pullDown
    // locoToast
    // spacingSetter
  }
})
export default class Editor extends Vue {
  demoTabs = [
    {
      label: 'tab1111',
      value: 'tab1'
    },
    {
      label: 'tab2',
      value: 'tab2'
    },
    {
      label: 'tab333333333333',
      value: 'tab3'
    }
  ]

  swiperItems = [
    {
      id: '1',
      imgsrc: 'https://ali.static.yximgs.com/bs2/adminBlock/file-XgQPHFas.png',
      link: 'https://www.baidu.com/'
    },
    {
      id: '2',
      imgsrc: 'https://ali.static.yximgs.com/bs2/adminBlock/file-XgQPHFas.png',
      link: 'https://www.baidu.com/'
    },
    {
      id: '3',
      imgsrc: 'https://ali.static.yximgs.com/bs2/adminBlock/file-XgQPHFas.png',
      link: 'https://www.baidu.com/'
    }
  ]

  wrapper:any = null;

  guideVisible = false
  guideEl:any = null

  mounted () {
    // this.guideEl = this.$refs.hehe
    // this.guideVisible = true
    this.wrapper = this.$refs.wrapper

    // setTimeout(() => {
    //   toast('测试')
    // }, 2000)
  }
}
</script>

<style lang="scss">
#loco-test {
  height: 100vh;
  overflow: auto;
  background-color: #ccc;
  p {
    line-height: 40px;
  }
}

.feihua {
  height: 300px;
  background-color: #ccc;
}
.feihua2 {
  height: 1200px;
  background-color: #ccc;
}
.swiper-item {
  height: 100px;
  background-color: #ccc;
}
.haha {
  height: 100px;
  width: 100px;
  text-align: center;
  line-height: 100px;
  border: 1px solid #aaa;
  border-radius: 50px;
  // box-sizing: content-box;
}
.hehe {
  height: 50px;
  width: 120px;
  text-align: center;
  line-height: 50px;
}
</style>
