<template>
  <section id="hero-animated" class="hero-animated d-flex align-items-center">
    <div class="container d-flex flex-column justify-content-center align-items-center text-center position-relative" data-aos="zoom-out"><!-- Minor Insights & Interests -->
      <img :src="`${baseURL}assets/img/hero-carousel/hero-carousel-3.svg`" class="img-fluid animated" alt="">
      <h2>Welcome to <span>Minor Insights & Interests</span></h2>
      <p>We have Insights based on your Interests. You choose them, we deliver them when you want</p>
      <div class="d-flex">
        <router-link to="/getStarted" class="btn-get-started scrollto">Get Started</router-link>
        <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BannerComponent",
  computed: {
    baseURL() {
      return `${process.env.BASE_URL}`;
    }
  }
}
</script>

<style scoped>

</style>