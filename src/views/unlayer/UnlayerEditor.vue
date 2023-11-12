<template>
  <div class="container-fluid">
    <div id="editor-container" ref="editor"></div>
  </div>
</template>

<script>
import {testSite} from "./site";
export default {
  name: 'UnlayerEditor',

  components: {

  },

  data() {
    return {
      editor: null,
      pageData: {},
    }
  },

  mounted() {
    this.initializeEditor();
    setTimeout( () => this.setDarkMode(), 6000);
  },

  methods: {
    async loadScript() {
      const SCRIPT_URL = '//editor.unlayer.com/embed.js';
      const SCRIPT_ID = 'unlayer-js-api';

      return new Promise((resolve, reject) => {
        if(document.getElementById(SCRIPT_ID) ==null) {
          const script = document.createElement('script');

          script.setAttribute('src', SCRIPT_URL);
          script.setAttribute('id', SCRIPT_ID);

          script.onload = resolve;
          script.onerror = reject;

          document.head.appendChild(script);
        }
        else {
          resolve();
        }
      } )
    },

    async initializeEditor() {
      await this.loadScript();

      this.editor = window.unlayer.createEditor(this.editorOptions);

      const page = testSite.pages[0];

      this.editor.loadDesign(page.content.design);

      this.editor.addEventListener('design:updated', (data) => {
        this.updatePageDesign({data});
      });

      this.editor.addEventListener('design:loaded', async () => {
        await this.savePageData();
        this.$emit('register-provider', {
          editor: this.editor,
          getPageData: () => ({...this.pageData}),
        })
        this.$emit('html', this.pageData.html);
      })

    },

    async updatePageDesign({data}) {
      if(!this.pageData) return
      await this.savePageData();

      this.$emit('design-update', {data});
    },

    async savePageData() {
      return new Promise((resolve) => {
        this.editor.exportHtml((data) => {
          const pageData = JSON.parse(JSON.stringify(data));
          this.pageData = pageData;
          resolve(pageData);
        });
      });
    },

    async setDarkMode() {
      await this.editor.setAppearance({
        theme: 'dark',
        panels: {
          tools: {
            dock: 'left'
          }
        }
      });
    },

  },
  computed: {
    editorOptions() {
      return {
        id: 'editor-container',
        projectId: '185282',
        tools: {
          image: {
            enabled: true
          }
        },
        // minHeight: "1000px",
        locale: "en",
        appearance: {
          theme: 'light',
          loader: {
            html: '<div class="spinner">...loading</div>'
          },
          panels: {
            tools: {
              dock: 'right'
            }
          }
        },
        displayMode: 'web',
        version: '1.4.1',
        editor: {
          autoSelectOnDrop: true,
        },
        fonts: {
          showDefaultFonts: true,
        }
      };
    }
  }
}
</script>

<style scoped>
#editor-container {
  position: fixed;
  //top: 0;
  left: 0;
  width: 100%;
  height: 3000px;
  z-index: 99; /* Adjust the z-index as needed to ensure it's on top of other elements */
  margin-bottom: 100px;
  max-height: 100%;
  //overflow: hidden; /* Enable vertical scrolling when content overflows */
}
</style>