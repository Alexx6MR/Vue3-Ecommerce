import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import store from './store'
import router from './router'



AOS.init();




createApp(App)
.use(store)
.use(router)
.mount('#app')
