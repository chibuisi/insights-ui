<template>
  <main>
    <header-component />
    <section>
      <router-view />
    </section>
  </main>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent";
export default {
  components: {
    'header-component': HeaderComponent,
  }
}
</script>

