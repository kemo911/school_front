<template>
  <div class="login-form-container">
    <div class="login-box">
      <h2>Login</h2>
      <form @submit.prevent="onSubmit">
        <CustomInput type="email" placeholder="Email" v-model="email" />
        <CustomInput type="text" placeholder="First Name" v-model="firstName" />
        <CustomInput type="text" placeholder="Last Name" v-model="lastName" />
        <CustomInput type="password" placeholder="Last Name" v-model="password" />
        <button type="submit" class="login-button">Login</button>
        <p class="signup-prompt">Already have an account ? <router-link to="/login" tag="a">Login!</router-link></p>
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
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    };
  },
  methods: {
    onSubmit() {
      // Handle form submission
      console.log('Submitted', this.email, this.password);
    }
  }
};
</script>