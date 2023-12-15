<script>
import { store } from '../store';
export default {
  name: 'Movies',
  data() {
    return {
      store,
    };
  },
  methods: {
    flag(index) {
      if (store.movies[index].original_language === 'en') {
        return 'src/assets/img/Flag_of_the_USA.svg.png';
      } else if (store.movies[index].original_language === 'it') {
        return 'src/assets/img/Flag_of_italy.svg.png';
      }
    },

    languages(index) {
      return (
        store.movies[index].original_language !== 'it' &&
        store.movies[index].original_language !== 'en'
      );
    },

    numbCeil(num) {
      const result = Math.ceil(num / 2);
      return result;
    },
  },
};
</script>
<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="(movie, index) in store.movies">
      <img :src="store.img + store.imgSize + movie.poster_path" alt="" />
      <h3>{{ movie.title }}</h3>
      <h3>{{ movie.original_title }}</h3>
      <div>
        <p v-if="languages(index)">
          {{ movie.original_language }}
        </p>
        <img v-else :src="flag(index)" alt="" class="lang" />
      </div>
      <h4>{{ numbCeil(movie.vote_average) }}</h4>
    </li>
  </ul>
</template>
<style></style>
