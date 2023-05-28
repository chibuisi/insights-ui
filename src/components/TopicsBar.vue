<template>
  <main id="main">
    <section id="topics" class="clients">
      <div class="container" data-aos="zoom-out">

        <div class="clients-slider swiper">
          <div class="swiper-wrapper align-items-center">
            <div v-for="topic in topics" :key="topic.id"  class="swiper-slide"><h3><router-link :to="{ path: '/topic', query: { topicId: topic.id } }">{{ topic.name }}</router-link></h3></div>
          </div>
        </div>

      </div>
    </section><!-- End Clients Section -->
  </main>
  <!-- ======= Clients Section ======= -->

</template>

<script>
export default {
  name: "TopicsBar",
  data() {
    return {
      topics : [
        {id: 'technology', name: 'Technology'},
        {id: 'health&lifestyle', name: 'Health/Lifestyle'},
        {id: 'relationships', name: 'Relationship'},
        {id: 'finance', name: 'Finance'},
        {id: 'languages', name: 'Languages'},
        {id: 'ai', name: 'AI'},
        {id: 'therapy', name: 'Therapy'},
        {id: 'food', name: 'Food'},
        {id: 'culture', name: 'Culture'},
        {id: 'music', name: 'Music'},
        {id: 'climate', name: 'Climate'},
        {id: 'jokes', name: 'Jokes'},
        {id: 'education', name: 'Education'},
      ]
    }
  }
}
</script>

<style scoped>

</style>