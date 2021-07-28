<template>
  <div v-if="todos.length">
    <ul id="todos-list">
      <li v-for="todo in todos" :key="todo.id">
        <Checkbox
          :name="'todo-' + todo.id"
          @checked="markCompleted($event, todo.id)"
        />
        <label :for="'todo-' + todo.id">
          <span :class="{ completed: todo.completed }">{{ todo.value }}</span>
        </label>
        <img
          src="../assets/images/icon-cross.svg"
          @click="deleteTodo(todo.id)"
        />
      </li>
    </ul>

    <!-- <span>Hello</span> -->
  </div>
</template>

<script>
  import Checkbox from "./Checkbox.vue";

  export default {
    name: "TodosList",
    components: {
      Checkbox,
    },
    props: {
      todos: Array,
    },
    methods: {
      deleteTodo(id) {
        this.$emit("deleteTodo", id);
      },
      markCompleted(checked, todoId) {
        this.$emit("markCompleted", checked, todoId);
      },
    },
    emits: ["deleteTodo", "markCompleted"],
  };
</script>

<style scoped>
  div {
    @apply bg-white dark:bg-darkTodo shadow-md dark:text-white border border-transparent rounded;
  }

  #todos-list {
    @apply bg-white dark:bg-darkTodo mb-7 flex flex-col;
  }

  #todos-list li {
    @apply bg-white dark:bg-darkTodo dark:text-white p-4 flex items-center border-b border-borderLight dark:border-borderDark cursor-pointer;
  }

  #todos-list li label {
    @apply flex-grow cursor-pointer;
  }

  #todos-list li img {
    @apply mx-4 hidden;
  }

  #todos-list li:hover > img {
    @apply block;
  }

  #todos-list .completed {
    @apply line-through text-gray-600;
  }
</style>
