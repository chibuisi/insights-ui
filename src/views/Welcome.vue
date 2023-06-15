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
import BannerComponent from "@/components/BannerComponent";
import FeaturedServices from "@/components/FeaturedServices";
import AboutUs from "@/components/AboutUs";
import TopicsBar from "@/components/TopicsBar";
import CallToAction from "../components/CallToAction";
import OnFocusSection from "../components/OnFocusSection";
import ServiceSection from "../components/ServiceSection";
import Testimonials from "../components/Testimonials";
import OurPricing from "../components/OurPricing";
import FaqSection from "../components/FaqSection";
import TeamSection from "../components/TeamSection";
import RecentBlogs from "../components/RecentBlogs";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";

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
  }
}
</script>

<style scoped>

</style>