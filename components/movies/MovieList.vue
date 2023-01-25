<template>
  <div class="row featured__filter">
    <!-- Component Item Here -->
    <app-movie-item :data="data"></app-movie-item>
  </div>
</template>
<script>
import MovieItem from "./MovieItem.vue";

export default {
  props: ["data"],
  components: {
    "app-movie-item": MovieItem,
  },
};
</script>
<style scoped>
.featured__filter {
  min-width: 300px;
}
</style>
