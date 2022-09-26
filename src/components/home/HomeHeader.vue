<template>
  <div class="container mx-auto px-10">
    <div class="flex flex-col lg:flex-row">
      <div class="w-full lg:w-1/2 pr-4 pt-16 lg:pt-36">
        <h1 class="font-semibold text-3xl lg:text-5xl  my-5 flex">Hello, I'm <span class="text-indigo-500 font-bold ml-3"><VueWriter :array='[name]' :typeSpeed="50" :delay="2000" /></span>
        </h1>
        <p class="w-full mb-8" style="word-wrap: break-word;" v-html="bio"></p>
        <router-link to="/all-lessons" class="bg-indigo-700 white px-5 py-3 rounded" style="color: #fff!important;">Go to lessons
        </router-link>
      </div>
      <div class="w-full lg:w-1/2 hidden lg:block">
        <img src="../../assets/teach.gif" style="width: 90%" alt="">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomeHeader",

  data() {
    return {
      name: '',
      bio: ''
    }
  },
  mounted() {
    this.name = localStorage.getItem('name')
    this.bio = localStorage.getItem('bio')
  }
}
</script>

<style scoped>
a {
  color: #6366F1 !important;
}
</style>