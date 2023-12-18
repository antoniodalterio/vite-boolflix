<script>
import { store } from '../store';
export default {
  name: 'Series',
  data() {
    return {
      store,
      maxVote: 5,
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

    voteStar(num, num2) {
      const result = num - num2;
      console.log(result);
      console.log('---------------');
      return result;
    },
  },
};
</script>
<template>
  <ul class="d-flex flex-wrap justify-content-center p-3">
    <li
      class="list-group-item flip-card"
      v-for="(serie, index) in store.series"
    >
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            class="img-size"
            :src="posterImg(serie.poster_path)"
            alt=""
            :class="!serie.poster_path ? 'not-found' : ''"
          />
        </div>
        <div class="flip-card-back">
          <h3>{{ serie.name }}</h3>
          <h3>{{ serie.original_name }}</h3>

          <div>
            <p v-if="languages(index)">
              {{ serie.original_language }}
            </p>
            <img v-else :src="flag(index)" alt="" class="lang" />
          </div>
          <h4>
            <h4 class="my-3">
              <font-awesome-icon
                v-for="n in numbCeil(serie.vote_average)"
                icon="fa-solid fa-star"
                class="star"
              />
              <font-awesome-icon
                v-for="n in voteStar(
                  this.maxVote,
                  this.numbCeil(serie.vote_average)
                )"
                icon="fa-regular fa-star"
                class="star"
              />
            </h4>
          </h4>
        </div>
      </div>
    </li>
  </ul>
</template>
<style></style>
