<template>
  <div class="container mx-auto px-5 lg:px-10 pb-8 border-b-2" >

      <div class="wid-max pb-6">
        <h1 class="font-bold text-xl lg:text-4xl my-2">{{news.title}}</h1>
        <p class="text-sm lg:text-lg">{{news.level}}  <time>{{ new Date(news.created_at).toLocaleString("en-us", { dateStyle: "medium" }) }}</time></p>
      </div>
      <div class="wid-max pb-8">
        <img class="w-full" :src="news.thumbnail" alt="">
      </div>
      <div class="wid-max text-sm lg:text-lg break-words"  v-html="news.content"></div>
    </div>

</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
  name: "newsDetail",
  // data(){
  //   return{
  //   }
  // },

  computed: {
    ...mapGetters({
      news: 'newsDetail'
    })
  },
  mounted() {
    console.log(this.$route.params.slug, 'touue')
    this.$store.dispatch('getNewsDetail', this.$route.params.slug)
  }
}
</script>

<style scoped>
  .wid-max{
    width: 60%!important;
    margin: 0 auto;
  }

  @media(max-width: 767px){
    .wid-max{
      width: 90%!important;
    }
  }
</style>