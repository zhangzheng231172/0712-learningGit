//action的方法都是异步方法
const actions={
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
  },

  aupdatename(context,payload){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
          context.commit('updateinfo')
          console.log(payload)
          resolve(1111)
        },1000)
      }
    )
  },


}

export default actions
