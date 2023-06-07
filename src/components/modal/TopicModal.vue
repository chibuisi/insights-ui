<template>
  <div>
    <!-- Modal -->
    <div class="modal fade" id="modalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">{{topic.name}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-justify">
            {{topic.detail}}
          </div>
          <div class="modal-footer">
            <router-link :to="{ path: '/coaches', query: { topicId: topic.id } }" class=""
            style="position:absolute; left: 10px" data-dismiss="modal">view coaches</router-link>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopicModal",
  props: {
    topic: Object
  }
}
</script>

<style scoped>

</style>