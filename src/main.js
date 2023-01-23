import { createApp } from 'vue'
import 'tw-elements'

import router from './router'
import store from './store'
import './style.scss'
import App from './App.vue'

createApp(App)
.use(router)
.use(store)
.mount('#app')
