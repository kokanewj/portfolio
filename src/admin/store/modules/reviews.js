export default {
  namespaced: true,
  state: {
    reviews: [],
    reviewAdd: {
      show: false,
      editMode: false
    },
    readyReview: {}
  },
  mutations: {
    SET_REVIEWS: (state, reviews) => {
      state.reviews = reviews;
    },

    ADD_REVIEW: (state, review) => {
      state.reviews.unshift(review);
    },

    REMOVE_REVIEW: (state, deletedReviewId) => {
      state.reviews = state.reviews.filter(review =>
        review.id !== deletedReviewId
      );
    },

    EDIT_REVIEW: (state, readyReview) => {
      state.reviews = state.reviews.map(review =>
        review.id === readyReview.id ? readyReview : review
      );
    },

    SHOW_FORM: (state) => {
      state.reviewAdd.show = true;
    },

    CLOSE_FORM: (state) => {
      state.reviewAdd.show = false;
    },

    EDIT_MODE_ON: (state) => {
      state.reviewAdd.editMode = true;
    },

    EDIT_MODE_OFF: (state) => {
      state.reviewAdd.editMode = false;
    },

    SET_READY_REVIEW: (state, review) => {
      state.readyReview = {...review};
    }
  },
  actions: {
    async addReview({ commit }, review) {
      try {
        const response = await this.$axios.post("/reviews", review)
        commit('ADD_REVIEW', response.data);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },

    async fetchReviews({ commit }) {
      let responseUserId, userId;
      try {
        responseUserId = await this.$axios.get("/user");
        userId = responseUserId.data.user.id;
      } catch(error) {
        console.log(error.message);
      }
      try {
        const response = await this.$axios.get(`/reviews/${userId}`);
        commit("SET_REVIEWS", response.data.reverse());
        return response;
      } catch (error) {
        console.log(error.message);
      }
    },

    async removeReview({ commit }, reviewId) {
      try {
        const response = await this.$axios.delete(`/reviews/${reviewId}`);
        commit("REMOVE_REVIEW", reviewId);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },

    async editReview({ commit }, reviewData) {
      try {
        const response = await this.$axios.post(`/reviews/${reviewData.id}`, reviewData.data);
        commit("EDIT_REVIEW", response.data.review);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  }
};