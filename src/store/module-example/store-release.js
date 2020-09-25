const state = {
  reltype: null,
  jprojname: null,
  jrelname: null,
  app: null,
  classification: null,
  relname: null,
  relid: null,
  secad: null,
  accept: false,
  asset: null,
  spackage: null,
  sversion: null,
  apps: ["Test App1", "Test App2", "Test App3"],
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
  tasks
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
