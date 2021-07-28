<template>
  <input
    :id="name"
    type="checkbox"
    :disabled="disabled"
    @change="emitCheckValue"
  />
  <div id="label-container">
    <label :for="name"></label>
  </div>
</template>

<script>
  export default {
    name: "Checkbox",
    props: {
      disabled: Boolean,
      name: String,
    },
    methods: {
      emitCheckValue(e) {
        this.$emit("checked", e.target.checked);
      },
    },
    emits: ["checked"],
  };
</script>

<style scoped>
  input {
    @apply hidden;
  }

  #label-container {
    @apply min-w-20px min-h-20px p-px bg-borderLight dark:bg-borderDark my-2 mx-4 relative rounded-half;
  }

  input:not(:disabled) + #label-container:hover,
  input:checked + #label-container {
    background: linear-gradient(
      to bottom right,
      hsl(192, 100%, 67%) 30%,
      hsl(280, 87%, 65%)
    );
  }

  #label-container label {
    @apply absolute inset-0 bg-white dark:bg-darkTodo m-px rounded-half;
  }

  input:not(:disabled) + #label-container label {
    @apply cursor-pointer;
  }

  input:checked + #label-container label {
    background: linear-gradient(
      to bottom right,
      hsl(192, 100%, 67%) 30%,
      hsl(280, 87%, 65%)
    );
    border: none;
    content: url("../assets/images/icon-check.svg");
    padding: 4px;
  }
</style>
