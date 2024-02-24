import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios';

// Imposta globalmente il token CSRF per Axios
// axios.defaults.headers.common['X-CSRF-TOKEN'] = document.head.querySelector('meta[name="csrf-token"]').content;

createApp(App).mount('#app')
