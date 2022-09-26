import { createStore } from 'vuex'
import HomeModule from './home/index'
import ReviewModule from './review/index'
import SocialModule from './social/index'
import TypesModule from './type/index'
import LessonModule from './lesson/index'
import NewsModule from './news/index'
export default createStore({
  state: {
    isLoading : false
  },
  getters: {
    isLoading(state){
      return state.isLoading
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    home : HomeModule,
    review : ReviewModule,
    social : SocialModule,
    type : TypesModule,
    lesson : LessonModule,
    news : NewsModule
  }
})
