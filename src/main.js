import {createRouter, createWebHashHistory} from 'vue-router'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import home from './components/home.vue'
import login from './components/login.vue'
import helloworld from './components/helloworld.vue'

import { createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'home',
        path: '/',
        component: home,
    },
    {
        name: 'login',
        path: '/login',
        component: login,
    },
    {
        name: 'helloworld',
        path: '/helloworld',
        component: helloworld,
    },
]

const router = createRouter(
    {
        history: createWebHashHistory(),
        routes: routes,
    }
)
createApp(App).use(router).mount('#app')
