<template>
  <div id="UserInfo">
    <h2>Name:{{getUserName}}</h2>
    <h2>Phone:123456789</h2>
     <a-avatar icon="user" size="large" />
  </div>
</template>
<script>
export default {
  name: "UserInfo",
    computed: {
    getUserName() {
      return this.$store.getters.getUserName;
    }
  },
};
</script>

