<template>
  <div id="app">
      <div id="nav">
        <h1>vuex 封装思路</h1>
        <button @click="$store.commit('add')">count：{{$store.state.count}}</button>
        <button @click="$store.dispatch('add')">异步 count:{{$store.state.count}}</button>
        <p>getters: {{$store.getters.getterCount}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    console.log(this.$options);
    console.log(this.$store);
  }
}
</script>

<style>
  #app{
    margin-top:100px;
    text-align: center;
  }
</style>
