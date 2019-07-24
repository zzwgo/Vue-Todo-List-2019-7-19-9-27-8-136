import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    itemId: 0,
    status: '',
    items: [],
    username:''
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
    },
    setUserName:(state,payload)=>{
      state.username=payload
    },
    initItems:(state)=>{
      state.items=[]
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
    },
    getUserName:state=>{
      return state.username
    }
  },
  actions: {
    setUserName ({commit},payload) {
     commit('setUserName',payload)
    },
    initItems({commit}){
      commit('initItems')
    }
  }
})
export default store;
