<script>
import HeaderSearch from './HeaderSearch.vue';
import HeaderLogo from './HeaderLogo.vue';
export default {
  name: 'HeaderApp',
  components: {
    HeaderLogo,
    HeaderSearch,
  },
};
</script>
<template>
  <header>
    <HeaderLogo></HeaderLogo>
    <HeaderSearch @searchEmit="$emit('searchMovie')"></HeaderSearch>
  </header>
</template>
<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
}
</style>
