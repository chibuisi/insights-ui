<template>
  <div>
    <div v-if="!isPageSupported">
      <page-not-found/>
    </div>
    <main v-else>
      <header-component v-if="shouldShowHeader"/>
      <section>
        <router-view />
      </section>
    </main>
  </div>

</template>

<script>
import HeaderComponent from "./home/components/HeaderComponent.vue";
import PageNotFound from "./shared/pages/PageNotFound.vue";
import { mapState } from 'vuex';

export default {

  components: {
    'header-component': HeaderComponent,
    'page-not-found': PageNotFound,
  },
  data() {
    return {
      permittedRoutesForHeader: ['login', 'register', 'welcome'],
      showHeader: true,
    }
  },
  computed: {
    ...mapState({
      title: ({ route }) => route.meta.title,
      routeName: ({ route }) => route.name,
      isLoggedIn: 'auth/isLoggedIn',
    }),

    isPageSupported() {
      return this.routeName !== 'page.not.Found';
    },
    // isWelcomePage() {
    //   return this.routeName === 'welcome';
    // },
    shouldShowHeader() {
      return this.permittedRoutesForHeader.includes(this.routeName);
    }
  },

  watch: {
    isLoggedIn: {
      handler(newValue, oldValue) {
        if (newValue && !oldValue) {
          // this.$store.dispatch('LOAD_BOOT');
        }
      }
    },
    immediate: true,
  }

}
</script>

<style scoped>

</style>

