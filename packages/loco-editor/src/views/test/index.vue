<template>
  <div id="loco-test">
    <!-- <div class="feihua">feihua</div> -->
    <!-- <spacing-setter></spacing-setter> -->
    <!-- <loco-tab :tabs="demoTabs"></loco-tab> -->
    <loco-swiper :items="swiperItems">
      <template v-slot:default="slotProps">
        <card-img :item="slotProps.item"></card-img>
        <!-- <div class="swiper-item">{{slotProps.item.id}}</div> -->
      </template>
    </loco-swiper>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import locoTab from '../../modules/loco-component/pro/loco-tab/view.vue'
import locoSwiper from '../../modules/loco-component/pro/loco-swiper/view.vue'
import cardImg from '../../modules/loco-component/pro/loco-swiper/relevance-components/img-card.vue'
// import spacingSetter from '../../components/style-setter/spacing-setter/index.vue'

@Options({
  name: 'editor-test',
  components: {
    locoTab,
    locoSwiper,
    cardImg
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
}
</script>

<style lang="scss">
#loco-editor {
  height: 100vh;
  display: flex;
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
</style>
