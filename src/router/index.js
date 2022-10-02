import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LessonView from "@/views/LessonView";
import LessonDetail from "@/views/LessonDetail";
import AllLessons from "@/views/AllLessons";
import News from '@/views/News'
import NewsDetail from "@/views/NewsDetail";
import NotFound from "@/views/NotFound";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    name : 'lessons',
    path : '/lessons/:slug',
    component: LessonView
  },
  {
    name : 'lesson',
    path : '/lessons/:slug/:lesson',
    component: LessonDetail
  },
  {
    name: 'all-lessons',
    path: '/all-lessons',
    component: AllLessons
  },
  {
    name : 'news',
    path : '/news',
    component: News
  },
  {
    name : 'NewsDetail',
    path : '/news/:slug',
    component:  NewsDetail
  },
  {
    path : '/:notFound(.*)',
    name : 'notFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
