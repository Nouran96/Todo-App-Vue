<template>
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
</template>

<script>
  import { mapState } from "vuex";

  export default {
    name: "TodosFilter",
    computed: {
      ...mapState(["filter"]),
    },
    methods: {
      filterTodos(filter) {
        this.$store.commit("filterTodos", filter);
      },
    },
  };
</script>

<style scoped>
  #filter-container {
    @apply text-gray-400 dark:text-gray-600 text-sm;
  }

  #filter-container span {
    @apply cursor-pointer font-bold;
  }

  #filter-container span:hover {
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
