// prop组件的映射关系
import baseInput from '../base-input/base-select/index.vue'
import baseRadio from '../base-input/base-radio/index.vue'
import baseCheckbox from '../base-input/base-checkbox/index.vue'
import datePicker from '../base-input/date-picker/index.vue'
import colorPicker from '../base-input/color-picker/index.vue'

export default {
  text: 'el-input',
  select: baseInput,
  number: 'el-input-number',
  radio: baseRadio,
  checkbox: baseCheckbox,
  switch: 'el-switch',
  slider: 'el-slider',
  date: datePicker,
  color: colorPicker
}
