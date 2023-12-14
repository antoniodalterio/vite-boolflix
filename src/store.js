import { reactive } from 'vue';

export const store = reactive({
  searchText: '',
  loading: true,
  movies: [],
  searchMovies: '',
  apiUrl:
    'https://api.themoviedb.org/3/search/movie?api_key=0a17dbe8a098c775a7865363abca9b06&query=',
});
