<template>
    <div>
      <h2>{{$store.state.counter}}</h2>
      <h2>getters相关信息</h2>
      <h2>{{$store.getters.powerCounter}}</h2>
      <h2>{{$store.getters.more20stu}}</h2>
      <h2>{{$store.getters.more20stulength}}</h2>
      <h2>{{$store.getters.moreagestu(18)}}</h2>
    </div>

</template>

<script>
    export default {
        name: "HelloVuex",
    }
</script>

<style scoped>

</style>
