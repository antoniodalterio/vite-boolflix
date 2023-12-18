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
      <input
        type="text"
        class="form-control"
        id="Search"
        v-model="store.searchMovies"
      />
    </div>
    <div class="col">
      <button type="submit" class="btn btn-secondary">Sign in</button>
    </div>
  </form>
</template>
<style>
form {
  display: flex;
}
</style>
