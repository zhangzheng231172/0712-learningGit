
const moudleA={
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

export default moudleA
