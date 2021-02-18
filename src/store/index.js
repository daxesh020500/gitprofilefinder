import Vue from 'vue'
import Vuex from 'vuex'
import search from "@/store/modules/search";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    search
  },
  plugins: [createPersistedState()]
})
