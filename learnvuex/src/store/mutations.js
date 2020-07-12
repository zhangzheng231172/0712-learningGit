//mutation的方法都是同步方法
const mutations={
  //方法
  increment(state) {
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
}

export default mutations
