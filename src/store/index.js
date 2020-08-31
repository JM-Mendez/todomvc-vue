import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    commitTodo(state, todo) {
      console.log({ todo })
      state.todos.push(todo)
    }
  },
  actions: {},
  modules: {}
})
