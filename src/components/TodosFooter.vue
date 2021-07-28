<template>
  <div id="todos-footer">
    <span
      >{{ activeTodosCount }}
      {{ activeTodosCount === 1 ? "item" : "items" }} left</span
    >
    <div id="filter-container">
      <span :class="{ active: filter === 'all' }" @click="filterTodos('all')"
        >All</span
      >
      <span
        :class="{ active: filter === 'active' }"
        @click="filterTodos('active')"
        >Active</span
      >
      <span
        :class="{ active: filter === 'completed' }"
        @click="filterTodos('completed')"
        >Completed</span
      >
    </div>
    <span id="clear-completed" @click="clearCompleted">Clear Completed</span>
  </div>
</template>

<script>
  import { mapState, mapGetters } from "vuex";

  export default {
    name: "TodosFooter",
    computed: {
      ...mapState(["filter"]),
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

  #filter-container span {
    @apply cursor-pointer font-bold;
  }

  #filter-container span:hover,
  #clear-completed:hover {
    @apply text-gray-700 dark:text-white;
  }

  #filter-container span:nth-child(even) {
    @apply mx-4;
  }

  #filter-container .active,
  #filter-container .active:hover {
    @apply text-blue-500 cursor-auto;
  }
</style>
