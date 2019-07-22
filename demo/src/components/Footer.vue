<template>
  <div>
      <MyButton status="ALL" @changeStatus="changeStatus($event)">ALL</MyButton>
      <MyButton status="ACTIVE" @changeStatus="changeStatus($event)">Active</MyButton>
      <MyButton status="COMPLETE" @changeStatus="changeStatus($event)">Complete</MyButton>
  </div>
</template>
<script>
import bus from "../assets/BUS";
import MyButton from "./MyButton";
export default {
  name: "Footer",
  data: function() {
    return {
      status: ""
    };
  },
  methods: {
    changeStatus(val) {
      this.status = val;
      bus.$emit("status", this.status);
    }
  },
  components: {
    MyButton
  }
};
</script>
