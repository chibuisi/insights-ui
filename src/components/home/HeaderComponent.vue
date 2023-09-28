<template>
  <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top" data-scrollto-offset="0">
    <div class="container-fluid d-flex align-items-center justify-content-between">

      <router-link to="/index" class="logo d-flex align-items-center scrollto me-auto me-lg-0">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <router-link to="/"><h1>Minor Insights<span>.</span></h1></router-link>
      </router-link>

      <nav id="navbar" class="navbar" v-if="shouldShowNav">
        <ul>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
<!--          <li><router-link class="nav-link scrollto" to="#recent-blog-posts">Blog</router-link></li>-->
          <li class="dropdown"><a class="nav-link scrollto" href="#services">Services <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><router-link to="/topics">Topics</router-link></li>
              <li class="dropdown"><router-link to="#"><span>Coaching</span> <i class="bi bi-chevron-right dropdown-indicator"></i></router-link>
                <ul>
                  <li><router-link to="#">1 X 1 Coach Meetings</router-link></li>
                  <li><router-link to="#">Mentorship</router-link></li>
                </ul>
              </li>
              <li><router-link to="#">Personal Blogs</router-link></li>
              <li><router-link to="#">Breaking News</router-link></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="#team">Team</a></li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          <li v-if="!this.isLoggedIn"><router-link class="nav-link" to="/login">Login</router-link></li>
          <li v-else class="dropdown">
            <router-link to="/user" class="nav-link">My Account<i class="bi bi-person-circle"></i></router-link>
            <ul>

              <li><a class="nav-link" href="#">Profile</a></li>
              <li><router-link class="nav-link" to="/logout">Logout</router-link></li>

            </ul>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle d-none"></i>
      </nav><!-- .navbar -->

    </div>

<!--      <router-link v-if="!this.isLoginPage || !this.isLoggedIn" class="btn-getstarted scrollto" to="/getStarted">Get Started</router-link>-->


  </header><!-- End Header -->

</template>

<script>

import {mapGetters, mapState} from "vuex";

export default {
  name: "Header",
  components: {

  },
  data() {
    return {
      permittedRoutesForNav: ['login', 'register', 'user', 'coach'],
    }
  },
  async created() {

  },
  mounted() {
  },

  methods: {
  },
  computed: {
    ...mapState({
      routeName: ({ route }) => route.name,
    }),
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn'
    }),
    shouldShowNav() {
      return !this.permittedRoutesForNav.includes(this.routeName);
    }
  },
  watch: {
    // $route: {
    //   immediate: true,
    //   handler(route) {
    //     this.showNav = !this.routesToCheck.includes(route.name);
    //   },
    // }
  },
};
</script>

<style scoped>

</style>