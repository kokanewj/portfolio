import { generateStdError } from "../../helpers/errorHandler";

export default {
  namespaced: true,
  state: {
    skills: []
  },
  mutations: {
    SET_SKILLS: (state, skills) => {
      state.skills = skills;
    },
    ADD_SKILL: (state, newSkill) => {
      state.skills.push(newSkill);
    },
    REMOVE_SKILL: (state, deletedSkillId) => {
      state.skills = state.skills.filter(skill => skill.id !== deletedSkillId);
    },
    EDIT_SKILL: (state, editedSkill) => {
      state.skills = state.skills.map(skill =>
        skill.id === editedSkill.id ? editedSkill : skill
      );
    }
  },
  actions: {
    async addSkill({ commit }, skill) {
      try {
        const response = await this.$axios.post("/skills", skill);
        commit("ADD_SKILL", response.data);
        return response;
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },

    async fetchSkills({ commit }) {
      let getUserId, userId;

      try {
        getUserId = await this.$axios.get("/user");
        userId = getUserId.data.user.id;
      } catch (error) {
        throw new Error(error.response.data.message);
      }

      try {
        const response = await this.$axios.get(`/skills/${userId}`);

        commit("SET_SKILLS", response.data);
        return response;
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },

    async removeSkill({ commit }, skillId) {
      try {
        const response = await this.$axios.delete(`/skills/${skillId}`);
        commit("REMOVE_SKILL", skillId);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },

    async editSkill({ commit }, skill) {
      try {
        const response = await this.$axios.post(`/skills/${skill.id}`, skill);
        commit("EDIT_SKILL", response.data.skill);
        return response;
      } catch ({
        response: {
          data: { message }
        }
      }) {
        throw new Error(message);
      }
    }
  }
};