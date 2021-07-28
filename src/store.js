import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      todos: [],
      filteredTodos: [],
      filter: "all",
      theme: "light",
      screen: "desktop",
    };
  },
  getters: {
    activeTodosCount(state) {
      const activeTodos = state.filteredTodos.filter((todo) => !todo.completed);

      return activeTodos.length;
    },
  },
  mutations: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark");
    },
    updateList(state, newList) {
      state.filteredTodos = newList;
    },
    addNewTodo(state, todo) {
      state.todos.push({
        id: state.todos.length,
        value: todo,
        completed: false,
      });

      this.commit("filterTodos", state.filter);
    },
    deleteTodo(state, id) {
      const todoToDeletedIndex = state.todos.findIndex(
        (todo) => todo.id === id
      );

      if (todoToDeletedIndex > -1) {
        state.todos.splice(todoToDeletedIndex, 1);
        this.commit("filterTodos", state.filter);
      }
    },
    markCompleted(state, { checked, todoId }) {
      const todoIndex = state.todos.findIndex((todo) => todo.id === todoId);
      if (todoIndex > -1) {
        state.todos[todoIndex].completed = checked;
      }
    },
    clearCompleted(state) {
      const activeTodos = state.todos.filter((todo) => !todo.completed);
      state.todos = activeTodos;

      this.commit("filterTodos", state.filter);
    },
    filterTodos(state, filter) {
      state.filter = filter;

      switch (filter) {
        case "all":
          state.filteredTodos = state.todos;
          break;
        case "active":
          state.filteredTodos = state.todos.filter((todo) => !todo.completed);
          break;
        case "completed":
          state.filteredTodos = state.todos.filter((todo) => todo.completed);
          break;
      }
    },
    resetFilter(state) {
      state.filter = "all";
    },
    changeScreen(state, event) {
      if (event.currentTarget.innerWidth > 650) {
        state.screen = "desktop";
      } else {
        state.screen = "mobile";
      }
    },
  },
});

export default store;
