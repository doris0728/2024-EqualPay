import { createWebHistory, createRouter } from "vue-router";

// const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
  { path: '/', component: () => import('./pages/Home.vue') },
  { path: '/ProjectList', component: () => import('./pages/ProjectList.vue') },
  { path: '/ProjectOverview', component: () => import('./pages/ProjectOverview.vue') },
  { path: '/AccountPage', component: () => import('./pages/AccountPage.vue') },
  
//   { path: '/about', component: About },
]

export const router = createRouter({
  history: createWebHistory(),
  routes, 
})