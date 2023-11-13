<template>
  <div class="container">
    <div id="heading-bar">
      <h3>Design Center</h3>

      <button>Save Design</button>
      <button>Export HTML</button>
      <button @click="openNewTab">Preview HTML</button>
      <button @click="openPreview">ShOW Preview HTML</button>
    </div>

    <div class="component-wrapper">
      <unlayer-editor @register-provider="registerProvider" @html="recordHtml"/>
      <div><button>Save Unlayer</button></div>dd
    </div>

  </div>
</template>

<script>

import UnlayerEditor from "../components/UnlayerEditor.vue";

export default {
  name: 'UnlayerProvider',
  components: {
    'unlayer-editor': UnlayerEditor,
  },
  data() {
    return {
      editorProvider: {},
    }
  },
  methods: {
    registerProvider(editorProvider) {
      this.editorProvider = editorProvider;
    },
    getPageData() {
      return this.editorProvider.getPageData();
    },
    getPageHtml() {
      return this.editorProvider.getPageData().html;
    },
    openNewTab() {
      const newTab = window.open('', '_blank');
      newTab.document.open();
      newTab.document.write(`${this.getPageHtml()}`);
      newTab.document.close();
    },
    openPreview() {
      this.editorProvider.editor.showPreview("desktop");
    }
  }
}

</script>

<style scoped>
.component-wrapper {
}
</style>
