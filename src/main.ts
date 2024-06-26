import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueApexCharts from 'vue3-apexcharts'

import './assets/main.css'

const app = createApp(App)

app.use(VueApexCharts)

app.use(createPinia())
app.use(router)

app.mount('#app')
