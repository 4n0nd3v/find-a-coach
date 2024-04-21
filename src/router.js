import { createRouter, createWebHistory } from "vue-router";

import Coaches from './pages/Coaches.vue';
import Requests from './pages/Requests.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches'},
    { path: '/coaches', component: Coaches },
    { path: '/requests', component: Requests },
  ]
});

export default router;