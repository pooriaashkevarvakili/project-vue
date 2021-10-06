import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
     posts:[],
  },
  mutations: {
    stateData(state,posts) {
      state.posts =posts;
    }
    
  },
  actions: {
    
    getPosts({ commit }) {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                commit('stateData', response.data)
        })
    }
    
  },

  modules: {
  }
})
