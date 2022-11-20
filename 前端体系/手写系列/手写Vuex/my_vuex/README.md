## 一、核心原理

1. Vuex本质是一个响应式对象
2. 可以简单来说是一个对象，**唯一的疑问点在于组件中使用vuex中的对象为何修改后也能响应式更新**
3. 其实很简单，我们可以通过[**Vue.observable( object )**](https://v2.cn.vuejs.org/v2/api/#Vue-observable)这个api来定义vuex的state对象就可以啦，该api具体用法请访问vue官网
4. 当然我们也可以利用**new Vue()**, 把state传进去，例如new Vue(data: options.data),
5. 利用vue.use和install、mixins将store这个实例挂载到所有的组件上，注意是同一个store实例。

## 二、代码实现

1. 自定义vuex代码

   ```js
   let Vue;
   class Store {
       constructor(options) {
           this.options = options
           this._getters = options.getters
           this.getters = {}
           Object.keys(this._getters).forEach((key) => {
               Object.defineProperty(this.getters, key, {
                   get: () => this._getters[key](options.state)
               })
           })
           // 可以通过new Vue定义响应式对象
           // this.state = new Vue({
           //     data: options.state,
           // })
           // 或者通过Vue.observable响应式api实现
           this.state = Vue.observable(options.state)
           // 通过bind绑定store实例，防止从外部调用commit获取不到store实例
           this.commit = this.commit.bind(this)
           this.dispatch = this.dispatch.bind(this)
       }
       commit(type, payload) {
           const fn = this.options.mutations[type]
           if (fn) fn(this.state, payload)
       }
       dispatch(type, payload) {
           const fn = this.options.actions[type]
           if (fn) fn(this, payload)
       }
   }
   function install(_Vue) {
       // 混入
       Vue = _Vue
       Vue.mixin({
           beforeCreate() {
               if (this.$options.store) _Vue.prototype.$store = this.$options.store
           }
       })
   }
   export default { Store, install }
   ```

2. 配置Vuex和实例化

   ```js
   import Vue from 'vue'
   import Vuex from '../modules/zvuex'
   // 需要先执行，传入Vue,不然vuex那边还得自己引入vue
   Vue.use(Vuex)
   
   export default new Vuex.Store({
       state: {
           count: 1
       },
       getters: {
           getterCount(state) {
               return state.count * 3
           },
           getterCount2(state) {
               return state.count * 6
           }
       },
       mutations: {
           add(state) {
               state.count++
           }
       },
       actions: {
           add({ commit }) {
               setTimeout(() => {
                   commit('add')
               }, 1000)
           }
       },
       modules: {}
   })
   ```

3. main.js挂载vuex实例store

   ```js
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
   ```

结果：![image-20221120230856095](https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20221120230856095.png)