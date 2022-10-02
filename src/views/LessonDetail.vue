<template>
  <div class="container mx-auto px-0 lg:px-10 pb-8 border-b-2">
    <div v-for="it in lesson" >
      <div class="wid-max pb-6">
        <h1 class="font-bold text-2xl lg:text-4xl my-2">{{it.title}}</h1>
        <p>{{it.level}}  <time>{{ new Date(it.created_at).toLocaleString("en-us", { dateStyle: "medium" }) }}</time></p>
      </div>
      <div class="wid-max pb-8">
        <img class="w-full" :src="it.thumbnail" alt="">
      </div>
      <div class="wid-max"  v-html="it.content"></div>
      <div class="wid-max" v-if="it.files.length">
        <h1 class="font-bold text-2xl my-5">Attached files : </h1>
        <a :href="'http://' + link.url" target="_blank" v-for="link in it.files">
          <div>
            <i class="fa-regular fa-file"></i> {{link.name}}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LessonDetail",
  data(){
    return{
      lesson : []
    }
  },

  mounted(){
    let def = this.$route.path.toString()
    let route = ""
    let cnt = 0
    for(let i = 0; i < def.length; i++){
      if(def[i] === '/') cnt++;
      if(cnt === 3) {
        route += def[[i]]
      }
    }
    route = route.substr(1)
    console.log(route)
    let lessons = JSON.parse(localStorage.getItem('lessons'))
    lessons = lessons.filter(lesson =>
      lesson.slug.toString() === route
    )

    this.lesson = lessons
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
      width: 80%!important;
    }
  }
</style>