import { generateStdError } from "@/helpers/errorHandler";
import { removeToken } from "@/helpers/token";
export default {
    namespaced: true,
    state: {
        user: {}
    },
    mutations: {
        SET_USER: (state, user) => {
            state.user = user
        },
        CLEAR_USER: state => (state.user = {})
    },
    getters: {
      userIsLogged: state => {
        const userData = state.user;
        const userDataIsEmpty = Object.keys(userData).length === 0 && userData.constructor === Object;

        return userDataIsEmpty === false;

      },
      userId: state => {
        return state.user.id
      }
    },
    actions: {
        async loginUser({ commit }, user) {
          try {
            const response = await this.$axios.post("/login", user);
            return response;
          } catch (error) {
              generateStdError(error);
          }
        },
        logout({ commit }) {
          commit("CLEAR_USER");
          removeToken();
          location.href = "/admin"
        }
      }
};