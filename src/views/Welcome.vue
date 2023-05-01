<template>
  <div>
    <banner-component />
  </div>
</template>

<script>
import BannerComponent from "@/components/BannerComponent";
export default {
  name: "Welcome",
  components: {
    'banner-component': BannerComponent
  }
}
</script>

<style scoped>

</style>