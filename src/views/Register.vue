<template>
  <section class="vh-150" style="background-color: #eee;">
    <div class="container h-150">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px;">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                  <form @submit.prevent="register" ref="registerForm" class="mx-1 mx-md-4" novalidate>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0 form-outline-error-control">
                        <input type="text" id="firstname" :disabled="isSubmitting" :class="{ 'is-invalid': v$.firstname.$error }"
                               class="form-control" v-model="firstname" @blur="v$.firstname.$touch" required/>
                        <div class="input-errors input-errors-right" v-for="error of v$.firstname.$errors" :key="error.$uid">
                          <div class="error-msg">{{ error.$message }}</div>
                        </div>
                        <label class="form-label" for="firstname">Your Firstname</label>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0 form-outline-error-control">
                        <input type="text" id="lastname" :disabled="isSubmitting" :class="{ 'is-invalid': v$.lastname.$error }"
                               class="form-control" v-model="lastname" @blur="v$.lastname.$touch" required/>
                        <div class="input-errors input-errors-right" v-for="error of v$.lastname.$errors" :key="error.$uid">
                          <div class="error-msg">{{ error.$message }}</div>
                        </div>
                        <label class="form-label" for="lastname">Your Lastname</label>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0 form-outline-error-control">
                        <input type="email" id="email" :disabled="isSubmitting" :class="{ 'is-invalid': v$.email.$error }"
                               class="form-control" v-model="email" @blur="v$.email.$touch" required/>
                        <div class="input-errors input-errors-right" v-for="error of v$.email.$errors" :key="error.$uid">
                          <div class="error-msg">{{ error.$message }}</div>
                        </div>
                        <label class="form-label" for="email">Your Email</label>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0 form-outline-error-control">
                        <input type="text" id="username" :disabled="isSubmitting" :class="{ 'is-invalid': v$.username.$error }"
                               class="form-control" v-model="username" @keypress="v$.username.$pending && v$.username.$touch"
                               placeholder="Username is optional"/>
                        <div class="input-errors input-errors-right" v-for="error of v$.username.$errors" :key="error.$uid">
                          <div class="error-msg">{{ error.$message }}</div>
                        </div>
                        <span v-if="v$.username.$pending" class="spinner-border text-info spinner-border-username" role="status"></span>
                        <label class="form-label" for="username">Username <span style="color: #3a4753">[Optional]</span></label>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0 form-outline-error-control">
                        <input type="password" id="password" :disabled="isSubmitting" :class="{ 'is-invalid': v$.password.$error }"
                               @blur="v$.password.$touch" class="form-control" v-model="password" required/>
                        <div class="input-errors input-errors-right" v-for="error of v$.password.$errors" :key="error.$uid">
                          <div class="error-msg">{{ error.$message }}</div>
                        </div>
                        <label class="form-label" for="password">Password</label>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0 form-outline-error-control">
                        <input type="password" id="password2" :disabled="isSubmitting" @blur="v$.password2.$touch"
                               :class="{ 'is-invalid': v$.password2.$error }" class="form-control" v-model="password2" required/>
                        <div class="input-errors input-errors-right" v-for="error of v$.password2.$errors" :key="error.$uid">
                          <div class="error-msg">{{ error.$message }}</div>
                        </div>
                        <label class="form-label" for="password2" >Repeat your password</label>
                      </div>
                    </div>

                    <div class="form-check d-flex justify-content-center mb-5 form-outline-error-control">
                      <input class="form-check-input me-2" :disabled="isSubmitting" @blur="v$.agreeToEula.$touch"
                             @change="v$.agreeToEula.$touch" v-model="agreeToEula"
                             :class="{ 'is-invalid': v$.agreeToEula.$error }" type="checkbox"
                             value="" id="agreeToEula" required/>
                      <div class="input-errors input-errors-right" v-for="error of v$.agreeToEula.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                      </div>
                      <label class="form-check-label" for="agreeToEula">
                        I agree all statements in <a href="#!">Terms of service</a>
                      </label>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-5" v-if="showModal">
                      <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>{{errorMessage}}</strong>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="resetShowModal">
                          <i class="bi bi-x"></i>
                        </button>
                      </div>
                    </div>

                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" class="btn btn-primary btn-lg signup"
                              :disabled="isSubmitting">
                        <span v-if="!isSubmitting">Register</span>
                        <span v-else-if="isSubmitting">
                          <span class="spinner-border text-light" role="status"></span>
                        </span>
                      </button>
                    </div>

                    <hr>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <router-link to="/login">Sign in</router-link>
                      </div>
                    </div>

                  </form>

                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                       class="img-fluid" alt="Sample image">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import useVuelidate from '@vuelidate/core'
import {alpha, email, helpers, minLength, maxLength, required, sameAs} from '@vuelidate/validators';

const { withAsync } = helpers

export default {
  name: "Register",
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      firstname: '',
      lastname: '',
      password: '',
      password2: '',
      email: '',
      username: '',
      ipAddress: '',
      agreeToEula: false,
      timezone: '',
      showModal: false,
      errorMessage: 'Registration Failed! If problem persist, please contact support.   ',
      isUsernameAvailable: true,
      isFormValid: false,
      isSubmitting: false,
      submitStatus: '',
    }
  },
  validations () {
    return {
      firstname: {
        required: helpers.withMessage('This field cannot be empty', required),
        minLength: helpers.withMessage('Minimum length of 3 characters', minLength(3)),
        maxLength: helpers.withMessage('Maximum length of 50 characters', maxLength(50)),
        alpha: helpers.withMessage('Only characters allowed here', alpha),
      },
      lastname: {
        required: helpers.withMessage('This field cannot be empty', required),
        minLength: helpers.withMessage('Minimum length of 3 characters', minLength(3)),
        maxLength: helpers.withMessage('Maximum length of 50 characters', maxLength(50)),
        alpha: helpers.withMessage('Only characters allowed here', alpha),
      },
      email: {
        required: helpers.withMessage('This field cannot be empty', required),
        maxLength: helpers.withMessage('Maximum length of 100 characters', maxLength(100)),
        regex: helpers.withMessage('Only characters,numbers, #, $, @ and . allowed', helpers.regex(/^[a-zA-Z0-9#$@.]+$/)),
        email: helpers.withMessage('Enter a valid email', email),
      },
      username: {
        maxLength: helpers.withMessage('Maximum length of 50 characters', maxLength(50)),
        regex: helpers.withMessage('Only characters,numbers, #, $, @ and . allowed', helpers.regex(/^[a-zA-Z0-9#$@.]+$/)),
        isUsernameAvailable: helpers.withMessage('Username is not available',withAsync(this.checkUsernameAvailability) )
      },
      password: {
        required: helpers.withMessage('This field cannot be empty', required),
        regex: helpers.withMessage('Only characters, numbers, #, $, @ and . allowed', helpers.regex(/^[a-zA-Z0-9#$@.]+$/)),
        minLength: helpers.withMessage('Maximum length of 6 characters',minLength(6)),
        maxLength: helpers.withMessage('Maximum length of 50 characters', maxLength(50)),
      },
      password2: {
        required: helpers.withMessage('Re-type password', required),
        sameAs: helpers.withMessage('Passwords don\'t match',sameAs(this.password)),
      },
      agreeToEula: {
        sameAs: helpers.withMessage('Must agree to terms of service', sameAs(true)),
      }
    }
  },

  async mounted() {
    const date = new Date();
    this.timezone = date.toLocaleString('en-US', {timeZoneName: 'short'}).split(' ').pop();

    await this.userIp();
  },

  methods: {
    async userIp() {
      const response = await axios.get('https://api.ipify.org?format=json');
      this.ipAddress = response.data.ip;
    },

    resetShowModal() {
      this.showModal = false;
    },

    async checkUsernameAvailability(value) {
      if (!value || value === '') {
        this.isUsernameAvailable = true;
        return true;
      }
      if(!this.v$.username.$invalid) {
        const response = await axios.get(`${process.env.VUE_APP_SERVICE_URL}/user/check-username?username=${value}`);
        this.isUsernameAvailable = response.data;
        if(!this.isUsernameAvailable)
          this.v$.username.$touch();
      } else {
        this.isUsernameAvailable = true;
        this.v$.username.$touch()
      }

      return this.isUsernameAvailable;

      // return false;
    },

    async register() {
      if(this.isSubmitting)
        return;

      const validationResult = await this.v$.$validate()
      if (!validationResult) {
        this.submitStatus = 'ERROR'
        return;
      }

      this.isSubmitting = true;
      this.submitStatus = 'PENDING'

      const data = {
        firstname: this.firstname,
        lastname: this.lastname,
        username: this.username,
        password: this.password,
        email: this.email,
        ipAddress: this.ipAddress,
        timezone: this.timezone,
        agreedToEula: this.agreeToEula
      };

      const authUrl = `${process.env.VUE_APP_SERVICE_URL}/user/signup`;
      const timeoutInMilli = 10000;
      const requestConfig = {};
      requestConfig.timeout = timeoutInMilli;

      await axios.post(authUrl, data, requestConfig)
          .then((response) => {
            console.log(response.data)
            if(response.status === 201) {
              this.submitStatus = 'SUCCESS';
              this.$router.push({
                name: 'login', replace: true, query: {registered: true}
              })
            }
          })
          .catch((error) => {
            this.showModal = true;
            this.submitStatus = this.errorMessage;
            if(error.response.status === 409) {
              this.errorMessage = 'User with email already exists. Sign-in instead.   '
              this.submitStatus = 'FAILED'
            }
            else {
              this.submitStatus = 'FAILED';
            }
            console.log(error);
          });

      // setTimeout(() => {
      //   this.isSubmitting = false
      //   this.showModal = true;
      // }, 5000);

      this.isSubmitting = false;
    }
  },
  computed: {
    hasValidationErrors() {
      return this.v$.$invalid;
    },
  },
  watch: {
  }
}
</script>

<style scoped>
.spinner-border-username{
  position: absolute;
  bottom: 50%;
  right: 5%;
}
.signup {
  background: var(--color-primary);
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
.is-invalid {
  border-color: var(--color-red);
}
</style>