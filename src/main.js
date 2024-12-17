import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import App from './App.vue'
import Button from "primevue/button"
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import Rating from 'primevue/rating';
import ProgressSpinner from 'primevue/progressspinner';


const app = createApp(App)
app.component('Button', Button);
app.component('Card', Card);
app.component('Carousel', Carousel);
app.component('Rating', Rating);
app.component('ProgressSpinner', ProgressSpinner);
app.use(PrimeVue,{
    theme:{
        preset:Aura
    }
})

app.use(createPinia())

app.mount('#app')
