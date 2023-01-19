import { createRouter, createWebHashHistory } from "vue-router"

const route = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        component: () => import("@/views/home/home.vue")
    },
    {
        path: "/order",
        component: () => import("@/views/order/order.vue")
    },
    {
        path: "/favor",
        component: () => import("@/views/favor/favor.vue")
    },
    {
        path: "/message",
        component: () => import("@/views/message/message.vue")
    },
    {
        path: "/city",
        component: () => import("@/views/city/city.vue"),
        meta: {
            hideTabBar: false
        }
    },
    {
        path: "/search",
        component: () => import("@/views/search/search.vue"),
        meta: {
            hideTabBar: true
        }
    },
    {
        path: "/detail/:id", // 动态路由接收id
        component: () => import("@/views/detail/detail.vue"),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: route
})

export default router