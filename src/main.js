import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/less/index.less'
// 引入ele-ui文件
// eslint-disable-next-line no-unused-vars
import {Button,Radio,Container,Main,header,aside,menu,submenu,MenuItem,MenuItemGroup} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

// 将ele-ui全局注入到vue中
Vue.use(Button)
Vue.use(Radio)
Vue.use(Container)
Vue.use(Main)
Vue.use(header)
Vue.use(aside)
Vue.use(menu)
Vue.use(submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
