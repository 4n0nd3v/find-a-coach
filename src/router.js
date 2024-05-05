import { createRouter, createWebHistory } from "vue-router";

import Coaches from './pages/Coaches.vue';
import Requests from './pages/Requests.vue';
import CoachInfo from "./pages/CoachInfo.vue";
import CoachContact from "./pages/CoachContact.vue";
import Register from "./pages/Register.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches'},
    { path: '/coaches', component: Coaches },
    { path: '/coaches/:id', 
      component: CoachInfo,
      props: true,
      children: [
        { path: 'contact', component: CoachContact } //coaches/id/contact
      ] 
    },
    { path: '/register', component: Register },
    { path: '/requests', component: Requests },
    { path: '/:notFound(.*)', component: NotFound}
  ]
});

export default router;