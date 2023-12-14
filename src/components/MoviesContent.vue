<script>
import { store } from '../store';
export default {
  name: 'Moovies',
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="movie in store.movies">
      <h3>{{ movie.title }}</h3>
      <h3>{{ movie.original_title }}</h3>
      <h4>{{ movie.original_language }}</h4>
      <h4>{{ movie.vote_average }}</h4>
    </li>
  </ul>
</template>
<style></style>
