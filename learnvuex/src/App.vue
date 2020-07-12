<template>
  <div id="app">
    <h2>1.app内容state:单一状态树</h2>
    <h2>状态值: {{$store.state.counter}}</h2>
<!--    state通过commit间接调用store的mutation属性中的方法-->
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">addStu</button>

<!--  getters直接调用store对象的getters的方法  -->
    <h2>2.改变state里面的值用到组件中，使用getters函数</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>


    <h2>modules对象的内容</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updatename">修改名字</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asyncupdatename">异步修改名字</button>

<!--  action修改数据状态的方法是通过dispath间接调用store对象的action里面的方法  -->
    <h2>4.action的方法都是异步方法</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateinfo">修改信息</button>

  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
  // import  {INCREMENT} from "./store/mutations.types";

export default {
  name: 'App',

  components:{
    HelloVuex
  },

  data(){
    return{
      message: '我是App组件',
    }
  },

  computed: {},

  methods: {
    addition(){
     //提交方法名为increment的方法，这个方法在store对象的mutation属性里
      this.$store.commit('increment')
    },

    subtraction(){
      this.$store.commit('decrement')
    },

    addCount(count){
      //1.普通的提交封装，commit函数的参数包括函数名和传入数据，此处是变量
      this.$store.commit('incrementCount',count)

      //2.特殊的提交
      // this.$store.commit({
      //   type:'incrementCount',
      //   count
      // })
    },

    //此处传入的参数是对象
    addStudent(){
      const stu={id:104, name: 'allen', age: 28};
      this.$store.commit('addStudent',stu)
    },

    updateinfo() {
      // this.$store.commit('updateinfo')

      // this.$store.dispatch('aupadateinfo',{
      //   message: '携带的信息',
      //   success: () => {
      //     console.log('里面已经完成了')
      //   }
      // })
      this.$store.dispatch('aupadateinfo', '我是携带的信息')
        .then(res => {
          console.log('里面已经完成提交');
          console.log(res)
        })
    },

    updatename(){
        this.$store.commit('updatename','lisi')
      },

    asyncupdatename(){
      this.$store.dispatch('aupdatename',)
    }

    }
}
</script>

<style>

</style>
