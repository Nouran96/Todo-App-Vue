<template>
  <div>
    <img class="w-full" :src="imageUrl" />
    <!-- <img
      class="w-full"
      v-if="theme === 'light'"
      src="./assets/images/bg-desktop-light.jpg"
    />
    <img class="w-full" v-else src="./assets/images/bg-desktop-dark.jpg" /> -->
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
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
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
        screen: "desktop",
      };
    },
    computed: {
      ...mapState(["theme"]),
      imageUrl() {
        return require(`./assets/images/bg-${this.screen}-${this.theme}.jpg`);
      },
    },
    created() {
      window.addEventListener("resize", this.changeImage);
      window.addEventListener("load", this.changeImage);
    },
    unmounted() {
      window.removeEventListener("resize", this.changeImage);
      window.removeEventListener("load", this.changeImage);
    },
    methods: {
      toggleTheme() {
        this.$store.commit("toggleTheme");
      },
      changeImage(e) {
        if (e.currentTarget.innerWidth > 650) {
          this.screen = "desktop";
        } else {
          this.screen = "mobile";
        }
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
</style>
