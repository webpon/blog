import Vue from 'vue'
import App from './App'
import store from './zstore'
Vue.config.productionTip = false
// router、store放在这里可以通过vue实例中的$options访问
new Vue({
  store,
  test: 11,
  render: h => h(App)
}).$mount('#app')
