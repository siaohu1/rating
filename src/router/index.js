import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home',
      // component: HelloWorld
    },
    // {
    //   path:'/home',
    //   component:()=>import('../components/Home.vue'),
    //   meta:{keepAlive:true,title:'首页'}
    //   },

  ]
})
