<template>
  <div class="text-font-setter">
    <font-style-setter></font-style-setter>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import fontStyleSetter from './font-style-setter/index.vue'

@Options({
  name: 'textFontSetter',
  components: { fontStyleSetter }
})
export default class TextFontSetter extends Vue {

}
</script>
