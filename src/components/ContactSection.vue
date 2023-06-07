<template>
  <!-- ======= Contact Section ======= -->
  <section id="contact" class="contact">
    <div class="container">

      <div class="section-header">
        <h2>Contact Us</h2>
        <p>We are here to assist you in any way we can. Whether you have a question, need assistance,
          or want to explore our services further, our dedicated team is just a message or call away.
          Don't hesitate to contact us –
          we're eager to connect with you and provide the support you need.</p>
      </div>

    </div>

    <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.3333333333335!2d-112.074037!3d33.448377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed4c0df49d%3A0xb2c7f5a3b83c0688!2sPhoenix%2C%20AZ!5e0!3m2!1sen!2sus!4v1658548577391!5m2!1sen!2sus" style="border:0;" allowfullscreen loading="lazy"></iframe>
    </div><!-- End Google Maps -->

    <div class="container">

      <div class="row gy-5 gx-lg-5">

        <div class="col-lg-4">

          <div class="info">
            <h3>Get in touch</h3>
            <p>Feel free to reach out to us using the contact information below, or simply fill out the form</p>

            <div class="info-item d-flex">
              <i class="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h4>Location:</h4>
                <p>Phoenix, AZ 85035</p>
              </div>
            </div><!-- End Info Item -->

            <div class="info-item d-flex">
              <i class="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h4>Email:</h4>
                <p>minorinsights-info@gmail.com</p>
              </div>
            </div><!-- End Info Item -->

            <div class="info-item d-flex">
              <i class="bi bi-phone flex-shrink-0"></i>
              <div>
                <h4>Call:</h4>
                <p>+1 5589 55488 55</p>
              </div>
            </div><!-- End Info Item -->

          </div>

        </div>

        <div class="col-lg-8">
          <form action="forms/contact.php" method="post" role="form" class="php-email-form">
            <div class="row">
              <div class="col-md-6 form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
              </div>
            </div>
            <div class="form-group mt-3">
              <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
            </div>
            <div class="form-group mt-3">
              <textarea class="form-control" name="message" placeholder="Message" required></textarea>
            </div>
            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div class="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div><!-- End Contact Form -->

      </div>

    </div>
  </section><!-- End Contact Section -->
</template>

<script>
export default {
  name: "ContactSection"
}
</script>

<style scoped>

</style>