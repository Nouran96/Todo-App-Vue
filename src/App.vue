<template>
  <div>
    <img v-if="theme === 'light'" src="./assets/images/bg-desktop-light.jpg" />
    <img v-else src="./assets/images/bg-desktop-dark.jpg" />
    <div id="todos-container">
      <div id="todos-header">
        <span>Todo</span>
        <div @click="toggleTheme" class="cursor-pointer">
          <img v-if="theme === 'light'" src="./assets/images/icon-moon.svg" />
          <img v-else src="./assets/images/icon-sun.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "App",
    components: {},
    data() {
      return {
        theme: "light",
      };
    },
    methods: {
      toggleTheme() {
        this.theme = this.theme === "light" ? "dark" : "light";
        document.documentElement.classList.toggle("dark");
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
    @apply w-2/4 absolute top-16 inset-x-1/4;
  }

  #todos-header {
    @apply flex justify-between items-baseline text-white;
  }

  #todos-header span {
    @apply font-bold uppercase tracking-veryWide text-4xl;
  }
</style>
