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
  <MoviesContent></MoviesContent>
  <SeriesTvContent></SeriesTvContent>
</template>
<style></style>
