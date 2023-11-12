export default {
    BOOT_SUCCESS(state, {topics, articles, coaches}) {
        state.topics = topics
        state.articles = articles
        state.coaches = coaches
    },
}