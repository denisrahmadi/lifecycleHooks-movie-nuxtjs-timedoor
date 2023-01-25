<template>
  <div class="featured__controls">
    <ul>
      <li @click="changeGenre('')">All</li>
      <li @click="changeGenre('Actions')">Actions</li>
      <li @click="changeGenre('Science Fiction')">Science Fiction</li>
      <li @click="changeGenre('Horror')">Horror</li>
      <li @click="changeGenre('Thriller')">Thriller</li>
      <li @click="changeGenre('Comedy')">Comedy</li>
      <li @click="changeGenre('Romance')">Romance</li>
      <li @click="changeGenre('Adventure')">Adventure</li>
      <li @click="changeGenre('Fantasy')">Fantasy</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["change"],
  methods: {
    changeGenre(text) {
      this.change(text);
    },
  },
};
</script>
<style scoped>
.featured__controls {
  text-align: center;
  margin-bottom: 50px;
}

.featured__controls ul li {
  list-style: none;
  font-size: 18px;
  color: #1c1c1c;
  display: inline-block;
  margin-right: 25px;
  position: relative;
  cursor: pointer;
}

.featured__controls ul li.active:after {
  opacity: 1;
}

.featured__controls ul li:after {
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background: #7fad39;
  content: "";
  opacity: 0;
}

.featured__controls ul li:last-child {
  margin-right: 0;
}
</style>
