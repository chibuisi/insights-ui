<template>
  <!-- ======= Recent Blog Posts Section ======= -->
  <section id="recent-blog-posts" class="recent-blog-posts">

    <div class="container" data-aos="fade-up">

      <div class="section-header">
        <h2>Blog</h2>
        <p>Recent Articles form our Blog</p>
      </div>

      <div class="row">

        <div v-for="article in articles" :key="article.id" class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
          <div class="post-box">
            <div class="post-img"><img :src="article.featuredImageLink" class="img-fluid" alt="" style="height: 100%; object-fit: cover;"></div>
            <div class="meta">
              <span class="post-date">{{ article.publishedDate }}</span>
              <span class="post-author"> / <span>{{ article.authorName }}</span></span>
            </div>
            <h3 class="post-title">{{ article.title }}</h3>
            <p class="text-justify">{{ article.summary }}</p>
            <span v-if="article.html" class="readmore">
              <button @click="handleHtmlLinkClick(article.html)" style="cursor: pointer">Read More Here<i class="bi bi-arrow-right"></i></button>
            </span>
            <span v-else class="readmore">
              <a :href="article.details" class="readmore stretched-link"><span>Read More </span><i class="bi bi-arrow-right"></i></a>
            </span>

          </div>
        </div>

      </div>

    </div>
  </section><!-- End Recent Blog Posts Section -->
</template>

<script>
import {featuredData} from '../../shared/data'
import {mapGetters} from "vuex";
export default {
  name: "RecentBlogs",
  data() {
    return {
      articles: [],
      staleArticles: []
    }
  },
  async mounted() {
    this.staleArticles = featuredData.articles;
    await this.chooseArticles();
  },
  computed: {
    ...mapGetters({
      featuredArticles: 'boot/getArticles'
    })
  },
  methods: {
    async chooseArticles() {
      const len = this.featuredArticles.length;
      const requiredLen = 3;
      const diff = requiredLen - len;

      let objectsToMove = [];
    this.articles = this.featuredArticles;

      if(diff > 0) {
        objectsToMove = this.staleArticles.splice(0, diff);
        this.articles.push(...objectsToMove);
      }
    },
    handleHtmlLinkClick() {

    }
  }
}
</script>

<style scoped>
.readmore {
  color: #0ea2bd;
}
</style>