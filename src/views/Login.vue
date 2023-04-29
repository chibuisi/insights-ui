<template>
  <div class="login-container">
    <h1>Login</h1>
    <div class="form-group">
      <label for="username">Username:</label>
      <input id="username" v-model="user" class="form-control">
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input id="password" v-model="password" type="password" class="form-control">
    </div>
    <button @click="login" class="btn btn-primary">Login</button>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
  name: "Login",
  data() {
    return {
      user: '',
      password: ''
    }
  },
  async mounted() {

  },
  computed: {
    ...mapState({
      query: ({route}) => Object(route.query),
    }),
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn'
    }),
    redirect() {
      const { redirect } = this.query;
      return String(redirect);
    }
  },
  methods: {
    async login() {
      const data = {
        user: this.user,
        password: this.password,
      }
      await this.$store.dispatch('auth/LOGIN', {data});
      await this.$store.dispatch('auth/VERIFY_LOGIN');

      if (this.isLoggedIn) {
        if(this.redirect){
          await this.$router.push({
            name: this.redirect
          })
        }
        await this.$router.push({
          name: 'home'
        })
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 700px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

.form-control {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.btn {
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
}

.btn-primary:hover {
  background-color: #0069d9;
}
</style>