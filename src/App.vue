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
    };
  },
  created() {
    axios
      .get(store.apiUrl + store.searchMovies + '&language=it-IT')
      .then((response) => {
        console.log(response.data.results);
      });
  },
};
</script>

<template>
  <HeaderApp></HeaderApp>
  <MainApp></MainApp>
</template>

<style scoped></style>
