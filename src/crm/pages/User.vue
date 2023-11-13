<template>
  <div>
    <!-- ======= Sidebar ======= -->
    <aside id="sidebar" class="sidebar">

      <ul class="sidebar-nav" id="sidebar-nav">

        <li class="nav-item">
          <router-link to="dashboard" data-bs-target="#dashboard-nav" data-bs-toggle="collapse">
            <span class="nav-link" :class="{ 'collapsed': this.$route.name !== 'dashboard' }">
              <i class="bi bi-grid"></i>
              <span>Dashboard</span>
            </span>
          </router-link>
        </li><!-- End Dashboard Nav -->

        <li class="nav-item">
            <router-link to="user-topics" data-bs-target="#topics-nav" data-bs-toggle="collapse">
              <span class="nav-link" :class="{ 'collapsed': this.$route.name !== 'user-topics' }">
                <i class="bi bi-menu-button-wide"></i>
                <span>My Topics</span>
              </span>
            </router-link>
        </li><!-- End My Topics Nav -->

        <li class="nav-item">
          <router-link to="notifications" data-bs-target="#notifications-nav">
            <span :class="{ 'collapsed': this.$route.name !== 'notifications' }" class="nav-link" >
              <i class="bi bi-journal-text"></i>
              <span>My Notifications</span>
            </span>
          </router-link>
        </li><!-- End My Notifications Nav -->

        <li class="nav-item">
          <router-link to="user-coach-meetings" data-bs-target="#user-coach-meetings-nav" data-bs-toggle="collapse">
            <span :class="{ 'collapsed': this.$route.name !== 'user-coach-meetings' }" class="nav-link">
              <i class="bi bi-layout-text-window-reverse"></i>
              <span>Coach Meetings</span>
            </span>
          </router-link>
        </li><!-- End Coach Meetings Nav -->

        <li class="nav-item">
          <router-link to="/user/user-goals" data-bs-target="#user-goals-nav" data-bs-toggle="collapse">
            <span :class="{ 'collapsed': this.$route.name !== 'user-goals' }" class="nav-link">
              <i class="bi bi-circle"></i>
              <span>My Goals</span>
            </span>
          </router-link>
        </li><!-- End My Goals Nav -->

        <li class="nav-item">
          <router-link to="user-assessments" data-bs-target="#user-assessments-nav" data-bs-toggle="collapse">
            <span :class="{ 'collapsed': this.$route.name !== 'user-assessments' }" class="nav-link">
              <i class="bi bi-bar-chart"></i>
              <span>My Assessments</span>
            </span>
          </router-link>
        </li><!-- End Assessments Nav -->

        <li class="nav-item">
          <router-link to="user-coach-report" data-bs-target="#user-coach-report-nav" data-bs-toggle="collapse">
            <span :class="{ 'collapsed': this.$route.name !== 'user-coach-report' }" class="nav-link">
              <i class="bi bi-box"></i>
              <span>Coach Reports & Feedback</span>
            </span>
          </router-link><!-- End Reports/Feedback Nav -->
        </li>

        <li class="nav-item">
          <a class="nav-link collapsed" data-bs-target="#onboarding-nav" data-bs-toggle="collapse" href="#">
            <i class="bi bi-layout-text-window-reverse"></i><span>Onboarding</span>
          </a>
        </li><!-- End Onboarding Nav -->


      </ul>

    </aside><!-- End Sidebar-->

    <main id="main" class="main">

      <keep-alive>
        <router-view />
      </keep-alive>

    </main><!-- End #main -->

    <!-- ======= Footer ======= -->
    <footer id="footer" class="footer">
      <div class="copyright">
        &copy; Copyright 2023<strong><span>Minor Insights</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </footer>
    <!-- End Footer -->

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'User',
  components: {

  },

  data() {
    return {
      isCollapsed: false,
    }
  },

  computed: {
    ...mapState({
      user: ({ auth }) => auth.user,
    }),

    ...mapGetters({
      userProfile: 'auth/getUserProfile',
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },

  methods: {

  },

  async mounted() {

  },
}

</script>

<style scoped>

@import '/assets/dashboard/assets/css/style.css';

</style>
