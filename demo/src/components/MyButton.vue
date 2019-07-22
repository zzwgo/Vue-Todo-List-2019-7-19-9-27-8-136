<template>
  <div>
    <button @click="changeStatus">{{status}}</button>
  </div>
</template>
<script>
export default {
  name: "MyButton",
  data: function() {
    return {
    };
  },
  methods: {
    changeStatus() {
      this.$emit("changeStatus", this.status);
    }
  },
  props: {
    status: ""
  }
};
</script>
