<script>
import { store } from '../store';
export default {
  name: 'Movies',
  data() {
    return {
      store,
      maxVote: 5,
    };
  },
  methods: {
    flag(index) {
      if (store.movies[index].original_language === 'en') {
        return 'src/assets/img/Flag_of_the_USA.svg.png';
      } else if (store.movies[index].original_language === 'it') {
        return 'src/assets/img/Flag_of_italy.svg.png';
      }
    },

    languages(index) {
      return (
        store.movies[index].original_language !== 'it' &&
        store.movies[index].original_language !== 'en'
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
      v-for="(movie, index) in store.movies"
    >
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            class="img-size"
            :src="posterImg(movie.poster_path)"
            alt=""
            :class="!movie.poster_path ? 'not-found' : ''"
          />
        </div>

        <div class="flip-card-back d-flex flex-column">
          <div>
            Title:
            <span>{{ movie.title }}</span>
          </div>

          <div>
            <p v-if="languages(index)">
              Language: {{ movie.original_language }}
            </p>
            <div v-else>
              Language:
              <img :src="flag(index)" alt="" class="lang" />
            </div>
          </div>
          <h4 class="my-3">
            <font-awesome-icon
              v-for="n in numbCeil(movie.vote_average)"
              icon="fa-solid fa-star"
              class="star"
            />
            <font-awesome-icon
              v-for="n in voteStar(
                this.maxVote,
                this.numbCeil(movie.vote_average)
              )"
              icon="fa-regular fa-star"
              class="star"
            />
          </h4>
          <div class="overflow-y-scroll">{{ movie.overview }}</div>
        </div>
      </div>
    </li>
  </ul>
</template>
<style></style>

<!-- <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>  -->
