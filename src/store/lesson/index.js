import $axios from "@/plugins/axios";

export default {
    state: {
        lessons: [],
        all_lessons: [],
        number : 0
    }, getters: {
        lessons(state) {
            return state.lessons
        },

        all_lessons(state) {
            return state.all_lessons
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
    }, modules: {}
}