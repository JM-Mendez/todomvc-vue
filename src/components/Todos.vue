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
    </section>
  </section>
</template>

<script>
export default {
  name: 'Todos',
  data: function() {
    return {
      todoText: '',
      toggleSelectAll: false
    }
  },
  computed: {
    title: function() {
      return `Mark all as ${this.selectAll ? 'active' : 'completed'}`
    }
  }
}
</script>
