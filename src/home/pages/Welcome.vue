<template>
  <div>
    <banner-component />
    <featured-services />
    <about-us />
    <topics-bar />
    <call-to-action />
    <on-focus-section />
    <service-section />
    <testimonials />
    <our-pricing />
    <faq-section />
    <team-section />
    <recent-blogs />
    <contact-section />
    <footer-section />
  </div>
</template>

<script>
import BannerComponent from "../components/BannerComponent.vue";
import FeaturedServices from "../components/FeaturedServices.vue";
import AboutUs from "../components/AboutUs.vue";
import TopicsBar from "../components/TopicsBar.vue";
import CallToAction from "../components/CallToAction.vue";
import OnFocusSection from "../components/OnFocusSection.vue";
import ServiceSection from "../components/ServiceSection.vue";
import Testimonials from "../components/Testimonials.vue";
import OurPricing from "../components/OurPricing.vue";
import FaqSection from "../components/FaqSection.vue";
import TeamSection from "../components/TeamSection.vue";
import RecentBlogs from "../components/RecentBlogs.vue";
import ContactSection from "../components/ContactSection.vue";
import FooterSection from "../components/FooterSection.vue";
import {mapState} from "vuex";

export default {
  name: "Welcome",
  components: {
    'banner-component': BannerComponent,
    'featured-services' : FeaturedServices,
    'about-us' : AboutUs,
    'topics-bar' : TopicsBar,
    'call-to-action' : CallToAction,
    'on-focus-section' : OnFocusSection,
    'service-section' : ServiceSection,
    'testimonials' : Testimonials,
    'our-pricing' : OurPricing,
    'faq-section' : FaqSection,
    'team-section' : TeamSection,
    'recent-blogs' : RecentBlogs,
    'contact-section' : ContactSection,
    'footer-section' : FooterSection,
  },
  computed: {
    ...mapState({
      topics: ({ boot }) => boot.topics,
      articles: ({ boot }) => boot.articles,
      coaches: ({ boot }) => boot.coaches,
    }),
  },
  async mounted() {
    await this.$store.dispatch('boot/BOOT');
  },
}
</script>

<style scoped>

</style>
