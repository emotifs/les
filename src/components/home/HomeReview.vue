<template>
  <carousel :items-to-show="1.5" v-if="reviews.length !== 0" class="mt-24 lg:mt-0 carousels w-full overflow-hidden">
    <slide v-for="review in reviews" :key="review.id" class="carousell rounded">
      <section class="bg-white  text-sm lg:text-lg">
        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <div class="max-w-screen-md mx-auto">
            <svg class="h-12 mx-auto mb-3 text-gray-400  svgs" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
            </svg>
            <blockquote>
              <p class=" font-medium text-gray-900 line-clamp-4">{{review.content}}</p>
            </blockquote>
            <div class="flex items-center justify-center mt-6 space-x-3">
              <img class="w-6 h-6 rounded-full" :src="review.image" alt="profile picture">
              <div class="flex items-center divide-x-2 divide-gray-500">
                <div class="pr-3 font-medium text-gray-900">{{ review.full_name }}</div>
                <div class="pl-3 font-light text-gray-500"><div class="flex"><img v-for="(item, idx) in review.rating"  class="w-6 h-6" :key="idx"  src="../../assets/star.svg" alt=""></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
  <div class="my-5"></div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';

export default {
  data(){
    return{
      reviews : []
    }
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },

  mounted() {
    this.reviews = JSON.parse(localStorage.getItem('reviews'))
  }
}
</script>

<style scoped lang="scss">
  .carousell{
    border: 1px solid #eee;
    &:hover{
      box-shadow: 2px 2px 16px 4px #eee;
      cursor: pointer;
    }

  }
</style>