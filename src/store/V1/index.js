import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sitelayout: "main-layout",
    basiclinks: [
      {
        title: "home",
        path: "/",
        icon: "home"
      },
      {
        title: "about",
        path: "/about",
        icon: "info"
      }
    ]
  },
  getters: {
    sitelayout(state) {
      return state.sitelayout;
    },
    basiclinks(state) {
      return state.basiclinks;
    }
  },
  mutations: {
    SET_SITE_LAYOUT(state, payload) {
      state.sitelayout = payload;
    }
  },
  actions: {
    setSiteLayout: ({ commit, state }, newLayout) => {
      commit("SET_SITE_LAYOUT", newLayout);
      return state.sitelayout;
    }
  }
});
