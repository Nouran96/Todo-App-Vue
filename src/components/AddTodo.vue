<template>
  <div>
    <Checkbox :disabled="true" name="newTodo" />
    <input
      type="text"
      v-model="newTodo"
      placeholder="Create a new todo..."
      @keyup.enter="addNewTodo"
    />
  </div>
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
      addNewTodo() {
        this.$store.commit("addNewTodo", this.newTodo);
        this.newTodo = "";
      },
    },
  };
</script>

<style scoped>
  div {
    @apply bg-white dark:bg-darkTodo rounded py-3 px-4 mt-8 mb-7 flex;
  }

  div input {
    @apply flex-grow outline-none dark:bg-darkTodo dark:text-white;
  }
</style>
