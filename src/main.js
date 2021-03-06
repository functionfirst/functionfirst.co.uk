import DefaultLayout from '~/layouts/Default.vue'
require('~/assets/css/style.sass')

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  Vue.prototype.$head = head;

  head.bodyAttrs = { class: 'font-sans' }
}