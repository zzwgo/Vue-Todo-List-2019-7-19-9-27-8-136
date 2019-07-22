<template>
  <div id="inputBar">
    <input v-model="item" placeholder=" " @keydown.enter="addItem" />
    <button @click="addItem">Add</button>
  </div>
</template>
<script>
export default {
  name: "inputBar",
  data: function() {
    return {
      nextTodoId: 0,
      items: [],
      item: ""
    };
  },
  methods: {
    addItem() {
      this.items.push({
        id: this.nextTodoId++,
        value: this.item,
        active: true
      });
      this.item = "";
      this.$emit("change", this.items);
    }
  }
};
</script>

