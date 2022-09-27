import axios from "axios";

export default {
    state: {
        lessons: [],
        all_lessons: [],
        limit : 3,
        offset : 0
    }, getters: {
        lessons(state) {
            return state.lessons
        },

        all_lessons(state) {
            return state.all_lessons
        },

        getAllPagination(state){
            return {
                limit : state.limit,
                offset : state.offset
            }
        }

    }, mutations: {
        setLessons(state, payload) {
            state.lessons = payload
            localStorage.setItem("lessons", JSON.stringify(payload))
        },
        setAllLessons(state, payload){
            state.all_lessons = payload
            localStorage.setItem("all_lessons", JSON.stringify(payload))
        },
        setAllPagination(state, payload){
            state.limit = payload.limit
            state.offset = payload.offset
        }
    }, actions: {
        getLessons(context) {
            context.rootState.isLoading = true
            axios.get('lessons/')
                .then(res => {
                    const lesson = res.data.results
                    context.rootState.isLoading = false
                    context.commit('setLessons', lesson)
                })
        },
    }, modules: {}
}