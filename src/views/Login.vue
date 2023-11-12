<template>
  <div class="container">
    <toast v-if="showResetPasswordToast" message="Your password has been successfully reset. Please login." title="Password Reset" ref="toast"/>
    <div class="login-container">
      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
      <form @submit.prevent="login" novalidate>
        <!-- Error row -->
        <div class="form-outline mb-4" v-if="showModal">
          <div class="alert alert-warning alert-dismissible fade show" role="alert" style="position: relative">
            <strong>{{errorMessage}}</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="resetShowModal"
                    style="position: absolute; right: 5%">
              <i class="bi bi-x"></i>
            </button>
          </div>
        </div>

        <!-- Email input -->
        <div class="form-outline mb-4 form-outline-error-control">
          <input type="email" id="user" class="form-control" v-model="user" :disabled="isLoggingIn"
                 :class="{ 'is-invalid': v$.user.$error }" @blur="v$.user.$touch" required/>
          <div class="input-errors input-errors-right" v-for="error of v$.user.$errors" :key="error.$uid">
            <div class="error-msg">{{ error.$message }}</div>
          </div>
          <label class="form-label" for="user">Username/Email</label>
        </div>

        <!-- Password input -->
        <div class="form-outline mb-4 form-outline-error-control">
          <input type="password" id="password" class="form-control" v-model="password" :disabled="isLoggingIn"
                 :class="{ 'is-invalid': v$.password.$error }" @blur="v$.password.$touch" required/>
          <div class="input-errors input-errors-right" v-for="error of v$.password.$errors" :key="error.$uid">
            <div class="error-msg">{{ error.$message }}</div>
          </div>
          <label class="form-label" for="password">Password</label>
        </div>

        <!-- 2 column grid layout for inline styling -->
        <div class="row mb-4">
          <div class="col">
            <!-- Simple link -->
            <router-link to="/reset-password">Forgot password?</router-link>
          </div>
        </div>

        <!-- Submit button -->
        <button type="submit" class="btn btn-primary btn-block mb-4" :disabled="isLoggingIn">
          <span v-if="!isLoggingIn">Sign in</span>
          <span v-else>
            <span class="spinner-border text-light" role="status"></span>
          </span>
        </button>

        <!-- Register buttons -->
        <div class="text-center">
          <p>Not a member? <router-link to="/register">Register</router-link></p>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import useVuelidate from '@vuelidate/core'
import { helpers, maxLength, required } from '@vuelidate/validators';
import Toast from "../components/Toast";

export default {
  name: "Login",

  components: {
    'toast' : Toast
  },

  setup () {
    return { v$: useVuelidate() }
  },

  data() {
    return {
      user: '',
      password: '',
      isLoggingIn: false,
      errorMessage: 'Invalid Username or Password    ',
      showModal: false,
      loginStatus: '',
    }
  },

  validations() {
    return {
      user: {
        required: helpers.withMessage('This field cannot be empty', required),
        maxLength: helpers.withMessage('Maximum length of 100 characters', maxLength(100)),
        regex: helpers.withMessage('Only characters, numbers, #, $, @, . allowed', helpers.regex(/^[a-zA-Z0-9#$@.]+$/)),
      },
      password: {
        required: helpers.withMessage('This field cannot be empty', required),
        maxLength: helpers.withMessage('Maximum length of 100 characters', maxLength(100)),
        regex: helpers.withMessage('Only characters, numbers, #, $, @, . allowed', helpers.regex(/^[a-zA-Z0-9#$@.]+$/)),
      },
    }
  },

  async created() {

  },
  async mounted() {
  },
  computed: {
    ...mapState({
      query: ({route}) => Object(route.query),
    }),
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
      authFailedReason: 'auth/getAuthFailedReason',
      hasCoachRole: 'auth/hasCoachRole'
    }),
    redirect() {
      const { redirect } = this.query;
      return String(redirect);
    },
    showResetPasswordToast() {
      const { rpt } = this.query;
      return Boolean(rpt);
    }
  },
  methods: {
    resetShowModal() {
      this.showModal = false;
    },
    async login() {
      if(this.isLoggingIn)
        return;

      const validationResult = await this.v$.$validate()
      if (!validationResult) {
        this.loginStatus = 'ERROR'
        return;
      }

      this.resetShowModal();
      this.isLoggingIn = true;

      const data = {
        user: this.user,
        password: this.password,
      }
      await this.$store.dispatch('auth/LOGIN', {data});
      await this.$store.dispatch('auth/VERIFY_LOGIN');

      if (this.isLoggedIn) {
        //if redirect is set then we can redirect. Otherwise we can go to coach or user
        if(this.redirect) {
          await this.$router.push({
            name: this.redirect, replace: true
          })

          this.isLoggingIn = false;
        }
        await this.$router.push({
          name: 'dashboard',
          replace: true
        })
        this.isLoggingIn = false;
      }

      this.errorMessage = this.authFailedReason;
      this.showModal = true;
      this.isLoggingIn = false;

    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 700px;
  width: 500px;
  margin: auto;
  padding: 20px;
  /*border: 1px solid #ccc;*/
  border-radius: 4px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box
}

.btn {
  background: var(--color-primary);
}

.is-invalid {
  border-color: var(--color-red);
}

.form-outline-error-control {
  position: relative;
}

.input-errors-right {
  text-align: right;
  position: absolute;
  bottom: 80%;
  right: 5%;
  color: red;
  background: #ffffff;
  border: 1px solid var(--color-red);
  padding: 3px 10px;
  border-radius: 5px;
  font-size: 12px;
}

</style>