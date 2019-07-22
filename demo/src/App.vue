<template>
  <div id="app">
    <TodoList/>
  </div>
</template>
<script>
import TodoList from './components/TodoList.vue'
export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>
<style>
#app {
    font: normal normal 13px/16px "Open Sans", sans-serif;
    background: #ccc;
        display: block;
}
</style>
