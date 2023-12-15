<script>
import axios from 'axios';
import { store } from './store.js';
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';
export default {
  components: {
    HeaderApp,
    MainApp,
  },
  data() {
    return {
      store,
      currentFilm: 0,
    };
  },
  created() {},
  methods: {
    search() {
      axios
        .get(store.apiUrlMovie + store.searchMovies + '&language=it-IT')
        .then((response) => {
          store.movies = response.data.results;
          console.log(store.movies);
        });

      axios
        .get(store.apiUrlSeries + store.searchMovies + '&language=it-IT')
        .then((response) => {
          store.series = response.data.results;
          console.log(store.movies);
        });
    },
  },
};
</script>

<template>
  <HeaderApp @searchMovie="search"></HeaderApp>
  <MainApp></MainApp>
</template>

<style scoped></style>
