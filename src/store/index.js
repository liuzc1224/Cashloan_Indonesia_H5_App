import Vue from 'vue'
import Vuex from 'vuex'

// import user from './module/user'
// import app from './module/app'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    //
    centerDialogVisible:null
  },
  mutations: {
    //
    setType(state,data){
      state.centerDialogVisible = data;
    }
  },
  actions: {
    //
  },
  modules: {
    // user,
    // app
  }
})
export default store