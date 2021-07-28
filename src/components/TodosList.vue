<template>
  <div v-if="todos.length">
    <div>
      <draggable
        v-model="filteredTodos"
        group="todos"
        @start="drag = true"
        @end="drag = false"
        item-key="id"
        id="todos-list"
        v-if="filteredTodos.length"
      >
        <template #item="{element}">
          <li>
            <Checkbox
              :name="'todo-' + element.id"
              :isChecked="element.completed"
              @checked="markCompleted($event, element.id)"
            />
            <label :for="'todo-' + element.id">
              <span :class="{ completed: element.completed }">{{
                element.value
              }}</span>
            </label>
            <img
              src="../assets/images/icon-cross.svg"
              @click="deleteTodo(element.id)"
            />
          </li>
        </template>
      </draggable>

      <!-- <ul v-if="filteredTodos.length" id="todos-list">
      <li v-for="todo in filteredTodos" :key="todo.id">
        <Checkbox
          :name="'todo-' + todo.id"
          :isChecked="todo.completed"
          @checked="markCompleted($event, todo.id)"
        />
        <label :for="'todo-' + todo.id">
          <span :class="{ completed: todo.completed }">{{ todo.value }}</span>
        </label>
        <img
          src="../assets/images/icon-cross.svg"
          @click="deleteTodo(todo.id)"
        />
      </li>
    </ul> -->

      <span class="p-16 text-center block" v-else>No Todos to show</span>

      <TodosFooter />
    </div>
  </div>
</template>

<script>
  import Checkbox from "./Checkbox.vue";
  import TodosFooter from "./TodosFooter.vue";
  import { mapState } from "vuex";
  import draggable from "vuedraggable";

  export default {
    name: "TodosList",
    components: {
      Checkbox,
      TodosFooter,
      draggable,
    },
    data() {
      return {
        drag: false,
      };
    },
    computed: {
      ...mapState(["todos"]),
      filteredTodos: {
        get() {
          return this.$store.state.filteredTodos;
        },
        set(value) {
          this.$store.commit("updateList", value);
        },
      },
    },
    methods: {
      deleteTodo(id) {
        this.$store.commit("deleteTodo", id);
      },
      markCompleted(checked, todoId) {
        this.$store.commit("markCompleted", { checked, todoId });
      },
    },
    watch: {
      todos: {
        handler(val) {
          if (val.length === 0) {
            this.$store.commit("resetFilter");
          }
        },
        deep: true,
      },
    },
  };
</script>

<style scoped>
  div {
    @apply bg-white dark:bg-darkTodo shadow-md dark:text-white border border-transparent rounded;
  }

  #todos-list {
    @apply bg-white dark:bg-darkTodo mb-5 flex flex-col shadow-none;
  }

  #todos-list li {
    @apply bg-white dark:bg-darkTodo dark:text-white px-4 flex items-center border-b border-borderLight dark:border-borderDark cursor-pointer;
  }

  #todos-list li label {
    @apply flex-grow cursor-pointer py-4;
  }

  #todos-list li img {
    @apply mx-4 hidden;
  }

  #todos-list li:hover > img {
    @apply block;
  }

  #todos-list .completed {
    @apply line-through text-gray-600;
  }
</style>
