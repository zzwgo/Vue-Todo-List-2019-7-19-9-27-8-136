<template>
  <div id="main">
    <h2>input your name</h2>
    <a-input id="input" placeholder="input your name" size="large" v-model="inputValue" />
    <div>
      <a-button id="button" type="primary" @click="showMore">Login</a-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Main",
  data: function() {
    return {
      inputValue: ""
    };
  },
  methods: {
    showMore() {
      this.$store.dispatch("setUserName", this.inputValue);
      this.$router.push({ path: `/home` });
    }
  }
};
</script>

<style scoped>
body {
  text-align: center;
}
#main {
  margin: 0 auto;
}
#input {
  width: 200px;
}
#button {
  margin: 10px;
}
</style>
