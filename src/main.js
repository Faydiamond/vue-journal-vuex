import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './estyles/styles.scss'
import store from './store/index'

createApp(App).use(store).use(router).mount('#app')
