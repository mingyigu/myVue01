import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloGMY from '@/components/HelloGMY'
import init from '@/components/init'
import animation from '@/components/animation'
import A from "@/components/A"

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/C',
      name: 'init',
      component: init
    },
    {
      path: '/A',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/B',
      name: 'HelloGMY',
      component: HelloGMY
    },
    {
      path: '/D',
      name: 'Hello ',
      component: animation
    },
    {
      path: '/E',
      name: 'Container ',
      component: A
    },

  ]
})



