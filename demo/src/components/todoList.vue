<template>
  <div id="todoList">
    <Title></Title>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>
<script>
import Title from "./Title.vue";
import Body from "./Body.vue";
import Footer from "./Footer.vue";
export default {
  name: "todoList",
  data: function() {
    return {
    };
  },
  components: {
    Title,
    Body,
    Footer
  },
  methods: {
  }
};
</script>
<style>
body {
    font: normal normal 13px/16px "Open Sans", sans-serif;
    background: #ccc;
}
</style>
