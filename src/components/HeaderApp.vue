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
    <HeaderSearch></HeaderSearch>
  </header>
</template>
<style></style>
