<template>
  <main id="main">
    <section id="topics" class="clients">
      <div class="container" data-aos="zoom-out">

        <div class="clients-slider swiper">
          <div class="swiper-wrapper align-items-center">
            <div v-for="topic in topics" :key="topic.id" class="swiper-slide">
              <h3>
                <a data-toggle="modal" href="#" class="" data-target="#modalCenter" @click="handleLinkClick(topic)">
                  {{ topic.name }}
                </a>
<!--                <router-link :to="{ path: '/topic', query: { topicId: topic.id } }">-->
<!--                  {{ topic.name }}-->
<!--                </router-link>-->
              </h3></div>
          </div>
        </div>

      </div>
      <div>
        <topic-modal :topic="this.topic"/>
      </div>
    </section><!-- End Clients Section -->
  </main>
  <!-- ======= Clients Section ======= -->

</template>

<script>
import TopicModal from "./modal/TopicModal";

export default {
  name: "TopicsBar",
  components: {
    'topic-modal': TopicModal
  },
  data() {
    return {
      topics: [
        {id: 'technology', name: 'Technology', desc: 'Embrace the Cutting-Edge of Technology', detail: 'Discover the fascinating world of technology and stay up-to-date with the latest trends, innovations, and breakthroughs. Our Technology topic dives deep into the realms of artificial intelligence, cybersecurity, emerging technologies, and more. Whether you\'re a tech enthusiast, entrepreneur, or simply curious about the future, our insightful articles, expert analysis, and informative resources will keep you informed and empowered in this rapidly evolving digital landscape.'},
        {id: 'health&lifestyle', name: 'Health/Lifestyle', desc: 'Elevate Your Health and Lifestyle', detail: 'Take charge of your well-being and unlock a vibrant, balanced lifestyle with our Health/Lifestyle topic. Dive into a wealth of content focused on nutrition, fitness, mental wellness, self-care, and more. Explore practical tips, expert advice, and inspiring stories that empower you to make positive changes and live your best life. Whether you\'re seeking guidance on healthy habits, mindfulness practices, or ways to enhance your overall wellness, our curated resources will help you thrive in all aspects of your health and lifestyle journey.'},
        {id: 'relationships', name: 'Relationships', desc: 'Cultivate Meaningful Connections', detail: 'Explore the art of building and nurturing relationships that bring joy, fulfillment, and growth to your life. Our Relationships topic delves into the dynamics of personal connections, communication skills, emotional intelligence, and more. Discover expert advice, insightful articles, and practical tips to enhance your relationships with family, friends, romantic partners, and colleagues. Whether you\'re seeking guidance on effective communication, conflict resolution, or fostering deeper connections, our resources will empower you to create meaningful and harmonious relationships that enrich your life.'},
        {id: 'finance', name: 'Finance', desc: 'Master Your Financial Future', detail: 'Navigate the complex world of finance with confidence and make informed decisions about your money. Our Finance topic offers a wide range of resources to help you gain financial literacy, manage your finances effectively, and plan for a secure future. From budgeting tips and investment strategies to understanding market trends and financial planning, our articles, expert insights, and practical tools empower you to take control of your financial well-being. Let us guide you on the path to financial success and unlock opportunities for growth and prosperity.'},
        {id: 'languages', name: 'Languages', desc: 'Unlock the World of Languages', detail: 'Embark on a linguistic journey and explore the beauty of languages from around the globe. Our Languages topic celebrates the diversity of cultures and offers resources to help you learn, master, and appreciate different languages. Whether you\'re a beginner or aiming to become fluent, our curated content, language learning tips, and cultural insights will guide you on your language learning adventure. Immerse yourself in vocabulary, grammar, pronunciation, and cultural nuances, and discover the joy of connecting with others through the power of language.'},
        {id: 'ai', name: 'AI', desc: 'Unleash the Power of Artificial Intelligence', detail: 'Delve into the realm of Artificial Intelligence (AI) and explore the incredible possibilities it holds for the future. Our AI topic takes you on a captivating journey through machine learning, neural networks, natural language processing, and more. Discover how AI is transforming industries, shaping innovation, and redefining the way we live and work. From intelligent automation to predictive analytics, our curated resources, expert insights, and thought-provoking articles will help you grasp the potential of AI and its profound impact on society. Join us in exploring the frontiers of AI and be inspired by the limitless possibilities it presents.'},
        {id: 'therapy', name: 'Therapy', desc: 'Discover Healing and Growth through Therapy', detail: 'Embrace the transformative power of therapy and embark on a journey of self-discovery, healing, and personal growth. Our Therapy topic provides a safe and supportive space to explore various therapeutic approaches, mental health strategies, and well-being practices. Whether you\'re seeking guidance for managing stress, coping with anxiety or depression, improving relationships, or simply enhancing your overall emotional well-being, our curated resources, expert insights, and compassionate articles offer valuable support. Let us accompany you on your therapeutic path and help you navigate life\'s challenges with resilience and empowerment.'},
        {id: 'food', name: 'Food', desc: 'Indulge in Culinary Delights', detail: 'Immerse yourself in the world of gastronomy and discover the wonders of food. Our Food topic celebrates the art of cooking, the joy of exploring new flavors, and the importance of nourishing our bodies with wholesome ingredients. From delicious recipes and culinary tips to food culture and nutrition insights, our curated collection of articles, videos, and resources will inspire your culinary adventures. Whether you\'re a seasoned chef, a passionate home cook, or simply a food enthusiast, let us tantalize your taste buds and ignite your creativity in the kitchen.'},
        {id: 'culture', name: 'Culture', desc: 'Explore the Rich Tapestry of Cultures', detail: 'Embark on a captivating journey through diverse cultures and expand your horizons with our Culture topic. Immerse yourself in the traditions, customs, art, music, literature, and history of different societies around the world. Discover the beauty of cultural diversity, gain insights into global perspectives, and celebrate the richness of human heritage. Our curated collection of articles, stories, and resources will transport you to distant lands, foster understanding, and ignite your curiosity about the intricacies of our global tapestry. Join us in exploring the vibrant cultures that shape our world and embrace the beauty of our shared humanity.'},
        {id: 'music', name: 'Music', desc: 'Experience the Magic of Music', detail: 'Dive into the enchanting world of music and let its melodies captivate your senses. Our Music topic celebrates the power of rhythm, harmony, and lyrics to evoke emotions, inspire creativity, and connect people across cultures. Explore a diverse range of genres, discover iconic musicians, and uncover the stories behind timeless songs. Whether you\'re a music lover, aspiring musician, or simply seeking the joy of harmonious sounds, our curated resources, artist spotlights, and insightful articles will fuel your passion for music and enrich your musical journey. Let the transformative power of music resonate within you and unlock new dimensions of self-expression and inspiration.'},
        {id: 'climate', name: 'Climate', desc: 'Take Action for a Sustainable Future', detail: 'Join the global movement to address the pressing issue of climate change and work towards a sustainable future. Our Climate topic delves into the complexities of environmental challenges, their impact on our planet, and the collective efforts needed for positive change. Discover insights on renewable energy, conservation, eco-friendly practices, and climate resilience. Explore innovative solutions, inspiring stories, and practical tips to reduce your carbon footprint and contribute to a healthier planet. Together, we can make a difference and preserve the beauty of our natural world for generations to come. Let\'s take action today for a more sustainable tomorrow.'},
        {id: 'jokes', name: 'Jokes', desc: 'Laugh Your Way to Joy', detail: 'Indulge in the delightful world of humor and let laughter brighten your day with our Jokes topic. Discover a collection of hilarious jokes, witty one-liners, and amusing anecdotes that will tickle your funny bone and bring a smile to your face. Whether you\'re in need of a quick giggle, a good chuckle, or a hearty laugh, our curated selection of jokes from various genres and styles will entertain and uplift your spirits. Join us in celebrating the power of laughter as we explore the lighter side of life and embrace the joy that comes with sharing a good joke.'},
        {id: 'education', name: 'Education', desc: 'Unlock the Power of Learning', detail: 'Embrace the lifelong journey of education and open doors to endless possibilities with our Education topic. Whether you\'re a student, educator, or simply a curious mind, we offer a wealth of resources to fuel your quest for knowledge. Explore diverse subjects, gain insights from experts, and stay up to date with the latest trends in education. From tips for effective studying and exam preparation to innovative teaching methods and educational technologies, our curated content empowers you to thrive in your educational pursuits. Join us as we celebrate the transformative power of education and inspire a lifelong love for learning.'},
      ],
      topic: {}
    }
  },
  methods: {
    handleLinkClick(topic) {
      this.topic = topic;
    }
  }
}
</script>

<style scoped>

</style>