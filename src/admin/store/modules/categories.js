export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories;
    },
    ADD_CATEGORY: (state, category) => {
      state.categories.unshift(category);
    },
    REMOVE_CATEGORY: (state, deletedCategoryId) => {
      state.categories = state.categories.filter(category =>
        category.id !== deletedCategoryId
      );
    },
    EDIT_CATEGORY: (state, editedCategory) => {
      state.categories = state.categories.map(category =>
        category.id === editedCategory.id ? editedCategory : category
      );
    }
  },
  actions: {
    async addNewSkillGroup({ commit }, groupTitle) {
      try {
        const response = await this.$axios.post("/categories", {
          title: groupTitle
        });
        commit('ADD_CATEGORY', response.data);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchCategories({ commit }) {
      try {
        const response = await this.$axios.get("/categories");
        commit("SET_CATEGORIES", response.data);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async removeSkillGroup({ commit }, skillCardId) {
      try {
        const response = await this.$axios.delete(`/categories/${skillCardId}`);
        commit("REMOVE_CATEGORY", skillCardId);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async editSkillGroup({ commit }, skillCard) {
      try {
        const response = await this.$axios.post(`/categories/${skillCard.id}`, {
          title: skillCard.category
        });
        commit("EDIT_CATEGORY", skillCard);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  }
};