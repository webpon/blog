let Vue;
class myRouter {
  constructor(options) {
    this.$options = options
    // 响应式数据, 只要用到该currentPath的render,currentPath发生变化则重新渲染
    Vue.util.defineReactive(this, 'currentPath', '/')
    // 监听哈希路由变化
    window.addEventListener('hashchange', this.hashChange.bind(this))
    // 监听页面刷新
    window.addEventListener('load', this.hashChange.bind(this))
  }
  hashChange() {
    this.currentPath = location.hash.slice(1)
  }
  push(path) {
    location.hash = path
  }
}
myRouter.install = function (_Vue) {
  Vue = _Vue
  _Vue.mixin({
    beforeCreate() {
      if (this.$options.router) _Vue.prototype.$router = this.$options.router
    }
  })
  _Vue.component('router-link', {
    props: ['to'],
    render(h) {
      // 参数1：标签名, 参数2：属性名, 参数3：子级
      return h('a', { attrs: { href: '#' + this.to }, class: 'router-link' }, this.$slots.default)
    }
  })
  let component
  _Vue.component('router-view', {
    render(h) {
      this.$router.$options.routes.forEach(route => {
        if (route.path === this.$router.currentPath) {
          component = route.component
        }
      })

      return h(component)
    }
  })
}
export default myRouter