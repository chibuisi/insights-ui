<template>
  <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top d-flex align-items-center" data-scrollto-offset="0">
    <div class="d-flex align-items-center justify-content-between">
      <div class="logo d-flex align-items-center`">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <h1 class="d-none d-lg-block">Minor Insights<span>.</span></h1>
<!--        <i class="bi bi-list toggle-sidebar-btn"></i>-->
      </div>
    </div>
    <user-nav v-if="isLoggedIn" />
    <index-nav v-else />
  </header><!-- End Header -->

</template>

<script>

import {mapGetters, mapState} from "vuex";
import IndexNav from "../IndexNav.vue";
import UserNav from "../UserNav.vue";

export default {
  name: "HeaderComponent",
  components: {
    'index-nav': IndexNav,
    'user-nav': UserNav
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