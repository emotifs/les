<template>
  <div class="relative flex  flex-col items-center overflow-hidden bg-gray-50 p-8 sm:p-12 mt-24 lg:mt-0">
    <div class="w-full max-w-4xl rounded-md border-2 border-gray-100 bg-white p-14">
      <div class="flex flex-col items-center">
        <h3 class="mt-2 max-w-2xl text-center text-md font-bold leading-tight sm:text-xl md:text-2xl md:leading-tight">Interesting content? Subscribe for newsletter</h3>
        <form action="" class="mx-auto mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-0" @submit.prevent="subscribeData">
          <input type="email" v-model.trim="email" name="email" id="email" class="grow rounded border-2 border-gray-300 py-3 px-3 focus:border-indigo-500 focus:outline-none sm:rounded-l-md sm:rounded-r-none sm:border-r-0" placeholder="Email Address" />
          <button type="submit" class="rounded bg-indigo-500 px-5 py-4 font-bold text-white sm:rounded-l-none sm:rounded-r-md">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeNewspaper",
  data(){
    return {
      email : ''
    }
  },

  methods : {
    subscribeData(){
      axios.post('subscribe/', {
        email : this.email
      })
          .then(res => {
            console.log(res)
          })
      this.email = ''
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style scoped>

</style>