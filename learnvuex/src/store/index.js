import Vue from 'vue'
import Vuex from 'vuex'

// import {
//
// } from './mutations.types'

//1.安装插件
Vue.use(Vuex)

//2.创建对象

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

const state = {
  counter: 1000,

  students: [
    {id: 100, name: 'why', age: 18},
    {id: 101, name: 'kobe', age: 23},
    {id: 102, name: 'curry', age: 19}
  ],

  info: {
    name: 'kobe',
    age: '40',
    height: 1.98
  }

}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})

//3.导出store对象
export default store


