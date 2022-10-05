import $axios from "@/plugins/axios";

export default {
    state: {
        reviews: [],
    }, getters: {
        reviews(state) {
            return state.reviews
        }
    }, mutations: {
            setReview(state, payload) {
                state.reviews = payload
                localStorage.setItem("reviews", JSON.stringify(payload))
            }
        }, actions: {
            getReview(context) {
                context.rootState.isLoading = true
                $axios.get('reviews/')
                    .then(res => {
                        const review = res.data.results
                        console.log(review)
                        context.rootState.isLoading = false
                        context.commit('setReview', review)
                    })
            }
        }, modules: {}
}