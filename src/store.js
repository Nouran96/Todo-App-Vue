import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      todos: [],
      theme: "light",
    };
  },
  mutations: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark");
    },
    addNewTodo(state, todo) {
      state.todos.push({
        id: state.todos.length,
        value: todo,
        completed: false,
      });
    },
    deleteTodo(state, id) {
      const todoToDeletedIndex = state.todos.findIndex(
        (todo) => todo.id === id
      );

      if (todoToDeletedIndex > -1) {
        state.todos.splice(todoToDeletedIndex, 1);
      }
    },
    markCompleted(state, { checked, todoId }) {
      const todoIndex = state.todos.findIndex((todo) => todo.id === todoId);
      if (todoIndex > -1) {
        state.todos[todoIndex].completed = checked;
      }
    },
  },
});

export default store;
