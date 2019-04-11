import DefaultLayout from '~/layouts/Default.vue'
require('~/assets/css/style.sass')

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  head.bodyAttrs = { class: 'bg-grey-lightest font-sans' }
}