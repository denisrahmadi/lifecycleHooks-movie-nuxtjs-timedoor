<template>
  <div class="col-lg-3 col-md-4 col-sm-6">
    <div class="featured__item">
      <img 
        class="featured__item__pic" 
        :src="movieData.image_url" 
      />
      <div class="featured__item__text">
        <nuxt-link
          tag="h5"
          :to="{ name: 'movie-movieId', params: { movieId: movieData.id } }"
          >{{ movieData.name }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data"],
  data() {
    return {
      movieData: this.data,
    };
  },
};
</script>
<style>
.featured__item {
  margin-bottom: 50px;
  width: 300px;
}

.featured__item__pic {
  height: 330px;
  width: 270px;
  position: relative;
  overflow: hidden;
  background-position: center center;
}

.featured__item__text {
  text-align: center;
  padding-top: 15px;
}

.featured__item__text h6 {
  margin-bottom: 10px;
}

.featured__item__text h6 a {
  color: #252525;
}

.featured__item__text h5 {
  color: #252525;
  font-weight: 700;
}
</style>
