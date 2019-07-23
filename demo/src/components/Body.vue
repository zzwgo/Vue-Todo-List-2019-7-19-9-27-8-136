<template>
  <div>
    <InputBar @getItem="addItem($event)"></InputBar>
    <ListContainer></ListContainer>
  </div>
</template>
<script>
import InputBar from "./InputBar";
import ListContainer from "./ListContainer";
export default {
  name: "Body",
  data: function() {
    return {};
  },
  components: {
    InputBar,
    ListContainer
  },
  methods: {
    addItem(val) {
      this.$store.commit("addItem", {
        value: val
      });
    }
  }
};
</script>
<style>
</style>

