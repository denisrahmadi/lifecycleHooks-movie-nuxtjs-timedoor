<template>
  <div>
    <div>
      <section class="blog-details-hero">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="blog__details__hero__text">
                <h2>{{ movie.name }}</h2>
                <ul>
                  <li>{{ movie.category }}</li>
                  <li>Rerelease: {{ movie.year_release }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="blog-details">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-4 blog__details__content">
              <div class="blog__details__text">
                <div class="blog__details__text__img">
                  <img :src="movie.image_url" alt="" />
                </div>
                <p>{{ movie.review }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  asyncData({store, params}) {
        const movie = store.getters.detailMovie(params.movieId)
        return { movie }
    },
};
</script>
<style type="text/css">
body,
html {
  height: 100%;
}
body,
h2,
h5,
h6,
html {
  font-family: Cairo, sans-serif;
}
h2,
h5,
h6 {
  margin: 0;
  color: #111;
  font-weight: 400;
}
h2 {
  font-size: 36px;
}
h5 {
  font-size: 18px;
}
h6,
p {
  font-size: 16px;
}
p {
  font-family: Cairo, sans-serif;
  color: #6f6f6f;
  font-weight: 400;
  line-height: 26px;
  margin: 0 0 15px;
}
img {
  max-width: 100%;
}
button:focus,
input:focus,
select:focus,
textarea:focus {
  outline: none;
}
a:focus,
a:hover {
  text-decoration: none;
  outline: none;
  color: #fff;
}
ol,
ul {
  padding: 0;
  margin: 0;
}
</style>
<style type="text/css">
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
</style>
<style type="text/css">
.header__logo[data-v-394207fb] {
  padding: 15px 0;
}
.header__logo img[data-v-394207fb] {
  width: 200px;
  padding-top: 10px;
}
.header__logo a[data-v-394207fb] {
  display: inline-block;
}
.header__menu[data-v-394207fb] {
  padding: 24px 0;
}
.header__menu ul li[data-v-394207fb] {
  list-style: none;
  margin-right: 50px;
  position: relative;
  text-align: right;
}
.header__menu ul li:hover > a[data-v-394207fb] {
  color: #7fad39;
}
.header__menu ul li[data-v-394207fb]:last-child {
  margin-right: 0;
}
.header__menu ul li a[data-v-394207fb] {
  font-size: 14px;
  color: #252525;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  transition: all, 0.3s;
  padding: 5px 0;
  display: block;
}
</style>
<style type="text/css">
.featured__controls[data-v-634bc046] {
  text-align: center;
  margin-bottom: 50px;
}
.featured__controls ul li[data-v-634bc046] {
  list-style: none;
  font-size: 18px;
  color: #1c1c1c;
  display: inline-block;
  margin-right: 25px;
  position: relative;
  cursor: pointer;
}
.featured__controls ul li.active[data-v-634bc046]:after {
  opacity: 1;
}
.featured__controls ul li[data-v-634bc046]:after {
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background: #7fad39;
  content: "";
  opacity: 0;
}
.featured__controls ul li[data-v-634bc046]:last-child {
  margin-right: 0;
}
</style>
<style type="text/css">
.featured__item {
  margin-bottom: 50px;
}
.featured__item__pic {
  height: 330px;
  width: 270px;
  position: relative;
  overflow: hidden;
  background-position: 50%;
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
<style type="text/css">
.blog-details-hero {
  height: 350px;
  display: flex;
  align-items: center;
}
.blog__details__hero__text {
  text-align: center;
}
.blog__details__hero__text h2 {
  font-size: 46px;
  font-weight: 700;
  margin-bottom: 10px;
}
.blog__details__hero__text ul li {
  font-size: 16px;
  list-style: none;
  display: inline-block;
  margin-right: 45px;
  position: relative;
}
.blog__details__hero__text ul li:after {
  position: absolute;
  right: -26px;
  top: 0;
  content: "|";
}
.blog__details__hero__text ul li:last-child {
  margin-right: 0;
}
.blog__details__hero__text ul li:last-child:after {
  display: none;
}
.blog-details {
  padding-bottom: 75px;
  border-bottom: 1px solid #e1e1e1;
}
.blog__details__text {
  margin-bottom: 45px;
}
.blog__details__content {
  margin: 0 auto;
}
.blog__details__text__img {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.blog__details__text__img img {
  width: 400px;
  height: 430px;
}
.blog__details__text p {
  font-size: 18px;
  line-height: 30px;
}
.blog__details__text h3 {
  color: #333;
  font-weight: 700;
  line-height: 30px;
  margin-bottom: 30px;
}
</style>
