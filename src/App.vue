<template>
  <div>
    <img
      class="w-full"
      v-if="theme === 'light'"
      src="./assets/images/bg-desktop-light.jpg"
    />
    <img class="w-full" v-else src="./assets/images/bg-desktop-dark.jpg" />
    <div id="todos-container">
      <div id="todos-header">
        <span>Todo</span>
        <div @click="toggleTheme" class="cursor-pointer" title="Toggle theme">
          <img v-if="theme === 'light'" src="./assets/images/icon-moon.svg" />
          <img v-else src="./assets/images/icon-sun.svg" />
        </div>
      </div>

      <AddTodo @addTodo="addNewTodo" />
      <TodosList
        :todos="todos"
        @deleteTodo="deleteTodo"
        @markCompleted="markCompleted"
      />
    </div>
  </div>
</template>

<script>
  import AddTodo from "./components/AddTodo.vue";
  import TodosList from "./components/TodosList.vue";

  export default {
    name: "App",
    components: {
      AddTodo,
      TodosList,
    },
    data() {
      return {
        theme: "light",
        todos: [],
      };
    },
    methods: {
      toggleTheme() {
        this.theme = this.theme === "light" ? "dark" : "light";
        document.documentElement.classList.toggle("dark");
      },
      addNewTodo(todo) {
        this.todos.push({ id: this.todos.length, value: todo });
      },
      deleteTodo(id) {
        const todoToDeletedIndex = this.todos.findIndex(
          (todo) => todo.id === id
        );

        if (todoToDeletedIndex > -1) {
          this.todos.splice(todoToDeletedIndex, 1);
        }
      },
      markCompleted(checked, todoId) {
        const todoIndex = this.todos.findIndex((todo) => todo.id === todoId);

        this.todos[todoIndex].completed = checked;
      },
    },
  };
</script>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap");

  body {
    font-size: 18px;
    font-family: "Josefin Sans", sans-serif;
    @apply h-screen relative bg-light dark:bg-dark;
  }

  #todos-container {
    @apply w-2/5 absolute top-16 inset-x-1/4;
  }

  #todos-header {
    @apply flex justify-between items-baseline text-white;
  }

  #todos-header span {
    @apply font-bold uppercase tracking-veryWide text-4xl;
  }
</style>
