import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/global.css'
import installIcons from '@/icons'
import installElementPlus from './plugins/element'

const app = createApp(App)
installElementPlus(app)
installIcons(app)
app.use(store).use(router).mount('#app')
