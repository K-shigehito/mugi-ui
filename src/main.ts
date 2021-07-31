import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import { worker } from './mock';
import { router } from './router/index.ts';

// 開発環境でのみmswを動作させる
if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const app = createApp(App);
app.use(router);
app.mount('#app');
