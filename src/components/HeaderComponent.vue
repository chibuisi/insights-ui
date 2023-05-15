<template>
  <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top" data-scrollto-offset="0">
    <div class="container-fluid d-flex align-items-center justify-content-between">

      <router-link to="/index" class="logo d-flex align-items-center scrollto me-auto me-lg-0">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <router-link to="/"><h1>Minor Insights<span>.</span></h1></router-link>
      </router-link>

      <nav id="navbar" class="navbar" v-if="isIndexPage()">
        <ul>
<!--          <li><router-link class="nav-link scrollto" to="/index">Home</router-link></li>-->
          <li><router-link class="nav-link scrollto" to="/about">About</router-link></li>
          <li><router-link class="nav-link scrollto" to="/team">Team</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li class="dropdown"><router-link to="/services"><span>Services</span> <i class="bi bi-chevron-down dropdown-indicator"></i></router-link>
            <ul>
              <li class="dropdown"><router-link to="#"><span>Coaching</span> <i class="bi bi-chevron-right dropdown-indicator"></i></router-link>
                <ul>
                  <li><router-link to="#">1 X 1 Coach Meetings</router-link></li>
                  <li><router-link to="#">Mentorship</router-link></li>
                </ul>
              </li>
              <li><router-link to="#">Blogs</router-link></li>
              <li><router-link to="#">Breaking News</router-link></li>
            </ul>
          </li>
          <li><router-link class="nav-link scrollto" to="/contact">Contact</router-link></li>
          <li>
            <router-link v-if="!this.isLoggedIn" class="nav-link" to="/login">Login</router-link>
            <router-link v-else class="nav-link" to="/logout">Logout</router-link>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle d-none"></i>
      </nav><!-- .navbar -->

<!--      <router-link v-if="!this.isLoginPage || !this.isLoggedIn" class="btn-getstarted scrollto" to="/getStarted">Get Started</router-link>-->

    </div>
  </header><!-- End Header -->

</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "Header",
  components: {

  },
  data() {
    return {
      pageName: ''
    }
  },
  async created() {

  },
  mounted() {
    this.pageName = this.$route.name;
  },

  methods: {
    getPageName() {
      return this.pageName;
    },
    isLoginPage() {
      return this.getPageName() === 'login';
    },
    isIndexPage() {
      return this.pageName === 'welcome';
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn'
    }),
  },
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        this.pageName = route.name;
      },
    }
  },
};
</script>

<style scoped>

</style>