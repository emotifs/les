<template>
    <div class="container px-4 mx-auto">
      <footer class="p-4 bg-white sm:p-6 ">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="" class="flex items-center">
              <span class="self-center text-xl font-semibold whitespace-nowrap">English Lessons</span>
            </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-xs lg:text-sm font-semibold text-gray-900 uppercase">Resources</h2>
              <ul class="text-gray-600  text-xs lg:text-sm">
                <li class="mb-4">
                  <router-link to="/">Home</router-link>
                </li>
                <li class="mb-4">
                  <router-link to="/lessons/all-lessons">Lessons</router-link>
                </li>
                <li>
                  <router-link to="/news">News</router-link>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6  text-xs lg:text-sm font-semibold text-gray-900 uppercase">Email</h2>
              <ul class="text-gray-600">
                <li class="mb-4">
                  <a href="mailto:info@mrulugbek.uz" class="text-[10px]">{{ email }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8">
        <div class="sm:flex sm:items-center sm:justify-between">
        <span class=" text-xs lg:text-sm text-gray-500 sm:text-center ">© 2022 English Lessons. All Rights Reserved.
        </span>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a :href="soc.url" class="text-gray-500 hover:text-gray-900" v-for="soc in social" :key="soc.id" target="_blank">
              <img class="w-5 h-5" :src="soc.icon" alt="icon"/>
            </a>
          </div>
        </div>
      </footer>

    </div>
</template>

<script>
export default {
  name: "TheFooter",
  data(){
    return{
      social : [],
      email : ''
    }
  },
  

  mounted(){
    this.social = JSON.parse(localStorage.getItem('social'))
    this.email = this.$store.getters.email
    console.log(this.email)
  }
}
</script>

<style scoped>
  a{
    color: #000!important;
  }
</style>