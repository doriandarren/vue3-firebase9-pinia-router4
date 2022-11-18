import { createRouter, createWebHistory } from 'vue-router';
import {useUserStore} from './stores/user';


const requireAuth = async(to, from, next) => {
    const userStore = useUserStore();
    userStore.loadingSession = true;
    const user = await userStore.currentUser();
    if(user){
        next()
    }else{
        next('/login')
    }
    userStore.loadingSession = false;
}


const routes = [
    {path: '/', name:'home', component: () => import('./views/Home.vue'), beforeEnter: requireAuth },
    {path: '/editar/:id', name:'editar', component: () => import('./views/Edit.vue'), beforeEnter: requireAuth },
    {path: '/login', component: () => import('./views/Login.vue') },
    {path: '/register', component: () => import('./views/Register.vue') },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;