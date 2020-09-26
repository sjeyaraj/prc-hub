const state = {
  apps: {
    app1: "Test App1",
    app2: "Test App2",
    app3: "Test App3"
  },
  //   apps: ["Test App1", "Test App2", "Test App3"],
  types: [
    "Application - Code Change",
    "Infrastructure",
    "Security",
    "Database",
    "Network"
  ],
  jprojects: ["Cloud Migration", "Data Engineering", "App Services"],
  jrelnames: ["Cl_Mig_V1.0", "Cl_Mig_V2.0"],
  classifications: ["Class1", "Class2", "Class3", "Class4", "Class5"],
  secads: ["Sec Adv1", "Sec Adv2", "Sec Adv3", "Sec Adv4"]
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
