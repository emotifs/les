<template>
  <div class="container px-8 mx-auto">
    <SearchBar class="w-full block my-4 lg:hidden md:hidden "/>
    <div class="flex">
      <main class="w-full lg:w-3/4">
        <div class="w-full sm:mx-auto lg:mx-0 px-4" v-for="lesson in lessons" :key="lesson.id">
          <router-link :to="lesson.type.slug +'/' + lesson.slug">
            <article class="overflow-hidden shadow my-4">
              <div class="sm:flex sm:flex-wrap">
                <div class="sm:w-1/2 lg:w-56 h-56 sm:h-auto relative">
                  <img
                      class="w-full h-full absolute inset-0 object-cover"
                      style="height : 300px; object-fit: cover;"
                      :src="lesson.thumbnail"
                      alt="image"
                  >

                </div>
                <div class="sm:w-1/2 p-4">
                  <!--post category-->
                  <span
                      style="background-color: #6366F1;"
                      class="uppercase tracking-wide inline-block px-2 rounded-full text-xs text-white"
                  >{{ lesson.level }}</span
                  >
                  <!--post title-->
                  <h4 class="text-lg font-semibold capitalize text-gray-800 mt-2 !line-clamp-2">
                    {{ lesson.title }}
                  </h4>
                  <!--post excerpt-->
                  <p class="text-gray-700 mt-2 line-clamp-4">
                    {{ lesson.description }}
                  </p>
                  <!--post user info-->
                  <div class="flex items-center mt-3">
                    <div class="mt-2 text-sm text-gray-600">
                      <time style="font-weight: 600">
                        {{ new Date(lesson.created_at).toLocaleString("en-us", {dateStyle: "medium"}) }}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </router-link>
        </div>
      </main>
      <SearchBar class="w-1/4 hidden lg:block"/>
    </div>
  </div>

</template>

<script>
import SearchBar from "@/components/UI/SearchBar";
import {mapGetters} from "vuex";
import $axios from "@/plugins/axios";

export default {
  name: "LessonView",
  components: {
    SearchBar
  },

  computed: {
    ...mapGetters({
      lessons: 'all_lessons',
    })
  },
}
</script>

<style scoped lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;
$midnight: #6366F1;
$clouds: #ecf0f1;
// General
body {
  color: $midnight;
  background: $clouds;
  padding: 0 1em 1em;
}

h1 {
  margin: 0;
  line-height: 2;
  text-align: center;
}

h2 {
  margin: 0 0 .5em;
  font-weight: normal;
}

input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

// Layout
.row {
  display: flex;

  .col {
    flex: 1;

    &:last-child {
      margin-left: 1em;
    }
  }
}

/* Accordion styles */
.tabs {
  border-radius: 8px;
  overflow: hidden;
}

.tab {
  width: 100%;
  color: white;
  overflow: hidden;
  border: 1px solid #fff;

  &-label {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background: $midnight;
    font-weight: bold;
    cursor: pointer;
    /* Icon */
    &:hover {
      background: darken($midnight, 10%);
    }

    &::after {
      content: "\276F";
      width: 1em;
      height: 1em;
      text-align: center;
      transition: all .35s;
    }
  }

  &-content {
    max-height: 0;
    padding: 0 1em;
    color: #000;
    background: white;
    transition: all .35s;
  }

  &-close {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
    font-size: 0.75em;
    background: $midnight;
    cursor: pointer;

    &:hover {
      background: darken($midnight, 10%);
    }
  }
}

// :checked
input:checked {
  + .tab-label {
    background: darken($midnight, 10%);

    &::after {
      transform: rotate(90deg);
    }
  }

  ~ .tab-content {
    max-height: 100vh;
    padding: 1em;
  }
}

</style>