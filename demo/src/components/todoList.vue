<template>
  <div id="todoList">
    <span>Jquery To Do List</span>
    <p>imple Todo List with adding and filter by diff status.</p>
    <input v-model="item" placeholder=" " />
    <button @click="addItem">Add</button>
    <div>
      <ol id="example">
        <div v-if="All">
          <li v-for="item in items" :key="item.id">
            <input type="checkbox" @change="changeStatus(item.id)" />
            <span>{{ item.value }} {{ item.active }}</span>
          </li>
        </div>
        <div v-else>
          <li v-for="item in statusItems" :key="item.id">
            <input type="checkbox" @change="changeStatus(item.id)" />
            <span>{{ item.value }} {{ item.active }}</span>
          </li>
        </div>
      </ol>
    </div>
    <button @click="chooseAll">ALL</button>
    <button @click="chooseActive">Active</button>
    <button @click="chooseComplete">Complete</button>
  </div>
</template>
<script>
export default {
  name: "todoList",
  data: function() {
    return {
      item: "",
      items: [],
      statusItems: [],
      nextTodoId: 0,
      All: true
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
      this.items.find(it => it.id === id).active =
        this.items.find(it => it.id === id).active == true ? false : true;
    },
    chooseAll() {
      this.All = true;
    },
    chooseComplete() {
      this.All = false;
      this.statusItems=this.items.filter(item => item.active==false)
    },
    chooseActive() {
      this.All = false;
      this.statusItems=this.items.filter(item=> item.active==true)
    }
  }
};
</script>

