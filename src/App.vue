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
        });

      axios
        .get(store.apiUrlSeries + store.searchMovies + '&language=it-IT')
        .then((response) => {
          store.series = response.data.results;
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
