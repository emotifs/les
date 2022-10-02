import axios from "axios";

export default {
    state: {
        lessons: [],
        all_lessons: [],
        limit : 3,
        offset : 0,
        number : 0,
    }, getters: {
        limit(state){
            return state.limit
        },
        lessons(state) {
            return state.lessons
        },

        all_lessons(state) {
            return state.all_lessons
        },

        getAllPagination(state){
            if(state.offset !== 0)
                return {
                    limit : state.limit,
                    offset : state.offset  + state.limit
                }
            else
                return {
                    limit : state.limit,
                    offset : state.offset
                }
        },
        getAllNumber(state){
            return state.number
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
            state.offset = payload.offset
        },
        setAllNumber(state, payload){
            state.number = payload
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

            axios.get('lessons/')
                .then(res => {
                    context.rootState.isLoading = false
                        context.commit('setAllNumber', res.data.results.length)
                })
        },
    }, modules: {}
}