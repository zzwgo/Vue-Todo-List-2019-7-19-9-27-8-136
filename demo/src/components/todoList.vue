<template>
  <div id="todoList">
    <span>Jquery To Do List</span>
    <p>imple Todo List with adding and filter by diff status.</p>
    <input v-model="item" placeholder=" " />
    <button @click="addItem">Add</button>
    <div>
      <ol id="example" :class="{active:false}">
        <li v-for="item in items" :key="item.id">
          <input type="checkbox" @change="changeStatus(item.id)" />
          {{ item.value }} {{ item.active }}
        </li>
      </ol>
    </div>
    <button>ALL</button>
    <button>Active</button>
    <button>Complete</button>
  </div>
</template>
<script>
export default {
  name: "todoList",
  data: function() {
    return {
      item: "",
      items: [],
      nextTodoId: 0
    };
  },
  methods: {
    addItem() {
      this.items.push({
        id: this.nextTodoId++,
        value: this.item,
        active: true
      }),
        (this.item = "");
    },
    changeStatus(id) {
      console.log(id);
      this.items.find(it => it.id === id).active =
        this.items.find(it => it.id === id).active == true ? false : true;
    }
  }
};
</script>

