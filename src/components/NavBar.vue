<template>
  <nav class="navbar header-nav ms-auto" v-if="shouldShowNav">
    <ul class="d-flex align-items-center">

      <li v-if="!isLoggedIn" class="nav-item">
        <a class="nav-link scrollto" href="#about">About</a>
      </li>

      <li v-if="!isLoggedIn" class="nav-item dropdown">
        <a class="nav-link scrollto" href="#services">Services <i class="bi bi-chevron-down dropdown-indicator"></i></a>
        <ul>
          <li class="nav-item dropdown">
            <router-link to="/topics">Topics</router-link>
          </li>
          <li class="dropdown"><router-link to="#"><span>Coaching</span> <i class="bi bi-chevron-right dropdown-indicator"></i></router-link>
            <ul>
              <li class="nav-item dropdown"><router-link to="#">1 X 1 Coach Meetings</router-link></li>
              <li class="nav-item dropdown"><router-link to="#">Mentorship</router-link></li>
            </ul>
          </li>
          <li><router-link to="#">Personal Blogs</router-link></li>
          <li><router-link to="#">Breaking News</router-link></li>
        </ul>
      </li>

      <li v-if="!isLoggedIn" class="nav-item">
        <a class="nav-link scrollto" href="#team">Team</a>
       </li>

      <li v-if="!isLoggedIn" class="nav-item">
        <a class="nav-link scrollto" href="#contact">Contact</a>
      </li>

      <li v-if="!isLoggedIn" class="nav-item">
        <router-link class="nav-link scrollto" to="login" >Login</router-link>
      </li>

      <li class="nav-item dropdown" v-if="isLoggedIn">

        <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
          <i class="bi bi-bell"></i>
          <span class="badge bg-primary badge-number">4</span>
        </a><!-- End Notification Icon -->

        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
          <li class="dropdown-header">
            You have 4 new notifications
            <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
          </li>
          <li>
            <hr class="dropdown-divider">
          </li>

          <li class="notification-item">
            <i class="bi bi-exclamation-circle text-warning"></i>
            <div>
              <h4>Lorem Ipsum</h4>
              <p>Quae dolorem earum veritatis oditseno</p>
              <p>30 min. ago</p>
            </div>
          </li>
          <li class="dropdown-footer">
            <a href="#">Show all notifications</a>
          </li>

        </ul><!-- End Notification Dropdown Items -->

      </li>
      <!-- End Notification Nav -->

      <li class="nav-item dropdown" v-if="isLoggedIn">

        <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
          <i class="bi bi-chat-left-text"></i>
          <span class="badge bg-success badge-number">3</span>
        </a><!-- End Messages Icon -->

        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
          <li class="dropdown-header">
            You have 3 new messages
            <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
          </li>
          <li>
            <hr class="dropdown-divider">
          </li>

          <li class="message-item">
            <a href="#">
              <img src="assets/img/messages-1.jpg" alt="" class="rounded-circle">
              <div>
                <h4>Maria Hudson</h4>
                <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                <p>4 hrs. ago</p>
              </div>
            </a>
          </li>

          <li class="dropdown-footer">
            <a href="#">Show all messages</a>
          </li>

        </ul><!-- End Messages Dropdown Items -->

      </li>
      <!-- End Messages Nav -->

      <li class="nav-item dropdown pe-3" v-if="isLoggedIn">

        <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
          <!--              <img src="assets/img/profile-img.jpg" alt="Profile" class="rounded-circle">-->
          <span class="d-none d-md-block dropdown-toggle ps-2">{{ userProfile.fullname }}</span>
        </a><!-- End Profile Iamge Icon -->

        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
          <li class="dropdown-header">
            <h6>{{ userProfile.firstname }}</h6>
            <span>{{ userProfile.jobTitle }}</span>
          </li>
          <li>
            <hr class="dropdown-divider">
          </li>

          <li>
            <a class="dropdown-item d-flex align-items-center" href="#">
              <i class="bi bi-person"></i>
              <span>My Profile</span>
            </a>
          </li>
          <li>
            <hr class="dropdown-divider">
          </li>

          <li>
            <a class="dropdown-item d-flex align-items-center" href="#">
              <i class="bi bi-gear"></i>
              <span>Account Settings</span>
            </a>
          </li>
          <li>
            <hr class="dropdown-divider">
          </li>

          <li>
            <a class="dropdown-item d-flex align-items-center" href="#">
              <i class="bi bi-question-circle"></i>
              <span>Need Help?</span>
            </a>
          </li>
          <li>
            <hr class="dropdown-divider">
          </li>

          <li>
            <router-link class="dropdown-item d-flex align-items-center" to="/logout">
              <i class="bi bi-box-arrow-right"></i>
              <span>Sign Out</span>
            </router-link>
          </li>

        </ul><!-- End Profile Dropdown Items -->
      </li>
      <!-- End Profile Nav -->

    </ul>
  </nav>
</template>

<script>

import {mapGetters, mapState} from "vuex";

  export default {
    name: 'NavBar',

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
      },
    },
  }

</script>

<style scoped>

</style>