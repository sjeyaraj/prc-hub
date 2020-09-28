const state = {
  tasks: {
    ID1: {
      name: "Cl_Mig_V2.0",
      app: "Test App1",
      type: "Application - Code Change",
      desc: "New cloud services",
      contacts: "Vinay Kumar, Arun Prakash",
      date: "10/11/2020",
      time: "8:30 pm",
      approvers: [{ name: "Mark" }, { name: "Steve" }]
    },
    ID2: {
      name: "Inf_pwc_V1.0",
      app: "Test App4",
      type: "Infrastructure",
      desc: "Routine Task",
      contacts: "Arun Prakash",
      date: "10/16/2020",
      time: "12:30 am",
      approvers: [{ name: "Mark" }, { name: "Steve" }]
    },
    ID3: {
      name: "Cl_Win_V2.0",
      app: "Test App1",
      type: "Application - Code Change",
      desc: "Windows services",
      contacts: "Vinay Kumar, Arun Prakash",
      date: "10/18/2020",
      time: "9:30 pm",
      approvers: [{ name: "Steve" }]
    },
    ID4: {
      name: "Inf_pwc_V2.0",
      app: "All Window VMs",
      type: "Infrastructure",
      desc: "Routine Task",
      contacts: "Mark",
      date: "10/18/2020",
      time: "5:30 am",
      approvers: [{ name: "Vinoth" }]
    },
    ID5: {
      name: "Cl_Mig_V3.0",
      app: "Test App1",
      type: "Application - Code Change",
      desc: "New cloud services",
      contacts: "Vinay Kumar, Arun Prakash",
      date: "11/01/2020",
      time: "8:30 pm",
      approvers: [{ name: "Vijay" }]
    },
    ID6: {
      name: "Inf_pwc_V4.0",
      app: "All Cloud nodes",
      type: "Infrastructure",
      desc: "Routine Task",
      contacts: "Arun Prakash",
      date: "11/02/2020",
      time: "8:30 pm",
      approvers: [{ name: "Mark" }]
    },
    ID7: {
      name: "Cl_Win_V4.0",
      app: "Test App4",
      type: "Application - Code Change",
      desc: "New cloud services",
      contacts: "Vinay Kumar, Arun Prakash",
      date: "11/02/2020",
      time: "8:30 pm",
      approvers: [{ name: "William" }]
    },
    ID8: {
      name: "Inf_pwc_V6.0",
      app: "All LLC nodes",
      type: "Infrastructure",
      desc: "Routine Task",
      contacts: "Arun Prakash",
      date: "11/03/2020",
      time: "8:30 pm",
      approvers: [{ name: "Andrew" }]
    },
    ID9: {
      name: "Cl_Mig_V6.0",
      app: "Test App3",
      type: "Application - Code Change",
      desc: "New cloud services",
      contacts: "Vinay Kumar, Arun Prakash",
      date: "11/05/2020",
      time: "8:30 pm",
      approvers: [{ name: "Amy" }]
    },
    ID10: {
      name: "Inf_pwc_V3.0",
      app: "All VM nodes",
      type: "Infrastructure",
      desc: "Routine Task",
      contacts: "Arun Prakash",
      date: "11/02/2020",
      time: "8:30 pm",
      approvers: [{ name: "Pragathi" }]
    }
  },
  search: ""
};

const mutations = {
  setSearch(state, value) {
    state.search = value;
  }
};

const actions = {
  setSearch({ commit }, value) {
    commit("setSearch", value);
  }
};

const getters = {
  tasksFiltered: state => {
    let tasksFiltered = {};
    if (state.search) {
      let searchLowerCase = state.search.toLowerCase();
      Object.keys(state.tasks).forEach(key => {
        let task = state.tasks[key];
        if (
          task.app.toLowerCase().includes(searchLowerCase) ||
          task.name.toLowerCase().includes(searchLowerCase) ||
          task.contacts.toLowerCase().includes(searchLowerCase)
        )
          tasksFiltered[key] = task;
      });
      return tasksFiltered;
    }
    return state.tasks;
  },
  tasks: (state, getters) => {
    let tasks = getters.tasksFiltered;
    return tasks;
  },
  approvals: state => {
    let taskNeedApprovals = {};
    Object.keys(state.tasks).forEach(key => {
      let task = state.tasks[key];
      task.approvers.forEach(approver => {
        if (approver.name === "Mark") taskNeedApprovals[key] = task;
      });
    });
    return taskNeedApprovals;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
