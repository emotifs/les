<template>
  <div v-if="this.$store.getters.isLoading" class="container mx-auto px-10">
    <TheLoader />
  </div>
  <section v-else>
    <TheNavbar/>
    <router-view/>
    <TheFooter />
  </section>
</template>

<script>
import TheNavbar from "@/components/layout/TheNavbar";
import TheLoader from "@/components/UI/TheLoader";
import TheFooter from "@/components/layout/TheFooter";
import axios from "axios";

export default {
  components: {
    TheFooter,
    TheLoader,
    TheNavbar
  },
  mounted() {
    this.$store.dispatch('getUser')
    this.$store.dispatch('getReview')
    this.$store.dispatch('getSocial')
    this.$store.dispatch('getTypes')
    this.$store.dispatch('getLessons')
    this.$store.dispatch('getNews')
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  scroll-behavior: smooth;
}

a {
  color: #6366F1 !important;
}

.white {
  color: #fff !important;
}
</style>
