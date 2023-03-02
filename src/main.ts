import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar as starSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as starRegular } from '@fortawesome/free-regular-svg-icons'

library.add(starRegular, starSolid)
const app = createApp(App)

app.component('fa-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
