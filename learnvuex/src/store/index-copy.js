import Vue from 'vue'
import Vuex from 'vuex'

import {

} from './mutations.types'

//1.安装插件
Vue.use(Vuex)

//2.创建对象
const moduleA={
  state:{
    name:'zhangsan'
  },
  mutations:{
    updatename(state,payload){
      state.name=payload
    }
  },
  actions:{
    aupdatename(context){
      setTimeout(()=>{
        context.commit('updatename','wangwu')
      },1000)
    }
  },
  getters:{
    fullname(state){
      return state.name+'1111'
    },
    fullname2(state,getters){
      return getters.fullname+'2222'
    },
    fullname3(state,getters,rootState){
      return getters.fullname+rootState.counter
    },

  },
}



const store = new Vuex.Store({
  state: {
    counter: 1000,
    students:[
      {id:100, name: 'why', age: 18},
      {id:101, name: 'kobe', age: 23},
      {id:102, name: 'curry', age: 19}
    ],
    info: {
      name: 'kobe',
      age: '40',
      height: 1.98
    }
  },

  mutations: {
    //方法
    ['INCREMENT'](state) {
      state.counter++
    },

    decrement(state) {
      state.counter--
    },

    incrementCount(state,count){
      console.log(count)
      state.counter+=count
    },

    addStudent(state,stu){
      state.students.push(stu)
    },

    updateinfo(state){
      state.info.name='kobey'
      state.info['address']='losangles'
      // Vue.set(state.info,'weight','156')
      // // delete state.info.age
      // Vue.delete(state.info,'age')

      //mutations使用同步操作，不能在这里进行异步操作
      // setTimeout(()=>{
      //   state.info.name='kobey'
      // },1000)
    }
  },

  actions: {
    //context上下文
    aupadateinfo(context,payload){
      return new Promise((resolve,reject) =>{
          setTimeout(()=>{
            context.commit('updateinfo')
            console.log(payload)
            resolve(1111)
          },1000)
        }
      )

    }
  },

  getters: {
    powerCounter(state){
      return state.counter*state.counter;
    },

    more20stu(state) {
      return store.state.students.filter(s => {
        return s.age >=20
      })
    },

    more20stulength(state,getters) {
      return getters.more20stu.length
    },

    moreagestu(state){
      return function(age) {
        return state.students.filter(s => s.age>age)
      }
    }
  },

  modules: {
    a: moduleA
  }
})

//3.导出store对象
export default store


