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
  <section>
    <h2>Movies</h2>
    <MoviesContent></MoviesContent>
    <h2>Serie tv</h2>
    <SeriesTvContent></SeriesTvContent>
  </section>
</template>
<style></style>
