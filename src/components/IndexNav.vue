<template>
  <nav id="" class="navbar header-nav ms-auto" v-if="shouldShowNav">
    <ul class="d-flex align-items-center">
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
      <li><router-link class="nav-link scrollto" to="login">Login</router-link></li>

    </ul>
    <i class="bi bi-list mobile-nav-toggle d-none"></i>
  </nav><!-- .navbar -->
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
  name: "IndexNav",
  components: {

  },
  data() {
    return {

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
      isLoggedIn: 'auth/isLoggedIn',
      userProfile: 'auth/getUserProfile'
    }),
    shouldShowNav() {
      return !['login', 'register'].includes(this.routeName);
    }
  },
  watch: {

  },
};
</script>

<style scoped>

</style>