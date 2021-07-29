<template>
  <input :id="name" type="checkbox" :disabled="disabled" v-model="isChecked" />
  <div
    id="label-container"
    :class="{ 'checked-label-container': isChecked || checked }"
    @touchstart="touchHandler"
  >
    <label
      :for="name"
      :class="{ 'checked-label': isChecked || checked }"
    ></label>
  </div>
</template>

<script>
  export default {
    name: "Checkbox",
    data() {
      return {
        isChecked: false,
      };
    },
    props: {
      disabled: Boolean,
      name: String,
      checked: Boolean,
    },
    watch: {
      isChecked(value) {
        this.$emit("checked", value);
      },
    },
    methods: {
      touchHandler(e) {
        console.log(e);
        this.isChecked = !this.isChecked;
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
  .checked-label-container {
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

  .checked-label {
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
