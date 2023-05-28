<template>
  <!-- ======= Call To Action Section ======= -->
  <section id="cta" class="cta">
    <div class="container" data-aos="zoom-out">

      <div class="row g-5">

        <div class="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
          <h3>Stay <em>Updated</em> with the Latest Trends</h3>
          <p>Ready to supercharge your life? Our insights is your ultimate resource for actionable advice, success stories, and cutting-edge techniques.
            Stay informed and inspired by well-curated articles, content and industry experts who know what it takes to thrive in the modern world.</p>
          <router-link class="cta-btn align-self-start" to="/getStarted">Join the Fun!</router-link>
        </div>

        <div class="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
          <div class="img">
            <img src="assets/img/cta.jpg" alt="" class="img-fluid">
          </div>
        </div>

      </div>

    </div>
  </section><!-- End Call To Action Section -->
</template>

<script>
export default {
  name: "CallToAction"
}
</script>

<style scoped>

</style>