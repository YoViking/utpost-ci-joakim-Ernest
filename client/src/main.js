import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const unused = 'test'

app.use(router)

app.mount('#app')
