<template>
  <div class="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
    <div class="w-full  relative bg-white rounded-lg border border-gray-200 shadow-md mx-5" v-for="item in news">
        <router-link :to="'news/' + item.slug">
          <img class="rounded-t-lg w-full" :src="item.thumbnail" alt="" />
          <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{item.title}}</h5>
            <p class="mb-14 font-normal text-gray-700 mb-14">{{item.description.toString().substring(0, 50) + '...'}}</p>
            <router-link :to="'news/' + item.slug" style="color: #fff!important" class="inline-flex absolute bottom-5 items-center py-2 px-3 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Read more
              <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </router-link>
          </div>
        </router-link>
    </div>
  </div>
  <div class="mx-auto px-8 container" v-if="totalPages !==1">
    <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div class="flex flex-1 justify-between sm:hidden">
        <a href="#" @click="currentPage !== 0 ? currentPage-- : currentPage" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
        <a href="#" @click="currentPage !== totalPages  ? currentPage++ : currentPage" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
      </div>
      <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <span  class="hover:cursor-pointer relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
              <span class="sr-only">Previous</span>
              <!-- Heroicon name: mini/chevron-left -->
              <svg @click="currentPage !== 0 ? currentPage-- : currentPage" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
              </svg>
            </span>
            <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
            <span v-if="totalPages <= 10" v-for="item in totalPages" @click="currentPage = item - 1" aria-current="page" class="hover:cursor-pointer relative z-10 inline-flex items-center border border-indigo-500  px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20" :class="{'bg-indigo-50' : item === currentPage + 1}">{{item}}</span>
            <span v-else v-for="item in 3" @click="currentPage = item - 1" aria-current="page" class="hover:cursor-pointer relative z-10 inline-flex items-center border border-indigo-500  px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20" :class="{'bg-indigo-50' : item === currentPage + 1}">{{item}}</span>
            <span  @click="currentPage = 3" v-if="totalPages >= 10" aria-current="page" class="hover:cursor-pointer relative z-10 inline-flex items-center border border-indigo-500  px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20">...</span>
            <span v-if="totalPages > 10" v-for="item in (totalPages - 3, totalPages)" @click="currentPage = item - 1" aria-current="page" class="hover:cursor-pointer relative z-10 inline-flex items-center border border-indigo-500  px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20" :class="{'bg-indigo-50' : item === currentPage}">{{item}}</span>
            <span class="cursor-pointer relative inline items-center border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
              <span class="sr-only">Next</span>
              <!-- Heroicon name: mini/chevron-right -->
              <svg @click="currentPage + 1 !== totalPages  ? currentPage++ : currentPage" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
              </svg>
            </span>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "News",
  data(){
    return {
      news : [],
      currentPage : 0,
      totalPages : null,
      limit : 4,
      totalNews : JSON.parse(localStorage.getItem('news')).length
    }
  },

  methods : {
    getNews(currentPage){
      axios.get('posts/', {
        params : {
          limit : this.limit,
          offset : currentPage
        }
      }) .then(res => {
        this.news = res.data.results
        console.log(res.data.results)
        this.totalPages = Math.ceil( this.totalNews / this.limit)
      })
    }
  },

  mounted(){
    this.getNews(0)
  },

  watch : {
    currentPage() {
      console.log(this.currentPage)
      if(this.currentPage ===  0)
        this.getNews(this.currentPage)
      else
        this.getNews(this.currentPage + this.limit - 1)
    },
  }
}
</script>

<style scoped>

</style>