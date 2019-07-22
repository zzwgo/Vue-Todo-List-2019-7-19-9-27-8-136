<template>
  <div>
    <ol id="example">
      <li v-for="item in items" :key="item.id">
        <input type="checkbox" @change="changeStatus(item.id)" />
        <span :class="{change:!item.active}">{{ item.value }}</span>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  name: "ListContainer",
  data: function() {
    return {
      item: ""
    };
  },
  props: {
    items: Array
  },
  methods: {
    changeStatus(id) {
      this.items.find(it => it.id === id).active =
        this.items.find(it => it.id === id).active === true ? false : true;
    }
  }
};
</script>
<style>
ol {
  padding-left: 20px;
  display: block;
  list-style-type: decimal;
}
li {
  padding: 5px;
  color: #000;
  display: list-item;
  text-align: -webkit-match-parent;
  list-style-type: decimal;
}
li:nth-child(even) {
  background: #f4ecec;
}
.change {
  text-decoration: line-through;
}
</style>

