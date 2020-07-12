
const getters={
  powerCounter(state){
    return state.counter*state.counter;
  },

  more20stu(state) {
    //错误使用：return  this.state.students.filter(s => {
    return state.students.filter(s => {
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
}

export  default getters
