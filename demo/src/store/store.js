import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    itemId: 0,
    status: '',
    items: []
  },
  mutations: {
    setStatus: (state, payload) => {
      state.status = payload
    },
    addItem: (state, payload) => {
      state.items.push({
        id: state.itemId++,
        value: payload.value,
        active: true
      });
    }
  },
  getters: {
    getItems: state => {
      return state.items
    },
    chooseItems(state) {
      switch (state.status) {
        case "ACTIVE":
          return state.items.filter(item => item.active);
        case "COMPLETE":
          return state.items.filter(item => !item.active);
        case "ALL":
        default:
          return state.items;
      }
    }
  }
})
export default store;
