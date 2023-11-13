<template>
  <div>
    <div class="pagetitle">
      <h1>Onboarding</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active">Onboarding</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

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
      jwt: 'auth/getJwt'
    }),
    ...mapState({

    })
  },

  mounted() {
    this.getSession();
  },

  methods: {
    async getSession() {
      await this.$store.dispatch('rainforest/FETCH_SESSION', this.jwt);
    }
  }
}
</script>

<style scoped>

</style>
