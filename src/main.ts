import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import { worker } from './mock';
import { router } from './router/index.ts';

// FontAwsome
library.add(faGithub);
library.add(faLeaf);

// 開発環境でのみmswを動作させる
if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const app = createApp(App);
// eslint-disable-next-line vue/component-definition-name-casing
app.component('fa', FontAwesomeIcon);
app.use(router);
app.mount('#app');
