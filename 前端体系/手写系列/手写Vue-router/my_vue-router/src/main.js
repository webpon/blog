import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import router from './my-router'

Vue.config.productionTip = false
// router、store放在这里可以通过vue实例中的$options访问
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
