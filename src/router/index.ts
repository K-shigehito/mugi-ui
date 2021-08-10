import { createRouter, createWebHistory } from 'vue-router';
import AccordionSample from '../views/AccordionSample.vue';
import ButtonSample from '../views/ButtonSample.vue';
import Index from '../views/index.vue';
import InputTextSample from '../views/InputTextSample.vue';
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
      path: '/input-text',
      name: 'input-text',
      component: InputTextSample,
    },
    {
      path: '/modal',
      name: 'modal',
      component: ModalSample,
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: AccordionSample,
    },
  ],
});
