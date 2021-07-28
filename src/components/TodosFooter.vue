<template>
  <div id="todos-footer">
    <span
      >{{ activeTodosCount }}
      {{ activeTodosCount === 1 ? "item" : "items" }} left</span
    >
    <TodosFilter v-if="screen === 'desktop'" />
    <span id="clear-completed" @click="clearCompleted">Clear Completed</span>
  </div>
</template>

<script>
  import { mapState, mapGetters } from "vuex";
  import TodosFilter from "./TodosFilter.vue";

  export default {
    name: "TodosFooter",
    components: {
      TodosFilter,
    },
    computed: {
      ...mapState(["filter", "screen"]),
      ...mapGetters(["activeTodosCount"]),
    },
    methods: {
      clearCompleted() {
        this.$store.commit("clearCompleted");
      },
      filterTodos(filter) {
        this.$store.commit("filterTodos", filter);
      },
    },
  };
</script>

<style scoped>
  #todos-footer {
    @apply flex justify-between px-4 pb-4 text-gray-400 dark:text-gray-600 text-sm;
  }

  #clear-completed {
    @apply cursor-pointer;
  }

  #clear-completed:hover {
    @apply text-gray-700 dark:text-white;
  }
</style>
