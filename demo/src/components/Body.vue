<template>
  <div>
    <InputBar @change="updateList($event)"></InputBar>
    <ListContainer :items="items" :statusItems="statusItems" :All="All" ></ListContainer>

    <button @click="chooseAll">ALL</button>
    <button @click="chooseActive">Active</button>
    <button @click="chooseComplete">Complete</button>
  </div>
</template>
<script>
import InputBar from "./InputBar";
import ListContainer from "./ListContainer";
export default {
  name: "Body",
  data: function() {
    return {
      items: [],
      statusItems: [],
      All: true      
    };
  },
  components: {
    InputBar,
    ListContainer
  },
  methods: {
    updateList(val) {
      this.items = val;
    },
    chooseAll() {
      this.All = true;
    },
    chooseComplete() {
      this.All = false;
      this.statusItems = this.items.filter(item => item.active === false);
    },
    chooseActive() {
      this.All = false;
      this.statusItems = this.items.filter(item => item.active === true);
    }
  }
};
</script>
<style>
</style>

