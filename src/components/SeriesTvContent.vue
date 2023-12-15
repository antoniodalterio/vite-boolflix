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

    posterImg(img) {
      if (img) {
        const path = store.img + store.imgSize;
        const result = path + img;
        return result;
      } else if (!img) {
        return 'src/assets/img/img-not-found.jpg';
      }
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
    <li class="list-group-item" v-for="(serie, index) in store.series">
      <div>
        <img
          :src="posterImg(serie.poster_path)"
          alt=""
          :class="!serie.poster_path ? 'not-found' : ''"
        />
      </div>
      <h3>{{ serie.name }}</h3>
      <h3>{{ serie.original_name }}</h3>
      <div>
        <p v-if="languages(index)">
          {{ serie.original_language }}
        </p>
        <img v-else :src="flag(index)" alt="" class="lang" />
      </div>
      <h4>{{ numbCeil(serie.vote_average) }}</h4>
    </li>
  </ul>
</template>
<style></style>
