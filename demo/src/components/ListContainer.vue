<template>
  <div>
    <ol id="example">
      <li v-for="item in chooseItems" :key="item.id">
        <input type="checkbox" @change="changeStatus(item.id)" />
        <span
          @keydown.enter.prevent="updateItem($event,item.id)"
          @dblclick="changeEditable"
          :contenteditable="editable"
          :class="{change:!item.active}"
        >{{ item.value }}</span>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  name: "ListContainer",
  data: function() {
    return {
      item: "",
      editable: false
    };
  },
  computed: {
    chooseItems() {
      return this.$store.getters.chooseItems;
    },
    getItems() {
      return this.$store.getters.getItems;
    }
  },
  methods: {
    updateItem(event, id) {
      this.getItems[id].value = event.target.innerText;
      this.editable = false;
    },
    changeEditable() {
      this.editable = true;
    },
    changeStatus(id) {
      this.getItems.find(it => it.id === id).active =
        this.getItems.find(it => it.id === id).active? false : true;
    }
  }
};
</script>
<style >
#example {
  padding-left: 20px;
  display: block;
  list-style-type: decimal;
}
#example li {
  padding: 5px;
  color: #000;
  display: list-item;
  text-align: -webkit-match-parent;
  list-style-type: decimal;
}
#example li:nth-child(even) {
  background: #f4ecec;
}
.change {
  text-decoration: line-through;
}
</style>

