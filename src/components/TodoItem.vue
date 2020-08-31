<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isChecked: false
    }
  }
}
</script>

<template>
  <li key="todo.id" :class="{ completed: isChecked }">
    <div class="view">
      <input v-model="isChecked" class="toggle" type="checkbox" />
      <label>
        {{ todo.title }}
      </label>
      <button class="destroy" />
    </div>
  </li>
</template>
