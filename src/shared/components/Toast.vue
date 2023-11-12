<template>
  <div class="toast-container" v-if="showToast">
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" v-bind:class="{'show' : showToast}">
      <div class="toast-header">
        <strong class="mr-auto">{{ title }}</strong>
        <!--      <small>11 mins ago</small>-->
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" @click="hideToast">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      isToastVisible: false,
      showToast: true,
    };
  },
  mounted() {
    this.showSuccessToast()
  },
  props: {
    title: String,
    message: String,
  },
  methods: {
    showSuccessToast() {
      setTimeout(() => {
        this.hideToast();
      }, 5000); // Hide the toast after 5 seconds
    },
    hideToast() {
      this.showToast = false;
    }
  }
}
</script>

<style scoped>
.toast-container {
  position: fixed;
  top: 5%;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  z-index: 9999;
}

.toast {
  position: relative;
  width: 300px;
  background-color: #f8f9fa;
  border: 1px solid #ccc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>