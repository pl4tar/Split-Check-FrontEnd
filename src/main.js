import {createApp} from "vue";
import {createPinia} from "pinia";

import App from "./App.vue";
import {router} from './router/index.js'
import {vuetify} from "./vuetify/vuetify.js";
import "vuetify/dist/vuetify.min.css";

const app = createApp(App);

app
    .use(createPinia())
    .use(router)
    .use(vuetify)
    .mount("#app");
