<template>
  <div class="mb-3">
    <input
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
        class="form-control"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: String
  }
};
</script>

<style scoped>
.input-container {
  margin-bottom: 10px;
}

.styled-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}

.styled-input:focus {
  border-color: #66afe9;
  outline: 0;
  box-shadow: inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(102, 175, 233, 0.6);
}
</style>
