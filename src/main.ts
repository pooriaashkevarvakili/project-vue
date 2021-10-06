import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/style.css"
import "./assets/tailwind.css"
import "ant-design-vue/dist/antd.css"
import Antd from "ant-design-vue"

const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(Antd)
  app.use(store)
