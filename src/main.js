import '@fontsource/mulish/400.css'
import '@fontsource/mulish/500.css'
import '@fontsource/mulish/700.css'
import '@fontsource/mulish/900.css'

import '~/styles/index.scss'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { appOptions }) {
  appOptions.i18n.setLocaleMessage('be', require('./locales/be.json'))
  appOptions.i18n.setLocaleMessage('en', require('./locales/en.json'))

  Vue.component('Layout', DefaultLayout)
}
