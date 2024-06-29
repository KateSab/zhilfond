import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    users: [],
    selectedUser: null,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    error: null,
    isLoading: false
  },
  mutations: {
    setUsers(state, { users }) {
      state.users = users;
    },
    setSelectedUser(state, user) {
      state.selectedUser = user;
    },
    setError(state, error) {
      state.error = error;
    },
    clearUsers(state) {
      state.users = [];
      state.selectedUser = null;
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    }
  },
  actions: {
    async fetchUsers({ commit, state }, query) {
      commit('setLoading', true);
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users?${query}`);
        commit('setUsers', {
          users: response.data, // Предполагается, что API возвращает общее количество страниц
        });
        commit('setError', null); // Очистить ошибку при успешном запросе
      } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        commit('setError', errorMessage);
      } finally {
        commit('setLoading', false);
      }
    },
    selectUser({ commit }, user) {
      commit('setSelectedUser', user);
    },
    clearUsers({ commit }) {
      commit('clearUsers');
    },
  }
});

export default store;
