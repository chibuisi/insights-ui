<template>
  <div class="container-fluid forgot-password-container">
    <div class="card text-center">
      <div class="card-header h2 text-black">Update Password</div>
      <!--      <div class="card-header h5 text-white bg-primary">Password Reset</div>-->
      <div class="card-body px-5">
        <p class="card-text py-2">
          Enter and confirm your password.
        </p>
        <div class="form-outline mb-4" v-if="showModal">
          <div class="alert alert-warning alert-dismissible fade show" role="alert" style="position: relative">
            <strong>{{submitResult}}</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"
                    style="position: absolute; right: 5%">
              <i class="bi bi-x"></i>
            </button>
          </div>
        </div>

        <form @submit.prevent="updatePassword" novalidate>
          <div class="form-outline" style="position: relative">
            <label for="password">New Password:</label>
            <input type="password" id="password" class="form-control my-3"
                   v-model="password" :disabled="isSubmitting"
                   :class="{ 'is-invalid': v$.password.$error }"
                   @blur="v$.password.$touch"/>
            <div class="input-errors input-errors-right" v-for="error of v$.password.$errors" :key="error.$uid">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
          <div class="form-outline" style="position: relative">
            <label for="password2">Confirm Password</label>
            <input type="password" id="password2" class="form-control my-3"
                   v-model="password2" :disabled="isSubmitting"
                   :class="{ 'is-invalid': v$.password2.$error }"
                   @blur="v$.password2.$touch"/>
            <div class="input-errors input-errors-right" v-for="error of v$.password2.$errors" :key="error.$uid">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
          <!-- Submit button -->
          <button type="submit" class="btn btn-primary btn-block mb-4" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Update Password</span>
            <span v-else>
              <span class="spinner-border text-light" role="status"></span>
            </span>
          </button>
        </form>
        <div class="d-flex justify-content-between mt-4">
          <router-link class="" to="/login">Login</router-link>
          <router-link class="" to="/register">Register</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from "vuex";
import useVuelidate from '@vuelidate/core'
import {helpers, minLength, maxLength, required, sameAs} from '@vuelidate/validators';
import {SUCCESS} from "../../../shared/constants/loadingStatueses.constants";

export default {
  name: "UpdatePassword",
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      password: '',
      password2: '',
      isSubmitting: false,
      showModal: false,
      submitResult: 'Password Reset Successfully    ',
    }
  },
  validations() {
    return {
      password: {
        required: helpers.withMessage('This field cannot be empty', required),
        minLength: helpers.withMessage('Minimum length of 6 characters', minLength(6)),
        maxLength: helpers.withMessage('Maximum length of 100 characters', maxLength(100)),
        regex: helpers.withMessage('Only characters, numbers, #, $, @, . allowed', helpers.regex(/^[a-zA-Z0-9#$@.]+$/)),
      },
      password2: {
        required: helpers.withMessage('Re-type password', required),
        sameAs: helpers.withMessage('Passwords don\'t match',sameAs(this.password)),
      },
    }
  },
  created() {
    //todo validate token and email
  },
  computed: {
    ...mapState({
      query: ({route}) => Object(route.query),
    }),
    ...mapGetters({

    }),
    email() {
      return this.query.email;
    },
    token() {
      return this.query.token;
    }
  },
  methods: {
    async updatePassword() {
      const validationResult = await this.v$.$validate()
      if (!validationResult) {
        return;
      }
      this.isSubmitting = true;

      const data = {
        emailOrUsername: this.email,
        password: this.password,
        token: this.token
      }

      const response = await this.$store.dispatch('auth/UPDATE_PASSWORD', {data});

      if(response === SUCCESS){
        await this.$router.push({
          name: 'login',
          query: {
            rpt: true,
          }
        })
      } else {
        this.submitResult = "Unable to complete request at this time. Please try again"
      }

      this.isSubmitting = false;
      this.showModal = true;


    }
  }
}
</script>

<style scoped>
.forgot-password-container {
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
.btn.btn-primary.btn-block.mb-4 {
  background: var(--color-primary);
}
.is-invalid {
  border-color: var(--color-red);
}
.input-errors-right {
  text-align: right;
  position: absolute;
  bottom: 30%;
  right: 5%;
  color: red;
  background: #ffffff;
  border: 1px solid var(--color-red);
  padding: 3px 10px;
  border-radius: 5px;
  font-size: 12px;
}
</style>
