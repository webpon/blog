
import Vue from 'vue'
import Vuex from '../modules/zvuex'
// 需要先执行，传入Vue
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
            console.log(state.count);
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