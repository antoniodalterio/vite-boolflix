<script>
import MoviesContent from './MoviesContent.vue';
import SeriesTvContent from './SeriesTvContent.vue';
export default {
  name: 'MainContentApp',
  components: {
    MoviesContent,
    SeriesTvContent,
  },
};
</script>
<template>
  <h2>Movies</h2>
  <MoviesContent></MoviesContent>
  <h2>Serie tv</h2>
  <SeriesTvContent></SeriesTvContent>
</template>
<style></style>
