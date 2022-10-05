import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import VueWriter from "vue-writer";
import Paginate from "vuejs-paginate-next";
import './assets/tailwind.css'
axios.defaults.baseURL = 'http://127.0.0.1:8000/';
createApp(App).use(store).use(router, axios).use(Paginate).use(VueWriter).mount('#app')
