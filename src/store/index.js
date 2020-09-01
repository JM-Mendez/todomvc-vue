import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    showTodos: 'all' // all, active, completed
  },
  mutations: {
    commitTodo(state, { newTodo }) {
      state.todos.push(newTodo)
    },
    setView(state, { value }) {
      state.showTodos = value
    },
    toggleTodoState(state, { todoId }) {
      const idxOfTodo = state.todos.findIndex(todo => todo.id === todoId)

      if (idxOfTodo > -1) {
        const todo = state.todos[idxOfTodo]
        state.todos.splice(idxOfTodo, 1, {
          ...todo,
          completed: !todo.completed
        })
      }
    }
  },
  getters: {
    todos(state) {
      return state.todos
    },
    showTodos(state) {
      return state.showTodos
    },
    filteredTodos(state) {
      if (state.showTodos === 'active') {
        return state.todos.filter(todo => !todo.completed)
      }

      if (state.showTodos === 'completed') {
        return state.todos.filter(todo => todo.completed)
      }

      return state.todos
    }
  },
  actions: {},
  modules: {}
})
