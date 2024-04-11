import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/md-light-indigo/theme.css'
import Card from 'primevue/card';
import Image from 'primevue/image';

const app = createApp(App);
app.use(PrimeVue);
app.component('Card', Card);
app.component('Image', Image);
app.mount('#app');