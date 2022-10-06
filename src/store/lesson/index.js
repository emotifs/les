import $axios from "@/plugins/axios";

export default {
    state: {
        lessons: [],
        lessonDetail: {},
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
    }, modules: {}
}