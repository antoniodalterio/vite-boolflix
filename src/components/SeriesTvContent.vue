<script>
import { store } from '../store';
export default {
  name: 'Series',
  data() {
    return {
      store,
    };
  },
  methods: {
    flag(index) {
      if (store.series[index].original_language === 'en') {
        return 'src/assets/img/Flag_of_the_USA.svg.png';
      } else if (store.series[index].original_language === 'it') {
        return 'src/assets/img/Flag_of_italy.svg.png';
      }
    },

    languages(index) {
      return (
        store.series[index].original_language !== 'it' &&
        store.series[index].original_language !== 'en'
      );
    },
  },
};
</script>
<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="(serie, index) in store.series">
      <div>
        <img :src="store.img + store.imgSize + serie.poster_path" alt="" />
      </div>
      <h3>{{ serie.name }}</h3>
      <h3>{{ serie.original_title }}</h3>
      <div>
        <p v-if="languages(index)">
          {{ serie.original_language }}
        </p>
        <img v-else :src="flag(index)" alt="" class="lang" />
      </div>
      <h4>{{ serie.vote_average }}</h4>
    </li>
  </ul>
</template>
<style></style>
