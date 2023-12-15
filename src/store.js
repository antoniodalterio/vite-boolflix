import { reactive } from 'vue';

export const store = reactive({
  searchText: '',
  loading: true,
  movies: [],
  series: [],
  searchMovies: '',
  apiUrlMovie:
    'https://api.themoviedb.org/3/search/movie?api_key=0a17dbe8a098c775a7865363abca9b06&query=',

  apiUrlSeries:
    'https://api.themoviedb.org/3/search/tv?api_key=0a17dbe8a098c775a7865363abca9b06&query=',

  img: 'https://image.tmdb.org/t/p/',
  imgSize: 'w342',
});
