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
import BannerComponent from "../components/home/BannerComponent";
import FeaturedServices from "../components/home/FeaturedServices";
import AboutUs from "../components/home/AboutUs";
import TopicsBar from "../components/home/TopicsBar";
import CallToAction from "../components/home/CallToAction.vue";
import OnFocusSection from "../components/home/OnFocusSection.vue";
import ServiceSection from "../components/home/ServiceSection.vue";
import Testimonials from "../components/home/Testimonials.vue";
import OurPricing from "../components/home/OurPricing.vue";
import FaqSection from "../components/home/FaqSection.vue";
import TeamSection from "../components/home/TeamSection.vue";
import RecentBlogs from "../components/home/RecentBlogs.vue";
import ContactSection from "../components/home/ContactSection.vue";
import FooterSection from "../components/home/FooterSection.vue";
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