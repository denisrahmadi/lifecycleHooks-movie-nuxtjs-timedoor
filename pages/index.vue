<template>
  <div>
    <section class="featured">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>Movie List</h2>
            </div>
            <MoviesGenre :change="changeGenre"></MoviesGenre>
          </div>
        </div>
        <div class="movieList" v-if="genre !== ''">
          <Movies
            :data="movie"
            v-for="movie in movieData.filter((item) => item.category === genre)"
            :key="movie.id"
          >
          </Movies>
        </div>
        <div class="movieList" v-else>
          <Movies :data="movie" v-for="movie in movieData" :key="movie.id">
          </Movies>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Movies from "../components/movies/MovieList.vue";
import MoviesGenre from "../components/movies/MovieGenre.vue";
export default {
  components: {
    Movies,
    MoviesGenre,
  },
  methods: {
    changeGenre(type) {
      this.genre = type;
    },
  },
  data() {
    return {
      genre: "",
    };
  },
  computed: {
    movieData() {
      return this.$store.getters.getMovieData;
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
  font-family: "Cairo", sans-serif;
}

h2,
h5,
h6 {
  margin: 0;
  color: #111111;
  font-weight: 400;
  font-family: "Cairo", sans-serif;
}

h2 {
  font-size: 36px;
}

h5 {
  font-size: 18px;
}

h6 {
  font-size: 16px;
}

p {
  font-size: 16px;
  font-family: "Cairo", sans-serif;
  color: #6f6f6f;
  font-weight: 400;
  line-height: 26px;
  margin: 0 0 15px 0;
}

img {
  max-width: 100%;
}

input:focus,
select:focus,
button:focus,
textarea:focus {
  outline: none;
}

a:hover,
a:focus {
  text-decoration: none;
  outline: none;
  color: #ffffff;
}

ul,
ol {
  padding: 0;
  margin: 0;
}

.featured {
  padding-top: 30px;
  padding-bottom: 40px;
}
.section-title {
  margin-bottom: 20px;
  text-align: center;
}

.section-title h2 {
  color: #1c1c1c;
  font-weight: 700;
  position: relative;
}

.movieList {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}
</style>
