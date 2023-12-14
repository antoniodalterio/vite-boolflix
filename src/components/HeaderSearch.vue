<script>
import { store } from '../store';
export default {
  name: 'searchMovies',
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <form class="row g-3" @submit.prevent="$emit('searchEmit')">
    <div class="col-md-6">
      <label for="inputEmail4" class="form-label">Search</label>
      <input
        type="text"
        class="form-control"
        id="Search"
        v-model="store.searchMovies"
      />
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </form>
</template>
<style></style>
