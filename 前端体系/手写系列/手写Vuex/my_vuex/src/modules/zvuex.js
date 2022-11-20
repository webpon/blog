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
        // 可以直接通过this.state获取定义的数组，比如this.state.count
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