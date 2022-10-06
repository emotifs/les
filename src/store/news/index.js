import $axios from "@/plugins/axios";

export default {
    state: {
        news: [],
    }, getters: {
        news(state) {
            return state.news
        }
    }, mutations: {
            setNews(state, payload) {
                state.news = payload
            }
        }, actions: {
            getNews(context) {
                context.rootState.isLoading = true
                $axios.get('posts/')
                    .then(res => {
                        const news = res.data.results
                        context.rootState.isLoading = false
                        context.commit('setNews', news)
                    })
            }
        }, modules: {}
}