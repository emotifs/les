<template>
  <div class="">
    <HomeHeader />
    <HomeNewspaper />
    <HomeReview />

  </div>
</template>

<script>

import HomeHeader from "@/components/home/HomeHeader";
import HomeReview from "@/components/home/HomeReview";
import HomeNewspaper from "@/components/home/HomeNewspaper";
export default {
  name: 'HomeView',
  components: {
    HomeNewspaper,
    HomeReview,
    HomeHeader
  }
}
</script>
