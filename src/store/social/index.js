import $axios from "@/plugins/axios";

export default {
    state: {
        social: [],
    }, getters: {
        social(state) {
            return state.social
        }
    }, mutations: {
            setSocial(state, payload) {
                state.social = payload
                localStorage.setItem("social", JSON.stringify(payload))
            }
        }, actions: {
            getSocial(context) {
                context.rootState.isLoading = true
                $axios.get('social-accounts/')
                    .then(res => {
                        const social = res.data.results
                        console.log(social)
                        context.rootState.isLoading = false
                        context.commit('setSocial', social)
                    })
            }
        }, modules: {}
}