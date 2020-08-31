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
        <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
      </ul>
    </section>
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
    title: function() {
      return `Mark all as ${this.selectAll ? 'active' : 'completed'}`
    },
    ...mapGetters(['todos'])
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
    }
  }
}
</script>
