import Vue from 'vue'
import Router from 'vue-router'
import routesDev from './routers'
import routesPro from './routersPro'
import dev from "../api/dev";

Vue.use(Router);
let routes;
if (process.env.VUE_APP_ROUTER === 'production') {
    routes = routesPro
} else if(process.env.VUE_APP_ROUTER === 'dev'){
    routes = routesDev
} else {
    routes = routesDev
}
// if (process.env.NODE_ENV === 'development') {
//     routes = routesDev
// } else {
//     routes = routesPro
// }
// routes = routesDev;
const router = new Router({
    routes,
    // mode: 'history'
});
const LOGIN_PAGE_NAME = 'login';


router.beforeEach((to, from, next) => {
    if (
        window.sessionStorage["loginInfo"] &&
        window.sessionStorage["loginInfo"] !== "{}"
    ){
        next();
    }else{

        next();
    }

//     const token = getToken();
//     if (!token) {
//         this.$bridge.goLogin();
//         // next({
//         //     name: LOGIN_PAGE_NAME
//         // })
//     }
});


export default router
