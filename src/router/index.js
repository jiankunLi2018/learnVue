import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

const router = new Router({
    routes
})

const LOGIN_CHECK = false;
//拦截器
router.beforeEach((to,from,next) => {
    if(to.name !== 'login'){
        if(LOGIN_CHECK) next()
        else next({name:'login'})
    }else{
        if(LOGIN_CHECK) next({name:'home'})
        else next()
    }
})
//确认钩子
router.beforeResolve()

//跳转事件钩子
router.afterEach((to,from) => {

})




export default router;