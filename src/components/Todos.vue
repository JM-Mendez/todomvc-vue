<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input
        v-model="todoText"
        class="new-todo"
        placeholder="What needs to be done?"
        autofocus
        autocomplete="false"
        @keyup.enter="commitTodo"
      />
    </header>
    <section class="main">
      <input
        id="toggle-all"
        v-model="toggleSelectAll"
        class="toggle-all"
        type="checkbox"
      />
      <label html-for="toggle-all" :title="title">{{ title }}</label>
      <ul class="todo-list">
        <TodoItem
          v-for="todo in filteredTodos"
          :key="todo.id"
          :title="todo.title"
          :completed="todo.completed"
          @toggle-todo-state="toggleState(todo.id)"
          @destroy-todo="destroyTodo(todo.id)"
        />
      </ul>
    </section>
    <footer v-if="!!todos.length" class="footer">
      <span class="todo-count">
        <strong>{{ numberOfActiveTodos }}</strong>
        item{{ numberOfActiveTodos === 1 ? '' : 's' }} left
      </span>
      <ul class="filters">
        <li>
          <a
            :class="{ selected: showTodos === 'all' }"
            href="#/"
            @click="setView('all')"
            >All</a
          >
        </li>
        <li>
          <a
            :class="{ selected: showTodos === 'active' }"
            href="#/"
            @click="setView('active')"
            >Active</a
          >
        </li>
        <li>
          <a
            :class="{ selected: showTodos === 'completed' }"
            href="#/"
            @click="setView('completed')"
            >Completed</a
          >
        </li>
      </ul>
      <button
        v-if="numberOfActiveTodos < todos.length"
        class="clear-completed"
        @click="removeCompleted"
        >Clear Completed</button
      >
    </footer>
  </section>
</template>

<script>
import { nanoid } from 'nanoid'
import { mapGetters } from 'vuex'
import TodoItem from './TodoItem'

export default {
  name: 'Todos',
  components: {
    TodoItem
  },
  data: function() {
    return {
      todoText: '',
      toggleSelectAll: false
    }
  },
  computed: {
    title() {
      return `Mark all as ${this.selectAll ? 'active' : 'completed'}`
    },
    numberOfActiveTodos() {
      return this.todos.filter(todo => !todo.completed).length
    },
    ...mapGetters(['todos', 'filteredTodos', 'showTodos'])
  },
  methods: {
    commitTodo(event) {
      const newTodo = {
        id: nanoid(),
        title: event.target.value,
        completed: false
      }

      this.todoText = ''
      this.$store.commit({ type: 'commitTodo', newTodo })
    },
    setView(value) {
      this.$store.commit({ type: 'setView', value })
    },
    toggleState(todoId) {
      this.$store.commit({ type: 'toggleTodoState', todoId })
    },
    removeCompleted() {
      this.$store.commit('removeCompleted')
    },
    destroyTodo(todoId) {
      this.$store.commit({ type: 'destroyTodo', todoId })
    }
  }
}
</script>
