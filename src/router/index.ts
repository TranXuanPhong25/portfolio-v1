import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectsView from "../views/ProjectsView.vue";
<<<<<<< HEAD
<<<<<<< HEAD
import ContactView from "../views/ContactView.vue";
=======
>>>>>>> 8a61f05 (test)
const router = createRouter({
    //import.meta.env.BASE_URL as string
    history: createWebHistory(),
=======
const router = createRouter({
    //import.meta.env.BASE_URL as string
<<<<<<< HEAD
    history: createWebHistory(import.meta.env.BASE_URL as string),
>>>>>>> 4af307d (changerouter)
=======
    history: createWebHistory(),
>>>>>>> 1f0cb01 (a)
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        //throw TODO: Add projects view
        {
            path: "/projects",
            name: "projects",
            component: ProjectsView,
        },
<<<<<<< HEAD
<<<<<<< HEAD
        {
            path: "/contact",
            name: "contact",
            component: ContactView,
        },
=======
>>>>>>> 8a61f05 (test)
=======
>>>>>>> 4af307d (changerouter)
    ],
});

export default router;
