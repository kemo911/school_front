<template>
  <div class="login-form-container">
    <div class="login-box">
      <h2>Login</h2>
      <form @submit.prevent="onSubmit">
        <CustomInput type="text" placeholder="Email" v-model="username" />
        <CustomInput type="password" placeholder="Password" v-model="password" />
        <button type="submit" class="login-button">Login</button>
        <p class="signup-prompt">Don't have an account? <router-link to="/signup" tag="a">Sign up!</router-link></p>
      </form>
    </div>
  </div>
</template>

<script>
import CustomInput from '../Inputs/CustomInput.vue';

import './auth.css'

export default {
  components: {
    CustomInput
  },
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      }).then(() => console.log('success'))
          .catch((error) => console.log(error))
    }
  }
};
</script>