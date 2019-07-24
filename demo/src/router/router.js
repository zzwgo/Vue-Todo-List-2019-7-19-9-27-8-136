import Vue from 'vue'
import VueRouter from 'vue-router'
import ToDoList from '@/components/todoList'
import Main from "@/view/Main"
import Home from "@/view/Home"
import UserInfo from "@/view/UserInfo"
Vue.use(VueRouter)
const routes = [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/home',
      name: 'home',
      component:Home,
      children: [
        {path: '/' , component: ToDoList} ,
        {path: '/todoList' , component: ToDoList} ,
        {path: '/userInfo', component: UserInfo}
      ]
    } 
  ]
  
  export default new VueRouter({
    mode: 'history',
    routes,
});