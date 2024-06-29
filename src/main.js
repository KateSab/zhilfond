import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/css/style.scss'

createApp(App)
  .use(store)
  .mount('#app');
