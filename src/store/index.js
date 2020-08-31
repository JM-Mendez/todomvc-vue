import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    commitTodo(state, { newTodo }) {
      state.todos.push(newTodo)
    }
  },
  getters: {
    todos(state) {
      return state.todos
    }
  },
  actions: {},
  modules: {}
})
