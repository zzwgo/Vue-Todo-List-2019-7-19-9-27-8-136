<template>
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
</template>
<script>
export default {
  name: "ListContainer",
  data: function() {
    return {
      item: "",
    };
  },
  props: {
    items: Array,
    statusItems:Array,
    All:Boolean
  },
  methods: {
    changeStatus(id) {
      this.items.find(it => it.id === id).active =
        this.items.find(it => it.id === id).active === true ? false : true;
    },
 
  }
};
</script>
