import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{
      id:0,
      isAdmin: false,
      mail: '',
      pseudo:'',

    }
  },
  mutations: {
    initUser(state, data){
      state.user.id = data.id;
      state.user.isAdmin = data.isAdmin;
      state.user.mail = data.mail;
      state.user.pseudo = data.pseudo;
    }
  },
  actions: {
  },
  modules: {
  }
})
