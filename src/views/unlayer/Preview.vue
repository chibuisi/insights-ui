<template>
  <div class="container-fluid preview">
    <button @click="closePreview">Close</button>
    <div v-html="pageData"></div>
  </div>
</template>

<script>
export default {
  props: {
    pageData: String,
  },
  data() {
    return {

    }
  },
  methods: {
    closePreview() {
      this.$emit('close-preview', false);
    }
  }
}
</script>

<style scoped>
  .preview {
    z-index: 999999;
  }
</style>