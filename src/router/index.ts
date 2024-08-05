import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
const router = createRouter({
   //import.meta.env.BASE_URL as string
   history: createWebHistory(),
   routes: [
      {
         path: '/',
         name: 'home',
         component: HomeView
      },
      //throw TODO: Add projects view
      {
         path: '/projects',
         name: 'projects',
         component: ProjectsView
      }
   ]
})

export default router
