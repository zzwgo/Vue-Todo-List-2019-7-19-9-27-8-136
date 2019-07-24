<template>
  <div>
    <a-layout id="components-layout-demo-top-side">
      <a-layout-header class="header">
        <a-menu theme="dark" mode="inline"></a-menu>
        <a-button id="backButton" type="default" @click="showConfirm">
          <a-icon type="left" />
        </a-button>
        <span id="myspan">Hi: {{getUserName}}</span>
      </a-layout-header>
      <a-layout-content style="padding: 0 50px">
        <a-layout style="padding: 24px 0; background: #fff">
          <a-layout-sider width="200" style="background: #fff">
            <a-menu theme="dark" mode="inline">
              <a-menu-item key="1">
                <router-link to="/todolist" />todolist
              </a-menu-item>
              <a-menu-item key="2">
                <router-link to="/userInfo" />
                <span>myInfo</span>
              </a-menu-item>
              <a-menu-item key="3">
                <span>****</span>
              </a-menu-item>
            </a-menu>
          </a-layout-sider>
          <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
            <router-view />
          </a-layout-content>
        </a-layout>
      </a-layout-content>
    </a-layout>
  </div>
</template>
<script>
export default {
  name: "home",
  computed: {
    getUserName() {
      return this.$store.getters.getUserName;
    }
  },
  methods: {
    showConfirm() {
      const that = this;
      this.$confirm({
        title: "Do you Want to leave?",
        onOk() {
          that.$store.dispatch('initItems')
          that.$router.push({ path: `/` });
        },
        onCancel() {}
      });
    }
  }
};
</script>

<style scoped>
#myspan {
  color: white;
  float: right;
  padding-right: 50px;
}
#backButton {
  float: left;
}
</style>