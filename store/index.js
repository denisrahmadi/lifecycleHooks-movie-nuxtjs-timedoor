// import vuex from "vuex";

// const store = () => {
//   return new vuex.Store({
//     state: {
//       movieData: [
//         {
//           name: "Avatar: The Way of Water",
//           link: "https://i.ibb.co/PjB95Lr/movie1.jpg",
//           genre: "Science Fiction",
//           year: 2022,
//           review: "Avatar: The Way of Water",
//           id: 1,
//         },
//         {
//           name: "Insidious 1",
//           link: "https://i.ibb.co/vh30y4P/movie2.jpg",
//           genre: "Horror",
//           year: 2010,
//           review: "Insidious 1",
//           id: 2,
//         },
//         {
//           name: "Jumanji: The Next Level",
//           link: "https://i.ibb.co/SKjMVJK/movie5.jpg",
//           genre: "Adventure",
//           year: 2019,
//           review: "Jumanji: The Next Level",
//           id: 3,
//         },
//         {
//           name: "Avengers: Infinity War",
//           link: "https://i.ibb.co/Tg5rkBj/movie6.jpg",
//           genre: "Action",
//           year: 2018,
//           review: "Avengers: Infinity War",
//           id: 4,
//         },
//       ],
//     },
//     getters: {
//       getMovie(state) {
//         console.log("jalan?");
//         return state.movieData;
//       },
//     },
//     mutations: {
//       addNewRecipe(state, payload) {
//         return state.recipes.push(payload);
//       },
//     },
//     actions: {},
//   });
// };

import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      movieData: [],
    },

    getters: {
      getMovieData(state) {
        return state.movieData;
      },
      detailMovie: (state) => (id) => {
        return state.movieData.find((movie) => movie.id === id)
      }
    },

    mutations: {
      addNewMovie(state, payload) {
        return state.movieData.push(payload);
      },
      setData(state, payload) {
        state.movieData = payload;
      },
    },

    actions: {
      nuxtServerInit({ commit }) {
        return axios
          .get(
            "https://vue-js-project-e25b9-default-rtdb.firebaseio.com/movielist.json"
          )
          .then((response) => {
            const recipeArray = [];
            for (const key in response.data) {
              recipeArray.push({ ...response.data[key] });
            }
            commit("setData", recipeArray);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      addMovie({ commit }, movie) {
        return axios
          .post(
            "https://vue-js-project-e25b9-default-rtdb.firebaseio.com/movielist.json",
            movie
          )
          .then((response) => {
            commit("addNewMovie", movie);
          });
      },
    },
  });
};

export default createStore;
