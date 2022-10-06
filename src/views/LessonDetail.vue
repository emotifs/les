<template>
  <div class="container mx-auto px-0 lg:px-10 pb-8 border-b-2">
      <div class="wid-max pb-6">
        <h1 class="font-bold text-xl lg:text-4xl my-2">{{ lesson.title }}</h1>
        <p class="text-sm lg:text-lg">{{ lesson.level }}
          <time>{{ new Date(lesson.created_at).toLocaleString("en-us", {dateStyle: "medium"}) }}</time>
        </p>
      </div>
      <div class="wid-max pb-8">
        <img class="w-full" :src="lesson.thumbnail" alt="">
      </div>
      <div class="wid-max text-sm lg:text-lg" v-html="lesson.content"></div>
      <div class="wid-max" v-if="lesson.files">
        <h1 class="font-bold text-xl lg:text-2xl my-5">Attached files : </h1>
        <a :href="'http://' + link.url" target="_blank" v-for="link in lesson.files">
          <div>
            <i class="fa-regular fa-file"></i> {{link.name}}
          </div>
        </a>
      </div>
    </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
  name: "LessonDetail",
  // data(){
  //   return{
  //   }
  // },

  computed: {
    ...mapGetters({
      lesson: 'lessonDetail'
    })
  },
  mounted() {
    console.log(this.$route.params.lesson, 'touue')
    this.$store.dispatch('getLessonDetail', this.$route.params.lesson)
  }
}
</script>

<style scoped>
.wid-max {
  width: 60% !important;
  margin: 0 auto;
}

@media (max-width: 767px) {
  .wid-max {
    width: 80% !important;
  }
}
</style>