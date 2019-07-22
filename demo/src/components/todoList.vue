<template>
  <div id="todoList">
    <Title/>
    <Body/>
    
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

