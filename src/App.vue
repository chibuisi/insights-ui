<template>
  <div>
    <div v-if="isPageSupported">
      <page-not-found/>
    </div>
    <main v-else>
      <header-component />
      <section>
        <router-view />
      </section>
    </main>
  </div>

</template>

<script>
import HeaderComponent from "./components/HeaderComponent";
import PageNotFound from "./views/PageNotFound";
import { mapState } from 'vuex';

export default {

  components: {
    'header-component': HeaderComponent,
    'page-not-found': PageNotFound,
  },

  computed: {
    ...mapState({
      title: ({ route }) => route.meta.title,
    }),

    isPageSupported() {
      return this.title === 'page.notFound';
    }
  }

}
</script>

<style scoped>

</style>

