import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index.js'
import './assets/common.css'

createApp(App).use(store).use(router).mount('#app')