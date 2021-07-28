<template>
  <div>
    <img class="w-full" :src="imageUrl" />
    <div id="todos-container">
      <div id="todos-header">
        <span>Todo</span>
        <div @click="toggleTheme" class="cursor-pointer" title="Toggle theme">
          <img v-if="theme === 'light'" src="./assets/images/icon-moon.svg" />
          <img v-else src="./assets/images/icon-sun.svg" />
        </div>
      </div>

      <AddTodo />
      <TodosList />

      <div id="filter" v-if="screen === 'mobile' && todos.length">
        <TodosFilter />
      </div>

      <span id="drag-text" v-if="todos.length"
        >Drag and drop to reorder list</span
      >
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import AddTodo from "./components/AddTodo.vue";
  import TodosList from "./components/TodosList.vue";
  import TodosFilter from "./components/TodosFilter.vue";

  export default {
    name: "App",
    components: {
      AddTodo,
      TodosList,
      TodosFilter,
    },
    computed: {
      ...mapState(["theme", "screen", "todos"]),
      imageUrl() {
        return require(`./assets/images/bg-${this.screen}-${this.theme}.jpg`);
      },
    },
    created() {
      window.addEventListener("resize", this.changeScreen);
      window.addEventListener("load", this.changeScreen);
    },
    unmounted() {
      window.removeEventListener("resize", this.changeScreen);
      window.removeEventListener("load", this.changeScreen);
    },
    methods: {
      toggleTheme() {
        this.$store.commit("toggleTheme");
      },
      changeScreen(e) {
        this.$store.commit("changeScreen", e);
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
    @apply w-4/5 sm:w-3/5 lg:w-2/5 absolute top-20 inset-x-ten sm:inset-x-1/5 lg:inset-x-thirty;
  }

  #todos-header {
    @apply flex justify-between items-baseline text-white;
  }

  #todos-header span {
    @apply font-bold uppercase tracking-veryWide text-4xl;
  }

  #filter {
    @apply text-center my-5 p-4 bg-white dark:bg-darkTodo shadow-md dark:text-white border border-transparent rounded;
  }

  #drag-text {
    @apply block text-center text-gray-400 dark:text-gray-600 my-8 text-base bg-transparent;
  }
</style>
