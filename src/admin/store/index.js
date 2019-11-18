import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import categories from './modules/categories'
import skills from './modules/skills'
import user from './modules/user'
import works from "./modules/works"
import reviews from "./modules/reviews"

export default new Vuex.Store({
  modules: {
    categories, skills, user, works, reviews
  }
});
