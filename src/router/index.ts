import { createRouter, createWebHistory } from 'vue-router';
import ButtonSample from '../views/ButtonSample.vue';
import Index from '../views/index.vue';
import ModalSample from '../views/ModalSample.vue';

export const routerHistory = createWebHistory();

export const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/button',
      name: 'button',
      component: ButtonSample,
    },
    {
      path: '/modal',
      name: 'modal',
      component: ModalSample,
    },
  ],
});
