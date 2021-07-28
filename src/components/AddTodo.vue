<template>
  <form @submit.prevent>
    <Checkbox :disabled="true" />
    <input
      type="text"
      v-model="newTodo"
      placeholder="Create a new todo..."
      @keyup.enter="addTodo"
    />
  </form>
</template>

<script>
  import Checkbox from "./Checkbox.vue";

  export default {
    name: "AddTodo",
    components: {
      Checkbox,
    },
    data() {
      return {
        newTodo: "",
      };
    },
    methods: {
      addTodo() {
        this.newTodo = "";
      },
    },
  };
</script>

<style scoped>
  form {
    @apply bg-white dark:bg-darkTodo rounded py-3 px-4 mt-8 mb-7 flex;
  }

  form input {
    @apply flex-grow outline-none dark:bg-darkTodo dark:text-white;
  }
</style>
