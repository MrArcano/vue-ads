import { createApp } from 'vue'
// Import our custom CSS
import './scss/style.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import App from './App.vue'
import axios from 'axios';

// Configura globalmente Axios con le opzioni predefinite
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

createApp(App).mount('#app')
