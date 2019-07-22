<template>
  <div>
    <InputBar @getItem="addItem($event)"></InputBar>
    <ListContainer :items="chooseItems"></ListContainer>
  </div>
</template>
<script>
import bus from "../assets/BUS";
import InputBar from "./InputBar";
import ListContainer from "./ListContainer";
export default {
  name: "Body",
  data: function() {
    return {
      nextTodoId: 0,
      items: [],
      status: ""
    };
  },
  mounted() {
    bus.$on("status", msg => {
      this.status = msg;
    });
  },
  components: {
    InputBar,
    ListContainer
  },
  computed: {
    chooseItems() {
      switch (this.status) {
        case "ACTIVE":
          return this.items.filter(item => item.active === true);
        case "COMPLETE":
          return this.items.filter(item => item.active === false);
        case "ALL":
        default:
          return this.items;
      }
    }
  },
  methods: {
    addItem(val) {
      this.items.push({
        id: this.nextTodoId++,
        value: val,
        active: true
      });
    }
  }
};
</script>
<style>
</style>

