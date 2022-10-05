import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueWriter from "vue-writer";
import Paginate from "vuejs-paginate-next";
import './assets/tailwind.css'
import $axios from "@/plugins/axios";
createApp(App).use(store).use(router, $axios).use(Paginate).use(VueWriter).mount('#app')
