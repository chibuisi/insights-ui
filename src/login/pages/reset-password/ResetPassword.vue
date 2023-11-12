<template>
  <div class="container-fluid forgot-password-container">
    <div class="card text-center">
      <div class="card-header h2 text-black">Password Reset</div>
<!--      <div class="card-header h5 text-white bg-primary">Password Reset</div>-->
      <div class="card-body px-5">
        <p class="card-text py-2">
          Enter your email address or username and we'll send you an email with instructions to reset your password.
        </p>
        <div class="form-outline mb-4" v-if="showModal">
          <div class="alert alert-dismissible fade show" :class="{ 'alert-success': submitSuccess, 'alert-warning' : !submitSuccess }" role="alert" style="position: relative">
            <strong>{{submitResult}}</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="resetShowModal"
                    style="position: absolute; right: 5%">
              <i class="bi bi-x"></i>
            </button>
          </div>
        </div>
        <form @submit.prevent="resetPassword" novalidate>
          <div class="form-outline" style="position: relative">
            <input type="text" id="typeEmail" class="form-control my-3"
                   v-model="user" :disabled="isSubmitting"
                   :class="{ 'is-invalid': v$.user.$error }"
                   @blur="v$.user.$touch"/>
            <div class="input-errors input-errors-right" v-for="error of v$.user.$errors" :key="error.$uid">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
            <label class="form-label" for="typeEmail">Email/Username</label>
          </div>
          <!-- Submit button -->
          <button type="submit" class="btn btn-primary btn-block mb-4" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Reset password</span>
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
import useVuelidate from '@vuelidate/core'
import { helpers, maxLength, required } from '@vuelidate/validators';
import {mapGetters} from "vuex";
import {SUCCESS} from "../../../shared/constants/loadingStatueses.constants";

export default {
  name: "ResetPassword",
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      user: '',
      isSubmitting: false,
      showModal: false,
      submitResult: '',
      submitSuccess: false,
    }
  },
  validations() {
    return {
      user: {
        required: helpers.withMessage('This field cannot be empty', required),
        maxLength: helpers.withMessage('Maximum length of 100 characters', maxLength(100)),
        regex: helpers.withMessage('Only characters, numbers, #, $, @, . allowed', helpers.regex(/^[a-zA-Z0-9#$@.]+$/)),
      },
    }
  },
  methods: {
    resetShowModal() {
      this.showModal = false;
    },
    async resetPassword() {
      const validationResult = await this.v$.$validate()
      if (!validationResult) {
        return;
      }

      this.isSubmitting = true;

      const data = {
        emailOrUsername: this.user,
      }

      await this.$store.dispatch('auth/RESET_PASSWORD', {data});

      if(this.sendResetPasswordEmailResponse === SUCCESS) {
        this.submitSuccess = true;
        this.submitResult = 'Reset password email sent to your mailbox.';
      }
      else {
        this.submitSuccess = false;
        this.submitResult = 'Unable to complete request. Try again later.';
      }

      this.isSubmitting = false;
      this.showModal = true;
    }
  },
  computed: {
    ...mapGetters({
      sendResetPasswordEmailResponse: 'auth/getResetPasswordEmailResponse',
    }),
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
