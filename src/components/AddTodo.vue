<template>
  <div>
    <Checkbox :disabled="true" name="newTodo" />
    <input
      type="text"
      v-model="newTodo"
      placeholder="Create a new todo..."
      @keyup.enter="addTodo"
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
      addTodo() {
        this.$emit("addTodo", this.newTodo);
        this.newTodo = "";
      },
    },
    emits: ["addTodo"],
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
