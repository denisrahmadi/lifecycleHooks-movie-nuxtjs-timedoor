<template>
  <form>
    <div class="row">
      <div class="col-lg-4 col-md-4">
        <input type="text" placeholder="Movie Name">
      </div>
      <div class="col-lg-4 col-md-4">
        <input type="text" placeholder="Image Link">
      </div>
      <div class="col-lg-4 col-md-4">
        <input type="number" placeholder="Release Year">
      </div>
      <div class="genre__input__checkbox">
        <label>
          <input
            type="radio"
            name="genre"
            value="Actions"
          />
          Actions
        </label>
      </div>
      <div class="col-lg-12 text-center">
        <textarea
          placeholder="Your Review"
          v-model="movieData.review"
        ></textarea>
        <button type="submit" class="site-btn" v-on:click.prevent="newData">
          Add Review
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      movieData: {
        name: "",
        year: null,
        genre: "",
        review: "",
        imageLink: ""
      },
      genres: ["Actions", "Science Fiction", "Horror", "Thriller", "Comedy", "Romance", "Adventure", "Fantasy"]
    };
  }
};
</script>


<style>
input[type="text"], input[type="number"] {
  width: 100%;
  height: 50px;
}

.genre__input input.genre__input__add {
  margin-bottom: 20px;
}

.genre__input input::placeholder {
  color: #b2b2b2;
}

.genre__input__checkbox {
  margin-bottom: 10px;
}

.genre__input__checkbox label {
  position: relative;
  font-size: 16px;
  color: #1c1c1c;
  padding-left: 30px;
  cursor: pointer;
}

.genre__input__checkbox label input {
  width: 20px;
  height: 20px;
}
</style>