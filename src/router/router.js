import Home from '~/views/Home.vue'
import noFind from '~/views/404.vue'
import login from '~/views/login.vue'

export default[
    {
      path: '/',
      alias:'/hhhh',
      name: 'home',
      component: Home
    },
    {
        path:'/login',
        name:'login',
        component:login
    },
    {
      path: '/about/:time',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '~/views/About.vue'),
      props:true
    },
    {
        path:'/angu/:name',
        name:'dongtai',
        component:() => import('~/views/angu.vue')
    },
    {
        path:'/parent',
        name:'嵌套父路由',
        component:() => import('~/views/parents.vue'),
        children:[{
            path:'test',
            component:() => import('~/views/child.vue')
        }]
    },
    {
        path:'*',
        component:noFind
    }
    // {
    //     path:'/views',
    //     // name:'views',
    //     // components:{
    //     //     default:() => import('~/views/child.vue'),
    //     //     test1:() => import('~/views/About.vue')
    //     // }
    //     //redirect:'/about' 
    //     //redirect:to => '/about'
    // },
]