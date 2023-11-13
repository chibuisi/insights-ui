<template>
  <div>
    <h1>Welcome to onboarding</h1>
    <p>The Session is: {{ this.session }}</p>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
  name: 'Onboarding',
  components: {

  },
  props: {

  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters({
      session: 'rainforest/getSession',
    }),
    ...mapState({
      session: 'rainforest/session',
    })
  },

  mounted() {
    this.getSession();
  },

  methods: {
    async getSession() {
      await this.$store.dispatch('rainforest/FETCH_SESSION');
    }
  }
}
</script>

<style scoped>

</style>
