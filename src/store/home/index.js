import axios from "axios";

export default {
    state: {
        name: '',
        bio: '',
    },
    getters: {
        name(state) {
            return state.name
        },
        bio(state) {
            return state.bio
        }
    },
    mutations: {
        setUser(state, payload) {
            state.name = payload.name
            state.bio = payload.bio
            localStorage.setItem('name', payload.name)
            localStorage.setItem('bio', payload.bio)
        }
    },
    actions: {
        getUser(context) {
            context.rootState.isLoading = true
            let response = axios.get('home/')
            response.then(res => {
                context.rootState.isLoading = false
                context.commit('setUser', {
                    name: res.data.full_name,
                    bio: res.data.bio
                })
            })

        }
    },
    modules: {}
}