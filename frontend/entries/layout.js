import { createApp } from 'vue'

import HeaderDesktop from '../components/Header/DesktopHeader.vue'
import HeaderMobile from '../components/Header/MobileHeader.vue'
import Footer from '../components/Footer/Footer.vue'

const app = createApp({})

app.component('header-desktop', HeaderDesktop)
app.component('header-mobile', HeaderMobile)
app.component('site-footer', Footer)

app.mount('#app')

if (window.theme && typeof window.theme.init === 'function') {
  window.theme.init()
}