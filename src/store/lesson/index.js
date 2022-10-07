import $axios from "@/plugins/axios";

export default {
    state: {
        lessons: [],
        lessonDetail: {},
        newsDetail: {},
        all_lessons: [],
        number : 0
    }, getters: {
        lessons(state) {
            return state.lessons
        },

        all_lessons(state) {
            return state.all_lessons
        },
        lessonDetail(state) {
            return state.lessonDetail
        },
        newsDetail(state) {
            return state. newsDetail
        },
        number(state){
            return state.number
        }

    }, mutations: {
        setNumber(state, payload){
            state.number = payload
        },
        setLessons(state, payload) {

            state.lessons = payload
        },
        setLessonDetail(state, payload) {
            console.log(payload,'response')

            state.lessonDetail = payload
        },
        setNewsDetail(state, payload) {
            console.log(payload,'response')

            state.newsDetail = payload
        },
        setAllLessons(state, payload){
            state.all_lessons = payload
        },
    }, actions: {
        getLessons(context) {
            context.rootState.isLoading = true
            $axios.get('lessons/')
                .then(res => {
                    context.commit('setNumber', res.data.count)
                    const lesson = res.data.results
                    context.rootState.isLoading = false
                    context.commit('setLessons', lesson)
                })
        },
        getLessonDetail(context, slug) {
            $axios.get(`lessons/${slug}/`)
                .then(res => {
                    context.commit('setLessonDetail', res.data)
                    context.rootState.isLoading = false
                })
        },
        getNewsDetail(context, slug) {
            $axios.get(`posts/${slug}/`)
                .then(res => {
                    context.commit('setNewsDetail', res.data)
                    context.rootState.isLoading = false
                })
        },
    }, modules: {}
}