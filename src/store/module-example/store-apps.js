const state = {
  apps: ["Test App1", "Test App2", "Test App3"]
};

const mutations = {};

const actions = {};

const getters = {
  apps: app => {
    return state.apps;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
