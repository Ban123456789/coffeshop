import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import { VueJsonp } from 'vue-jsonp'
import { currency, date } from '../src/methods/options.js'

const app = createApp(App)
app.use(VueAxios, axios)
// app.use(VueJsonp)
app.config.globalProperties.$filter = {
    currency,
    date
}

app.use(router)
app.mount('#app')
