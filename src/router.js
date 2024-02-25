import { createRouter, createWebHistory } from "vue-router";
import Cookie from './components/pages/Cookie.vue';
import Session from './components/pages/Session.vue';

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "Cookie",
      component: Cookie
    },
    {
      path: "/session",
      name: "Session",
      component: Session
    },
  ]
});

export { router };