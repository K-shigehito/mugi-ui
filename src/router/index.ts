import { createRouter, createWebHistory } from 'vue-router';
import AccordionSample from '../views/AccordionSample.vue';
import ButtonSample from '../views/ButtonSample.vue';
import DialogSample from '../views/DialogSample.vue';
import FormSample from '../views/FormSample.vue';
import Index from '../views/index.vue';
import LoaderSample from '../views/LoaderSample.vue';

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
      path: '/form',
      name: 'form',
      component: FormSample,
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: DialogSample,
    },
    {
      path: '/loader',
      name: 'loader',
      component: LoaderSample,
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: AccordionSample,
    },
  ],
});
