import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import { setupRouterGuard } from './router/guard';
import { setupStore } from './store';

const app = createApp(App);

setupStore(app);

app.use(router);

setupRouterGuard(router);

app.mount('#app')
