<template>
    <div class="flex mx-auto w-full lg:w-1/4 px-4">
      <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
      <div class="relative w-full">
        <input type="search" v-model="search"  id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Search" required="">
        <button class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 ">
          <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <span class="sr-only" @click="input">Search</span>
        </button>
      </div>
    </div>

</template>

<script>
import $axios from "@/plugins/axios";
import {mapGetters} from "vuex";

export default {
  name: "SearchBar",
  data(){
    return{
        search : '',
        route : this.$route.path.toString().substr(9)
    }
  },
  mounted() {
    this.input()
  },
  methods : {
    input() {
      if(this.route==='all-lessons'){
        $axios.get(`lessons/?search=${this.search}`)
            .then(res => {
              this.$store.commit('setAllLessons', res.data.results)
            })
      }
      else {
        $axios.get(`lessons/?search=${this.search}&type__slug=${this.route}`
        )
            .then(res => {
              this.$store.commit('setAllLessons', res.data.results)
            })
      }
    }
  },

  watch:{
    $route (to, from){
      this.route = to.path.toString().substr(9)
      this.search = ''
      this.route = to.path.toString().substr(9)
      let lessons = this.$store.getters.lessons
      lessons = lessons.filter(it => it.type.slug === this.route)
      this.$store.commit('setAllLessons', lessons)
      console.log('les', lessons)
    },
    search(val){
        this.input()
    }
  }
}
</script>

<style scoped>

</style>