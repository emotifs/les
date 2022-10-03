<template>
  <nav
      class="relative flex flex-wrap items-center justify-between px-2 py-5 bg-transparent mb-3 text-sm md:text-sm lg:text-base">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <router-link to="/"
                     class="font-semibold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black hover:text-indigo-400 hover:cursor-point">
          English Lessons
        </router-link>
        <button
            class="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button" v-on:click="toggleNavbar()">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <router-link to="/"
                         class="px-3 py-2 flex items-center  uppercase leading-snug font-semibold black hover:text-indigo-400 hover:cursor-pointer mx-3">
              <span class="ml-2">Home</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/news"
                         class="px-3 py-2 flex items-center  uppercase leading-snug font-semibold black hover:text-indigo-400 hover:cursor-pointer mx-3">
              <span class="ml-2">News</span>
            </router-link>
          </li>
          <div  v-for="type in types">
            <li class="dropdown nav-item inline-block relative leading-snug mx-5" v-if="type.children.length > 0">
              <button class="font-semibold py-2 px-3 rounded inline-flex items-center">
                <span class="mr-1">{{ type.title.toUpperCase() }}</span>
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </button>
              <ul class="dropdown-menu absolute hidden pt-1 bg-white" style="width: 150px!important; z-index: 9999999">
                <li class="text-sm">
                  <router-link class="rounded-t py-2 px-4 block whitespace-no-wrap" v-for="item in type.children" :to="{ name: 'lessons', params: { slug: item.slug }}">
                    {{ item.title }}
                  </router-link>
                </li>
              </ul>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "pink-navbar",
  data() {
    return {
      showMenu: false,
      types: []
    }
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    }
  },

  mounted() {
    this.types = JSON.parse(localStorage.getItem('types'))
  },

  watch:{
    $route (to, from){
      this.showMenu = false
    }
  }
}
</script>

<style scoped lang="scss">
a {
  color: black !important;

  &:hover {
    color: #6366F1 !important;
  }
}

.dropdown:hover .dropdown-menu {
  display: block;
}
</style>