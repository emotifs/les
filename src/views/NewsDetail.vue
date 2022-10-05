<template>
  <div class="container mx-auto px-5 lg:px-10 pb-8 border-b-2" >
    <div v-for="it in news" >
      <div class="wid-max pb-6">
        <h1 class="font-bold text-xl lg:text-4xl my-2">{{it.title}}</h1>
        <p class="text-sm lg:text-lg">{{it.level}}  <time>{{ new Date(it.created_at).toLocaleString("en-us", { dateStyle: "medium" }) }}</time></p>
      </div>
      <div class="wid-max pb-8">
        <img class="w-full" :src="it.thumbnail" alt="">
      </div>
      <div class="wid-max text-sm lg:text-lg break-words"  v-html="it.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsDetail",
  data(){
    return{
      news : []
    }
  },

  mounted(){
    let def = this.$route.path.toString()
    let route = ""
    let cnt = 0
    for(let i = 0; i < def.length; i++){
      if(def[i] === '/') cnt++;
      if(cnt === 2) {
        route += def[[i]]
      }
    }
    route = route.substr(1)
    console.log(route)
    let news = JSON.parse(localStorage.getItem('news'))
    news = news.filter(news =>
      news.slug.toString() === route
    )

    this.news = news
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