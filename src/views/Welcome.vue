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

export default {
  name: "Welcome",
  components: {
    FeaturedServices: FeaturedServices,
    'banner-component': BannerComponent,
    'featured-services' : FeaturedServices,
    'about-us' : AboutUs,
    'topics-bar' : TopicsBar,
    'call-to-action' : CallToAction,
    'on-focus-section' : OnFocusSection,
    'service-section' : ServiceSection,
    'testimonials' : Testimonials,
    'our-pricing' : OurPricing,
  }
}
</script>

<style scoped>

</style>