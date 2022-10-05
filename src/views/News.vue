<template>
  <div class="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
    <div class="w-full  relative bg-white rounded-lg border border-gray-200 shadow-md mx-0 lg:mx-5" v-for="item in news"
         :key="item">
      <router-link :to="'news/' + item.slug">
        <img class="rounded-t-lg w-full" :src="item.thumbnail" style="height : 300px; object-fit: cover;" alt=""/>
        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 !line-clamp-2">{{ item.title }}</h5>
          <p class="mb-14 font-normal text-gray-700 mb-14 line-clamp-4">{{ item.description }}</p>
          <router-link :to="'news/' + item.slug" style="color: #fff!important"
                       class="inline-flex absolute bottom-5 items-center py-2 px-3 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Read more
            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
          </router-link>
        </div>
      </router-link>

    </div>

  </div>
  <div class="mx-auto px-1 flex justify-center my-5">
    <paginate
        :pageCount="totalPages"
        :prevText="'Prev'"
        :nextText="'Next'"
        :containerClass="'pagination'"
        v-model="currentPage"
    >
    </paginate>
  </div>

</template>

<script>
import Paginate from 'vuejs-paginate-next';
import axios from "axios";

export default {
  name: "News",
  components: {
    paginate: Paginate,
  },
  data() {
    return {
      currentPage: 1,
      news: [],
      page: 1,
      totalPages: null,
      limit: 4,
      totalNews: JSON.parse(localStorage.getItem('news')).length
    }
  },

  methods: {
    getNews(offset) {
      axios.get('posts/', {
        params: {
          limit: this.limit,
          offset,
        }
      }).then(res => {
        this.news = res.data.results
        console.log(res.data.results)
        this.totalPages = Math.ceil(this.totalNews / this.limit)
      })
    }
  },

  mounted() {
    this.getNews(0)
  },

  watch: {
    currentPage() {
      console.log(this.currentPage)
      this.getNews((this.currentPage - 1) * this.limit)
    },
  },

}
</script>

<style>
.pagination a {
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  border: 1px solid #ddd;
  background-color: white;
}

.pagination a.active {
  background-color: green;
}

.pagination li.active a, .pagination a:hover:not(.active) {
  transition: 0.2s ease;
  background-color: #6366F1;
  color: #fff !important;
}

.pagination a:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.pagination a:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.pagination li {
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  border: 1px solid #ddd;
  color: white;
  background-color: white;
  font-size: 1em;
}

.pagination li:hover:not(.active) {
  /*background-color: #6366F1;*/
  color: #fff;
}

@media screen and (max-width: 800px) {
  .pagination li {
    float: left;
    padding: 3px 11px;
    text-decoration: none;
    border: 1px solid #ddd;
    color: white;
    background-color: white;
    font-size: 1em;
  }
  .pagination a {
    float: left;
    padding: 3px 11px;
    text-decoration: none;
    border: 1px solid #ddd;
    background-color: white;
  }
}
</style>