<template>
  <div id="inputBar">
    <input v-model="item"  @keydown.enter="getItem" />
    <button @click="getItem">Add</button>
  </div>
</template>
<script>
export default {
  name: "inputBar",
  data: function() {
    return {
      item: ""
    };
  },
  methods: {
    getItem() {
      this.$emit("getItem", this.item);
      this.item = "";
    }
  }
};
</script>

