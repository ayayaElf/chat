import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(VueAxios, axios)
createApp(App).use(store).use(router).mount('#app')