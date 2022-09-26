import axios from "axios";

export default {
    state: {
        types: [],
    }, getters: {
        types(state) {
            return state.social
        }
    }, mutations: {
            setTypes(state, payload) {
                state.types = payload
                localStorage.setItem("types", JSON.stringify(payload))
            }
        }, actions: {
            getTypes(context) {
                context.rootState.isLoading = true
                axios.get('types/')
                    .then(res => {
                        const type = res.data.results
                        console.log(type)
                        context.rootState.isLoading = false
                        context.commit('setTypes', type)
                    })
            }
        }, modules: {}
}