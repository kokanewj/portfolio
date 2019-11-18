export default {
  namespaced: true,
  state: {
    works: [],
    workAdd: {
      show: false,
      editMode: false
    },
    readyWork: {},
    readyTags: []
  },
  mutations: {
    SET_WORKS: (state, works) => {
      state.works = works;
    },

    ADD_WORK: (state, work) => {
      state.works.unshift(work);
    },

    REMOVE_WORK: (state, deletedWorkId) => {
      state.works = state.works.filter(work => work.id !== deletedWorkId);
    },

    EDIT_WORK: (state, readyWork) => {
      state.works = state.works.map(work =>
        work.id === readyWork.id ? readyWork : work
      );
    },

    SHOW_FORM: state => {
      state.workAdd.show = true;
    },

    CLOSE_FORM: state => {
      state.workAdd.show = false;
    },

    EDIT_MODE_ON: (state, work) => {
      state.workAdd.editMode = true;
      state.readyWork = { ...work };
      state.readyTags = state.readyWork.techs.split(",");
    },

    EDIT_MODE_OFF: state => {
      state.workAdd.editMode = false;
      state.readyWork = {};
      state.readyTags = [];
    },

    REMOVE_TAG: (state, deletedTag) => {
      state.readyTags = state.readyTags.filter(tag => tag !== deletedTag);
    },

    ADD_TAGS: (state, addingTags) => {
      let tagsForAdd = addingTags.split(",");
      tagsForAdd = tagsForAdd.filter(tag => tag !== "");
      state.readyTags = [...state.readyTags, ...tagsForAdd];
    }
  },
  actions: {
    async addWork({ commit }, work) {
      try {
        const response = await this.$axios.post("/works", work);
        commit("ADD_WORK", response.data);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },

    async fetchWorks({ commit }) {
      let responseUserId, userId;

      try {
        responseUserId = await this.$axios.get("/user");
        userId = responseUserId.data.user.id;
      } catch (error) {
        console.log(error.message);
      }
      
      try {
        const response = await this.$axios.get(`/works/${userId}`);
        commit("SET_WORKS", response.data.reverse());
        return response;
      } catch (error) {
        console.log(error.message);
      }
    },

    async removeWork({ commit }, workId) {
      try {
        const response = await this.$axios.delete(`/works/${workId}`);
        commit("REMOVE_WORK", workId);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },

    async editWork({ commit }, { data, id }) {
      try {
        const response = await this.$axios.post(`/works/${id}`, data);
        commit("EDIT_WORK", response.data.work);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  }
};