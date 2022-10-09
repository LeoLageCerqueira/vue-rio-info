/* import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'; */
import 'bootstrap/dist/css/bootstrap.css';
/* import 'bootstrap-vue/dist/bootstrap-vue.css'; */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

/* Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
 */
/* App.use(router) */
const app = createApp(App)
app.use(router)
app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js';
