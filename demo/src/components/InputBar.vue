<template>
  <div id="inputBar">
    <input id="input-text" v-model="item" @keydown.enter="getItem" />
    <button id="button" @click="getItem">Add</button>
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
<style scoped>
#button {
  display: inline-block;
  background-color: #fc999b;
  color: #ffffff;
  border-radius: 5px;
  text-align: center;
  margin-top: 2px;
  padding: 5px 15px;
}
.inputclass {
  width: 200px;
  padding: 4px 15px 4px 0;
  -webkit-appearance: textfield;
  background-color: white;
  cursor: text;
  padding: 1px;
  border-width: 2px;
  border-style: inset;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  display: inline-block;
}
</style>


