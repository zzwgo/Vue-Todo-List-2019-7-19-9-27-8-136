<template>
  <div id="Title">
    <h2>Jquery To Do List</h2>
    <p>
      <em>Todo List with adding and filter by diff status.</em>
    </p>
  </div>
</template>
<script>
export default {
  name: "Title",
  data: function() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
h2 {
  display: block;
  font-size: 1.5em;
  -webkit-margin-before: 0.83em;
  -webkit-margin-after: 0.83em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  font-weight: bold;
}
p {
  display: block;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
}
em {
  font-style: italic;
}
</style>


