<template>
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" ref="toast">
    <div class="toast-header" :class="styleObj">
      <img src="" class="rounded me-2" alt="" />
      <strong class="me-auto text-light">{{ msg.title }}</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body" v-if="msg.content">
      {{ msg.content }}
    </div>
  </div>
</template>

<script>
import Toast from 'bootstrap/js/dist/toast.js'

export default {
  props: ['msg'],
  data() {
    return {
      styleObj: {
        'bg-success': this.msg.style,
        'bg-danger': !this.msg.style,
      },
    }
  },
  mounted() {
    const toastEl = this.$refs.toast
    const toast = new Toast(toastEl, {
      delay: 6000,
    })
    toast.show()
  },
}
</script>
