import { createRouter, createWebHashHistory } from "vue-router"
import Main from "../pages/Main.vue";
import PostsPage from "../pages/PostsPage.vue";
import About from "../pages/About.vue";
import PostIDPage from "../pages/PostIDPage.vue";
import PostPageWithStore from "../pages/PostPageWithStore.vue";



const routes = [
    {
        path:'/',
        component: Main,
    },
    {
        path:'/posts',
        component: PostsPage,
    },
    {
        path:'/about',
        component: About,
    },
    {
        path:'/posts/:id',
        component: PostIDPage,
    },
    {
        path:'/store',
        component: PostPageWithStore,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;