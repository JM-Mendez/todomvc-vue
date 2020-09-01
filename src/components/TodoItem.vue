<script>
export default {
  name: 'TodoItem',
  props: {
    title: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<template>
  <li :class="{ completed }">
    <div class="view">
      <input
        :checked="completed"
        class="toggle"
        type="checkbox"
        @click="$emit('toggle-todo-state')"
      />
      <label>
        {{ title }}
      </label>
      <button class="destroy" />
    </div>
  </li>
</template>
