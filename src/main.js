import { createApp } from 'vue';
import App from './App.vue';
import components from "./components/UI";
import router from './router/router.js';
import directives from './directives';
import store from './store/index.js';

const app = createApp(App)

components.forEach(el=>app.component(el.name,el))

directives.forEach(el=>app.directive(el.name,el))



app
    .use(router)
    .use(store)
    .mount('#app')
