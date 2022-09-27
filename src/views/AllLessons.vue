<template>
  <div class="container px-8 mx-auto">
    <SearchBar class="w-full block my-4 lg:hidden md:hidden "/>
    <div class="flex">
      <main class="w-full lg:w-3/4">
        <div class="w-full sm:mx-auto lg:mx-0 px-4"  v-for="lesson in lessons" :key="lesson.id">
          <router-link :to="lesson.type.slug +'/' + lesson.slug">
            <article class="overflow-hidden shadow my-4">
              <div class="sm:flex sm:flex-wrap">
                <div class="sm:w-1/2 lg:w-56 h-56 sm:h-auto relative">
                  <img
                      class="w-full h-full absolute inset-0 object-cover"
                      :src="lesson.thumbnail"
                      alt="image"
                  >
                </div>
                <div class="sm:w-1/2 p-4">
                  <!--post category-->
                  <span
                      style="background-color: #6366F1;"
                      class="uppercase tracking-wide inline-block px-2 rounded-full text-xs text-white"
                  >{{ lesson.level }}</span
                  >
                  <!--post title-->
                  <h4 class="text-lg font-semibold capitalize text-gray-800 mt-2">
                    {{ lesson.title }}
                  </h4>
                  <!--post excerpt-->
                  <p class="text-gray-700 mt-2">
                    {{lesson.description}}
                  </p>
                  <!--post user info-->
                  <div class="flex items-center mt-3">
                    <div class="mt-2 text-sm text-gray-600">
                      <time style="font-weight: 600" >{{ new Date(lesson.created_at).toLocaleString("en-us", { dateStyle: "medium" }) }}</time>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </router-link>
        </div>
      </main>
      <SearchBar class="w-1/4 hidden lg:block"/>
    </div>
  </div>
  <div class="container mx-auto px-8" v-if="totalPages !==1">
    <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div class="flex flex-1 justify-between sm:hidden">
        <a href="#" @click="currentPage !== 1 ? currentPage-- : currentPage" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
        <a href="#" @click="currentPage !== totalPages  ? currentPage++ : currentPage" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
      </div>
      <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p class="text-sm text-gray-700">
            Showing
            <span class="font-medium">{{currentPage}}</span>
            to
            <span class="font-medium">{{ currentPage +  limit - 1 }}</span>
            of
            <span class="font-medium">{{ totalNews }}</span>
            results
          </p>
        </div>
        <div>
          <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <span  class="hover:cursor-pointer relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
              <span class="sr-only">Previous</span>
              <!-- Heroicon name: mini/chevron-left -->
              <svg @click="currentPage !== 1 ? currentPage-- : currentPage" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
              </svg>
            </span>
            <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
            <span v-if="totalPages <= 1" v-for="item in totalPages" @click="currentPage = item" aria-current="page" class="hover:cursor-pointer relative z-10 inline-flex items-center border border-indigo-500  px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20" :class="{'bg-indigo-50' : item === currentPage}">{{item}}</span>
            <span v-else v-for="item in 3" @click="currentPage = item" aria-current="page" class="hover:cursor-pointer relative z-10 inline-flex items-center border border-indigo-500  px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20" :class="{'bg-indigo-50' : item === currentPage}">{{item}}</span>
            <span  @click="currentPage = 4" v-if="totalPages >= 1" aria-current="page" class="hover:cursor-pointer relative z-10 inline-flex items-center border border-indigo-500  px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20">...</span>
            <span v-if="totalPages > 1" v-for="item in (totalPages - 3, totalPages)" @click="currentPage = item" aria-current="page" class="hover:cursor-pointer relative z-10 inline-flex items-center border border-indigo-500  px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20" :class="{'bg-indigo-50' : item === currentPage}">{{item}}</span>
            <span class="cursor-pointer relative inline items-center border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
              <span class="sr-only">Next</span>
              <!-- Heroicon name: mini/chevron-right -->
              <svg @click="currentPage !== totalPages  ? currentPage++ : currentPage" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
import SearchBar from "@/components/UI/SearchBar";
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  name: "LessonView",
  components: {
    SearchBar
  },

  data(){
    return {
      currentPage : 0,
      totalPages : null,
      limit : 3,
      totalNews : JSON.parse(localStorage.getItem('all_lessons')).length
    }
  },

  mounted(){
    console.log(this.lessons)
  },

  computed: {
    ...mapGetters({
      lessons: 'all_lessons'
    })
  },
}
</script>

<style scoped lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;
$midnight: #6366F1;
$clouds: #ecf0f1;
// General
body {
  color: $midnight;
  background: $clouds;
  padding: 0 1em 1em;
}
h1 {
  margin: 0;
  line-height: 2;
  text-align: center;
}
h2 {
  margin: 0 0 .5em;
  font-weight: normal;
}
input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
// Layout
.row {
  display:flex;
  .col {
    flex:1;
    &:last-child {
      margin-left: 1em;
    }
  }
}
/* Accordion styles */
.tabs {
  border-radius: 8px;
  overflow: hidden;
}
.tab {
  width: 100%;
  color: white;
  overflow: hidden;
  border: 1px solid #fff;
  &-label {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background: $midnight;
    font-weight: bold;
    cursor: pointer;
    /* Icon */
    &:hover {
      background: darken($midnight, 10%);
    }
    &::after {
      content: "\276F";
      width: 1em;
      height: 1em;
      text-align: center;
      transition: all .35s;
    }
  }
  &-content {
    max-height: 0;
    padding: 0 1em;
    color: #000;
    background: white;
    transition: all .35s;
  }
  &-close {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
    font-size: 0.75em;
    background: $midnight;
    cursor: pointer;
    &:hover {
      background: darken($midnight, 10%);
    }
  }
}

// :checked
input:checked {
  + .tab-label {
    background: darken($midnight, 10%);
    &::after {
      transform: rotate(90deg);
    }
  }
  ~ .tab-content {
    max-height: 100vh;
    padding: 1em;
  }
}

</style>