<template>
  <div>
    <div class="pagetitle">
      <h1>Topics</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="dashboard">Home</router-link></li>
          <li class="breadcrumb-item active">Topics</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section topics">
      <div class="row">

        <!-- center columns -->
        <div class="col-lg-12">
          <div class="row">

            <!-- Recent Read Articles -->
            <div class="col-12">
              <div class="card recent-sales overflow-auto">

                <div class="card-body">
                  <h5 class="card-title">Recent Read Articles <span>| Today</span></h5>

                  <table class="table table-borderless datatable">
                    <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <th scope="row"><a href="#">#2457</a></th>
                      <td>Brandon Jacob</td>
                      <td><a href="#" class="text-primary">At praesentium minu</a></td>
                      <td>$64</td>
                      <td><span class="badge bg-success">Approved</span></td>
                    </tr>
                    </tbody>
                  </table>

                </div>

              </div>
            </div><!-- End Recent Read Articles -->

            <!-- Top Read Articles -->
            <div class="col-12">
              <div class="card top-selling overflow-auto">

                <div class="card-body pb-0">
                  <h5 class="card-title">Top Read Articles <span>| Today</span></h5>

                  <table class="table table-borderless">
                    <thead>
                    <tr>
                      <th scope="col">Preview</th>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Sold</th>
                      <th scope="col">Revenue</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <th scope="row"><a href="#"><img src="assets/img/product-1.jpg" alt=""></a></th>
                      <td><a href="#" class="text-primary fw-bold">Ut inventore ipsa voluptas nulla</a></td>
                      <td>$64</td>
                      <td class="fw-bold">124</td>
                      <td>$5,828</td>
                    </tr>
                    </tbody>
                  </table>

                </div>

              </div>
            </div><!-- End Top Read Articles -->

          </div>
        </div><!-- End Left side columns -->

      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'UserTopics',
  components: {

  },

  data() {
    return {

    }
  },

  computed: {
    ...mapState({
      user: ({ auth }) => auth.user,
    }),

    ...mapGetters({
      userProfile: 'auth/getUserProfile',
    })
  },

  methods: {

  },

  async mounted() {

  },
}
</script>

<style scoped>

</style>
